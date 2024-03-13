# AIChain VAPPS v1.1.0
NOTE: 下記にて使用されているデータ型については、**[コチラ](./VappsModel.ts)** をご参照・ご利用ください。

## VAPPS Phone 呼び出し関数
### ◼️ アプリ操作
#### ◉ Vapps.on (ename, callback)
**概要:**
```
- Vapps で発生する全ての Event に callback を設定します
```
**Interface:**
```
Vapps.on (ename: string, callback: (e: CustomEvent) => void)
```
#### ◉ Vapps.off (ename, callback)
**概要:**
```
- Vapps.on() にて設定した Event の callback を削除します
```
**Interface:**
```
Vapps.off (ename: string, callback: (e: CustomEvent) => void)
```
#### ◉ Vapps.phone (options)
**概要:**
```
- 画面上に電話Appを表示させます
- デフォルトの形は、フローティングアクションボタンです
```
**Interface:**
```
Vapps.phone (options: VappsPhoneOptions): string
```
#### ◉ Vapps.openPhone (x, y)
**概要:**
```
- 表示されている電話Appフローティングアクションボタンを開きます
```
**Interface:**
```
Vapps.openPhone (x: VappsPhoneLowerX, y: VappsPhoneLowerY)
```
#### ◉ Vapps.closePhone (x, y)
**概要:**
```
- 表示されている電話Appを閉じてフローティングアクションボタンに戻します
```
**Interface:**
```
Vapps.closePhone (x: VappsPhoneLowerX, y: VappsPhoneLowerY)
```
#### ◉ Vapps.openPhoneSnackbar (x, y, message, timeout?, icon?, line?)
**概要:**
```
- スナックバーとして任意のメッセージを開きます
```
**Interface:**
```
Vapps.openPhoneSnackbar (x: VappsPhoneLowerX, y: VappsPhoneLowerY, message: string, timeout?: number, icon?: string, line?: 1 | 2)
```
#### ◉ Vapps.closePhoneSnackbar (x, y)
**概要:**
```
- 開いているスナックバーを閉じます
```
**Interface:**
```
Vapps.closePhoneSnackbar (x: VappsPhoneLowerX, y: VappsPhoneLowerY)
```
#### ◉ Vapps.setPhoneLocale (x, y, locale)
**概要:**
```
- 使用する言語を設定します
```
**Interface:**
```
Vapps.setPhoneLocale(x: VappsPhoneLowerX, y: VappsPhoneLowerY, locale: VappsPhoneLocale)
```
#### ◉ Vapps.getPhoneLocale (x, y)
**概要:**
```
- 現在の言語名を取得します
```
**Interface:**
```
Vapps.getPhoneLocale (x: VappsPhoneLowerX, y: VappsPhoneLowerY): VappsPhoneLocale | string
```
#### ◉ Vapps.setPhoneTab (x, y, tab)
**概要:**
```
- 電話Appの特定のタブをアクティブにします
```
**Interface:**
```
Vapps.setPhoneTab (x: VappsPhoneLowerX, y: VappsPhoneLowerY, tab: VappsPhoneTabType)
```
#### ◉ Vapps.getPhoneTab (x, y)
**概要:**
```
- 現在アクティブになっているタブ名を取得します
```
**Interface:**
```
Vapps.getPhoneTab (x: VappsPhoneLowerX, y: VappsPhoneLowerY): string
```
#### ◉ Vapps.setTabMemoryActive (x, y, isTabMemoryActive)
**概要:**
```
- 最後にアクティブになっていたタブを記憶するかどうかを設定します
- 記憶する場合、次回起動時には最後にアクティブになっていたタブが自動的に開きます
```
**Interface:**
```
Vapps.setTabMemoryActive (x: VappsPhoneLowerX, y: VappsPhoneLowerY, isTabMemoryActive: boolean)
```
#### ◉ Vapps.getTabMemoryActive (x, y)
**概要:**
```
- 現在のタブ記憶設定を取得します
```
**Interface:**
```
Vapps.getTabMemoryActive (x: VappsPhoneLowerX, y: VappsPhoneLowerY): boolean
```
#### ◉ Vapps.setSaveBookInLocal (x, y, isSaveBookInLocal)
**概要:**
```
- ローカル電話帳を使用するか否かを設定します
```
**Interface:**
```
Vapps.setSaveBookInLocal (x: VappsPhoneLowerX, y: VappsPhoneLowerY, isSaveBookInLocal: boolean)
```
#### ◉ Vapps.getSaveBookInLocal (x, y)
**概要:**
```
- 現在のローカル電話帳使用有無設定を取得します
```
**Interface:**
```
Vapps.getSaveBookInLocal (x: VappsPhoneLowerX, y: VappsPhoneLowerY): boolean
```
#### ◉ Vapps.setSaveHistoryInLocal (x, y, isSaveHistoryInLocal)
**概要:**
```
- ローカル電話履歴を使用するか否かを設定します
```
**Interface:**
```
Vapps.setSaveHistoryInLocal (x: VappsPhoneLowerX, y: VappsPhoneLowerY, isSaveHistoryInLocal: boolean)
```
#### ◉ Vapps.getSaveHistoryInLocal (x, y)
**概要:**
```
- 現在のローカル電話履歴使用有無設定を取得します
```
**Interface:**
```
Vapps.getSaveHistoryInLocal (x: VappsPhoneLowerX, y: VappsPhoneLowerY): boolean
```
#### ◉ Vapps.setSaveSpeedDialInLocal (x, y, isSaveSpeedDialInLocal)
**概要:**
```
- ローカルスピードダイヤルを使用するか否かを設定します
```
**Interface:**
```
Vapps.setSaveSpeedDialInLocal (x: VappsPhoneLowerX, y: VappsPhoneLowerY, isSaveSpeedDialInLocal: boolean)
```
#### ◉ Vapps.getSaveSpeedDialInLocal (x, y)
**概要:**
```
- 現在のローカルスピードダイヤル使用有無設定を取得します
```
**Interface:**
```
Vapps.getSaveSpeedDialInLocal (x: VappsPhoneLowerX, y: VappsPhoneLowerY): boolean
```
#### ◉ Vapps.getPhoneI18nDictionary (x, y, asJsonStr, indent)
**概要:**
```
- 現在適用されている i18n 言語辞書 JSON を取得します
```
**Interface:**
```
Vapps.getPhoneI18nDictionary (x: VappsPhoneLowerX, y: VappsPhoneLowerY, asJsonStr?: boolean, indent?: boolean): string | VappsPhoneDictionary
```
#### ◉ Vapps.getPhoneBookItemSample ()
**概要:**
```
- 電話帳のデータ1件のサンプルを取得します
```
**Interface:**
```
Vapps.getPhoneBookItemSample (): VappsPhoneBookItem
```
#### ◉ Vapps.getPhoneHistoryItemSample ()
**概要:**
```
- 電話履歴のデータ1件のサンプルを取得します
```
**Interface:**
```
Vapps.getPhoneHistoryItemSample (): VappsPhoneHistoryItem
```
#### ◉ Vapps.getPhoneSpeedDialItemSample ()
**概要:**
```
- スピードダイヤルのデータ1件のサンプルを取得します
```
**Interface:**
```
Vapps.getPhoneSpeedDialItemSample (): VappsPhoneSpeedDialItem
```
#### ◉ Vapps.putPhoneBookItems (x, y, items)
**概要:**
```
- 電話帳データを設置します
- この関数を使用した場合、既存のデータを上書きすることに注意してください
```
**Interface:**
```
Vapps.putPhoneBookItems (x: VappsPhoneLowerX, y: VappsPhoneLowerY, items: VappsPhoneBookItem[]): boolean
```
#### ◉ Vapps.putPhoneBookItemsByUrl (x, y, url, headers)
**概要:**
```
- 指定したURLのAPIから電話帳データを取得して設置します
- この関数を使用した場合、既存のデータを上書きすることに注意してください
```
**Interface:**
```
Vapps.putPhoneBookItemsByUrl (x: VappsPhoneLowerX, y: VappsPhoneLowerY, url: string, headers: Record<string, string>): Promise<boolean>
```
#### ◉ Vapps.putPhoneHistoryItems (x, y, items)
**概要:**
```
- 電話履歴データを設置します
- この関数を使用した場合、既存のデータを上書きすることに注意してください
```
**Interface:**
```
Vapps.putPhoneHistoryItems (x: VappsPhoneLowerX, y: VappsPhoneLowerY, items: VappsPhoneHistoryItem[]): boolean
```
#### ◉ Vapps.putPhoneHistoryItemsByUrl (x, y, url, headers)
**概要:**
```
- 指定したURLのAPIから電話履歴データを取得して設置します
- この関数を使用した場合、既存のデータを上書きすることに注意してください
```
**Interface:**
```
Vapps.putPhoneHistoryItemsByUrl (x: VappsPhoneLowerX, y: VappsPhoneLowerY, url: string, headers: Record<string, string>): Promise<boolean>
```
#### ◉ Vapps.putPhoneSpeedDialItems (x, y, items)
**概要:**
```
- スピードダイヤルデータを設置します
- この関数を使用した場合、既存のデータを上書きすることに注意してください
```
**Interface:**
```
Vapps.putPhoneSpeedDialItems (x: VappsPhoneLowerX, y: VappsPhoneLowerY, items: VappsPhoneSpeedDialItem[]): boolean
```
#### ◉ Vapps.putPhoneSpeedDialItemsByUrl (x, y, url, headers)
**概要:**
```
- 指定したURLのAPIからスピードダイヤルデータを取得して設置します
- この関数を使用した場合、既存のデータを上書きすることに注意してください
```
**Interface:**
```
Vapps.putPhoneSpeedDialItemsByUrl (x: VappsPhoneLowerX, y: VappsPhoneLowerY, url: string, headers: Record<string, string>): Promise<boolean>
```
#### ◉ Vapps.putPhoneBookItemsLocal (x, y, items)
**概要:**
```
- ローカル電話帳データを設置します
- この関数を使用した場合、既存のローカルデータを上書きすることに注意してください
```
**Interface:**
```
Vapps.putPhoneBookItemsLocal (x: VappsPhoneLowerX, y: VappsPhoneLowerY, items: VappsPhoneBookItem[]): boolean
```
#### ◉ Vapps.putPhoneBookItemsLocalByUrl (x, y, url, headers)
**概要:**
```
- 指定したURLのAPIからローカル電話帳データを取得して設置します
- この関数を使用した場合、既存のローカルデータを上書きすることに注意してください
```
**Interface:**
```
Vapps.putPhoneBookItemsLocalByUrl (x: VappsPhoneLowerX, y: VappsPhoneLowerY, url: string, headers: Record<string, string>): Promise<boolean>
```
#### ◉ Vapps.putPhoneHistoryItemsLocal (x, y, items)
**概要:**
```
- ローカル電話履歴データを設置します
- この関数を使用した場合、既存のローカルデータを上書きすることに注意してください
```
**Interface:**
```
Vapps.putPhoneHistoryItemsLocal (x: VappsPhoneLowerX, y: VappsPhoneLowerY, items: VappsPhoneHistoryItem[]): boolean
```
#### ◉ Vapps.putPhoneHistoryItemsLocalByUrl (x, y, url, headers)
**概要:**
```
- 指定したURLのAPIからローカル電話履歴データを取得して設置します
- この関数を使用した場合、既存のローカルデータを上書きすることに注意してください
```
**Interface:**
```
Vapps.putPhoneHistoryItemsLocalByUrl (x: VappsPhoneLowerX, y: VappsPhoneLowerY, url: string, headers: Record<string, string>): Promise<boolean>
```
#### ◉ Vapps.putPhoneSpeedDialItemsLocal (x, y, items)
**概要:**
```
- ローカルスピードダイヤルデータを設置します
- この関数を使用した場合、既存のローカルデータを上書きすることに注意してください
```
**Interface:**
```
Vapps.putPhoneSpeedDialItemsLocal (x: VappsPhoneLowerX, y: VappsPhoneLowerY, items: VappsPhoneSpeedDialItem[]): boolean
```
#### ◉ Vapps.putPhoneSpeedDialItemsLocalByUrl (x, y, url, headers)
**概要:**
```
- 指定したURLのAPIからローカルスピードダイヤルデータを取得して設置します
- この関数を使用した場合、既存のローカルデータを上書きすることに注意してください
```
**Interface:**
```
Vapps.putPhoneSpeedDialItemsLocalByUrl (x: VappsPhoneLowerX, y: VappsPhoneLowerY, url: string, headers: Record<string, string>): Promise<boolean>
```
#### ◉ Vapps.pushPhoneBookItems (x, y, items)
**概要:**
```
- 電話帳データを追加します
```
**Interface:**
```
Vapps.pushPhoneBookItems (x: VappsPhoneLowerX, y: VappsPhoneLowerY, items: VappsPhoneBookItem[]): boolean
```
#### ◉ Vapps.pushPhoneBookItemsByUrl (x, y, url, headers)
**概要:**
```
- 指定したURLのAPIから電話帳データを取得して追加します
```
**Interface:**
```
Vapps.pushPhoneBookItemsByUrl (x: VappsPhoneLowerX, y: VappsPhoneLowerY, url: string, headers: Record<string, string>): Promise<boolean>
```
#### ◉ Vapps.pushPhoneHistoryItems (x, y, items)
**概要:**
```
- 電話履歴データを追加します
```
**Interface:**
```
Vapps.pushPhoneHistoryItems (x: VappsPhoneLowerX, y: VappsPhoneLowerY, items: VappsPhoneHistoryItem[]): boolean
```
#### ◉ Vapps.pushPhoneHistoryItemsByUrl (x, y, url, headers)
**概要:**
```
- 指定したURLのAPIから電話履歴データを取得して追加します
```
**Interface:**
```
Vapps.pushPhoneHistoryItemsByUrl (x: VappsPhoneLowerX, y: VappsPhoneLowerY, url: string, headers: Record<string, string>): Promise<boolean>
```
#### ◉ Vapps.pushPhoneSpeedDialItems (x, y, items)
**概要:**
```
- スピードダイヤルデータを追加します
```
**Interface:**
```
Vapps.pushPhoneSpeedDialItems (x: VappsPhoneLowerX, y: VappsPhoneLowerY, items: VappsPhoneSpeedDialItem[]): boolean
```
#### ◉ Vapps.pushPhoneSpeedDialItemsByUrl (x, y, url, headers)
**概要:**
```
- 指定したURLのAPIからスピードダイヤルデータを取得して追加します
```
**Interface:**
```
Vapps.pushPhoneSpeedDialItemsByUrl (x: VappsPhoneLowerX, y: VappsPhoneLowerY, url: string, headers: Record<string, string>): Promise<boolean>
```
#### ◉ Vapps.pushPhoneBookItemsLocal (x, y, items)
**概要:**
```
- ローカル電話帳データを追加します
```
**Interface:**
```
Vapps.pushPhoneBookItemsLocal (x: VappsPhoneLowerX, y: VappsPhoneLowerY, items: VappsPhoneBookItem[]): boolean
```
#### ◉ Vapps.pushPhoneBookItemsLocalByUrl (x, y, url, headers)
**概要:**
```
- 指定したURLのAPIからローカル電話帳データを取得して追加します
```
**Interface:**
```
Vapps.pushPhoneBookItemsLocalByUrl (x: VappsPhoneLowerX, y: VappsPhoneLowerY, url: string, headers: Record<string, string>): Promise<boolean>
```
#### ◉ Vapps.pushPhoneHistoryItemsLocal (x, y, items)
**概要:**
```
- ローカル電話履歴データを追加します
```
**Interface:**
```
Vapps.pushPhoneHistoryItemsLocal (x: VappsPhoneLowerX, y: VappsPhoneLowerY, items: VappsPhoneHistoryItem[]): boolean
```
#### ◉ Vapps.pushPhoneHistoryItemsLocalByUrl (x, y, url, headers)
**概要:**
```
- 指定したURLのAPIからローカル電話履歴データを取得して追加します
```
**Interface:**
```
Vapps.pushPhoneHistoryItemsLocalByUrl (x: VappsPhoneLowerX, y: VappsPhoneLowerY, url: string, headers: Record<string, string>): Promise<boolean>
```
#### ◉ Vapps.pushPhoneSpeedDialItemsLocal (x, y, items)
**概要:**
```
- ローカルスピードダイヤルデータを追加します
```
**Interface:**
```
Vapps.pushPhoneSpeedDialItemsLocal (x: VappsPhoneLowerX, y: VappsPhoneLowerY, items: VappsPhoneSpeedDialItem[]): boolean
```
#### ◉ Vapps.pushPhoneSpeedDialItemsLocalByUrl (x, y, url, headers)
**概要:**
```
- 指定したURLのAPIからローカルスピードダイヤルデータを取得して追加します
```
**Interface:**
```
Vapps.pushPhoneSpeedDialItemsLocalByUrl (x: VappsPhoneLowerX, y: VappsPhoneLowerY, url: string, headers: Record<string, string>): Promise<boolean>
```
#### ◉ Vapps.updatePhoneBookItems (x, y, items)
**概要:**
```
- 電話帳データを更新します
```
**Interface:**
```
Vapps.updatePhoneBookItems (x: VappsPhoneLowerX, y: VappsPhoneLowerY, items: VappsPhoneBookItem[]): boolean
```
#### ◉ Vapps.updatePhoneBookItemsByUrl (x, y, url, headers)
**概要:**
```
- 指定したURLのAPIから電話帳データを取得して更新します
```
**Interface:**
```
Vapps.updatePhoneBookItemsByUrl (x: VappsPhoneLowerX, y: VappsPhoneLowerY, url: string, headers: Record<string, string>): Promise<boolean>
```
#### ◉ Vapps.updatePhoneSpeedDialItems (x, y, items)
**概要:**
```
- スピードダイヤルデータを更新します
```
**Interface:**
```
Vapps.updatePhoneSpeedDialItems (x: VappsPhoneLowerX, y: VappsPhoneLowerY, items: VappsPhoneSpeedDialItem[]): boolean
```
#### ◉ Vapps.updatePhoneSpeedDialItemsByUrl (x, y, url, headers)
**概要:**
```
- 指定したURLのAPIからスピードダイヤルデータを取得して更新します
```
**Interface:**
```
Vapps.updatePhoneSpeedDialItemsByUrl (x: VappsPhoneLowerX, y: VappsPhoneLowerY, url: string, headers: Record<string, string>): Promise<boolean>
```
#### ◉ Vapps.updatePhoneBookItemsLocal (x, y, items)
**概要:**
```
- ローカル電話帳データを更新します
```
**Interface:**
```
Vapps.updatePhoneBookItemsLocal (x: VappsPhoneLowerX, y: VappsPhoneLowerY, items: VappsPhoneBookItem[]): boolean
```
#### ◉ Vapps.updatePhoneBookItemsLocalByUrl (x, y, url, headers)
**概要:**
```
- 指定したURLのAPIからローカル電話帳データを取得して更新します
```
**Interface:**
```
Vapps.updatePhoneBookItemsLocalByUrl (x: VappsPhoneLowerX, y: VappsPhoneLowerY, url: string, headers: Record<string, string>): Promise<boolean>
```
#### ◉ Vapps.updatePhoneSpeedDialItemsLocal (x, y, items)
**概要:**
```
- ローカルスピードダイヤルデータを更新します
```
**Interface:**
```
Vapps.updatePhoneSpeedDialItemsLocal (x: VappsPhoneLowerX, y: VappsPhoneLowerY, items: VappsPhoneSpeedDialItem[]): boolean
```
#### ◉ Vapps.updatePhoneSpeedDialItemsLocalByUrl (x, y, url, headers)
**概要:**
```
- 指定したURLのAPIからローカルスピードダイヤルデータを取得して更新します
```
**Interface:**
```
Vapps.updatePhoneSpeedDialItemsLocalByUrl (x: VappsPhoneLowerX, y: VappsPhoneLowerY, url: string, headers: Record<string, string>): Promise<boolean>
```
#### ◉ Vapps.deletePhoneBookItems (x, y, itemIDs)
**概要:**
```
- 電話帳データを削除します
```
**Interface:**
```
Vapps.deletePhoneBookItems (x: VappsPhoneLowerX, y: VappsPhoneLowerY, itemIDs: string[]): boolean
```
#### ◉ Vapps.deletePhoneBookItemsByUrl (x, y, url, headers)
**概要:**
```
- 指定したURLのAPIから対象の電話帳データIDを取得して削除します
```
**Interface:**
```
Vapps.deletePhoneBookItemsByUrl (x: VappsPhoneLowerX, y: VappsPhoneLowerY, url: string, headers: Record<string, string>): Promise<boolean>
```
#### ◉ Vapps.deletePhoneHistoryItems (x, y, itemIDs)
**概要:**
```
- 電話履歴データを削除します
```
**Interface:**
```
Vapps.deletePhoneHistoryItems (x: VappsPhoneLowerX, y: VappsPhoneLowerY, itemIDs: string[]): boolean
```
#### ◉ Vapps.deletePhoneHistoryItemsByUrl (x, y, url, headers)
**概要:**
```
- 指定したURLのAPIから対象の電話履歴データIDを取得して削除します
```
**Interface:**
```
Vapps.deletePhoneHistoryItemsByUrl (x: VappsPhoneLowerX, y: VappsPhoneLowerY, url: string, headers: Record<string, string>): Promise<boolean>
```
#### ◉ Vapps.deletePhoneSpeedDialItems (x, y, itemIDs)
**概要:**
```
- スピードダイヤルデータを削除します
```
**Interface:**
```
Vapps.deletePhoneSpeedDialItems (x: VappsPhoneLowerX, y: VappsPhoneLowerY, itemIDs: string[]): boolean
```
#### ◉ Vapps.deletePhoneSpeedDialItemsByUrl (x, y, url, headers)
**概要:**
```
- 指定したURLのAPIから対象のスピードダイヤルデータIDを取得して削除します
```
**Interface:**
```
Vapps.deletePhoneSpeedDialItemsByUrl (x: VappsPhoneLowerX, y: VappsPhoneLowerY, url: string, headers: Record<string, string>): Promise<boolean>
```
#### ◉ Vapps.deletePhoneBookItemsLocal (x, y, itemIDs)
**概要:**
```
- ローカル電話帳データを削除します
```
**Interface:**
```
Vapps.deletePhoneBookItemsLocal (x: VappsPhoneLowerX, y: VappsPhoneLowerY, itemIDs: string[]): boolean
```
#### ◉ Vapps.deletePhoneBookItemsLocalByUrl (x, y, url, headers)
**概要:**
```
- 指定したURLのAPIから対象のローカル電話帳データIDを取得して削除します
```
**Interface:**
```
Vapps.deletePhoneBookItemsLocalByUrl (x: VappsPhoneLowerX, y: VappsPhoneLowerY, url: string, headers: Record<string, string>): Promise<boolean>
```
#### ◉ Vapps.deletePhoneHistoryItemsLocal (x, y, itemIDs)
**概要:**
```
- ローカル電話履歴データを削除します
```
**Interface:**
```
Vapps.deletePhoneHistoryItemsLocal (x: VappsPhoneLowerX, y: VappsPhoneLowerY, itemIDs: string[]): boolean
```
#### ◉ Vapps.deletePhoneHistoryItemsLocalByUrl (x, y, url, headers)
**概要:**
```
- 指定したURLのAPIから対象のローカル電話履歴データIDを取得して削除します
```
**Interface:**
```
Vapps.deletePhoneHistoryItemsLocalByUrl (x: VappsPhoneLowerX, y: VappsPhoneLowerY, url: string, headers: Record<string, string>): Promise<boolean>
```
#### ◉ Vapps.deletePhoneSpeedDialItemsLocal (x, y, itemIDs)
**概要:**
```
- ローカルスピードダイヤルデータを削除します
```
**Interface:**
```
Vapps.deletePhoneSpeedDialItemsLocal (x: VappsPhoneLowerX, y: VappsPhoneLowerY, itemIDs: string[]): boolean
```
#### ◉ Vapps.deletePhoneSpeedDialItemsLocalByUrl (x, y, url, headers)
**概要:**
```
- 指定したURLのAPIから対象のローカルスピードダイヤルデータIDを取得して削除します
```
**Interface:**
```
Vapps.deletePhoneSpeedDialItemsLocalByUrl (x: VappsPhoneLowerX, y: VappsPhoneLowerY, url: string, headers: Record<string, string>): Promise<boolean>
```
#### ◉ Vapps.openCallingMask (x, y, options)
**概要:**
```
- 発信中や着信中、通話中等を示す画面を電話App内で開きます
```
**Interface:**
```
Vapps.openCallingMask (x: VappsPhoneLowerX, y: VappsPhoneLowerY, options?: VappsPhoneOpenCallingMaskOptions)
```
#### ◉ Vapps.closeCallingMask (x, y)
**概要:**
```
- 発信中や着信中、通話中等を示す画面を電話App内で閉じます
```
**Interface:**
```
Vapps.closeCallingMask (x: VappsPhoneLowerX, y: VappsPhoneLowerY)
```

