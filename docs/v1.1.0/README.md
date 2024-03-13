# AIChain VAPPS v1.1.0
## VAPPS Phone 呼び出し関数
### ◼️ アプリ操作
#### ◉ Vapps.on (ename, callback)
概要
```
- Vapps で発生する全ての Event に callback を設定します
```
INTERFACE
```
Vapps.on (ename: string, callback: (e: CustomEvent) => void)
```
#### ◉ Vapps.off (ename, callback)
概要
```
- Vapps.on() にて設定した Event の callback を削除します
```
INTERFACE
```
Vapps.off (ename: string, callback: (e: CustomEvent) => void)
```
#### ◉ Vapps.phone (options)
概要
```
- 画面上に電話Appを表示させます
- デフォルトの形は、フローティングアクションボタンです
```
INTERFACE
```
Vapps.phone (options: VappsPhoneOptions): string
```
#### ◉ Vapps.openPhone (x, y)
概要
```
- 表示されている電話Appフローティングアクションボタンを開きます
```
INTERFACE
```
Vapps.openPhone (x: VappsPhoneLowerX, y: VappsPhoneLowerY)
```
#### ◉ Vapps.closePhone (x, y)
概要
```
- 表示されている電話Appを閉じてフローティングアクションボタンに戻します
```
INTERFACE
```
Vapps.closePhone (x: VappsPhoneLowerX, y: VappsPhoneLowerY)
```
#### ◉ Vapps.openPhoneSnackbar (x, y, message, timeout?, icon?, line?)
概要
```
- スナックバーとして任意のメッセージを開きます
```
INTERFACE
```
Vapps.openPhoneSnackbar (x: VappsPhoneLowerX, y: VappsPhoneLowerY, message: string, timeout?: number, icon?: string, line?: 1 | 2)
```
#### ◉ Vapps.closePhoneSnackbar (x, y)
概要
```
- 開いているスナックバーを閉じます
```
INTERFACE
```
Vapps.closePhoneSnackbar (x: VappsPhoneLowerX, y: VappsPhoneLowerY)
```
#### ◉ Vapps.setPhoneLocale (x, y, locale)
概要
```
- 使用する言語を設定します
```
INTERFACE
```
Vapps.setPhoneLocale(x: VappsPhoneLowerX, y: VappsPhoneLowerY, locale: VappsPhoneLocale)
```
#### ◉ Vapps.getPhoneLocale (x, y)
概要
```
- 現在の言語名を取得します
```
INTERFACE
```
Vapps.getPhoneLocale (x: VappsPhoneLowerX, y: VappsPhoneLowerY): VappsPhoneLocale | string
```
#### ◉ Vapps.setPhoneTab (x, y, tab)
概要
```
- 電話Appの特定のタブをアクティブにします
```
INTERFACE
```
Vapps.setPhoneTab (x: VappsPhoneLowerX, y: VappsPhoneLowerY, tab: VappsPhoneTabType)
```
#### ◉ Vapps.getPhoneTab (x, y)
概要
```
- 現在アクティブになっているタブ名を取得します
```
INTERFACE
```
Vapps.getPhoneTab (x: VappsPhoneLowerX, y: VappsPhoneLowerY): string
```
#### ◉ Vapps.setTabMemoryActive (x, y, isTabMemoryActive)
概要
```
- 最後にアクティブになっていたタブを記憶するかどうかを設定します
- 記憶する場合、次回起動時には最後にアクティブになっていたタブが自動的に開きます
```
INTERFACE
```
Vapps.setTabMemoryActive (x: VappsPhoneLowerX, y: VappsPhoneLowerY, isTabMemoryActive: boolean)
```
#### ◉ Vapps.getTabMemoryActive (x, y)
概要
```
- 現在のタブ記憶設定を取得します
```
INTERFACE
```
Vapps.getTabMemoryActive (x: VappsPhoneLowerX, y: VappsPhoneLowerY): boolean
```
#### ◉ Vapps.setSaveBookInLocal (x, y, isSaveBookInLocal)
概要
```
- ローカル電話帳を使用するか否かを設定します
```
INTERFACE
```
Vapps.setSaveBookInLocal (x: VappsPhoneLowerX, y: VappsPhoneLowerY, isSaveBookInLocal: boolean)
```
#### ◉ Vapps.getSaveBookInLocal (x, y)
概要
```
- 現在のローカル電話帳使用有無設定を取得します
```
INTERFACE
```
Vapps.getSaveBookInLocal (x: VappsPhoneLowerX, y: VappsPhoneLowerY): boolean
```
#### ◉ Vapps.setSaveHistoryInLocal (x, y, isSaveHistoryInLocal)
概要
```
- ローカル電話履歴を使用するか否かを設定します
```
INTERFACE
```
Vapps.setSaveHistoryInLocal (x: VappsPhoneLowerX, y: VappsPhoneLowerY, isSaveHistoryInLocal: boolean)
```
#### ◉ Vapps.getSaveHistoryInLocal (x, y)
概要
```
- 現在のローカル電話履歴使用有無設定を取得します
```
INTERFACE
```
Vapps.getSaveHistoryInLocal (x: VappsPhoneLowerX, y: VappsPhoneLowerY): boolean
```
#### ◉ Vapps.setSaveSpeedDialInLocal (x, y, isSaveSpeedDialInLocal)
概要
```
- ローカルスピードダイヤルを使用するか否かを設定します
```
INTERFACE
```
Vapps.setSaveSpeedDialInLocal (x: VappsPhoneLowerX, y: VappsPhoneLowerY, isSaveSpeedDialInLocal: boolean)
```
#### ◉ Vapps.getSaveSpeedDialInLocal (x, y)
概要
```
- 現在のローカルスピードダイヤル使用有無設定を取得します
```
INTERFACE
```
Vapps.getSaveSpeedDialInLocal (x: VappsPhoneLowerX, y: VappsPhoneLowerY): boolean
```
#### ◉ Vapps.getPhoneI18nDictionary (x, y, asJsonStr, indent)
概要
```
- 現在適用されている i18n 言語辞書 JSON を取得します
```
INTERFACE
```
Vapps.getPhoneI18nDictionary (x: VappsPhoneLowerX, y: VappsPhoneLowerY, asJsonStr?: boolean, indent?: boolean): string | VappsPhoneDictionary
```
#### ◉ Vapps.getPhoneBookItemSample ()
概要
```
- 電話帳のデータ1件のサンプルを取得します
```
INTERFACE
```
Vapps.getPhoneBookItemSample (): VappsPhoneBookItem
```
#### ◉ Vapps.getPhoneHistoryItemSample ()
概要
```
- 電話履歴のデータ1件のサンプルを取得します
```
INTERFACE
```
Vapps.getPhoneHistoryItemSample (): VappsPhoneHistoryItem
```
#### ◉ Vapps.getPhoneSpeedDialItemSample ()
概要
```
- スピードダイヤルのデータ1件のサンプルを取得します
```
INTERFACE
```
Vapps.getPhoneSpeedDialItemSample (): VappsPhoneSpeedDialItem
```
#### ◉ Vapps.putPhoneBookItems (x, y, items)
概要
```
- 電話帳データを設置します
- この関数を使用した場合、既存のデータを上書きすることに注意してください
```
INTERFACE
```
Vapps.putPhoneBookItems (x: VappsPhoneLowerX, y: VappsPhoneLowerY, items: VappsPhoneBookItem[]): boolean
```
#### ◉ Vapps.putPhoneBookItemsByUrl (x, y, url, headers)
概要
```
- 指定したURLのAPIから電話帳データを取得して設置します
- この関数を使用した場合、既存のデータを上書きすることに注意してください
```
INTERFACE
```
Vapps.putPhoneBookItemsByUrl (x: VappsPhoneLowerX, y: VappsPhoneLowerY, url: string, headers: Record<string, string>): Promise<boolean>
```
#### ◉ Vapps.putPhoneHistoryItems (x, y, items)
概要
```
- 電話履歴データを設置します
- この関数を使用した場合、既存のデータを上書きすることに注意してください
```
INTERFACE
```
Vapps.putPhoneHistoryItems (x: VappsPhoneLowerX, y: VappsPhoneLowerY, items: VappsPhoneHistoryItem[]): boolean
```
#### ◉ Vapps.putPhoneHistoryItemsByUrl (x, y, url, headers)
概要
```
- 指定したURLのAPIから電話履歴データを取得して設置します
- この関数を使用した場合、既存のデータを上書きすることに注意してください
```
INTERFACE
```
Vapps.putPhoneHistoryItemsByUrl (x: VappsPhoneLowerX, y: VappsPhoneLowerY, url: string, headers: Record<string, string>): Promise<boolean>
```
#### ◉ Vapps.putPhoneSpeedDialItems (x, y, items)
概要
```
- スピードダイヤルデータを設置します
- この関数を使用した場合、既存のデータを上書きすることに注意してください
```
INTERFACE
```
Vapps.putPhoneSpeedDialItems (x: VappsPhoneLowerX, y: VappsPhoneLowerY, items: VappsPhoneSpeedDialItem[]): boolean
```
#### ◉ Vapps.putPhoneSpeedDialItemsByUrl (x, y, url, headers)
概要
```
- 指定したURLのAPIからスピードダイヤルデータを取得して設置します
- この関数を使用した場合、既存のデータを上書きすることに注意してください
```
INTERFACE
```
Vapps.putPhoneSpeedDialItemsByUrl (x: VappsPhoneLowerX, y: VappsPhoneLowerY, url: string, headers: Record<string, string>): Promise<boolean>
```
#### ◉ Vapps.putPhoneBookItemsLocal (x, y, items)
概要
```
- ローカル電話帳データを設置します
- この関数を使用した場合、既存のローカルデータを上書きすることに注意してください
```
INTERFACE
```
Vapps.putPhoneBookItemsLocal (x: VappsPhoneLowerX, y: VappsPhoneLowerY, items: VappsPhoneBookItem[]): boolean
```
#### ◉ Vapps.putPhoneBookItemsLocalByUrl (x, y, url, headers)
概要
```
- 指定したURLのAPIからローカル電話帳データを取得して設置します
- この関数を使用した場合、既存のローカルデータを上書きすることに注意してください
```
INTERFACE
```
Vapps.putPhoneBookItemsLocalByUrl (x: VappsPhoneLowerX, y: VappsPhoneLowerY, url: string, headers: Record<string, string>): Promise<boolean>
```
#### ◉ Vapps.putPhoneHistoryItemsLocal (x, y, items)
概要
```
- ローカル電話履歴データを設置します
- この関数を使用した場合、既存のローカルデータを上書きすることに注意してください
```
INTERFACE
```
Vapps.putPhoneHistoryItemsLocal (x: VappsPhoneLowerX, y: VappsPhoneLowerY, items: VappsPhoneHistoryItem[]): boolean
```
#### ◉ Vapps.putPhoneHistoryItemsLocalByUrl (x, y, url, headers)
概要
```
- 指定したURLのAPIからローカル電話履歴データを取得して設置します
- この関数を使用した場合、既存のローカルデータを上書きすることに注意してください
```
INTERFACE
```
Vapps.putPhoneHistoryItemsLocalByUrl (x: VappsPhoneLowerX, y: VappsPhoneLowerY, url: string, headers: Record<string, string>): Promise<boolean>
```
#### ◉ Vapps.putPhoneSpeedDialItemsLocal (x, y, items)
概要
```
- ローカルスピードダイヤルデータを設置します
- この関数を使用した場合、既存のローカルデータを上書きすることに注意してください
```
INTERFACE
```
Vapps.putPhoneSpeedDialItemsLocal (x: VappsPhoneLowerX, y: VappsPhoneLowerY, items: VappsPhoneSpeedDialItem[]): boolean
```
#### ◉ Vapps.putPhoneSpeedDialItemsLocalByUrl (x, y, url, headers)
概要
```
- 指定したURLのAPIからローカルスピードダイヤルデータを取得して設置します
- この関数を使用した場合、既存のローカルデータを上書きすることに注意してください
```
INTERFACE
```
Vapps.putPhoneSpeedDialItemsLocalByUrl (x: VappsPhoneLowerX, y: VappsPhoneLowerY, url: string, headers: Record<string, string>): Promise<boolean>
```
#### ◉ Vapps.pushPhoneBookItems (x, y, items)
概要
```
- 電話帳データを追加します
```
INTERFACE
```
Vapps.pushPhoneBookItems (x: VappsPhoneLowerX, y: VappsPhoneLowerY, items: VappsPhoneBookItem[]): boolean
```
#### ◉ Vapps.pushPhoneBookItemsByUrl (x, y, url, headers)
概要
```
- 指定したURLのAPIから電話帳データを取得して追加します
```
INTERFACE
```
Vapps.pushPhoneBookItemsByUrl (x: VappsPhoneLowerX, y: VappsPhoneLowerY, url: string, headers: Record<string, string>): Promise<boolean>
```
#### ◉ Vapps.pushPhoneHistoryItems (x, y, items)
概要
```
- 電話履歴データを追加します
```
INTERFACE
```
Vapps.pushPhoneHistoryItems (x: VappsPhoneLowerX, y: VappsPhoneLowerY, items: VappsPhoneHistoryItem[]): boolean
```
#### ◉ Vapps.pushPhoneHistoryItemsByUrl (x, y, url, headers)
概要
```
- 指定したURLのAPIから電話履歴データを取得して追加します
```
INTERFACE
```
Vapps.pushPhoneHistoryItemsByUrl (x: VappsPhoneLowerX, y: VappsPhoneLowerY, url: string, headers: Record<string, string>): Promise<boolean>
```
#### ◉ Vapps.pushPhoneSpeedDialItems (x, y, items)
概要
```
- スピードダイヤルデータを追加します
```
INTERFACE
```
Vapps.pushPhoneSpeedDialItems (x: VappsPhoneLowerX, y: VappsPhoneLowerY, items: VappsPhoneSpeedDialItem[]): boolean
```
#### ◉ Vapps.pushPhoneSpeedDialItemsByUrl (x, y, url, headers)
概要
```
- 指定したURLのAPIからスピードダイヤルデータを取得して追加します
```
INTERFACE
```
Vapps.pushPhoneSpeedDialItemsByUrl (x: VappsPhoneLowerX, y: VappsPhoneLowerY, url: string, headers: Record<string, string>): Promise<boolean>
```
#### ◉ Vapps.pushPhoneBookItemsLocal (x, y, items)
概要
```
- ローカル電話帳データを追加します
```
INTERFACE
```
Vapps.pushPhoneBookItemsLocal (x: VappsPhoneLowerX, y: VappsPhoneLowerY, items: VappsPhoneBookItem[]): boolean
```
#### ◉ Vapps.pushPhoneBookItemsLocalByUrl (x, y, url, headers)
概要
```
- 指定したURLのAPIからローカル電話帳データを取得して追加します
```
INTERFACE
```
Vapps.pushPhoneBookItemsLocalByUrl (x: VappsPhoneLowerX, y: VappsPhoneLowerY, url: string, headers: Record<string, string>): Promise<boolean>
```
#### ◉ Vapps.pushPhoneHistoryItemsLocal (x, y, items)
概要
```
- ローカル電話履歴データを追加します
```
INTERFACE
```
Vapps.pushPhoneHistoryItemsLocal (x: VappsPhoneLowerX, y: VappsPhoneLowerY, items: VappsPhoneHistoryItem[]): boolean
```
#### ◉ Vapps.pushPhoneHistoryItemsLocalByUrl (x, y, url, headers)
概要
```
- 指定したURLのAPIからローカル電話履歴データを取得して追加します
```
INTERFACE
```
Vapps.pushPhoneHistoryItemsLocalByUrl (x: VappsPhoneLowerX, y: VappsPhoneLowerY, url: string, headers: Record<string, string>): Promise<boolean>
```
#### ◉ Vapps.pushPhoneSpeedDialItemsLocal (x, y, items)
概要
```
- ローカルスピードダイヤルデータを追加します
```
INTERFACE
```
Vapps.pushPhoneSpeedDialItemsLocal (x: VappsPhoneLowerX, y: VappsPhoneLowerY, items: VappsPhoneSpeedDialItem[]): boolean
```
#### ◉ Vapps.pushPhoneSpeedDialItemsLocalByUrl (x, y, url, headers)
概要
```
- 指定したURLのAPIからローカルスピードダイヤルデータを取得して追加します
```
INTERFACE
```
Vapps.pushPhoneSpeedDialItemsLocalByUrl (x: VappsPhoneLowerX, y: VappsPhoneLowerY, url: string, headers: Record<string, string>): Promise<boolean>
```
#### ◉ Vapps.updatePhoneBookItems (x, y, items)
概要
```
- 電話帳データを更新します
```
INTERFACE
```
Vapps.updatePhoneBookItems (x: VappsPhoneLowerX, y: VappsPhoneLowerY, items: VappsPhoneBookItem[]): boolean
```
#### ◉ Vapps.updatePhoneBookItemsByUrl (x, y, url, headers)
概要
```
- 指定したURLのAPIから電話帳データを取得して更新します
```
INTERFACE
```
Vapps.updatePhoneBookItemsByUrl (x: VappsPhoneLowerX, y: VappsPhoneLowerY, url: string, headers: Record<string, string>): Promise<boolean>
```
#### ◉ Vapps.updatePhoneSpeedDialItems (x, y, items)
概要
```
- スピードダイヤルデータを更新します
```
INTERFACE
```
Vapps.updatePhoneSpeedDialItems (x: VappsPhoneLowerX, y: VappsPhoneLowerY, items: VappsPhoneSpeedDialItem[]): boolean
```
#### ◉ Vapps.updatePhoneSpeedDialItemsByUrl (x, y, url, headers)
概要
```
- 指定したURLのAPIからスピードダイヤルデータを取得して更新します
```
INTERFACE
```
Vapps.updatePhoneSpeedDialItemsByUrl (x: VappsPhoneLowerX, y: VappsPhoneLowerY, url: string, headers: Record<string, string>): Promise<boolean>
```
#### ◉ Vapps.updatePhoneBookItemsLocal (x, y, items)
概要
```
- ローカル電話帳データを更新します
```
INTERFACE
```
Vapps.updatePhoneBookItemsLocal (x: VappsPhoneLowerX, y: VappsPhoneLowerY, items: VappsPhoneBookItem[]): boolean
```
#### ◉ Vapps.updatePhoneBookItemsLocalByUrl (x, y, url, headers)
概要
```
- 指定したURLのAPIからローカル電話帳データを取得して更新します
```
INTERFACE
```
Vapps.updatePhoneBookItemsLocalByUrl (x: VappsPhoneLowerX, y: VappsPhoneLowerY, url: string, headers: Record<string, string>): Promise<boolean>
```
#### ◉ Vapps.updatePhoneSpeedDialItemsLocal (x, y, items)
概要
```
- ローカルスピードダイヤルデータを更新します
```
INTERFACE
```
Vapps.updatePhoneSpeedDialItemsLocal (x: VappsPhoneLowerX, y: VappsPhoneLowerY, items: VappsPhoneSpeedDialItem[]): boolean
```
#### ◉ Vapps.updatePhoneSpeedDialItemsLocalByUrl (x, y, url, headers)
概要
```
- 指定したURLのAPIからローカルスピードダイヤルデータを取得して更新します
```
INTERFACE
```
Vapps.updatePhoneSpeedDialItemsLocalByUrl (x: VappsPhoneLowerX, y: VappsPhoneLowerY, url: string, headers: Record<string, string>): Promise<boolean>
```
#### ◉ Vapps.deletePhoneBookItems (x, y, itemIDs)
概要
```
- 電話帳データを削除します
```
INTERFACE
```
Vapps.deletePhoneBookItems (x: VappsPhoneLowerX, y: VappsPhoneLowerY, itemIDs: string[]): boolean
```
#### ◉ Vapps.deletePhoneBookItemsByUrl (x, y, url, headers)
概要
```
- 指定したURLのAPIから対象の電話帳データIDを取得して削除します
```
INTERFACE
```
Vapps.deletePhoneBookItemsByUrl (x: VappsPhoneLowerX, y: VappsPhoneLowerY, url: string, headers: Record<string, string>): Promise<boolean>
```
#### ◉ Vapps.deletePhoneHistoryItems (x, y, itemIDs)
概要
```
- 電話履歴データを削除します
```
INTERFACE
```
Vapps.deletePhoneHistoryItems (x: VappsPhoneLowerX, y: VappsPhoneLowerY, itemIDs: string[]): boolean
```
#### ◉ Vapps.deletePhoneHistoryItemsByUrl (x, y, url, headers)
概要
```
- 指定したURLのAPIから対象の電話履歴データIDを取得して削除します
```
INTERFACE
```
Vapps.deletePhoneHistoryItemsByUrl (x: VappsPhoneLowerX, y: VappsPhoneLowerY, url: string, headers: Record<string, string>): Promise<boolean>
```
#### ◉ Vapps.deletePhoneSpeedDialItems (x, y, itemIDs)
概要
```
- スピードダイヤルデータを削除します
```
INTERFACE
```
Vapps.deletePhoneSpeedDialItems (x: VappsPhoneLowerX, y: VappsPhoneLowerY, itemIDs: string[]): boolean
```
#### ◉ Vapps.deletePhoneSpeedDialItemsByUrl (x, y, url, headers)
概要
```
- 指定したURLのAPIから対象のスピードダイヤルデータIDを取得して削除します
```
INTERFACE
```
Vapps.deletePhoneSpeedDialItemsByUrl (x: VappsPhoneLowerX, y: VappsPhoneLowerY, url: string, headers: Record<string, string>): Promise<boolean>
```
#### ◉ Vapps.deletePhoneBookItemsLocal (x, y, itemIDs)
概要
```
- ローカル電話帳データを削除します
```
INTERFACE
```
Vapps.deletePhoneBookItemsLocal (x: VappsPhoneLowerX, y: VappsPhoneLowerY, itemIDs: string[]): boolean
```
#### ◉ Vapps.deletePhoneBookItemsLocalByUrl (x, y, url, headers)
概要
```
- 指定したURLのAPIから対象のローカル電話帳データIDを取得して削除します
```
INTERFACE
```
Vapps.deletePhoneBookItemsLocalByUrl (x: VappsPhoneLowerX, y: VappsPhoneLowerY, url: string, headers: Record<string, string>): Promise<boolean>
```
#### ◉ Vapps.deletePhoneHistoryItemsLocal (x, y, itemIDs)
概要
```
- ローカル電話履歴データを削除します
```
INTERFACE
```
Vapps.deletePhoneHistoryItemsLocal (x: VappsPhoneLowerX, y: VappsPhoneLowerY, itemIDs: string[]): boolean
```
#### ◉ Vapps.deletePhoneHistoryItemsLocalByUrl (x, y, url, headers)
概要
```
- 指定したURLのAPIから対象のローカル電話履歴データIDを取得して削除します
```
INTERFACE
```
Vapps.deletePhoneHistoryItemsLocalByUrl (x: VappsPhoneLowerX, y: VappsPhoneLowerY, url: string, headers: Record<string, string>): Promise<boolean>
```
#### ◉ Vapps.deletePhoneSpeedDialItemsLocal (x, y, itemIDs)
概要
```
- ローカルスピードダイヤルデータを削除します
```
INTERFACE
```
Vapps.deletePhoneSpeedDialItemsLocal (x: VappsPhoneLowerX, y: VappsPhoneLowerY, itemIDs: string[]): boolean
```
#### ◉ Vapps.deletePhoneSpeedDialItemsLocalByUrl (x, y, url, headers)
概要
```
- 指定したURLのAPIから対象のローカルスピードダイヤルデータIDを取得して削除します
```
INTERFACE
```
Vapps.deletePhoneSpeedDialItemsLocalByUrl (x: VappsPhoneLowerX, y: VappsPhoneLowerY, url: string, headers: Record<string, string>): Promise<boolean>
```
#### ◉ Vapps.openCallingMask (x, y, options)
概要
```
- 発信中や着信中、通話中等を示す画面を電話App内で開きます
```
INTERFACE
```
Vapps.openCallingMask (x: VappsPhoneLowerX, y: VappsPhoneLowerY, options?: VappsPhoneOpenCallingMaskOptions)
```
#### ◉ Vapps.closeCallingMask (x, y)
概要
```
- 発信中や着信中、通話中等を示す画面を電話App内で閉じます
```
INTERFACE
```
Vapps.closeCallingMask (x: VappsPhoneLowerX, y: VappsPhoneLowerY)
```

