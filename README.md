# AIChain VAPPS
`VAPPS` は、既存アプリケーション内に新たな重要機能を組み込もうとするとき、インフラ・バックエンド・フロントエンドの構築及び実装を行わず、それら全てを含む `タグ` の埋め込みによって顧客提供までをショートカットする為の `Virtual Applications （VAPPS）` です。

# AIChain VAPPS Phone
`VAPPS Phone` は、既存のアプリケーションに AIChain が発行するタグを埋め込むことによって、既存のアプリケーション画面内に電話アプリケーションを出現させます。

`VAPPS Phone` を埋め込んだ既存アプリケーションには、どこからでも呼び出しが可能な `Vapps` というグローバルなコントローラーが変数として発生します。

既存アプリケーション側からは画面上からだけでなく、`Vapps` コントローラーの関数を呼び出すことにより、あらゆる操作が可能であるため、既存アプリケーションの仕様や用途に合わせてシームレスに連動させることが可能です。

また、`Vapps` コントローラーには、`Vapps Phone` 内で発生するあらゆるイベントを取得可能なイベントリスナーが網羅的に実装されています。着信を受けた時、電話をかけた時、電話帳を編集した時、など全ての場面がリアルタイムに既存アプリケーション側に通知されるため、`VAPPS Phone` は完全に既存アプリケーションの一部として扱うことが可能です。


## VAPPS Phone 呼び出し関数
### ◼️ アプリ操作
#### ◉ Vapps.on (ename, callback)

