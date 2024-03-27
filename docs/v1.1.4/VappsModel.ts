export const DEFAULT_CALLING_TIMEOUT = 360 // seconds

export type VappsRunType = 'PHONE' | 'APP'
export interface VappsPositionType {
    name: string
    number: number
}
export interface VappsPositionIf {
    [key: string]: {
        [key: string]: VappsPositionType
    }
}
export const VappsPosition: VappsPositionIf = {
    X: {
        LEFT: { name: 'left', number: 1 },
        CENTER: { name: 'center', number: 2 },
        RIGHT: { name: 'right', number: 3 }
    },
    Y: {
        TOP: { name: 'top', number: 1 },
        MIDDLE: { name: 'middle', number: 2 },
        BOTTOM: { name: 'bottom', number: 3 }
    }
}

export type VappsPhoneUpperX = 'LEFT' | 'RIGHT'
export type VappsPhoneLowerX = 'left' | 'right'
export type VappsPhoneUpperY = 'TOP' | 'BOTTOM'
export type VappsPhoneLowerY = 'top' | 'bottom'
export type VappsPhoneLocale = 'en' | 'ja'
export type VappsPhoneTabType = 'phone' | 'book' | 'history' | 'settings'
export type VappsPhoneModeType = 'ui' | 'sip' | 'v0' | 'v1'
export const VappsPhoneMode = {
    UI: 'ui',
    SIP: 'sip',
    V0: 'v0',
    V1: 'v1'
} as { [k: string]: VappsPhoneModeType }
export type VappsPhoneCallingMaskModeType = 'calling' | 'ringing' | 'talking' | 'custom'
export const VappsPhoneCallingMaskMode = {
    CALLING: 'calling',
    RINGING: 'ringing',
    TALKING: 'talking',
    CUSTOM: 'custom',
} as { [k: string]: VappsPhoneCallingMaskModeType }

export type VappsAppUpperX = 'LEFT' | 'CENTER' | 'RIGHT'
export type VappsAppLowerX = 'left' | 'center' | 'right'
export type VappsAppUpperY = 'TOP' | 'MIDDLE' | 'BOTTOM'
export type VappsAppLowerY = 'top' | 'middle' | 'bottom'

export interface VappsPhoneDictionary {
    [k: string]: string | VappsPhoneDictionary
}

export interface VappsPhoneBookPermissions {
    create?: boolean
    update?: boolean
}

export interface VappsPhoneSpeedDialPermissions {
    create?: boolean
    update?: boolean
}

export interface VappsPhonePermissions {
    call?: boolean,
    listen?: boolean,
    whisper?: boolean,
    barge?: boolean,
    book?: VappsPhoneBookPermissions,
    speedDial?: VappsPhoneSpeedDialPermissions
}

export interface VappsPhoneDictionaryURL {
    url?: string,
    headers?: Record<string, string>
}

export interface VappsPhoneDictionaryURLs {
    en?: VappsPhoneDictionaryURL,
    ja?: VappsPhoneDictionaryURL
}

export interface VappsPhoneOptionsOtherSettings {
    isTabMemoryActive: boolean
    isSaveBookInLocal: boolean
    isSaveHistoryInLocal: boolean
    isSaveSpeedDialInLocal: boolean
    isUsePark: boolean
    isUseTransfer: boolean
    isEventLogOn: boolean
}

export interface VappsPhoneOptions {
    mode: VappsPhoneModeType
    x: VappsPhoneLowerX
    y: VappsPhoneLowerY
    locale?: VappsPhoneLocale
    size: number
    color: string
    iconColor: string
    iconSize: number
    marginX: number
    marginY: number
    ripple: boolean
    fabOpacity: number
    bodyOpacity: number
    permissions: VappsPhonePermissions,
    dictionaryURLs: VappsPhoneDictionaryURLs,
    otherSettings?: VappsPhoneOptionsOtherSettings
}

export interface VappsAppOptions {
    x: VappsAppLowerX
    y: VappsAppLowerY
    url: string
    color: string
    name: string
    ripple: boolean
}

export type VappsIDs = {
    [key in VappsRunType]: {
        [key in VappsAppUpperX]: {
            [key in VappsAppUpperY]: string
        }
    }
}

export interface VappsPhoneBookItemDisables {
    call?: boolean
    listen?: boolean
    whisper?: boolean
    barge?: boolean
}