---

### ◼️ 電話操作
#### ◉ Vapps.register()
概要
```
- coming soon
```
INTERFACE
```
Vapps.register()
```
#### ◉ Vapps.unregister()
概要
```
- coming soon
```
INTERFACE
```
Vapps.unregister()
```
#### ◉ Vapps.call()
概要
```
- coming soon
```
INTERFACE
```
Vapps.call()
```
#### ◉ Vapps.hangup()
概要
```
- coming soon
```
INTERFACE
```
Vapps.hangup()
```
#### ◉ Vapps.accept()
概要
```
- coming soon
```
INTERFACE
```
Vapps.accept()
```
#### ◉ Vapps.hold()
概要
```
- coming soon
```
INTERFACE
```
Vapps.hold()
```
#### ◉ Vapps.unhold()
概要
```
- coming soon
```
INTERFACE
```
Vapps.unhold()
```
#### ◉ Vapps.mute()
概要
```
- coming soon
```
INTERFACE
```
Vapps.mute()
```
#### ◉ Vapps.unmute()
概要
```
- coming soon
```
INTERFACE
```
Vapps.unmute()
```
#### ◉ Vapps.transfer()
概要
```
- coming soon
```
INTERFACE
```
Vapps.transfer()
```
#### ◉ Vapps.cancelTransfer()
概要
```
- coming soon
```
INTERFACE
```
Vapps.cancelTransfer()
```
#### ◉ Vapps.park()
概要
```
- coming soon
```
INTERFACE
```
Vapps.park()
```
#### ◉ Vapps.parkup()
概要
```
- coming soon
```
INTERFACE
```
Vapps.parkup()
```
#### ◉ Vapps.listen()
概要
```
- coming soon
```
INTERFACE
```
Vapps.listen()
```
#### ◉ Vapps.whisper()
概要
```
- coming soon
```
INTERFACE
```
Vapps.whisper()
```
#### ◉ Vapps.barge()
概要
```
- coming soon
```
INTERFACE
```
Vapps.barge()
```
#### ◉ Vapps.dtmf()
概要
```
- coming soon
```
INTERFACE
```
Vapps.dtmf()
```