INTERFACE
```
Vapps.on (ename: string, callback: (e: CustomEvent) => void)
```
#### ◉ Vapps.off (ename, callback)
INTERFACE
```
Vapps.off (ename: string, callback: (e: CustomEvent) => void)
```
#### ◉ Vapps.phone (options)
INTERFACE
```
Vapps.phone (options: VappsPhoneOptions): string
```
#### ◉ Vapps.openPhone (x, y)
INTERFACE
```
Vapps.openPhone (x: VappsPhoneLowerX, y: VappsPhoneLowerY)
```
#### ◉ Vapps.closePhone (x, y)
INTERFACE
```
Vapps.closePhone (x: VappsPhoneLowerX, y: VappsPhoneLowerY)
```
#### ◉ Vapps.openPhoneSnackbar (x, y, message, timeout?, icon?, line?)
INTERFACE
```
Vapps.openPhoneSnackbar (x: VappsPhoneLowerX, y: VappsPhoneLowerY, message: string, timeout?: number, icon?: string, line?: 1 | 2)
```
#### ◉ Vapps.closePhoneSnackbar (x, y)
INTERFACE
```
Vapps.closePhoneSnackbar (x: VappsPhoneLowerX, y: VappsPhoneLowerY)
```
#### ◉ Vapps.setPhoneLocale (x, y, locale)
INTERFACE
```
Vapps.setPhoneLocale(x: VappsPhoneLowerX, y: VappsPhoneLowerY, locale: VappsPhoneLocale)
```
#### ◉ Vapps.getPhoneLocale (x, y)
INTERFACE
```
Vapps.getPhoneLocale (x: VappsPhoneLowerX, y: VappsPhoneLowerY): VappsPhoneLocale | string
```
#### ◉ Vapps.setPhoneTab (x, y, tab)
INTERFACE
```
Vapps.setPhoneTab (x: VappsPhoneLowerX, y: VappsPhoneLowerY, tab: VappsPhoneTabType)
```
#### ◉ Vapps.getPhoneTab (x, y)
INTERFACE
```
Vapps.getPhoneTab (x: VappsPhoneLowerX, y: VappsPhoneLowerY): string
```
#### ◉ Vapps.setTabMemoryActive (x, y, isTabMemoryActive)
INTERFACE
```
Vapps.setTabMemoryActive (x: VappsPhoneLowerX, y: VappsPhoneLowerY, isTabMemoryActive: boolean)
```
#### ◉ Vapps.getTabMemoryActive (x, y)
INTERFACE
```
Vapps.getTabMemoryActive (x: VappsPhoneLowerX, y: VappsPhoneLowerY): boolean
```
#### ◉ Vapps.setSaveBookInLocal (x, y, isSaveBookInLocal)
INTERFACE
```
Vapps.setSaveBookInLocal (x: VappsPhoneLowerX, y: VappsPhoneLowerY, isSaveBookInLocal: boolean)
```
#### ◉ Vapps.getSaveBookInLocal (x, y)
INTERFACE
```
Vapps.getSaveBookInLocal (x: VappsPhoneLowerX, y: VappsPhoneLowerY): boolean
```
#### ◉ Vapps.setSaveHistoryInLocal (x, y, isSaveHistoryInLocal)
INTERFACE
```
Vapps.setSaveHistoryInLocal (x: VappsPhoneLowerX, y: VappsPhoneLowerY, isSaveHistoryInLocal: boolean)
```
#### ◉ Vapps.getSaveHistoryInLocal (x, y)
INTERFACE
```
Vapps.getSaveHistoryInLocal (x: VappsPhoneLowerX, y: VappsPhoneLowerY): boolean
```
#### ◉ Vapps.setSaveSpeedDialInLocal (x, y, isSaveSpeedDialInLocal)
INTERFACE
```
Vapps.setSaveSpeedDialInLocal (x: VappsPhoneLowerX, y: VappsPhoneLowerY, isSaveSpeedDialInLocal: boolean)
```
#### ◉ Vapps.getSaveSpeedDialInLocal (x, y)
INTERFACE
```
Vapps.getSaveSpeedDialInLocal (x: VappsPhoneLowerX, y: VappsPhoneLowerY): boolean
```
#### ◉ Vapps.getPhoneI18nDictionary (x, y, asJsonStr, indent)
INTERFACE
```
Vapps.getPhoneI18nDictionary (x: VappsPhoneLowerX, y: VappsPhoneLowerY, asJsonStr?: boolean, indent?: boolean): string | VappsPhoneDictionary
```
#### ◉ Vapps.getPhoneBookItemSample ()
INTERFACE
```
Vapps.getPhoneBookItemSample (): VappsPhoneBookItem
```
#### ◉ Vapps.getPhoneHistoryItemSample ()
INTERFACE
```
Vapps.getPhoneHistoryItemSample (): VappsPhoneHistoryItem
```
#### ◉ Vapps.getPhoneSpeedDialItemSample ()
INTERFACE
```
Vapps.getPhoneSpeedDialItemSample (): VappsPhoneSpeedDialItem
```
#### ◉ Vapps.putPhoneBookItems (x, y, items)
INTERFACE
```
Vapps.putPhoneBookItems (x: VappsPhoneLowerX, y: VappsPhoneLowerY, items: VappsPhoneBookItem[]): boolean
```
#### ◉ Vapps.putPhoneBookItemsByUrl (x, y, url, headers)
INTERFACE
```
Vapps.putPhoneBookItemsByUrl (x: VappsPhoneLowerX, y: VappsPhoneLowerY, url: string, headers: Record<string, string>): Promise<boolean>
```
#### ◉ Vapps.putPhoneHistoryItems (x, y, items)
INTERFACE
```
Vapps.putPhoneHistoryItems (x: VappsPhoneLowerX, y: VappsPhoneLowerY, items: VappsPhoneHistoryItem[]): boolean
```
#### ◉ Vapps.putPhoneHistoryItemsByUrl (x, y, url, headers)
INTERFACE
```
Vapps.putPhoneHistoryItemsByUrl (x: VappsPhoneLowerX, y: VappsPhoneLowerY, url: string, headers: Record<string, string>): Promise<boolean>
```
#### ◉ Vapps.putPhoneSpeedDialItems (x, y, items)
INTERFACE
```
Vapps.putPhoneSpeedDialItems (x: VappsPhoneLowerX, y: VappsPhoneLowerY, items: VappsPhoneSpeedDialItem[]): boolean
```
#### ◉ Vapps.putPhoneSpeedDialItemsByUrl (x, y, url, headers)
INTERFACE
```
Vapps.putPhoneSpeedDialItemsByUrl (x: VappsPhoneLowerX, y: VappsPhoneLowerY, url: string, headers: Record<string, string>): Promise<boolean>
```
#### ◉ Vapps.putPhoneBookItemsLocal (x, y, items)
INTERFACE
```
Vapps.putPhoneBookItemsLocal (x: VappsPhoneLowerX, y: VappsPhoneLowerY, items: VappsPhoneBookItem[]): boolean
```
#### ◉ Vapps.putPhoneBookItemsLocalByUrl (x, y, url, headers)
INTERFACE
```
Vapps.putPhoneBookItemsLocalByUrl (x: VappsPhoneLowerX, y: VappsPhoneLowerY, url: string, headers: Record<string, string>): Promise<boolean>
```
#### ◉ Vapps.putPhoneHistoryItemsLocal (x, y, items)
INTERFACE
```
Vapps.putPhoneHistoryItemsLocal (x: VappsPhoneLowerX, y: VappsPhoneLowerY, items: VappsPhoneHistoryItem[]): boolean
```
#### ◉ Vapps.putPhoneHistoryItemsLocalByUrl (x, y, url, headers)
INTERFACE
```
Vapps.putPhoneHistoryItemsLocalByUrl (x: VappsPhoneLowerX, y: VappsPhoneLowerY, url: string, headers: Record<string, string>): Promise<boolean>
```
#### ◉ Vapps.putPhoneSpeedDialItemsLocal (x, y, items)
INTERFACE
```
Vapps.putPhoneSpeedDialItemsLocal (x: VappsPhoneLowerX, y: VappsPhoneLowerY, items: VappsPhoneSpeedDialItem[]): boolean
```
#### ◉ Vapps.putPhoneSpeedDialItemsLocalByUrl (x, y, url, headers)
INTERFACE
```
Vapps.putPhoneSpeedDialItemsLocalByUrl (x: VappsPhoneLowerX, y: VappsPhoneLowerY, url: string, headers: Record<string, string>): Promise<boolean>
```
#### ◉ Vapps.pushPhoneBookItems (x, y, items)
INTERFACE
```
Vapps.pushPhoneBookItems (x: VappsPhoneLowerX, y: VappsPhoneLowerY, items: VappsPhoneBookItem[]): boolean
```
#### ◉ Vapps.pushPhoneBookItemsByUrl (x, y, url, headers)
INTERFACE
```
Vapps.pushPhoneBookItemsByUrl (x: VappsPhoneLowerX, y: VappsPhoneLowerY, url: string, headers: Record<string, string>): Promise<boolean>
```
#### ◉ Vapps.pushPhoneHistoryItems (x, y, items)
INTERFACE
```
Vapps.pushPhoneHistoryItems (x: VappsPhoneLowerX, y: VappsPhoneLowerY, items: VappsPhoneHistoryItem[]): boolean
```
#### ◉ Vapps.pushPhoneHistoryItemsByUrl (x, y, url, headers)
INTERFACE
```
Vapps.pushPhoneHistoryItemsByUrl (x: VappsPhoneLowerX, y: VappsPhoneLowerY, url: string, headers: Record<string, string>): Promise<boolean>
```
#### ◉ Vapps.pushPhoneSpeedDialItems (x, y, items)
INTERFACE
```
Vapps.pushPhoneSpeedDialItems (x: VappsPhoneLowerX, y: VappsPhoneLowerY, items: VappsPhoneSpeedDialItem[]): boolean
```
#### ◉ Vapps.pushPhoneSpeedDialItemsByUrl (x, y, url, headers)
INTERFACE
```
Vapps.pushPhoneSpeedDialItemsByUrl (x: VappsPhoneLowerX, y: VappsPhoneLowerY, url: string, headers: Record<string, string>): Promise<boolean>
```
#### ◉ Vapps.pushPhoneBookItemsLocal (x, y, items)
INTERFACE
```
Vapps.pushPhoneBookItemsLocal (x: VappsPhoneLowerX, y: VappsPhoneLowerY, items: VappsPhoneBookItem[]): boolean
```
#### ◉ Vapps.pushPhoneBookItemsLocalByUrl (x, y, url, headers)
INTERFACE
```
Vapps.pushPhoneBookItemsLocalByUrl (x: VappsPhoneLowerX, y: VappsPhoneLowerY, url: string, headers: Record<string, string>): Promise<boolean>
```
#### ◉ Vapps.pushPhoneHistoryItemsLocal (x, y, items)
INTERFACE
```
Vapps.pushPhoneHistoryItemsLocal (x: VappsPhoneLowerX, y: VappsPhoneLowerY, items: VappsPhoneHistoryItem[]): boolean
```
#### ◉ Vapps.pushPhoneHistoryItemsLocalByUrl (x, y, url, headers)
INTERFACE
```
Vapps.pushPhoneHistoryItemsLocalByUrl (x: VappsPhoneLowerX, y: VappsPhoneLowerY, url: string, headers: Record<string, string>): Promise<boolean>
```
#### ◉ Vapps.pushPhoneSpeedDialItemsLocal (x, y, items)
INTERFACE
```
Vapps.pushPhoneSpeedDialItemsLocal (x: VappsPhoneLowerX, y: VappsPhoneLowerY, items: VappsPhoneSpeedDialItem[]): boolean
```
#### ◉ Vapps.pushPhoneSpeedDialItemsLocalByUrl (x, y, url, headers)
INTERFACE
```
Vapps.pushPhoneSpeedDialItemsLocalByUrl (x: VappsPhoneLowerX, y: VappsPhoneLowerY, url: string, headers: Record<string, string>): Promise<boolean>
```
#### ◉ Vapps.updatePhoneBookItems (x, y, items)
INTERFACE
```
Vapps.updatePhoneBookItems (x: VappsPhoneLowerX, y: VappsPhoneLowerY, items: VappsPhoneBookItem[]): boolean
```
#### ◉ Vapps.updatePhoneBookItemsByUrl (x, y, url, headers)
INTERFACE
```
Vapps.updatePhoneBookItemsByUrl (x: VappsPhoneLowerX, y: VappsPhoneLowerY, url: string, headers: Record<string, string>): Promise<boolean>
```
#### ◉ Vapps.updatePhoneHistoryItems (x, y, items)
INTERFACE
```
Vapps.updatePhoneHistoryItems (x: VappsPhoneLowerX, y: VappsPhoneLowerY, items: VappsPhoneHistoryItem[]): boolean
```
#### ◉ Vapps.updatePhoneHistoryItemsByUrl (x, y, url, headers)
INTERFACE
```
Vapps.updatePhoneHistoryItemsByUrl (x: VappsPhoneLowerX, y: VappsPhoneLowerY, url: string, headers: Record<string, string>): Promise<boolean>
```
#### ◉ Vapps.updatePhoneSpeedDialItems (x, y, items)
INTERFACE
```
Vapps.updatePhoneSpeedDialItems (x: VappsPhoneLowerX, y: VappsPhoneLowerY, items: VappsPhoneSpeedDialItem[]): boolean
```
#### ◉ Vapps.updatePhoneSpeedDialItemsByUrl (x, y, url, headers)
INTERFACE
```
Vapps.updatePhoneSpeedDialItemsByUrl (x: VappsPhoneLowerX, y: VappsPhoneLowerY, url: string, headers: Record<string, string>): Promise<boolean>
```
#### ◉ Vapps.updatePhoneBookItemsLocal (x, y, items)
INTERFACE
```
Vapps.updatePhoneBookItemsLocal (x: VappsPhoneLowerX, y: VappsPhoneLowerY, items: VappsPhoneBookItem[]): boolean
```
#### ◉ Vapps.updatePhoneBookItemsLocalByUrl (x, y, url, headers)
INTERFACE
```
Vapps.updatePhoneBookItemsLocalByUrl (x: VappsPhoneLowerX, y: VappsPhoneLowerY, url: string, headers: Record<string, string>): Promise<boolean>
```
#### ◉ Vapps.updatePhoneSpeedDialItemsLocal (x, y, items)
INTERFACE
```
Vapps.updatePhoneSpeedDialItemsLocal (x: VappsPhoneLowerX, y: VappsPhoneLowerY, items: VappsPhoneSpeedDialItem[]): boolean
```
#### ◉ Vapps.updatePhoneSpeedDialItemsLocalByUrl (x, y, url, headers)
INTERFACE
```
Vapps.updatePhoneSpeedDialItemsLocalByUrl (x: VappsPhoneLowerX, y: VappsPhoneLowerY, url: string, headers: Record<string, string>): Promise<boolean>
```
#### ◉ Vapps.deletePhoneBookItems (x, y, itemIDs)
INTERFACE
```
Vapps.deletePhoneBookItems (x: VappsPhoneLowerX, y: VappsPhoneLowerY, itemIDs: string[]): boolean
```
#### ◉ Vapps.deletePhoneBookItemsByUrl (x, y, url, headers)
INTERFACE
```
Vapps.deletePhoneBookItemsByUrl (x: VappsPhoneLowerX, y: VappsPhoneLowerY, url: string, headers: Record<string, string>): Promise<boolean>
```
#### ◉ Vapps.deletePhoneHistoryItems (x, y, itemIDs)
INTERFACE
```
Vapps.deletePhoneHistoryItems (x: VappsPhoneLowerX, y: VappsPhoneLowerY, itemIDs: string[]): boolean
```
#### ◉ Vapps.deletePhoneHistoryItemsByUrl (x, y, url, headers)
INTERFACE
```
Vapps.deletePhoneHistoryItemsByUrl (x: VappsPhoneLowerX, y: VappsPhoneLowerY, url: string, headers: Record<string, string>): Promise<boolean>
```
#### ◉ Vapps.deletePhoneSpeedDialItems (x, y, itemIDs)
INTERFACE
```
Vapps.deletePhoneSpeedDialItems (x: VappsPhoneLowerX, y: VappsPhoneLowerY, itemIDs: string[]): boolean
```
#### ◉ Vapps.deletePhoneSpeedDialItemsByUrl (x, y, url, headers)
INTERFACE
```
Vapps.deletePhoneSpeedDialItemsByUrl (x: VappsPhoneLowerX, y: VappsPhoneLowerY, url: string, headers: Record<string, string>): Promise<boolean>
```
#### ◉ Vapps.deletePhoneBookItemsLocal (x, y, itemIDs)
INTERFACE
```
Vapps.deletePhoneBookItemsLocal (x: VappsPhoneLowerX, y: VappsPhoneLowerY, itemIDs: string[]): boolean
```
#### ◉ Vapps.deletePhoneBookItemsLocalByUrl (x, y, url, headers)
INTERFACE
```
Vapps.deletePhoneBookItemsLocalByUrl (x: VappsPhoneLowerX, y: VappsPhoneLowerY, url: string, headers: Record<string, string>): Promise<boolean>
```
#### ◉ Vapps.deletePhoneHistoryItemsLocal (x, y, itemIDs)
INTERFACE
```
Vapps.deletePhoneHistoryItemsLocal (x: VappsPhoneLowerX, y: VappsPhoneLowerY, itemIDs: string[]): boolean
```
#### ◉ Vapps.deletePhoneHistoryItemsLocalByUrl (x, y, url, headers)
INTERFACE
```
Vapps.deletePhoneHistoryItemsLocalByUrl (x: VappsPhoneLowerX, y: VappsPhoneLowerY, url: string, headers: Record<string, string>): Promise<boolean>
```
#### ◉ Vapps.deletePhoneSpeedDialItemsLocal (x, y, itemIDs)
INTERFACE
```
Vapps.deletePhoneSpeedDialItemsLocal (x: VappsPhoneLowerX, y: VappsPhoneLowerY, itemIDs: string[]): boolean
```
#### ◉ Vapps.deletePhoneSpeedDialItemsLocalByUrl (x, y, url, headers)
INTERFACE
```
Vapps.deletePhoneSpeedDialItemsLocalByUrl (x: VappsPhoneLowerX, y: VappsPhoneLowerY, url: string, headers: Record<string, string>): Promise<boolean>
```
#### ◉ Vapps.openCallingMask (x, y, options)
INTERFACE
```
Vapps.openCallingMask (x: VappsPhoneLowerX, y: VappsPhoneLowerY, options?: VappsPhoneOpenCallingMaskOptions)
```
#### ◉ Vapps.closeCallingMask (x, y)
INTERFACE
```
Vapps.closeCallingMask (x: VappsPhoneLowerX, y: VappsPhoneLowerY)
```

