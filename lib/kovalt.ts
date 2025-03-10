import {
  RequestBody,
  RequestBodyOption,
  ResponseBody,
  ServerInfo,
} from './cobalt'

// const KOVALT_API_ROOT_URL = 'https://api.cobalt.tools/api'
const DEFAULT_KOVALT_API_HEADERS = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
}

const DefaultRequestBodyOption: RequestBodyOption = {
  vCodec: 'h264',
  vQuality: '720',
  aFormat: 'mp3',
  filenamePattern: 'classic',
  isAudioOnly: false,
  isTTFullAudio: false,
  isAudioMuted: false,
  dubLang: false,
  disableMetadata: false,
  twitterGif: false,
  tiktokH265: false,
}

function buildRequestBody(
  url: string,
  option?: Partial<RequestBodyOption>,
): RequestBody {
  return {
    url,
    ...DefaultRequestBodyOption,
    ...option,
  }
}

export default class Kovalt {
  base_url: string

  constructor(base_url: string) {
    this.base_url = base_url
  }

  private resolveURL(path: string) {
    return `${this.base_url}${path}`
  }

  async requestJSON(target_url: string, option?: Partial<RequestBodyOption>) {
    const res = await fetch(this.resolveURL('/json'), {
      method: 'POST',
      headers: DEFAULT_KOVALT_API_HEADERS,
      body: JSON.stringify(buildRequestBody(target_url, option)),
    })
    const json: ResponseBody = await res.json()

    return json
  }

  async requestServerInfo() {
    const res = await fetch(this.resolveURL('/serverInfo'), {
      method: 'GET',
    })
    const json: ServerInfo = await res.json()

    return json
  }
}