---

## VAPPS Phone Events
### ⚫︎ ON_CREATED
概要
```
```
使用例
```
```
### ⚫︎ ON_MOUNTED
概要
```
```
使用例
```
```
### ⚫︎ ON_OPEN
概要
```
```
使用例
```
```
### ⚫︎ ON_CLOSE
概要
```
```
使用例
```
```
### ⚫︎ ON_OPEN_SNACKBAR
概要
```
```
使用例
```
```
### ⚫︎ ON_CLOSE_SNACKBAR
概要
```
```
使用例
```
```
### ⚫︎ ON_LOCALE_CHANGE
概要
```
```
使用例
```
```
### ⚫︎ ON_TAB_CHANGE
概要
```
```
使用例
```
```
### ⚫︎ ON_INPUT_NUMBER_CHANGE
概要
```
```
使用例
```
```
### ⚫︎ ON_CALL
概要
```
```
使用例
```
```
### ⚫︎ ON_FILTER_BOOK
概要
```
```
使用例
```
```
### ⚫︎ ON_FILTER_HISTORY
概要
```
```
使用例
```
```
### ⚫︎ ON_FILTER_SPEED_DIAL
概要
```
```
使用例
```
```
### ⚫︎ ON_PUT_BOOK_ITEMS
概要
```
```
使用例
```
```
### ⚫︎ ON_PUT_BOOK_ITEMS_BY_URL
概要
```
```
使用例
```
```
### ⚫︎ ON_PUT_HISTORY_ITEMS
概要
```
```
使用例
```
```
### ⚫︎ ON_PUT_HISTORY_ITEMS_BY_URL
概要
```
```
使用例
```
```
### ⚫︎ ON_PUT_SPEED_DIAL_ITEMS
概要
```
```
使用例
```
```
### ⚫︎ ON_PUT_SPEED_DIAL_ITEMS_BY_URL
概要
```
```
使用例
```
```
### ⚫︎ ON_PUT_BOOK_ITEMS_LOCAL
概要
```
```
使用例
```
```
### ⚫︎ ON_PUT_BOOK_ITEMS_LOCAL_BY_URL
概要
```
```
使用例
```
```
### ⚫︎ ON_PUT_HISTORY_ITEMS_LOCAL
概要
```
```
使用例
```
```
### ⚫︎ ON_PUT_HISTORY_ITEMS_LOCAL_BY_URL
概要
```
```
使用例
```
```
### ⚫︎ ON_PUT_SPEED_DIAL_ITEMS_LOCAL
概要
```
```
使用例
```
```
### ⚫︎ ON_PUT_SPEED_DIAL_ITEMS_LOCAL_BY_URL
概要
```
```
使用例
```
```
### ⚫︎ ON_PUSH_BOOK_ITEMS
概要
```
```
使用例
```
```
### ⚫︎ ON_PUSH_BOOK_ITEMS_BY_URL
概要
```
```
使用例
```
```
### ⚫︎ ON_PUSH_HISTORY_ITEMS
概要
```
```
使用例
```
```
### ⚫︎ ON_PUSH_HISTORY_ITEMS_BY_URL
概要
```
```
使用例
```
```
### ⚫︎ ON_PUSH_SPEED_DIAL_ITEMS
概要
```
```
使用例
```
```
### ⚫︎ ON_PUSH_SPEED_DIAL_ITEMS_BY_URL
概要
```
```
使用例
```
```
### ⚫︎ ON_PUSH_BOOK_ITEMS_LOCAL
概要
```
```
使用例
```
```
### ⚫︎ ON_PUSH_BOOK_ITEMS_LOCAL_BY_URL
概要
```
```
使用例
```
```
### ⚫︎ ON_PUSH_HISTORY_ITEMS_LOCAL
概要
```
```
使用例
```
```
### ⚫︎ ON_PUSH_HISTORY_ITEMS_LOCAL_BY_URL
概要
```
```
使用例
```
```
### ⚫︎ ON_PUSH_SPEED_DIAL_ITEMS_LOCAL
概要
```
```
使用例
```
```
### ⚫︎ ON_PUSH_SPEED_DIAL_ITEMS_LOCAL_BY_URL
概要
```
```
使用例
```
```
### ⚫︎ ON_UPDATE_BOOK_ITEMS
概要
```
```
使用例
```
```
### ⚫︎ ON_UPDATE_BOOK_ITEMS_BY_URL
概要
```
```
使用例
```
```
### ⚫︎ ON_UPDATE_HISTORY_ITEMS
概要
```
```
使用例
```
```
### ⚫︎ ON_UPDATE_HISTORY_ITEMS_BY_URL
概要
```
```
使用例
```
```
### ⚫︎ ON_UPDATE_SPEED_DIAL_ITEMS
概要
```
```
使用例
```
```
### ⚫︎ ON_UPDATE_SPEED_DIAL_ITEMS_BY_URL
概要
```
```
使用例
```
```
### ⚫︎ ON_UPDATE_BOOK_ITEMS_LOCAL
概要
```
```
使用例
```
```
### ⚫︎ ON_UPDATE_BOOK_ITEMS_LOCAL_BY_URL
概要
```
```
使用例
```
```
### ⚫︎ ON_UPDATE_HISTORY_ITEMS_LOCAL
概要
```
```
使用例
```
```
### ⚫︎ ON_UPDATE_HISTORY_ITEMS_LOCAL_BY_URL
概要
```
```
使用例
```
```
### ⚫︎ ON_UPDATE_SPEED_DIAL_ITEMS_LOCAL
概要
```
```
使用例
```
```
### ⚫︎ ON_UPDATE_SPEED_DIAL_ITEMS_LOCAL_BY_URL
概要
```
```
使用例
```
```
### ⚫︎ ON_DELETE_BOOK_ITEMS
概要
```
```
使用例
```
```
### ⚫︎ ON_DELETE_BOOK_ITEMS_BY_URL
概要
```
```
使用例
```
```
### ⚫︎ ON_DELETE_HISTORY_ITEMS
概要
```
```
使用例
```
```
### ⚫︎ ON_DELETE_HISTORY_ITEMS_BY_URL
概要
```
```
使用例
```
```
### ⚫︎ ON_DELETE_SPEED_DIAL_ITEMS
概要
```
```
使用例
```
```
### ⚫︎ ON_DELETE_SPEED_DIAL_ITEMS_BY_URL
概要
```
```
使用例
```
```
### ⚫︎ ON_DELETE_BOOK_ITEMS_LOCAL
概要
```
```
使用例
```
```
### ⚫︎ ON_DELETE_BOOK_ITEMS_LOCAL_BY_URL
概要
```
```
使用例
```
```
### ⚫︎ ON_DELETE_HISTORY_ITEMS_LOCAL
概要
```
```
使用例
```
```
### ⚫︎ ON_DELETE_HISTORY_ITEMS_LOCAL_BY_URL
概要
```
```
使用例
```
```
### ⚫︎ ON_DELETE_SPEED_DIAL_ITEMS_LOCAL
概要
```
```
使用例
```
```
### ⚫︎ ON_DELETE_SPEED_DIAL_ITEMS_LOCAL_BY_URL
概要
```
```
使用例
```
```
### ⚫︎ ON_OPEN_CALLING_MASK
概要
```
```
使用例
```
```
### ⚫︎ ON_CLOSE_CALLING_MASK
概要
```
```
使用例
```
```
### ⚫︎ ON_PUT_CUSTOM_CALLING_MASK_HTML
概要
```
```
使用例
```
```
### ⚫︎ ON_CREATE_BOOK_ITEM
概要
```
```
使用例
```
```
### ⚫︎ ON_CREATE_SPEED_DIAL_ITEM
概要
```
```
使用例
```
```
### ⚫︎ ON_UPDATE_BOOK_ITEM
概要
```
```
使用例
```
```
### ⚫︎ ON_UPDATE_SPEED_DIAL_ITEM
概要
```
```
使用例
```
```
### ⚫︎ ON_DELETE_BOOK_ITEM
概要
```
```
使用例
```
```
### ⚫︎ ON_DELETE_HISTORY_ITEM
概要
```
```
使用例
```
```
### ⚫︎ ON_DELETE_SPEED_DIAL_ITEM
概要
```
```
使用例
```
```
### ⚫︎ ON_CLICK_BOOK_ITEM
概要
```
```
使用例
```
```
### ⚫︎ ON_CLICK_HISTORY_ITEM
概要
```
```
使用例
```
```
### ⚫︎ ON_CLICK_SPEED_DIAL_ITEM
概要
```
```
使用例
```
```
### ⚫︎ ON_RIGHT_CLICK_BOOK_ITEM
概要
```
```
使用例
```
```
### ⚫︎ ON_RIGHT_CLICK_HISTORY_ITEM
概要
```
```
使用例
```
```
### ⚫︎ ON_RIGHT_CLICK_SPEED_DIAL_ITEM
概要
```
```
使用例
```
```
### ⚫︎ ON_LONG_PRESS_BOOK_ITEM
概要
```
```
使用例
```
```
### ⚫︎ ON_LONG_PRESS_HISTORY_ITEM
概要
```
```
使用例
```
```
### ⚫︎ ON_LONG_PRESS_SPEED_DIAL_ITEM
概要
```
```
使用例
```
```
### ⚫︎ ON_CALL_BOOK_ITEM
概要
```
```
使用例
```
```
### ⚫︎ ON_CALL_HISTORY_ITEM
概要
```
```
使用例
```
```
### ⚫︎ ON_CALL_SPEED_DIAL_ITEM
概要
```
```
使用例
```
```
### ⚫︎ ON_LISTEN_BOOK_ITEM
概要
```
```
使用例
```
```
### ⚫︎ ON_LISTEN_SPEED_DIAL_ITEM
概要
```
```
使用例
```
```
### ⚫︎ ON_WHISPER_BOOK_ITEM
概要
```
```
使用例
```
```
### ⚫︎ ON_WHISPER_SPEED_DIAL_ITEM
概要
```
```
使用例
```
```
### ⚫︎ ON_BARGE_BOOK_ITEM
概要
```
```
使用例
```
```
### ⚫︎ ON_BARGE_SPEED_DIAL_ITEM
概要
```
```
使用例
```
```
### ⚫︎ ON_DETAIL_BOOK_ITEM
概要
```
```
使用例
```
```
### ⚫︎ ON_DETAIL_HISTORY_ITEM
概要
```
```
使用例
```
```
### ⚫︎ ON_DETAIL_SPEED_DIAL_ITEM
概要
```
```
使用例
```
```
### ⚫︎ ON_CANCEL
概要
```
```
使用例
```
```
### ⚫︎ ON_REJECT
概要
```
```
使用例
```
```
### ⚫︎ ON_ACCEPT
概要
```
```
使用例
```
```
### ⚫︎ ON_TURN_MIC_ON
概要
```
```
使用例
```
```
### ⚫︎ ON_TURN_MIC_OFF
概要
```
```
使用例
```
```
### ⚫︎ ON_CLICK_KEYPAD
概要
```
```
使用例
```
```
### ⚫︎ ON_TURN_SPEAKER_ON
概要
```
```
使用例
```
```
### ⚫︎ ON_TURN_SPEAKER_OFF
概要
```
```
使用例
```
```
### ⚫︎ ON_TURN_HOLD_ON
概要
```
```
使用例
```
```
### ⚫︎ ON_TURN_HOLD_OFF
概要
```
```
使用例
```
```
### ⚫︎ ON_HANGUP
概要
```
```
使用例
```
```
### ⚫︎ ON_CLICK_TRANSFER
概要
```
```
使用例
```
```