export interface VappsPhoneBookItem {
    id: string
    name: string
    number: string
    user?: boolean
    on?: boolean
    open?: boolean
    local?: boolean
    disables?: VappsPhoneBookItemDisables
}

export const VappsPhoneBookItemSample = {
    id: '',
    name: '',
    number: '',
    user: false,
    on: false,
    open: false,
    local: false,
    disables: { call: false, listen: false, whisper: false, barge: false }
} as VappsPhoneBookItem

export interface VappsPhoneHistoryItem {
    id: string
    fromName: string
    fromNumber: string
    toName: string
    toNumber: string
    datetime: string
    in?: boolean
    answer?: boolean
    open?: boolean
    local?: boolean
}

export const VappsPhoneHistoryItemSample = {
    id: '',
    fromName: '',
    fromNumber: '',
    toName: '',
    toNumber: '',
    datetime: '',
    in: false,
    answer: false,
    open: false,
    local: false
} as VappsPhoneHistoryItem

export interface VappsPhoneSpeedDialItem extends VappsPhoneBookItem {}

export const VappsPhoneSpeedDialItemSample = {
    id: '',
    name: '',
    number: '',
    user: false,
    on: false,
    open: false,
    local: false,
    disables: { call: false, listen: false, whisper: false, barge: false }
} as VappsPhoneSpeedDialItem

export type VappsPhoneLocalKeyPrefixes = {
    [key in VappsPhoneUpperX]: {
        [key in VappsPhoneUpperY]: string
    }
}

export const VappsPhoneLocales = { EN: 'en', JA: 'ja' } as { [k: string]: VappsPhoneLocale }

export const VappsPhoneConsts = {
    LOCAL_KEY: {
        LOCALE: 'LOCALE',
        TAB: 'TAB',
        BOOK_ITEMS: 'BOOK_ITEMS',
        HISTORY_ITEMS: 'HISTORY_ITEMS',
        SPEED_DIAL_ITEMS: 'SPEED_DIAL_ITEMS',
        IS_SET_OTHER_SETTINGS: 'IS_SET_OTHER_SETTINGS',
        IS_TAB_MEMORY_ACTIVE: 'IS_TAB_MEMORY_ACTIVE',
        IS_SAVE_BOOK_IN_LOCAL: 'IS_SAVE_BOOK_IN_LOCAL',
        IS_SAVE_HISTORY_IN_LOCAL: 'IS_SAVE_HISTORY_IN_LOCAL',
        IS_SAVE_SPEED_DIAL_IN_LOCAL: 'IS_SAVE_SPEED_DIAL_IN_LOCAL',
        IS_USE_PARK: 'IS_USE_PARK',
        IS_USE_TRANSFER: 'IS_USE_TRANSFER',
        IS_EVENT_LOG: 'IS_EVENT_LOG',
    }
}

export type VappsPhoneCallingMaskItem = {
    title: string, // for v-html
    content: string // for v-html
}

export type VappsPhoneCallingMaskTable = {
    caption: string, // for v-html
    items: VappsPhoneCallingMaskItem[]
}

export const VappsPhoneCallingMaskTablesSample = [
    {
        caption: 'Caption01',
        items: [
            { title: 'title01-1', content: 'content01-1' },
            { title: 'title01-2', content: 'content01-2' },
            { title: 'title01-3', content: 'content01-3' },
        ]
    },
    {
        caption: 'Caption02',
        items: [
            { title: 'title02-1', content: 'content02-1' },
            { title: 'title02-2', content: 'content02-2' },
            { title: 'title02-3', content: 'content02-3' },
        ]
    },
    {
        caption: 'Caption03',
        items: [
            { title: 'title03-1', content: 'content03-1' },
            { title: 'title03-2', content: 'content03-2' },
            { title: 'title03-3', content: 'content03-3' },
        ]
    },
] as VappsPhoneCallingMaskTable[]

export type VappsPhoneOpenCallingMaskOptions = {
    title?: string
    mode?: VappsPhoneCallingMaskModeType,
    tables?: VappsPhoneCallingMaskTable[],
    html?: string,
    isFullCustom?: boolean,
    timeout?: number
}

export const VappsPhoneOpenCallingMaskOptionsSample = {
    title: undefined,
    mode: VappsPhoneCallingMaskMode.CALLING,
    tables: VappsPhoneCallingMaskTablesSample,
    html: '<span>Vapps</span>',
    isFullCustom: false,
    timeout: DEFAULT_CALLING_TIMEOUT
} as VappsPhoneOpenCallingMaskOptions