---

### ◼️ 電話操作
#### ◉ Vapps.register()
**概要:**
```
- coming soon
```
**Interface:**
```
Vapps.register()
```
#### ◉ Vapps.unregister()
**概要:**
```
- coming soon
```
**Interface:**
```
Vapps.unregister()
```
#### ◉ Vapps.call()
**概要:**
```
- coming soon
```
**Interface:**
```
Vapps.call()
```
#### ◉ Vapps.hangup()
**概要:**
```
- coming soon
```
**Interface:**
```
Vapps.hangup()
```
#### ◉ Vapps.accept()
**概要:**
```
- coming soon
```
**Interface:**
```
Vapps.accept()
```
#### ◉ Vapps.hold()
**概要:**
```
- coming soon
```
**Interface:**
```
Vapps.hold()
```
#### ◉ Vapps.unhold()
**概要:**
```
- coming soon
```
**Interface:**
```
Vapps.unhold()
```
#### ◉ Vapps.mute()
**概要:**
```
- coming soon
```
**Interface:**
```
Vapps.mute()
```
#### ◉ Vapps.unmute()
**概要:**
```
- coming soon
```
**Interface:**
```
Vapps.unmute()
```
#### ◉ Vapps.transfer()
**概要:**
```
- coming soon
```
**Interface:**
```
Vapps.transfer()
```
#### ◉ Vapps.cancelTransfer()
**概要:**
```
- coming soon
```
**Interface:**
```
Vapps.cancelTransfer()
```
#### ◉ Vapps.park()
**概要:**
```
- coming soon
```
**Interface:**
```
Vapps.park()
```
#### ◉ Vapps.parkup()
**概要:**
```
- coming soon
```
**Interface:**
```
Vapps.parkup()
```
#### ◉ Vapps.listen()
**概要:**
```
- coming soon
```
**Interface:**
```
Vapps.listen()
```
#### ◉ Vapps.whisper()
**概要:**
```
- coming soon
```
**Interface:**
```
Vapps.whisper()
```
#### ◉ Vapps.barge()
**概要:**
```
- coming soon
```
**Interface:**
```
Vapps.barge()
```
#### ◉ Vapps.dtmf()
**概要:**
```
- coming soon
```
**Interface:**
```
Vapps.dtmf()
```