---

### ◼️ 電話操作
#### ◉ Vapps.register()
INTERFACE
```
Vapps.register()
```
#### ◉ Vapps.unregister()
INTERFACE
```
Vapps.unregister()
```
#### ◉ Vapps.call()
INTERFACE
```
Vapps.call()
```
#### ◉ Vapps.hangup()
INTERFACE
```
Vapps.hangup()
```
#### ◉ Vapps.accept()
INTERFACE
```
Vapps.accept()
```
#### ◉ Vapps.hold()
INTERFACE
```
Vapps.hold()
```
#### ◉ Vapps.unhold()
INTERFACE
```
Vapps.unhold()
```
#### ◉ Vapps.mute()
INTERFACE
```
Vapps.mute()
```
#### ◉ Vapps.unmute()
INTERFACE
```
Vapps.unmute()
```
#### ◉ Vapps.transfer()
INTERFACE
```
Vapps.transfer()
```
#### ◉ Vapps.cancelTransfer()
INTERFACE
```
Vapps.cancelTransfer()
```
#### ◉ Vapps.park()
INTERFACE
```
Vapps.park()
```
#### ◉ Vapps.parkup()
INTERFACE
```
Vapps.parkup()
```
#### ◉ Vapps.listen()
INTERFACE
```
Vapps.listen()
```
#### ◉ Vapps.whisper()
INTERFACE
```
Vapps.whisper()
```
#### ◉ Vapps.barge()
INTERFACE
```
Vapps.barge()
```
#### ◉ Vapps.dtmf()
INTERFACE
```
Vapps.dtmf()
```

