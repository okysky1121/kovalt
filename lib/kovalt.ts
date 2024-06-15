import { RequestBody, ResponseBody, ServerInfo } from './cobalt'

type RequestBodyOption = Partial<Omit<RequestBody, 'url'>>

const API_ROOT = 'https://api.cobalt.tools/api'
const API_HEADER = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
}

function request(path: '/json' | '/serverInfo', data?: RequestBody) {
  const isJSON = path == '/json'

  return fetch(API_ROOT + path, {
    method: isJSON ? 'POST' : 'GET',
    headers: isJSON ? API_HEADER : {},
    body: isJSON ? JSON.stringify(data) : undefined,
  })
}

function complete(url: string, option: RequestBodyOption): RequestBody {
  return {
    url,
    vCodec: option.vCodec || 'h264',
    vQuality: option.vQuality || '720',
    aFormat: option.aFormat || 'mp3',
    filenamePattern: option.filenamePattern || 'classic',
    isAudioOnly: option.isAudioOnly || false,
    isTTFullAudio: option.isTTFullAudio || false,
    isAudioMuted: option.isAudioMuted || false,
    dubLang: option.dubLang || false,
    disableMetadata: option.disableMetadata || false,
    twitterGif: option.twitterGif || false,
    tiktokH265: option.tiktokH265 || false,
  }
}

export async function getJSON(
  url: string,
  option: RequestBodyOption = {},
): Promise<ResponseBody> {
  const res = await request('/json', complete(url, option))
  const json: ResponseBody = await res.json()

  return json
}

export async function getServerInfo(): Promise<ServerInfo> {
  const res = await request('/serverInfo')
  const json: ServerInfo = await res.json()

  return json
}