---

## VAPPS Phone Events
### ⚫︎ ON_CREATED
**概要:**
```
- 電話Appのインスタンスが生成された時に発火します
```
**使用例:**
```
```
### ⚫︎ ON_MOUNTED
**概要:**
```
- 電話Appがマウントされた時に発火します
```
**使用例:**
```
```
### ⚫︎ ON_OPEN
**概要:**
```
- 電話Appが開いた時に発火します
```
**使用例:**
```
```
### ⚫︎ ON_CLOSE
**概要:**
```
- 電話Appが閉じた時に発火します
```
**使用例:**
```
```
### ⚫︎ ON_OPEN_SNACKBAR
**概要:**
```
- スナックバーが開いた時に発火します
```
**使用例:**
```
```
### ⚫︎ ON_CLOSE_SNACKBAR
**概要:**
```
- スナックバーが閉じた時に発火します
```
**使用例:**
```
```
### ⚫︎ ON_LOCALE_CHANGE
**概要:**
```
- 言語設定が変更された時に発火します
```
**使用例:**
```
```
### ⚫︎ ON_TAB_CHANGE
**概要:**
```
- タブが切り替わった時に発火します
```
**使用例:**
```
```
### ⚫︎ ON_INPUT_NUMBER_CHANGE
**概要:**
```
- 電話タブにて番号が入力された時に発火します
```
**使用例:**
```
```
### ⚫︎ ON_CALL
**概要:**
```
- 電話をかけた時に発火します
```
**使用例:**
```
```
### ⚫︎ ON_FILTER_BOOK
**概要:**
```
- 電話帳の検索等、絞り込みが行われた時に発火します
```
**使用例:**
```
```
### ⚫︎ ON_FILTER_HISTORY
**概要:**
```
- 電話履歴の検索等、絞り込みが行われた時に発火します
```
**使用例:**
```
```
### ⚫︎ ON_FILTER_SPEED_DIAL
**概要:**
```
- スピードダイヤルの検索等、絞り込みが行われた時に発火します
```
**使用例:**
```
```
### ⚫︎ ON_PUT_BOOK_ITEMS
**概要:**
```
- 電話帳データの設置が行われた時に発火します
```
**使用例:**
```
```
### ⚫︎ ON_PUT_BOOK_ITEMS_BY_URL
**概要:**
```
- APIへの問い合わせを利用した電話帳データの設置が行われた時に発火します
```
**使用例:**
```
```
### ⚫︎ ON_PUT_HISTORY_ITEMS
**概要:**
```
- 電話履歴データの設置が行われた時に発火します
```
**使用例:**
```
```
### ⚫︎ ON_PUT_HISTORY_ITEMS_BY_URL
**概要:**
```
- APIへの問い合わせを利用した電話履歴データの設置が行われた時に発火します
```
**使用例:**
```
```
### ⚫︎ ON_PUT_SPEED_DIAL_ITEMS
**概要:**
```
- スピードダイヤルデータの設置が行われた時に発火します
```
**使用例:**
```
```
### ⚫︎ ON_PUT_SPEED_DIAL_ITEMS_BY_URL
**概要:**
```
- APIへの問い合わせを利用したスピードダイヤルデータの設置が行われた時に発火します
```
**使用例:**
```
```
### ⚫︎ ON_PUT_BOOK_ITEMS_LOCAL
**概要:**
```
- ローカル電話帳データの設置が行われた時に発火します
```
**使用例:**
```
```
### ⚫︎ ON_PUT_BOOK_ITEMS_LOCAL_BY_URL
**概要:**
```
- APIへの問い合わせを利用したローカル電話帳データの設置が行われた時に発火します
```
**使用例:**
```
```
### ⚫︎ ON_PUT_HISTORY_ITEMS_LOCAL
**概要:**
```
- ローカル電話履歴データの設置が行われた時に発火します
```
**使用例:**
```
```
### ⚫︎ ON_PUT_HISTORY_ITEMS_LOCAL_BY_URL
**概要:**
```
- APIへの問い合わせを利用したローカル電話履歴データの設置が行われた時に発火します
```
**使用例:**
```
```
### ⚫︎ ON_PUT_SPEED_DIAL_ITEMS_LOCAL
**概要:**
```
- ローカルスピードダイヤルデータの設置が行われた時に発火します
```
**使用例:**
```
```
### ⚫︎ ON_PUT_SPEED_DIAL_ITEMS_LOCAL_BY_URL
**概要:**
```
- APIへの問い合わせを利用したローカルスピードダイヤルデータの設置が行われた時に発火します
```
**使用例:**
```
```
### ⚫︎ ON_PUSH_BOOK_ITEMS
**概要:**
```
- 電話帳データの追加が行われた時に発火します
```
**使用例:**
```
```
### ⚫︎ ON_PUSH_BOOK_ITEMS_BY_URL
**概要:**
```
- APIへの問い合わせを利用した電話帳データの追加が行われた時に発火します
```
**使用例:**
```
```
### ⚫︎ ON_PUSH_HISTORY_ITEMS
**概要:**
```
- 電話履歴データの追加が行われた時に発火します
```
**使用例:**
```
```
### ⚫︎ ON_PUSH_HISTORY_ITEMS_BY_URL
**概要:**
```
- APIへの問い合わせを利用した電話履歴データの追加が行われた時に発火します
```
**使用例:**
```
```
### ⚫︎ ON_PUSH_SPEED_DIAL_ITEMS
**概要:**
```
- スピードダイヤルデータの追加が行われた時に発火します
```
**使用例:**
```
```
### ⚫︎ ON_PUSH_SPEED_DIAL_ITEMS_BY_URL
**概要:**
```
- APIへの問い合わせを利用したスピードダイヤルデータの追加が行われた時に発火します
```
**使用例:**
```
```
### ⚫︎ ON_PUSH_BOOK_ITEMS_LOCAL
**概要:**
```
- ローカル電話帳データの追加が行われた時に発火します
```
**使用例:**
```
```
### ⚫︎ ON_PUSH_BOOK_ITEMS_LOCAL_BY_URL
**概要:**
```
- APIへの問い合わせを利用したローカル電話帳データの追加が行われた時に発火します
```
**使用例:**
```
```
### ⚫︎ ON_PUSH_HISTORY_ITEMS_LOCAL
**概要:**
```
- ローカル電話履歴データの追加が行われた時に発火します
```
**使用例:**
```
```
### ⚫︎ ON_PUSH_HISTORY_ITEMS_LOCAL_BY_URL
**概要:**
```
- APIへの問い合わせを利用したローカル電話履歴データの追加が行われた時に発火します
```
**使用例:**
```
```
### ⚫︎ ON_PUSH_SPEED_DIAL_ITEMS_LOCAL
**概要:**
```
- ローカルスピードダイヤルデータの追加が行われた時に発火します
```
**使用例:**
```
```
### ⚫︎ ON_PUSH_SPEED_DIAL_ITEMS_LOCAL_BY_URL
**概要:**
```
- APIへの問い合わせを利用したローカルスピードダイヤルデータの追加が行われた時に発火します
```
**使用例:**
```
```
### ⚫︎ ON_UPDATE_BOOK_ITEMS
**概要:**
```
- 電話帳データの更新が行われた時に発火します
```
**使用例:**
```
```
### ⚫︎ ON_UPDATE_BOOK_ITEMS_BY_URL
**概要:**
```
- APIへの問い合わせを利用した電話帳データの追加が行われた時に発火します
```
**使用例:**
```
```
### ⚫︎ ON_UPDATE_SPEED_DIAL_ITEMS
**概要:**
```
- スピードダイヤルデータの更新が行われた時に発火します
```
**使用例:**
```
```
### ⚫︎ ON_UPDATE_SPEED_DIAL_ITEMS_BY_URL
**概要:**
```
- APIへの問い合わせを利用したスピードダイヤルデータの追加が行われた時に発火します
```
**使用例:**
```
```
### ⚫︎ ON_UPDATE_BOOK_ITEMS_LOCAL
**概要:**
```
- ローカル電話帳データの更新が行われた時に発火します
```
**使用例:**
```
```
### ⚫︎ ON_UPDATE_BOOK_ITEMS_LOCAL_BY_URL
**概要:**
```
- APIへの問い合わせを利用したローカル電話帳データの追加が行われた時に発火します
```
**使用例:**
```
```
### ⚫︎ ON_UPDATE_SPEED_DIAL_ITEMS_LOCAL
**概要:**
```
- ローカルスピードダイヤルデータの更新が行われた時に発火します
```
**使用例:**
```
```
### ⚫︎ ON_UPDATE_SPEED_DIAL_ITEMS_LOCAL_BY_URL
**概要:**
```
- APIへの問い合わせを利用したローカルスピードダイヤルデータの追加が行われた時に発火します
```
**使用例:**
```
```
### ⚫︎ ON_DELETE_BOOK_ITEMS
**概要:**
```
- 電話帳データの削除が行われた時に発火します
```
**使用例:**
```
```
### ⚫︎ ON_DELETE_BOOK_ITEMS_BY_URL
**概要:**
```
- APIへの問い合わせを利用した電話帳データの削除が行われた時に発火します
```
**使用例:**
```
```
### ⚫︎ ON_DELETE_HISTORY_ITEMS
**概要:**
```
- 電話履歴データの削除が行われた時に発火します
```
**使用例:**
```
```
### ⚫︎ ON_DELETE_HISTORY_ITEMS_BY_URL
**概要:**
```
- APIへの問い合わせを利用した電話履歴データの削除が行われた時に発火します
```
**使用例:**
```
```
### ⚫︎ ON_DELETE_SPEED_DIAL_ITEMS
**概要:**
```
- スピードダイヤルデータの削除が行われた時に発火します
```
**使用例:**
```
```
### ⚫︎ ON_DELETE_SPEED_DIAL_ITEMS_BY_URL
**概要:**
```
- APIへの問い合わせを利用したスピードダイヤルデータの削除が行われた時に発火します
```
**使用例:**
```
```
### ⚫︎ ON_DELETE_BOOK_ITEMS_LOCAL
**概要:**
```
- ローカル電話帳データの削除が行われた時に発火します
```
**使用例:**
```
```
### ⚫︎ ON_DELETE_BOOK_ITEMS_LOCAL_BY_URL
**概要:**
```
- APIへの問い合わせを利用したローカル電話帳データの削除が行われた時に発火します
```
**使用例:**
```
```
### ⚫︎ ON_DELETE_HISTORY_ITEMS_LOCAL
**概要:**
```
- ローカル電話履歴データの削除が行われた時に発火します
```
**使用例:**
```
```
### ⚫︎ ON_DELETE_HISTORY_ITEMS_LOCAL_BY_URL
**概要:**
```
- APIへの問い合わせを利用したローカル電話履歴データの削除が行われた時に発火します
```
**使用例:**
```
```
### ⚫︎ ON_DELETE_SPEED_DIAL_ITEMS_LOCAL
**概要:**
```
- ローカルスピードダイヤルデータの削除が行われた時に発火します
```
**使用例:**
```
```
### ⚫︎ ON_DELETE_SPEED_DIAL_ITEMS_LOCAL_BY_URL
**概要:**
```
- APIへの問い合わせを利用したローカルスピードダイヤルデータの削除が行われた時に発火します
```
**使用例:**
```
```
### ⚫︎ ON_OPEN_CALLING_MASK
**概要:**
```
- 発信中や着信中、通話中等を示す画面が開いた時に発火します
```
**使用例:**
```
```
### ⚫︎ ON_CLOSE_CALLING_MASK
**概要:**
```
- 発信中や着信中、通話中等を示す画面が閉じた時に発火します
```
**使用例:**
```
```
### ⚫︎ ON_PUT_CUSTOM_CALLING_MASK_HTML
**概要:**
```
- 発信中や着信中、通話中等を示す画面のカスタムモードに任意のHTMLを挿入した時に発火します
```
**使用例:**
```
```
### ⚫︎ ON_CREATE_BOOK_ITEM
**概要:**
```
- UI上から電話帳データを作成した時に発火します
```
**使用例:**
```
```
### ⚫︎ ON_CREATE_SPEED_DIAL_ITEM
**概要:**
```
- UI上からスピードダイヤルデータを作成した時に発火します
```
**使用例:**
```
```
### ⚫︎ ON_UPDATE_BOOK_ITEM
**概要:**
```
- UI上から電話帳データを更新した時に発火します
```
**使用例:**
```
```
### ⚫︎ ON_UPDATE_SPEED_DIAL_ITEM
**概要:**
```
- UI上からスピードダイヤルデータを更新した時に発火します
```
**使用例:**
```
```
### ⚫︎ ON_DELETE_BOOK_ITEM
**概要:**
```
- UI上から電話帳データを削除した時に発火します
```
**使用例:**
```
```
### ⚫︎ ON_DELETE_HISTORY_ITEM
**概要:**
```
- UI上から電話履歴データを削除した時に発火します
```
**使用例:**
```
```
### ⚫︎ ON_DELETE_SPEED_DIAL_ITEM
**概要:**
```
- UI上からスピードダイヤルデータを削除した時に発火します
```
**使用例:**
```
```
### ⚫︎ ON_CLICK_BOOK_ITEM
**概要:**
```
- UI上から電話帳データをクリックした時に発火します
```
**使用例:**
```
```
### ⚫︎ ON_CLICK_HISTORY_ITEM
**概要:**
```
- UI上から電話履歴データをクリックした時に発火します
```
**使用例:**
```
```
### ⚫︎ ON_CLICK_SPEED_DIAL_ITEM
**概要:**
```
- UI上からスピードダイヤルデータをクリックした時に発火します
```
**使用例:**
```
```
### ⚫︎ ON_RIGHT_CLICK_BOOK_ITEM
**概要:**
```
- UI上から電話帳データを右クリックした時に発火します
```
**使用例:**
```
```
### ⚫︎ ON_RIGHT_CLICK_HISTORY_ITEM
**概要:**
```
- UI上から電話履歴データを右クリックした時に発火します
```
**使用例:**
```
```
### ⚫︎ ON_RIGHT_CLICK_SPEED_DIAL_ITEM
**概要:**
```
- UI上からスピードダイヤルデータを右クリックした時に発火します
```
**使用例:**
```
```
### ⚫︎ ON_LONG_PRESS_BOOK_ITEM
**概要:**
```
- UI上から電話帳データを長押しした時に発火します
```
**使用例:**
```
```
### ⚫︎ ON_LONG_PRESS_HISTORY_ITEM
**概要:**
```
- UI上から電話履歴データを長押しした時に発火します
```
**使用例:**
```
```
### ⚫︎ ON_LONG_PRESS_SPEED_DIAL_ITEM
**概要:**
```
- UI上からスピードダイヤルデータを長押しした時に発火します
```
**使用例:**
```
```
### ⚫︎ ON_CALL_BOOK_ITEM
**概要:**
```
- UI上で電話帳データから発信をした時に発火します
```
**使用例:**
```
```
### ⚫︎ ON_CALL_HISTORY_ITEM
**概要:**
```
- UI上で電話履歴データから発信をした時に発火します
```
**使用例:**
```
```
### ⚫︎ ON_CALL_SPEED_DIAL_ITEM
**概要:**
```
- UI上でスピードダイヤルデータから発信をした時に発火します
```
**使用例:**
```
```
### ⚫︎ ON_LISTEN_BOOK_ITEM
**概要:**
```
- UI上で電話帳データから「聞くだけモニタリング」をした時に発火します
```
**使用例:**
```
```
### ⚫︎ ON_LISTEN_SPEED_DIAL_ITEM
**概要:**
```
- UI上でスピードダイヤルデータから「聞くだけモニタリング」をした時に発火します
```
**使用例:**
```
```
### ⚫︎ ON_WHISPER_BOOK_ITEM
**概要:**
```
- UI上で電話帳データから「ささやきモニタリング」をした時に発火します
```
**使用例:**
```
```
### ⚫︎ ON_WHISPER_SPEED_DIAL_ITEM
**概要:**
```
- UI上でスピードダイヤルデータから「ささやきモニタリング」をした時に発火します
```
**使用例:**
```
```
### ⚫︎ ON_BARGE_BOOK_ITEM
**概要:**
```
- UI上で電話帳データから「三者通話モニタリング」をした時に発火します
```
**使用例:**
```
```
### ⚫︎ ON_BARGE_SPEED_DIAL_ITEM
**概要:**
```
- UI上でスピードダイヤルデータから「三者通話モニタリング」をした時に発火します
```
**使用例:**
```
```
### ⚫︎ ON_DETAIL_BOOK_ITEM
**概要:**
```
- UI上で電話帳データから詳細を開いた時に発火します
```
**使用例:**
```
```
### ⚫︎ ON_DETAIL_HISTORY_ITEM
**概要:**
```
- UI上で電話履歴データから詳細を開いた時に発火します
```
**使用例:**
```
```
### ⚫︎ ON_DETAIL_SPEED_DIAL_ITEM
**概要:**
```
- UI上でスピードダイヤルデータから詳細を開いた時に発火します
```
**使用例:**
```
```
### ⚫︎ ON_CANCEL
**概要:**
```
- 発信のキャンセルを行った時に発火します
```
**使用例:**
```
```
### ⚫︎ ON_REJECT
**概要:**
```
- 着信に対して拒否を行った時に発火します
```
**使用例:**
```
```
### ⚫︎ ON_ACCEPT
**概要:**
```
- 着信に対して応答を行った時に発火します
```
**使用例:**
```
```
### ⚫︎ ON_TURN_MIC_ON
**概要:**
```
- 通話中にマイクをオンに変えた時に発火します
```
**使用例:**
```
```
### ⚫︎ ON_TURN_MIC_OFF
**概要:**
```
- 通話中にマイクをオフに変えた時に発火します
```
**使用例:**
```
```
### ⚫︎ ON_CLICK_KEYPAD
**概要:**
```
- 通話中にキーバッドボタンをクリックした時に発火します
```
**使用例:**
```
```
### ⚫︎ ON_TURN_SPEAKER_ON
**概要:**
```
- 通話中にスピーカーをオンに変えた時に発火します
```
**使用例:**
```
```
### ⚫︎ ON_TURN_SPEAKER_OFF
**概要:**
```
- 通話中にスピーカーをオフに変えた時に発火します
```
**使用例:**
```
```
### ⚫︎ ON_TURN_HOLD_ON
**概要:**
```
- 通話中に保留をオンに変えた時に発火します
```
**使用例:**
```
```
### ⚫︎ ON_TURN_HOLD_OFF
**概要:**
```
- 通話中に保留をオフに変えた時に発火します
```
**使用例:**
```
```
### ⚫︎ ON_HANGUP
**概要:**
```
- 通話中に切電をした時に発火します
```
**使用例:**
```
```
### ⚫︎ ON_CLICK_TRANSFER
**概要:**
```
- 通話中に転送ボタンをクリックした時に発火します
```
**使用例:**
```
```