/*****************************
 * Vapps Phone Event Model
 *****************************/
export type VappsEventPhoneOnCreate = {
    id: string
}
export type VappsEventPhoneOnMounted = {
    id: string
}
export type VappsEventPhoneOnOpen = {
    id: string
}
export type VappsEventPhoneOnClose = {
    id: string
}
export type VappsEventPhoneOnOpenSnackbar = {
    id: string
    message: string,
    timeout?: number,
    icon?: string,
    line?: 1 | 2
}
export type VappsEventPhoneOnCloseSnackbar = {
    id: string
}
export type VappsEventPhoneOnLocaleChange = {
    id: string
    oldLocale: string
    newLocale: string
}
export type VappsEventPhoneOnTabChange = {
    id: string,
    tab: VappsPhoneTabType
}
export type VappsEventPhoneOnInputNumberChange = {
    id: string,
    value: string,  // current number value
    input: string   // 1 digit number inputted
}
export type VappsEventPhoneOnCall = {
    id: string,
    number: string
}
export type VappsEventPhoneOnFilterBook = {
    id: string
    search: string
    filteredItems: VappsPhoneBookItem[]
}
export type VappsEventPhoneOnFilterHistory = {
    id: string
    search: string
    filteredItems: VappsPhoneHistoryItem[]
}
export type VappsEventPhoneOnFilterSpeedDial = {
    id: string
    search: string
    filteredItems: VappsPhoneSpeedDialItem[]
}
export type VappsEventPhoneOnSearchBook = {
    id: string
    search: string
    filteredItems: VappsPhoneBookItem[]
}
export type VappsEventPhoneOnSearchHistory = {
    id: string
    search: string
    filteredItems: VappsPhoneHistoryItem[]
}
export type VappsEventPhoneOnSearchSpeedDial = {
    id: string
    search: string
    filteredItems: VappsPhoneSpeedDialItem[]
}
export type VappsEventPhoneOnPutBookItems = {
    id: string
    oldItems: VappsPhoneBookItem[]
    newItems: VappsPhoneBookItem[]
}
export type VappsEventPhoneOnPutBookItemsByUrl = {
    id: string
    oldItems: VappsPhoneBookItem[]
    newItems: VappsPhoneBookItem[]
}
export type VappsEventPhoneOnPutHistoryItems = {
    id: string
    oldItems: VappsPhoneHistoryItem[]
    newItems: VappsPhoneHistoryItem[]
}
export type VappsEventPhoneOnPutHistoryItemsByUrl = {
    id: string
    oldItems: VappsPhoneHistoryItem[]
    newItems: VappsPhoneHistoryItem[]
}
export type VappsEventPhoneOnPutSpeedDialItems = {
    id: string
    oldItems: VappsPhoneSpeedDialItem[]
    newItems: VappsPhoneSpeedDialItem[]
}
export type VappsEventPhoneOnPutSpeedDialItemsByUrl = {
    id: string
    oldItems: VappsPhoneSpeedDialItem[]
    newItems: VappsPhoneSpeedDialItem[]
}
export type VappsEventPhoneOnPutBookItemsLocal = {
    id: string
    oldItems: VappsPhoneBookItem[]
    newItems: VappsPhoneBookItem[]
}
export type VappsEventPhoneOnPutBookItemsLocalByUrl = {
    id: string
    oldItems: VappsPhoneBookItem[]
    newItems: VappsPhoneBookItem[]
}
export type VappsEventPhoneOnPutHistoryItemsLocal = {
    id: string
    oldItems: VappsPhoneHistoryItem[]
    newItems: VappsPhoneHistoryItem[]
}
export type VappsEventPhoneOnPutHistoryItemsLocalByUrl = {
    id: string
    oldItems: VappsPhoneHistoryItem[]
    newItems: VappsPhoneHistoryItem[]
}
export type VappsEventPhoneOnPutSpeedDialItemsLocal = {
    id: string
    oldItems: VappsPhoneSpeedDialItem[]
    newItems: VappsPhoneSpeedDialItem[]
}
export type VappsEventPhoneOnPutSpeedDialItemsLocalByUrl = {
    id: string
    oldItems: VappsPhoneSpeedDialItem[]
    newItems: VappsPhoneSpeedDialItem[]
}
export type VappsEventPhoneOnPushBookItems = {
    id: string
    oldItems: VappsPhoneBookItem[]
    newItems: VappsPhoneBookItem[]
    requestedItems: VappsPhoneBookItem[]
}
export type VappsEventPhoneOnPushBookItemsByUrl = {
    id: string
    oldItems: VappsPhoneBookItem[]
    newItems: VappsPhoneBookItem[]
    requestedItems: VappsPhoneBookItem[]
}
export type VappsEventPhoneOnPushHistoryItems = {
    id: string
    oldItems: VappsPhoneHistoryItem[]
    newItems: VappsPhoneHistoryItem[]
    requestedItems: VappsPhoneHistoryItem[]
}
export type VappsEventPhoneOnPushHistoryItemsByUrl = {
    id: string
    oldItems: VappsPhoneHistoryItem[]
    newItems: VappsPhoneHistoryItem[]
    requestedItems: VappsPhoneHistoryItem[]
}
export type VappsEventPhoneOnPushSpeedDialItems = {
    id: string
    oldItems: VappsPhoneSpeedDialItem[]
    newItems: VappsPhoneSpeedDialItem[]
    requestedItems: VappsPhoneSpeedDialItem[]
}
export type VappsEventPhoneOnPushSpeedDialItemsByUrl = {
    id: string
    oldItems: VappsPhoneSpeedDialItem[]
    newItems: VappsPhoneSpeedDialItem[]
    requestedItems: VappsPhoneSpeedDialItem[]
}
export type VappsEventPhoneOnPushBookItemsLocal = {
    id: string
    oldItems: VappsPhoneBookItem[]
    newItems: VappsPhoneBookItem[]
    requestedItemsLocal: VappsPhoneBookItem[]
}
export type VappsEventPhoneOnPushBookItemsLocalByUrl = {
    id: string
    oldItems: VappsPhoneBookItem[]
    newItems: VappsPhoneBookItem[]
    requestedItemsLocal: VappsPhoneBookItem[]
}
export type VappsEventPhoneOnPushHistoryItemsLocal = {
    id: string
    oldItems: VappsPhoneHistoryItem[]
    newItems: VappsPhoneHistoryItem[]
    requestedItemsLocal: VappsPhoneHistoryItem[]
}
export type VappsEventPhoneOnPushHistoryItemsLocalByUrl = {
    id: string
    oldItems: VappsPhoneHistoryItem[]
    newItems: VappsPhoneHistoryItem[]
    requestedItemsLocal: VappsPhoneHistoryItem[]
}
export type VappsEventPhoneOnPushSpeedDialItemsLocal = {
    id: string
    oldItems: VappsPhoneSpeedDialItem[]
    newItems: VappsPhoneSpeedDialItem[]
    requestedItemsLocal: VappsPhoneSpeedDialItem[]
}
export type VappsEventPhoneOnPushSpeedDialItemsLocalByUrl = {
    id: string
    oldItems: VappsPhoneSpeedDialItem[]
    newItems: VappsPhoneSpeedDialItem[]
    requestedItemsLocal: VappsPhoneSpeedDialItem[]
}
export type VappsEventPhoneOnUpdateBookItems = {
    id: string
    oldItems: VappsPhoneBookItem[]
    newItems: VappsPhoneBookItem[]
    requestedItems: VappsPhoneBookItem[]
}
export type VappsEventPhoneOnUpdateBookItemsByUrl = {
    id: string
    oldItems: VappsPhoneBookItem[]
    newItems: VappsPhoneBookItem[]
    requestedItems: VappsPhoneBookItem[]
}
export type VappsEventPhoneOnUpdateSpeedDialItems = {
    id: string
    oldItems: VappsPhoneSpeedDialItem[]
    newItems: VappsPhoneSpeedDialItem[]
    requestedItems: VappsPhoneSpeedDialItem[]
}
export type VappsEventPhoneOnUpdateSpeedDialItemsByUrl = {
    id: string
    oldItems: VappsPhoneSpeedDialItem[]
    newItems: VappsPhoneSpeedDialItem[]
    requestedItems: VappsPhoneSpeedDialItem[]
}
export type VappsEventPhoneOnUpdateBookItemsLocal = {
    id: string
    oldItems: VappsPhoneBookItem[]
    newItems: VappsPhoneBookItem[]
    requestedItemsLocal: VappsPhoneBookItem[]
}
export type VappsEventPhoneOnUpdateBookItemsLocalByUrl = {
    id: string
    oldItems: VappsPhoneBookItem[]
    newItems: VappsPhoneBookItem[]
    requestedItemsLocal: VappsPhoneBookItem[]
}
export type VappsEventPhoneOnUpdateSpeedDialItemsLocal = {
    id: string
    oldItems: VappsPhoneSpeedDialItem[]
    newItems: VappsPhoneSpeedDialItem[]
    requestedItemsLocal: VappsPhoneSpeedDialItem[]
}
export type VappsEventPhoneOnUpdateSpeedDialItemsLocalByUrl = {
    id: string
    oldItems: VappsPhoneSpeedDialItem[]
    newItems: VappsPhoneSpeedDialItem[]
    requestedItemsLocal: VappsPhoneSpeedDialItem[]
}
export type VappsEventPhoneOnDeleteBookItems = {
    id: string
    oldItems: VappsPhoneBookItem[]
    newItems: VappsPhoneBookItem[]
    requestedIDs: string[]
}
export type VappsEventPhoneOnDeleteBookItemsByUrl = {
    id: string
    oldItems: VappsPhoneBookItem[]
    newItems: VappsPhoneBookItem[]
    requestedIDs: string[]
}
export type VappsEventPhoneOnDeleteHistoryItems = {
    id: string
    oldItems: VappsPhoneHistoryItem[]
    newItems: VappsPhoneHistoryItem[]
    requestedIDs: string[]
}
export type VappsEventPhoneOnDeleteHistoryItemsByUrl = {
    id: string
    oldItems: VappsPhoneHistoryItem[]
    newItems: VappsPhoneHistoryItem[]
    requestedIDs: string[]
}
export type VappsEventPhoneOnDeleteSpeedDialItems = {
    id: string
    oldItems: VappsPhoneSpeedDialItem[]
    newItems: VappsPhoneSpeedDialItem[]
    requestedIDs: string[]
}
export type VappsEventPhoneOnDeleteSpeedDialItemsByUrl = {
    id: string
    oldItems: VappsPhoneSpeedDialItem[]
    newItems: VappsPhoneSpeedDialItem[]
    requestedIDs: string[]
}
export type VappsEventPhoneOnDeleteBookItemsLocal = {
    id: string
    oldItems: VappsPhoneBookItem[]
    newItems: VappsPhoneBookItem[]
    requestedIDs: string[]
}
export type VappsEventPhoneOnDeleteBookItemsLocalByUrl = {
    id: string
    oldItems: VappsPhoneBookItem[]
    newItems: VappsPhoneBookItem[]
    requestedIDs: string[]
}
export type VappsEventPhoneOnDeleteHistoryItemsLocal = {
    id: string
    oldItems: VappsPhoneHistoryItem[]
    newItems: VappsPhoneHistoryItem[]
    requestedIDs: string[]
}
export type VappsEventPhoneOnDeleteHistoryItemsLocalByUrl = {
    id: string
    oldItems: VappsPhoneHistoryItem[]
    newItems: VappsPhoneHistoryItem[]
    requestedIDs: string[]
}
export type VappsEventPhoneOnDeleteSpeedDialItemsLocal = {
    id: string
    oldItems: VappsPhoneSpeedDialItem[]
    newItems: VappsPhoneSpeedDialItem[]
    requestedIDs: string[]
}
export type VappsEventPhoneOnDeleteSpeedDialItemsLocalByUrl = {
    id: string
    oldItems: VappsPhoneSpeedDialItem[]
    newItems: VappsPhoneSpeedDialItem[]
    requestedIDs: string[]
}
export type VappsEventPhoneOnCallingMaskOpen = {
    id: string
    title: string | undefined
    mode: VappsPhoneCallingMaskModeType
    tables: VappsPhoneCallingMaskTable[]
    html: string
    isFullCustom?: boolean
}
export type VappsEventPhoneOnCallingMaskClose = {
    id: string
}
export type VappsEventPhoneOnPutCustomCallingMaskHtml = {
    id: string
    html: string
}
export interface VappsEventPhoneOnCreateBookItem {
    id: string
    item: VappsPhoneBookItem
}