---

## VAPPS Phone Events
### ⚫︎ ON_CREATED
```
```
### ⚫︎ ON_MOUNTED
```
```
### ⚫︎ ON_OPEN
```
```
### ⚫︎ ON_CLOSE
```
```
### ⚫︎ ON_OPEN_SNACKBAR
```
```
### ⚫︎ ON_CLOSE_SNACKBAR
```
```
### ⚫︎ ON_LOCALE_CHANGE
```
```
### ⚫︎ ON_TAB_CHANGE
```
```
### ⚫︎ ON_INPUT_NUMBER_CHANGE
```
```
### ⚫︎ ON_CALL
```
```
### ⚫︎ ON_FILTER_BOOK
```
```
### ⚫︎ ON_FILTER_HISTORY
```
```
### ⚫︎ ON_FILTER_SPEED_DIAL
```
```
### ⚫︎ ON_PUT_BOOK_ITEMS
```
```
### ⚫︎ ON_PUT_BOOK_ITEMS_BY_URL
```
```
### ⚫︎ ON_PUT_HISTORY_ITEMS
```
```
### ⚫︎ ON_PUT_HISTORY_ITEMS_BY_URL
```
```
### ⚫︎ ON_PUT_SPEED_DIAL_ITEMS
```
```
### ⚫︎ ON_PUT_SPEED_DIAL_ITEMS_BY_URL
```
```
### ⚫︎ ON_PUT_BOOK_ITEMS_LOCAL
```
```
### ⚫︎ ON_PUT_BOOK_ITEMS_LOCAL_BY_URL
```
```
### ⚫︎ ON_PUT_HISTORY_ITEMS_LOCAL
```
```
### ⚫︎ ON_PUT_HISTORY_ITEMS_LOCAL_BY_URL
```
```
### ⚫︎ ON_PUT_SPEED_DIAL_ITEMS_LOCAL
```
```
### ⚫︎ ON_PUT_SPEED_DIAL_ITEMS_LOCAL_BY_URL
```
```
### ⚫︎ ON_PUSH_BOOK_ITEMS
```
```
### ⚫︎ ON_PUSH_BOOK_ITEMS_BY_URL
```
```
### ⚫︎ ON_PUSH_HISTORY_ITEMS
```
```
### ⚫︎ ON_PUSH_HISTORY_ITEMS_BY_URL
```
```
### ⚫︎ ON_PUSH_SPEED_DIAL_ITEMS
```
```
### ⚫︎ ON_PUSH_SPEED_DIAL_ITEMS_BY_URL
```
```
### ⚫︎ ON_PUSH_BOOK_ITEMS_LOCAL
```
```
### ⚫︎ ON_PUSH_BOOK_ITEMS_LOCAL_BY_URL
```
```
### ⚫︎ ON_PUSH_HISTORY_ITEMS_LOCAL
```
```
### ⚫︎ ON_PUSH_HISTORY_ITEMS_LOCAL_BY_URL
```
```
### ⚫︎ ON_PUSH_SPEED_DIAL_ITEMS_LOCAL
```
```
### ⚫︎ ON_PUSH_SPEED_DIAL_ITEMS_LOCAL_BY_URL
```
```
### ⚫︎ ON_UPDATE_BOOK_ITEMS
```
```
### ⚫︎ ON_UPDATE_BOOK_ITEMS_BY_URL
```
```
### ⚫︎ ON_UPDATE_HISTORY_ITEMS
```
```
### ⚫︎ ON_UPDATE_HISTORY_ITEMS_BY_URL
```
```
### ⚫︎ ON_UPDATE_SPEED_DIAL_ITEMS
```
```
### ⚫︎ ON_UPDATE_SPEED_DIAL_ITEMS_BY_URL
```
```
### ⚫︎ ON_UPDATE_BOOK_ITEMS_LOCAL
```
```
### ⚫︎ ON_UPDATE_BOOK_ITEMS_LOCAL_BY_URL
```
```
### ⚫︎ ON_UPDATE_HISTORY_ITEMS_LOCAL
```
```
### ⚫︎ ON_UPDATE_HISTORY_ITEMS_LOCAL_BY_URL
```
```
### ⚫︎ ON_UPDATE_SPEED_DIAL_ITEMS_LOCAL
```
```
### ⚫︎ ON_UPDATE_SPEED_DIAL_ITEMS_LOCAL_BY_URL
```
```
### ⚫︎ ON_DELETE_BOOK_ITEMS
```
```
### ⚫︎ ON_DELETE_BOOK_ITEMS_BY_URL
```
```
### ⚫︎ ON_DELETE_HISTORY_ITEMS
```
```
### ⚫︎ ON_DELETE_HISTORY_ITEMS_BY_URL
```
```
### ⚫︎ ON_DELETE_SPEED_DIAL_ITEMS
```
```
### ⚫︎ ON_DELETE_SPEED_DIAL_ITEMS_BY_URL
```
```
### ⚫︎ ON_DELETE_BOOK_ITEMS_LOCAL
```
```
### ⚫︎ ON_DELETE_BOOK_ITEMS_LOCAL_BY_URL
```
```
### ⚫︎ ON_DELETE_HISTORY_ITEMS_LOCAL
```
```
### ⚫︎ ON_DELETE_HISTORY_ITEMS_LOCAL_BY_URL
```
```
### ⚫︎ ON_DELETE_SPEED_DIAL_ITEMS_LOCAL
```
```
### ⚫︎ ON_DELETE_SPEED_DIAL_ITEMS_LOCAL_BY_URL
```
```
### ⚫︎ ON_OPEN_CALLING_MASK
```
```
### ⚫︎ ON_CLOSE_CALLING_MASK
```
```
### ⚫︎ ON_PUT_CUSTOM_CALLING_MASK_HTML
```
```
### ⚫︎ ON_CREATE_BOOK_ITEM
```
```
### ⚫︎ ON_CREATE_SPEED_DIAL_ITEM
```
```
### ⚫︎ ON_UPDATE_BOOK_ITEM
```
```
### ⚫︎ ON_UPDATE_SPEED_DIAL_ITEM
```
```
### ⚫︎ ON_DELETE_BOOK_ITEM
```
```
### ⚫︎ ON_DELETE_HISTORY_ITEM
```
```
### ⚫︎ ON_DELETE_SPEED_DIAL_ITEM
```
```
### ⚫︎ ON_CLICK_BOOK_ITEM
```
```
### ⚫︎ ON_CLICK_HISTORY_ITEM
```
```
### ⚫︎ ON_CLICK_SPEED_DIAL_ITEM
```
```
### ⚫︎ ON_RIGHT_CLICK_BOOK_ITEM
```
```
### ⚫︎ ON_RIGHT_CLICK_HISTORY_ITEM
```
```
### ⚫︎ ON_RIGHT_CLICK_SPEED_DIAL_ITEM
```
```
### ⚫︎ ON_LONG_PRESS_BOOK_ITEM
```
```
### ⚫︎ ON_LONG_PRESS_HISTORY_ITEM
```
```
### ⚫︎ ON_LONG_PRESS_SPEED_DIAL_ITEM
```
```
### ⚫︎ ON_CALL_BOOK_ITEM
```
```
### ⚫︎ ON_CALL_HISTORY_ITEM
```
```
### ⚫︎ ON_CALL_SPEED_DIAL_ITEM
```
```
### ⚫︎ ON_LISTEN_BOOK_ITEM
```
```
### ⚫︎ ON_LISTEN_SPEED_DIAL_ITEM
```
```
### ⚫︎ ON_WHISPER_BOOK_ITEM
```
```
### ⚫︎ ON_WHISPER_SPEED_DIAL_ITEM
```
```
### ⚫︎ ON_BARGE_BOOK_ITEM
```
```
### ⚫︎ ON_BARGE_SPEED_DIAL_ITEM
```
```
### ⚫︎ ON_DETAIL_BOOK_ITEM
```
```
### ⚫︎ ON_DETAIL_HISTORY_ITEM
```
```
### ⚫︎ ON_DETAIL_SPEED_DIAL_ITEM
```
```
### ⚫︎ ON_CANCEL
```
```
### ⚫︎ ON_REJECT
```
```
### ⚫︎ ON_ACCEPT
```
```
### ⚫︎ ON_TURN_MIC_ON
```
```
### ⚫︎ ON_TURN_MIC_OFF
```
```
### ⚫︎ ON_CLICK_KEYPAD
```
```
### ⚫︎ ON_TURN_SPEAKER_ON
```
```
### ⚫︎ ON_TURN_SPEAKER_OFF
```
```
### ⚫︎ ON_TURN_HOLD_ON
```
```
### ⚫︎ ON_TURN_HOLD_OFF
```
```
### ⚫︎ ON_HANGUP
```
```
### ⚫︎ ON_CLICK_TRANSFER
```
```