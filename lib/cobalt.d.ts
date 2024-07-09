export interface RequestBodyOption {
  /**
   * applies only to youtube downloads
   *
   * `h264` is recommended for phones
   *
   * @default "h264"
   */
  vCodec: 'h264' | 'av1' | 'vp9'

  /**
   * `720` quality is recommended for phones
   *
   * @default "720"
   */
  vQuality:
    | '144'
    | '240'
    | '360'
    | '480'
    | '720'
    | '1080'
    | '1440'
    | '2160'
    // | '4320'
    | 'max'

  /** @default "mp3" */
  aFormat: 'best' | 'mp3' | 'ogg' | 'wav' | 'opus'

  /**
   * changes the way files are named
   *
   * previews can be seen in the web app
   *
   * @default "classic"
   */
  filenamePattern: 'classic' | 'pretty' | 'basic' | 'nerdy'

  /** @default false */
  isAudioOnly: boolean

  /**
   * enables download of original sound used in a tiktok video
   *
   * @default false
   */
  isTTFullAudio: boolean

  /**
   * disables audio track in video downloads
   *
   * @default false
   */
  isAudioMuted: boolean

  /**
   * backend uses Accept-Language header for youtube video audio tracks when `true`
   *
   * @default false
   */
  dubLang: boolean

  /**
   * disables file metadata when set to `true`
   *
   * @default false
   */
  disableMetadata: boolean

  /**
   * changes whether twitter gifs are converted to .gif
   *
   * @default false
   */
  twitterGif: boolean

  /** changes wheter 1080p h265 video are preferred or not
   *
   * @default false
   */
  tiktokH265: boolean
}

export interface RequestBody extends RequestBodyOption {
  /**
   * URL encoded as URI
   *
   * **must** be included in every request
   */
  url: string
}

export interface ResponseBody {
  status: 'error' | 'redirect' | 'stream' | 'success' | 'rate-limit' | 'picker'

  /** various text, mostly used for errors */
  text: string

  /** direct link to a file or a link to cobalt's live render */
  url: string

  pickerType: 'various' | 'images'

  /** array of picker items */
  picker: PickerItem[]

  /** direct link to a file or a link to cobalt's live render */
  audio: string
}

export interface PickerItem {
  /**
   * used only if `pickerType` is `various`
   *
   * @see {@link ResponseBody.pickerType}
   */
  type?: 'video'

  /** direct link to a file or a link to cobalt's live render */
  url: string

  /**
   * item thumbnail that's displayed in the picker
   *
   * used only for `video` type
   *
   * @see {@link type}
   */
  thumb?: string
}

export interface ServerInfo {
  /** cobalt version */
  version: string

  /** git commit */
  commit: string

  /** git branch */
  branch: string

  /** server name */
  name: string

  /** server url */
  url: string

  /** cors status */
  cors: number

  /** server start time */
  startTime: string
}