export interface VappsEventPhoneOnCreateSpeedDialItem {
    id: string
    item: VappsPhoneSpeedDialItem
}

export type VappsEventPhoneOnUpdateBookItem = {
    id: string
    oldItem: VappsPhoneBookItem
    newItem: VappsPhoneBookItem
}

export type VappsEventPhoneOnUpdateSpeedDialItem = {
    id: string
    oldItem: VappsPhoneSpeedDialItem
    newItem: VappsPhoneSpeedDialItem
}

export interface VappsEventPhoneOnDeleteBookItem {
    id: string
    item: VappsPhoneBookItem
}

export interface VappsEventPhoneOnDeleteHistoryItem {
    id: string
    item: VappsPhoneHistoryItem
}

export interface VappsEventPhoneOnDeleteSpeedDialItem {
    id: string
    item: VappsPhoneSpeedDialItem
}

export interface VappsEventPhoneOnClickBookItem {
    id: string
    item: VappsPhoneBookItem
}

export interface VappsEventPhoneOnClickHistoryItem {
    id: string
    item: VappsPhoneHistoryItem
}

export interface VappsEventPhoneOnClickSpeedDialItem {
    id: string
    item: VappsPhoneSpeedDialItem
}

export interface VappsEventPhoneOnRightClickBookItem {
    id: string
    item: VappsPhoneBookItem
}

