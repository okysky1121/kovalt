import {
  RequestBody,
  RequestBodyOption,
  ResponseBody,
  ServerInfo,
} from './cobalt'

const KOVALT_API_ROOT_URL = 'https://api.cobalt.tools/api'
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

function resolveURL(path: string) {
  return `${KOVALT_API_ROOT_URL}${path}`
}

export async function getJSON(
  url: string,
  option?: Partial<RequestBodyOption>,
) {
  const res = await fetch(resolveURL('/json'), {
    method: 'POST',
    headers: DEFAULT_KOVALT_API_HEADERS,
    body: JSON.stringify(buildRequestBody(url, option)),
  })
  const json: ResponseBody = await res.json()

  return json
}

export async function getServerInfo() {
  const res = await fetch(resolveURL('/serverInfo'), {
    method: 'GET',
  })
  const json: ServerInfo = await res.json()

  return json
}