export interface VappsEventPhoneOnRightClickHistoryItem {
    id: string
    item: VappsPhoneHistoryItem
}

export interface VappsEventPhoneOnRightClickSpeedDialItem {
    id: string
    item: VappsPhoneSpeedDialItem
}

export interface VappsEventPhoneOnLongPressBookItem {
    id: string
    item: VappsPhoneBookItem
}

export interface VappsEventPhoneOnLongPressHistoryItem {
    id: string
    item: VappsPhoneHistoryItem
}

export interface VappsEventPhoneOnLongPressSpeedDialItem {
    id: string
    item: VappsPhoneSpeedDialItem
}

export interface VappsEventPhoneOnCallBookItem {
    id: string
    item: VappsPhoneBookItem
}

export interface VappsEventPhoneOnCallHistoryItem {
    id: string
    item: VappsPhoneHistoryItem
}

export interface VappsEventPhoneOnCallSpeedDialItem {
    id: string
    item: VappsPhoneSpeedDialItem
}

export interface VappsEventPhoneOnListenBookItem {
    id: string
    item: VappsPhoneBookItem
}

export interface VappsEventPhoneOnListenSpeedDialItem {
    id: string
    item: VappsPhoneSpeedDialItem
}

export interface VappsEventPhoneOnWhisperBookItem {
    id: string
    item: VappsPhoneBookItem
}

export interface VappsEventPhoneOnWhisperSpeedDialItem {
    id: string
    item: VappsPhoneSpeedDialItem
}

export interface VappsEventPhoneOnBargeBookItem {
    id: string
    item: VappsPhoneBookItem
}

export interface VappsEventPhoneOnBargeSpeedDialItem {
    id: string
    item: VappsPhoneSpeedDialItem
}

export interface VappsEventPhoneOnDetailBookItem {
    id: string
    item: VappsPhoneBookItem
}

export interface VappsEventPhoneOnDetailHistoryItem {
    id: string
    item: VappsPhoneHistoryItem
}

export interface VappsEventPhoneOnDetailSpeedDialItem {
    id: string
    item: VappsPhoneSpeedDialItem
}
export interface VappsEventPhoneOnCancel {
    id: string
}
export interface VappsEventPhoneOnReject {
    id: string
}
export interface VappsEventPhoneOnAccept {
    id: string
}
export interface VappsEventPhoneOnTurnMicOn {
    id: string
}
export interface VappsEventPhoneOnTurnMicOff {
    id: string
}
export interface VappsEventPhoneOnClickKeypad {
    id: string
}
export interface VappsEventPhoneOnTurnSpeakerOn {
    id: string
}
export interface VappsEventPhoneOnTurnSpeakerOff {
    id: string
}
export interface VappsEventPhoneOnTurnHoldOn {
    id: string
}
export interface VappsEventPhoneOnTurnHoldOff {
    id: string
}
export interface VappsEventPhoneOnHangup {
    id: string
}
export interface VappsEventPhoneOnClickTransfer {
    id: string
}
export interface VappsEventPhoneOnClickKeypadNumber {
    id: string
    number: string
}
export type VappsEventPhoneOnTransferInTalking = {
    id: string
    item: VappsPhoneBookItem
}

/*****************************
 * Vapps App Event Model
 *****************************/
export type VappsEventAppOnCreate = {
    id: string
}
export type VappsEventAppOnMounted = {
    id: string
}
export type VappsEventAppOnOpen = {
    id: string
}
export type VappsEventAppOnClose = {
    id: string
}