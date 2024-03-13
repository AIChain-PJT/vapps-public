# AIChain VAPPS v1.1.0
## VAPPS Phone 呼び出し関数
### ◼️ アプリ操作
#### ◉ <u>Vapps.on (ename, callback)</u>
**概要:**
```
- Vapps で発生する全ての Event に callback を設定します
```
**Interface:**
```
Vapps.on (ename: string, callback: (e: CustomEvent) => void)
```
#### ◉ <u>Vapps.off (ename, callback)</u>
**概要:**
```
- Vapps.on() にて設定した Event の callback を削除します
```
**Interface:**
```
Vapps.off (ename: string, callback: (e: CustomEvent) => void)
```
#### ◉ <u>Vapps.phone (options)</u>
**概要:**
```
- 画面上に電話Appを表示させます
- デフォルトの形は、フローティングアクションボタンです
```
**Interface:**
```
Vapps.phone (options: VappsPhoneOptions): string
```
#### ◉ <u>Vapps.openPhone (x, y)</u>
**概要:**
```
- 表示されている電話Appフローティングアクションボタンを開きます
```
**Interface:**
```
Vapps.openPhone (x: VappsPhoneLowerX, y: VappsPhoneLowerY)
```
#### ◉ <u>Vapps.closePhone (x, y)</u>
**概要:**
```
- 表示されている電話Appを閉じてフローティングアクションボタンに戻します
```
**Interface:**
```
Vapps.closePhone (x: VappsPhoneLowerX, y: VappsPhoneLowerY)
```
#### ◉ <u>Vapps.openPhoneSnackbar (x, y, message, timeout?, icon?, line?)</u>
**概要:**
```
- スナックバーとして任意のメッセージを開きます
```
**Interface:**
```
Vapps.openPhoneSnackbar (x: VappsPhoneLowerX, y: VappsPhoneLowerY, message: string, timeout?: number, icon?: string, line?: 1 | 2)
```
#### ◉ <u>Vapps.closePhoneSnackbar (x, y)</u>
**概要:**
```
- 開いているスナックバーを閉じます
```
**Interface:**
```
Vapps.closePhoneSnackbar (x: VappsPhoneLowerX, y: VappsPhoneLowerY)
```
#### ◉ <u>Vapps.setPhoneLocale (x, y, locale)</u>
**概要:**
```
- 使用する言語を設定します
```
**Interface:**
```
Vapps.setPhoneLocale(x: VappsPhoneLowerX, y: VappsPhoneLowerY, locale: VappsPhoneLocale)
```
#### ◉ <u>Vapps.getPhoneLocale (x, y)</u>
**概要:**
```
- 現在の言語名を取得します
```
**Interface:**
```
Vapps.getPhoneLocale (x: VappsPhoneLowerX, y: VappsPhoneLowerY): VappsPhoneLocale | string
```
#### ◉ <u>Vapps.setPhoneTab (x, y, tab)</u>
**概要:**
```
- 電話Appの特定のタブをアクティブにします
```
**Interface:**
```
Vapps.setPhoneTab (x: VappsPhoneLowerX, y: VappsPhoneLowerY, tab: VappsPhoneTabType)
```
#### ◉ <u>Vapps.getPhoneTab (x, y)</u>
**概要:**
```
- 現在アクティブになっているタブ名を取得します
```
**Interface:**
```
Vapps.getPhoneTab (x: VappsPhoneLowerX, y: VappsPhoneLowerY): string
```
#### ◉ <u>Vapps.setTabMemoryActive (x, y, isTabMemoryActive)</u>
**概要:**
```
- 最後にアクティブになっていたタブを記憶するかどうかを設定します
- 記憶する場合、次回起動時には最後にアクティブになっていたタブが自動的に開きます
```
**Interface:**
```
Vapps.setTabMemoryActive (x: VappsPhoneLowerX, y: VappsPhoneLowerY, isTabMemoryActive: boolean)
```
#### ◉ <u>Vapps.getTabMemoryActive (x, y)</u>
**概要:**
```
- 現在のタブ記憶設定を取得します
```
**Interface:**
```
Vapps.getTabMemoryActive (x: VappsPhoneLowerX, y: VappsPhoneLowerY): boolean
```
#### ◉ <u>Vapps.setSaveBookInLocal (x, y, isSaveBookInLocal)</u>
**概要:**
```
- ローカル電話帳を使用するか否かを設定します
```
**Interface:**
```
Vapps.setSaveBookInLocal (x: VappsPhoneLowerX, y: VappsPhoneLowerY, isSaveBookInLocal: boolean)
```
#### ◉ <u>Vapps.getSaveBookInLocal (x, y)</u>
**概要:**
```
- 現在のローカル電話帳使用有無設定を取得します
```
**Interface:**
```
Vapps.getSaveBookInLocal (x: VappsPhoneLowerX, y: VappsPhoneLowerY): boolean
```
#### ◉ <u>Vapps.setSaveHistoryInLocal (x, y, isSaveHistoryInLocal)</u>
**概要:**
```
- ローカル電話履歴を使用するか否かを設定します
```
**Interface:**
```
Vapps.setSaveHistoryInLocal (x: VappsPhoneLowerX, y: VappsPhoneLowerY, isSaveHistoryInLocal: boolean)
```
#### ◉ <u>Vapps.getSaveHistoryInLocal (x, y)</u>
**概要:**
```
- 現在のローカル電話履歴使用有無設定を取得します
```
**Interface:**
```
Vapps.getSaveHistoryInLocal (x: VappsPhoneLowerX, y: VappsPhoneLowerY): boolean
```
#### ◉ <u>Vapps.setSaveSpeedDialInLocal (x, y, isSaveSpeedDialInLocal)</u>
**概要:**
```
- ローカルスピードダイヤルを使用するか否かを設定します
```
**Interface:**
```
Vapps.setSaveSpeedDialInLocal (x: VappsPhoneLowerX, y: VappsPhoneLowerY, isSaveSpeedDialInLocal: boolean)
```
#### ◉ <u>Vapps.getSaveSpeedDialInLocal (x, y)</u>
**概要:**
```
- 現在のローカルスピードダイヤル使用有無設定を取得します
```
**Interface:**
```
Vapps.getSaveSpeedDialInLocal (x: VappsPhoneLowerX, y: VappsPhoneLowerY): boolean
```
#### ◉ <u>Vapps.getPhoneI18nDictionary (x, y, asJsonStr, indent)</u>
**概要:**
```
- 現在適用されている i18n 言語辞書 JSON を取得します
```
**Interface:**
```
Vapps.getPhoneI18nDictionary (x: VappsPhoneLowerX, y: VappsPhoneLowerY, asJsonStr?: boolean, indent?: boolean): string | VappsPhoneDictionary
```
#### ◉ <u>Vapps.getPhoneBookItemSample ()</u>
**概要:**
```
- 電話帳のデータ1件のサンプルを取得します
```
**Interface:**
```
Vapps.getPhoneBookItemSample (): VappsPhoneBookItem
```
#### ◉ <u>Vapps.getPhoneHistoryItemSample ()</u>
**概要:**
```
- 電話履歴のデータ1件のサンプルを取得します
```
**Interface:**
```
Vapps.getPhoneHistoryItemSample (): VappsPhoneHistoryItem
```
#### ◉ <u>Vapps.getPhoneSpeedDialItemSample ()</u>
**概要:**
```
- スピードダイヤルのデータ1件のサンプルを取得します
```
**Interface:**
```
Vapps.getPhoneSpeedDialItemSample (): VappsPhoneSpeedDialItem
```
#### ◉ <u>Vapps.putPhoneBookItems (x, y, items)</u>
**概要:**
```
- 電話帳データを設置します
- この関数を使用した場合、既存のデータを上書きすることに注意してください
```
**Interface:**
```
Vapps.putPhoneBookItems (x: VappsPhoneLowerX, y: VappsPhoneLowerY, items: VappsPhoneBookItem[]): boolean
```
#### ◉ <u>Vapps.putPhoneBookItemsByUrl (x, y, url, headers)</u>
**概要:**
```
- 指定したURLのAPIから電話帳データを取得して設置します
- この関数を使用した場合、既存のデータを上書きすることに注意してください
```
**Interface:**
```
Vapps.putPhoneBookItemsByUrl (x: VappsPhoneLowerX, y: VappsPhoneLowerY, url: string, headers: Record<string, string>): Promise<boolean>
```
#### ◉ <u>Vapps.putPhoneHistoryItems (x, y, items)</u>
**概要:**
```
- 電話履歴データを設置します
- この関数を使用した場合、既存のデータを上書きすることに注意してください
```
**Interface:**
```
Vapps.putPhoneHistoryItems (x: VappsPhoneLowerX, y: VappsPhoneLowerY, items: VappsPhoneHistoryItem[]): boolean
```
#### ◉ <u>Vapps.putPhoneHistoryItemsByUrl (x, y, url, headers)</u>
**概要:**
```
- 指定したURLのAPIから電話履歴データを取得して設置します
- この関数を使用した場合、既存のデータを上書きすることに注意してください
```
**Interface:**
```
Vapps.putPhoneHistoryItemsByUrl (x: VappsPhoneLowerX, y: VappsPhoneLowerY, url: string, headers: Record<string, string>): Promise<boolean>
```
#### ◉ <u>Vapps.putPhoneSpeedDialItems (x, y, items)</u>
**概要:**
```
- スピードダイヤルデータを設置します
- この関数を使用した場合、既存のデータを上書きすることに注意してください
```
**Interface:**
```
Vapps.putPhoneSpeedDialItems (x: VappsPhoneLowerX, y: VappsPhoneLowerY, items: VappsPhoneSpeedDialItem[]): boolean
```
#### ◉ <u>Vapps.putPhoneSpeedDialItemsByUrl (x, y, url, headers)</u>
**概要:**
```
- 指定したURLのAPIからスピードダイヤルデータを取得して設置します
- この関数を使用した場合、既存のデータを上書きすることに注意してください
```
**Interface:**
```
Vapps.putPhoneSpeedDialItemsByUrl (x: VappsPhoneLowerX, y: VappsPhoneLowerY, url: string, headers: Record<string, string>): Promise<boolean>
```
#### ◉ <u>Vapps.putPhoneBookItemsLocal (x, y, items)</u>
**概要:**
```
- ローカル電話帳データを設置します
- この関数を使用した場合、既存のローカルデータを上書きすることに注意してください
```
**Interface:**
```
Vapps.putPhoneBookItemsLocal (x: VappsPhoneLowerX, y: VappsPhoneLowerY, items: VappsPhoneBookItem[]): boolean
```
#### ◉ <u>Vapps.putPhoneBookItemsLocalByUrl (x, y, url, headers)</u>
**概要:**
```
- 指定したURLのAPIからローカル電話帳データを取得して設置します
- この関数を使用した場合、既存のローカルデータを上書きすることに注意してください
```
**Interface:**
```
Vapps.putPhoneBookItemsLocalByUrl (x: VappsPhoneLowerX, y: VappsPhoneLowerY, url: string, headers: Record<string, string>): Promise<boolean>
```
#### ◉ <u>Vapps.putPhoneHistoryItemsLocal (x, y, items)</u>
**概要:**
```
- ローカル電話履歴データを設置します
- この関数を使用した場合、既存のローカルデータを上書きすることに注意してください
```
**Interface:**
```
Vapps.putPhoneHistoryItemsLocal (x: VappsPhoneLowerX, y: VappsPhoneLowerY, items: VappsPhoneHistoryItem[]): boolean
```
#### ◉ <u>Vapps.putPhoneHistoryItemsLocalByUrl (x, y, url, headers)</u>
**概要:**
```
- 指定したURLのAPIからローカル電話履歴データを取得して設置します
- この関数を使用した場合、既存のローカルデータを上書きすることに注意してください
```
**Interface:**
```
Vapps.putPhoneHistoryItemsLocalByUrl (x: VappsPhoneLowerX, y: VappsPhoneLowerY, url: string, headers: Record<string, string>): Promise<boolean>
```
#### ◉ <u>Vapps.putPhoneSpeedDialItemsLocal (x, y, items)</u>
**概要:**
```
- ローカルスピードダイヤルデータを設置します
- この関数を使用した場合、既存のローカルデータを上書きすることに注意してください
```
**Interface:**
```
Vapps.putPhoneSpeedDialItemsLocal (x: VappsPhoneLowerX, y: VappsPhoneLowerY, items: VappsPhoneSpeedDialItem[]): boolean
```
#### ◉ <u>Vapps.putPhoneSpeedDialItemsLocalByUrl (x, y, url, headers)</u>
**概要:**
```
- 指定したURLのAPIからローカルスピードダイヤルデータを取得して設置します
- この関数を使用した場合、既存のローカルデータを上書きすることに注意してください
```
**Interface:**
```
Vapps.putPhoneSpeedDialItemsLocalByUrl (x: VappsPhoneLowerX, y: VappsPhoneLowerY, url: string, headers: Record<string, string>): Promise<boolean>
```
#### ◉ <u>Vapps.pushPhoneBookItems (x, y, items)</u>
**概要:**
```
- 電話帳データを追加します
```
**Interface:**
```
Vapps.pushPhoneBookItems (x: VappsPhoneLowerX, y: VappsPhoneLowerY, items: VappsPhoneBookItem[]): boolean
```
#### ◉ <u>Vapps.pushPhoneBookItemsByUrl (x, y, url, headers)</u>
**概要:**
```
- 指定したURLのAPIから電話帳データを取得して追加します
```
**Interface:**
```
Vapps.pushPhoneBookItemsByUrl (x: VappsPhoneLowerX, y: VappsPhoneLowerY, url: string, headers: Record<string, string>): Promise<boolean>
```
#### ◉ <u>Vapps.pushPhoneHistoryItems (x, y, items)</u>
**概要:**
```
- 電話履歴データを追加します
```
**Interface:**
```
Vapps.pushPhoneHistoryItems (x: VappsPhoneLowerX, y: VappsPhoneLowerY, items: VappsPhoneHistoryItem[]): boolean
```
#### ◉ <u>Vapps.pushPhoneHistoryItemsByUrl (x, y, url, headers)</u>
**概要:**
```
- 指定したURLのAPIから電話履歴データを取得して追加します
```
**Interface:**
```
Vapps.pushPhoneHistoryItemsByUrl (x: VappsPhoneLowerX, y: VappsPhoneLowerY, url: string, headers: Record<string, string>): Promise<boolean>
```
#### ◉ <u>Vapps.pushPhoneSpeedDialItems (x, y, items)</u>
**概要:**
```
- スピードダイヤルデータを追加します
```
**Interface:**
```
Vapps.pushPhoneSpeedDialItems (x: VappsPhoneLowerX, y: VappsPhoneLowerY, items: VappsPhoneSpeedDialItem[]): boolean
```
#### ◉ <u>Vapps.pushPhoneSpeedDialItemsByUrl (x, y, url, headers)</u>
**概要:**
```
- 指定したURLのAPIからスピードダイヤルデータを取得して追加します
```
**Interface:**
```
Vapps.pushPhoneSpeedDialItemsByUrl (x: VappsPhoneLowerX, y: VappsPhoneLowerY, url: string, headers: Record<string, string>): Promise<boolean>
```
#### ◉ <u>Vapps.pushPhoneBookItemsLocal (x, y, items)</u>
**概要:**
```
- ローカル電話帳データを追加します
```
**Interface:**
```
Vapps.pushPhoneBookItemsLocal (x: VappsPhoneLowerX, y: VappsPhoneLowerY, items: VappsPhoneBookItem[]): boolean
```
#### ◉ <u>Vapps.pushPhoneBookItemsLocalByUrl (x, y, url, headers)</u>
**概要:**
```
- 指定したURLのAPIからローカル電話帳データを取得して追加します
```
**Interface:**
```
Vapps.pushPhoneBookItemsLocalByUrl (x: VappsPhoneLowerX, y: VappsPhoneLowerY, url: string, headers: Record<string, string>): Promise<boolean>
```
#### ◉ <u>Vapps.pushPhoneHistoryItemsLocal (x, y, items)</u>
**概要:**
```
- ローカル電話履歴データを追加します
```
**Interface:**
```
Vapps.pushPhoneHistoryItemsLocal (x: VappsPhoneLowerX, y: VappsPhoneLowerY, items: VappsPhoneHistoryItem[]): boolean
```
#### ◉ <u>Vapps.pushPhoneHistoryItemsLocalByUrl (x, y, url, headers)</u>
**概要:**
```
- 指定したURLのAPIからローカル電話履歴データを取得して追加します
```
**Interface:**
```
Vapps.pushPhoneHistoryItemsLocalByUrl (x: VappsPhoneLowerX, y: VappsPhoneLowerY, url: string, headers: Record<string, string>): Promise<boolean>
```
#### ◉ <u>Vapps.pushPhoneSpeedDialItemsLocal (x, y, items)</u>
**概要:**
```
- ローカルスピードダイヤルデータを追加します
```
**Interface:**
```
Vapps.pushPhoneSpeedDialItemsLocal (x: VappsPhoneLowerX, y: VappsPhoneLowerY, items: VappsPhoneSpeedDialItem[]): boolean
```
#### ◉ <u>Vapps.pushPhoneSpeedDialItemsLocalByUrl (x, y, url, headers)</u>
**概要:**
```
- 指定したURLのAPIからローカルスピードダイヤルデータを取得して追加します
```
**Interface:**
```
Vapps.pushPhoneSpeedDialItemsLocalByUrl (x: VappsPhoneLowerX, y: VappsPhoneLowerY, url: string, headers: Record<string, string>): Promise<boolean>
```
#### ◉ <u>Vapps.updatePhoneBookItems (x, y, items)</u>
**概要:**
```
- 電話帳データを更新します
```
**Interface:**
```
Vapps.updatePhoneBookItems (x: VappsPhoneLowerX, y: VappsPhoneLowerY, items: VappsPhoneBookItem[]): boolean
```
#### ◉ <u>Vapps.updatePhoneBookItemsByUrl (x, y, url, headers)</u>
**概要:**
```
- 指定したURLのAPIから電話帳データを取得して更新します
```
**Interface:**
```
Vapps.updatePhoneBookItemsByUrl (x: VappsPhoneLowerX, y: VappsPhoneLowerY, url: string, headers: Record<string, string>): Promise<boolean>
```
#### ◉ <u>Vapps.updatePhoneSpeedDialItems (x, y, items)</u>
**概要:**
```
- スピードダイヤルデータを更新します
```
**Interface:**
```
Vapps.updatePhoneSpeedDialItems (x: VappsPhoneLowerX, y: VappsPhoneLowerY, items: VappsPhoneSpeedDialItem[]): boolean
```
#### ◉ <u>Vapps.updatePhoneSpeedDialItemsByUrl (x, y, url, headers)</u>
**概要:**
```
- 指定したURLのAPIからスピードダイヤルデータを取得して更新します
```
**Interface:**
```
Vapps.updatePhoneSpeedDialItemsByUrl (x: VappsPhoneLowerX, y: VappsPhoneLowerY, url: string, headers: Record<string, string>): Promise<boolean>
```
#### ◉ <u>Vapps.updatePhoneBookItemsLocal (x, y, items)</u>
**概要:**
```
- ローカル電話帳データを更新します
```
**Interface:**
```
Vapps.updatePhoneBookItemsLocal (x: VappsPhoneLowerX, y: VappsPhoneLowerY, items: VappsPhoneBookItem[]): boolean
```
#### ◉ <u>Vapps.updatePhoneBookItemsLocalByUrl (x, y, url, headers)</u>
**概要:**
```
- 指定したURLのAPIからローカル電話帳データを取得して更新します
```
**Interface:**
```
Vapps.updatePhoneBookItemsLocalByUrl (x: VappsPhoneLowerX, y: VappsPhoneLowerY, url: string, headers: Record<string, string>): Promise<boolean>
```
#### ◉ <u>Vapps.updatePhoneSpeedDialItemsLocal (x, y, items)</u>
**概要:**
```
- ローカルスピードダイヤルデータを更新します
```
**Interface:**
```
Vapps.updatePhoneSpeedDialItemsLocal (x: VappsPhoneLowerX, y: VappsPhoneLowerY, items: VappsPhoneSpeedDialItem[]): boolean
```
#### ◉ <u>Vapps.updatePhoneSpeedDialItemsLocalByUrl (x, y, url, headers)</u>
**概要:**
```
- 指定したURLのAPIからローカルスピードダイヤルデータを取得して更新します
```
**Interface:**
```
Vapps.updatePhoneSpeedDialItemsLocalByUrl (x: VappsPhoneLowerX, y: VappsPhoneLowerY, url: string, headers: Record<string, string>): Promise<boolean>
```
#### ◉ <u>Vapps.deletePhoneBookItems (x, y, itemIDs)</u>
**概要:**
```
- 電話帳データを削除します
```
**Interface:**
```
Vapps.deletePhoneBookItems (x: VappsPhoneLowerX, y: VappsPhoneLowerY, itemIDs: string[]): boolean
```
#### ◉ <u>Vapps.deletePhoneBookItemsByUrl (x, y, url, headers)</u>
**概要:**
```
- 指定したURLのAPIから対象の電話帳データIDを取得して削除します
```
**Interface:**
```
Vapps.deletePhoneBookItemsByUrl (x: VappsPhoneLowerX, y: VappsPhoneLowerY, url: string, headers: Record<string, string>): Promise<boolean>
```
#### ◉ <u>Vapps.deletePhoneHistoryItems (x, y, itemIDs)</u>
**概要:**
```
- 電話履歴データを削除します
```
**Interface:**
```
Vapps.deletePhoneHistoryItems (x: VappsPhoneLowerX, y: VappsPhoneLowerY, itemIDs: string[]): boolean
```
#### ◉ <u>Vapps.deletePhoneHistoryItemsByUrl (x, y, url, headers)</u>
**概要:**
```
- 指定したURLのAPIから対象の電話履歴データIDを取得して削除します
```
**Interface:**
```
Vapps.deletePhoneHistoryItemsByUrl (x: VappsPhoneLowerX, y: VappsPhoneLowerY, url: string, headers: Record<string, string>): Promise<boolean>
```
#### ◉ <u>Vapps.deletePhoneSpeedDialItems (x, y, itemIDs)</u>
**概要:**
```
- スピードダイヤルデータを削除します
```
**Interface:**
```
Vapps.deletePhoneSpeedDialItems (x: VappsPhoneLowerX, y: VappsPhoneLowerY, itemIDs: string[]): boolean
```
#### ◉ <u>Vapps.deletePhoneSpeedDialItemsByUrl (x, y, url, headers)</u>
**概要:**
```
- 指定したURLのAPIから対象のスピードダイヤルデータIDを取得して削除します
```
**Interface:**
```
Vapps.deletePhoneSpeedDialItemsByUrl (x: VappsPhoneLowerX, y: VappsPhoneLowerY, url: string, headers: Record<string, string>): Promise<boolean>
```
#### ◉ <u>Vapps.deletePhoneBookItemsLocal (x, y, itemIDs)</u>
**概要:**
```
- ローカル電話帳データを削除します
```
**Interface:**
```
Vapps.deletePhoneBookItemsLocal (x: VappsPhoneLowerX, y: VappsPhoneLowerY, itemIDs: string[]): boolean
```
#### ◉ <u>Vapps.deletePhoneBookItemsLocalByUrl (x, y, url, headers)</u>
**概要:**
```
- 指定したURLのAPIから対象のローカル電話帳データIDを取得して削除します
```
**Interface:**
```
Vapps.deletePhoneBookItemsLocalByUrl (x: VappsPhoneLowerX, y: VappsPhoneLowerY, url: string, headers: Record<string, string>): Promise<boolean>
```
#### ◉ <u>Vapps.deletePhoneHistoryItemsLocal (x, y, itemIDs)</u>
**概要:**
```
- ローカル電話履歴データを削除します
```
**Interface:**
```
Vapps.deletePhoneHistoryItemsLocal (x: VappsPhoneLowerX, y: VappsPhoneLowerY, itemIDs: string[]): boolean
```
#### ◉ <u>Vapps.deletePhoneHistoryItemsLocalByUrl (x, y, url, headers)</u>
**概要:**
```
- 指定したURLのAPIから対象のローカル電話履歴データIDを取得して削除します
```
**Interface:**
```
Vapps.deletePhoneHistoryItemsLocalByUrl (x: VappsPhoneLowerX, y: VappsPhoneLowerY, url: string, headers: Record<string, string>): Promise<boolean>
```
#### ◉ <u>Vapps.deletePhoneSpeedDialItemsLocal (x, y, itemIDs)</u>
**概要:**
```
- ローカルスピードダイヤルデータを削除します
```
**Interface:**
```
Vapps.deletePhoneSpeedDialItemsLocal (x: VappsPhoneLowerX, y: VappsPhoneLowerY, itemIDs: string[]): boolean
```
#### ◉ <u>Vapps.deletePhoneSpeedDialItemsLocalByUrl (x, y, url, headers)</u>
**概要:**
```
- 指定したURLのAPIから対象のローカルスピードダイヤルデータIDを取得して削除します
```
**Interface:**
```
Vapps.deletePhoneSpeedDialItemsLocalByUrl (x: VappsPhoneLowerX, y: VappsPhoneLowerY, url: string, headers: Record<string, string>): Promise<boolean>
```
#### ◉ <u>Vapps.openCallingMask (x, y, options)</u>
**概要:**
```
- 発信中や着信中、通話中等を示す画面を電話App内で開きます
```
**Interface:**
```
Vapps.openCallingMask (x: VappsPhoneLowerX, y: VappsPhoneLowerY, options?: VappsPhoneOpenCallingMaskOptions)
```
#### ◉ <u>Vapps.closeCallingMask (x, y)</u>
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
#### ◉ <u>Vapps.register()</u>
**概要:**
```
- coming soon
```
**Interface:**
```
Vapps.register()
```
#### ◉ <u>Vapps.unregister()</u>
**概要:**
```
- coming soon
```
**Interface:**
```
Vapps.unregister()
```
#### ◉ <u>Vapps.call()</u>
**概要:**
```
- coming soon
```
**Interface:**
```
Vapps.call()
```
#### ◉ <u>Vapps.hangup()</u>
**概要:**
```
- coming soon
```
**Interface:**
```
Vapps.hangup()
```
#### ◉ <u>Vapps.accept()</u>
**概要:**
```
- coming soon
```
**Interface:**
```
Vapps.accept()
```
#### ◉ <u>Vapps.hold()</u>
**概要:**
```
- coming soon
```
**Interface:**
```
Vapps.hold()
```
#### ◉ <u>Vapps.unhold()</u>
**概要:**
```
- coming soon
```
**Interface:**
```
Vapps.unhold()
```
#### ◉ <u>Vapps.mute()</u>
**概要:**
```
- coming soon
```
**Interface:**
```
Vapps.mute()
```
#### ◉ <u>Vapps.unmute()</u>
**概要:**
```
- coming soon
```
**Interface:**
```
Vapps.unmute()
```
#### ◉ <u>Vapps.transfer()</u>
**概要:**
```
- coming soon
```
**Interface:**
```
Vapps.transfer()
```
#### ◉ <u>Vapps.cancelTransfer()</u>
**概要:**
```
- coming soon
```
**Interface:**
```
Vapps.cancelTransfer()
```
#### ◉ <u>Vapps.park()</u>
**概要:**
```
- coming soon
```
**Interface:**
```
Vapps.park()
```
#### ◉ <u>Vapps.parkup()</u>
**概要:**
```
- coming soon
```
**Interface:**
```
Vapps.parkup()
```
#### ◉ <u>Vapps.listen()</u>
**概要:**
```
- coming soon
```
**Interface:**
```
Vapps.listen()
```
#### ◉ <u>Vapps.whisper()</u>
**概要:**
```
- coming soon
```
**Interface:**
```
Vapps.whisper()
```
#### ◉ <u>Vapps.barge()</u>
**概要:**
```
- coming soon
```
**Interface:**
```
Vapps.barge()
```
#### ◉ <u>Vapps.dtmf()</u>
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
### ⚫︎ <u>ON_CREATED</u>
**概要:**
```
```
**使用例:**
```
```
### ⚫︎ <u>ON_MOUNTED</u>
**概要:**
```
```
**使用例:**
```
```
### ⚫︎ <u>ON_OPEN</u>
**概要:**
```
```
**使用例:**
```
```
### ⚫︎ <u>ON_CLOSE</u>
**概要:**
```
```
**使用例:**
```
```
### ⚫︎ <u>ON_OPEN_SNACKBAR</u>
**概要:**
```
```
**使用例:**
```
```
### ⚫︎ <u>ON_CLOSE_SNACKBAR</u>
**概要:**
```
```
**使用例:**
```
```
### ⚫︎ <u>ON_LOCALE_CHANGE</u>
**概要:**
```
```
**使用例:**
```
```
### ⚫︎ <u>ON_TAB_CHANGE</u>
**概要:**
```
```
**使用例:**
```
```
### ⚫︎ <u>ON_INPUT_NUMBER_CHANGE</u>
**概要:**
```
```
**使用例:**
```
```
### ⚫︎ <u>ON_CALL</u>
**概要:**
```
```
**使用例:**
```
```
### ⚫︎ <u>ON_FILTER_BOOK</u>
**概要:**
```
```
**使用例:**
```
```
### ⚫︎ <u>ON_FILTER_HISTORY</u>
**概要:**
```
```
**使用例:**
```
```
### ⚫︎ <u>ON_FILTER_SPEED_DIAL</u>
**概要:**
```
```
**使用例:**
```
```
### ⚫︎ <u>ON_PUT_BOOK_ITEMS</u>
**概要:**
```
```
**使用例:**
```
```
### ⚫︎ <u>ON_PUT_BOOK_ITEMS_BY_URL</u>
**概要:**
```
```
**使用例:**
```
```
### ⚫︎ <u>ON_PUT_HISTORY_ITEMS</u>
**概要:**
```
```
**使用例:**
```
```
### ⚫︎ <u>ON_PUT_HISTORY_ITEMS_BY_URL</u>
**概要:**
```
```
**使用例:**
```
```
### ⚫︎ <u>ON_PUT_SPEED_DIAL_ITEMS</u>
**概要:**
```
```
**使用例:**
```
```
### ⚫︎ <u>ON_PUT_SPEED_DIAL_ITEMS_BY_URL</u>
**概要:**
```
```
**使用例:**
```
```
### ⚫︎ <u>ON_PUT_BOOK_ITEMS_LOCAL</u>
**概要:**
```
```
**使用例:**
```
```
### ⚫︎ <u>ON_PUT_BOOK_ITEMS_LOCAL_BY_URL</u>
**概要:**
```
```
**使用例:**
```
```
### ⚫︎ <u>ON_PUT_HISTORY_ITEMS_LOCAL</u>
**概要:**
```
```
**使用例:**
```
```
### ⚫︎ <u>ON_PUT_HISTORY_ITEMS_LOCAL_BY_URL</u>
**概要:**
```
```
**使用例:**
```
```
### ⚫︎ <u>ON_PUT_SPEED_DIAL_ITEMS_LOCAL</u>
**概要:**
```
```
**使用例:**
```
```
### ⚫︎ <u>ON_PUT_SPEED_DIAL_ITEMS_LOCAL_BY_URL</u>
**概要:**
```
```
**使用例:**
```
```
### ⚫︎ <u>ON_PUSH_BOOK_ITEMS</u>
**概要:**
```
```
**使用例:**
```
```
### ⚫︎ <u>ON_PUSH_BOOK_ITEMS_BY_URL</u>
**概要:**
```
```
**使用例:**
```
```
### ⚫︎ <u>ON_PUSH_HISTORY_ITEMS</u>
**概要:**
```
```
**使用例:**
```
```
### ⚫︎ <u>ON_PUSH_HISTORY_ITEMS_BY_URL</u>
**概要:**
```
```
**使用例:**
```
```
### ⚫︎ <u>ON_PUSH_SPEED_DIAL_ITEMS</u>
**概要:**
```
```
**使用例:**
```
```
### ⚫︎ <u>ON_PUSH_SPEED_DIAL_ITEMS_BY_URL</u>
**概要:**
```
```
**使用例:**
```
```
### ⚫︎ <u>ON_PUSH_BOOK_ITEMS_LOCAL</u>
**概要:**
```
```
**使用例:**
```
```
### ⚫︎ <u>ON_PUSH_BOOK_ITEMS_LOCAL_BY_URL</u>
**概要:**
```
```
**使用例:**
```
```
### ⚫︎ <u>ON_PUSH_HISTORY_ITEMS_LOCAL</u>
**概要:**
```
```
**使用例:**
```
```
### ⚫︎ <u>ON_PUSH_HISTORY_ITEMS_LOCAL_BY_URL</u>
**概要:**
```
```
**使用例:**
```
```
### ⚫︎ <u>ON_PUSH_SPEED_DIAL_ITEMS_LOCAL</u>
**概要:**
```
```
**使用例:**
```
```
### ⚫︎ <u>ON_PUSH_SPEED_DIAL_ITEMS_LOCAL_BY_URL</u>
**概要:**
```
```
**使用例:**
```
```
### ⚫︎ <u>ON_UPDATE_BOOK_ITEMS</u>
**概要:**
```
```
**使用例:**
```
```
### ⚫︎ <u>ON_UPDATE_BOOK_ITEMS_BY_URL</u>
**概要:**
```
```
**使用例:**
```
```
### ⚫︎ <u>ON_UPDATE_HISTORY_ITEMS</u>
**概要:**
```
```
**使用例:**
```
```
### ⚫︎ <u>ON_UPDATE_HISTORY_ITEMS_BY_URL</u>
**概要:**
```
```
**使用例:**
```
```
### ⚫︎ <u>ON_UPDATE_SPEED_DIAL_ITEMS</u>
**概要:**
```
```
**使用例:**
```
```
### ⚫︎ <u>ON_UPDATE_SPEED_DIAL_ITEMS_BY_URL</u>
**概要:**
```
```
**使用例:**
```
```
### ⚫︎ <u>ON_UPDATE_BOOK_ITEMS_LOCAL</u>
**概要:**
```
```
**使用例:**
```
```
### ⚫︎ <u>ON_UPDATE_BOOK_ITEMS_LOCAL_BY_URL</u>
**概要:**
```
```
**使用例:**
```
```
### ⚫︎ <u>ON_UPDATE_HISTORY_ITEMS_LOCAL</u>
**概要:**
```
```
**使用例:**
```
```
### ⚫︎ <u>ON_UPDATE_HISTORY_ITEMS_LOCAL_BY_URL</u>
**概要:**
```
```
**使用例:**
```
```
### ⚫︎ <u>ON_UPDATE_SPEED_DIAL_ITEMS_LOCAL</u>
**概要:**
```
```
**使用例:**
```
```
### ⚫︎ <u>ON_UPDATE_SPEED_DIAL_ITEMS_LOCAL_BY_URL</u>
**概要:**
```
```
**使用例:**
```
```
### ⚫︎ <u>ON_DELETE_BOOK_ITEMS</u>
**概要:**
```
```
**使用例:**
```
```
### ⚫︎ <u>ON_DELETE_BOOK_ITEMS_BY_URL</u>
**概要:**
```
```
**使用例:**
```
```
### ⚫︎ <u>ON_DELETE_HISTORY_ITEMS</u>
**概要:**
```
```
**使用例:**
```
```
### ⚫︎ <u>ON_DELETE_HISTORY_ITEMS_BY_URL</u>
**概要:**
```
```
**使用例:**
```
```
### ⚫︎ <u>ON_DELETE_SPEED_DIAL_ITEMS</u>
**概要:**
```
```
**使用例:**
```
```
### ⚫︎ <u>ON_DELETE_SPEED_DIAL_ITEMS_BY_URL</u>
**概要:**
```
```
**使用例:**
```
```
### ⚫︎ <u>ON_DELETE_BOOK_ITEMS_LOCAL</u>
**概要:**
```
```
**使用例:**
```
```
### ⚫︎ <u>ON_DELETE_BOOK_ITEMS_LOCAL_BY_URL</u>
**概要:**
```
```
**使用例:**
```
```
### ⚫︎ <u>ON_DELETE_HISTORY_ITEMS_LOCAL</u>
**概要:**
```
```
**使用例:**
```
```
### ⚫︎ <u>ON_DELETE_HISTORY_ITEMS_LOCAL_BY_URL</u>
**概要:**
```
```
**使用例:**
```
```
### ⚫︎ <u>ON_DELETE_SPEED_DIAL_ITEMS_LOCAL</u>
**概要:**
```
```
**使用例:**
```
```
### ⚫︎ <u>ON_DELETE_SPEED_DIAL_ITEMS_LOCAL_BY_URL</u>
**概要:**
```
```
**使用例:**
```
```
### ⚫︎ <u>ON_OPEN_CALLING_MASK</u>
**概要:**
```
```
**使用例:**
```
```
### ⚫︎ <u>ON_CLOSE_CALLING_MASK</u>
**概要:**
```
```
**使用例:**
```
```
### ⚫︎ <u>ON_PUT_CUSTOM_CALLING_MASK_HTML</u>
**概要:**
```
```
**使用例:**
```
```
### ⚫︎ <u>ON_CREATE_BOOK_ITEM</u>
**概要:**
```
```
**使用例:**
```
```
### ⚫︎ <u>ON_CREATE_SPEED_DIAL_ITEM</u>
**概要:**
```
```
**使用例:**
```
```
### ⚫︎ <u>ON_UPDATE_BOOK_ITEM</u>
**概要:**
```
```
**使用例:**
```
```
### ⚫︎ <u>ON_UPDATE_SPEED_DIAL_ITEM</u>
**概要:**
```
```
**使用例:**
```
```
### ⚫︎ <u>ON_DELETE_BOOK_ITEM</u>
**概要:**
```
```
**使用例:**
```
```
### ⚫︎ <u>ON_DELETE_HISTORY_ITEM</u>
**概要:**
```
```
**使用例:**
```
```
### ⚫︎ <u>ON_DELETE_SPEED_DIAL_ITEM</u>
**概要:**
```
```
**使用例:**
```
```
### ⚫︎ <u>ON_CLICK_BOOK_ITEM</u>
**概要:**
```
```
**使用例:**
```
```
### ⚫︎ <u>ON_CLICK_HISTORY_ITEM</u>
**概要:**
```
```
**使用例:**
```
```
### ⚫︎ <u>ON_CLICK_SPEED_DIAL_ITEM</u>
**概要:**
```
```
**使用例:**
```
```
### ⚫︎ <u>ON_RIGHT_CLICK_BOOK_ITEM</u>
**概要:**
```
```
**使用例:**
```
```
### ⚫︎ <u>ON_RIGHT_CLICK_HISTORY_ITEM</u>
**概要:**
```
```
**使用例:**
```
```
### ⚫︎ <u>ON_RIGHT_CLICK_SPEED_DIAL_ITEM</u>
**概要:**
```
```
**使用例:**
```
```
### ⚫︎ <u>ON_LONG_PRESS_BOOK_ITEM</u>
**概要:**
```
```
**使用例:**
```
```
### ⚫︎ <u>ON_LONG_PRESS_HISTORY_ITEM</u>
**概要:**
```
```
**使用例:**
```
```
### ⚫︎ <u>ON_LONG_PRESS_SPEED_DIAL_ITEM</u>
**概要:**
```
```
**使用例:**
```
```
### ⚫︎ <u>ON_CALL_BOOK_ITEM</u>
**概要:**
```
```
**使用例:**
```
```
### ⚫︎ <u>ON_CALL_HISTORY_ITEM</u>
**概要:**
```
```
**使用例:**
```
```
### ⚫︎ <u>ON_CALL_SPEED_DIAL_ITEM</u>
**概要:**
```
```
**使用例:**
```
```
### ⚫︎ <u>ON_LISTEN_BOOK_ITEM</u>
**概要:**
```
```
**使用例:**
```
```
### ⚫︎ <u>ON_LISTEN_SPEED_DIAL_ITEM</u>
**概要:**
```
```
**使用例:**
```
```
### ⚫︎ <u>ON_WHISPER_BOOK_ITEM</u>
**概要:**
```
```
**使用例:**
```
```
### ⚫︎ <u>ON_WHISPER_SPEED_DIAL_ITEM</u>
**概要:**
```
```
**使用例:**
```
```
### ⚫︎ <u>ON_BARGE_BOOK_ITEM</u>
**概要:**
```
```
**使用例:**
```
```
### ⚫︎ <u>ON_BARGE_SPEED_DIAL_ITEM</u>
**概要:**
```
```
**使用例:**
```
```
### ⚫︎ <u>ON_DETAIL_BOOK_ITEM</u>
**概要:**
```
```
**使用例:**
```
```
### ⚫︎ <u>ON_DETAIL_HISTORY_ITEM</u>
**概要:**
```
```
**使用例:**
```
```
### ⚫︎ <u>ON_DETAIL_SPEED_DIAL_ITEM</u>
**概要:**
```
```
**使用例:**
```
```
### ⚫︎ <u>ON_CANCEL</u>
**概要:**
```
```
**使用例:**
```
```
### ⚫︎ <u>ON_REJECT</u>
**概要:**
```
```
**使用例:**
```
```
### ⚫︎ <u>ON_ACCEPT</u>
**概要:**
```
```
**使用例:**
```
```
### ⚫︎ <u>ON_TURN_MIC_ON</u>
**概要:**
```
```
**使用例:**
```
```
### ⚫︎ <u>ON_TURN_MIC_OFF</u>
**概要:**
```
```
**使用例:**
```
```
### ⚫︎ <u>ON_CLICK_KEYPAD</u>
**概要:**
```
```
**使用例:**
```
```
### ⚫︎ <u>ON_TURN_SPEAKER_ON</u>
**概要:**
```
```
**使用例:**
```
```
### ⚫︎ <u>ON_TURN_SPEAKER_OFF</u>
**概要:**
```
```
**使用例:**
```
```
### ⚫︎ <u>ON_TURN_HOLD_ON</u>
**概要:**
```
```
**使用例:**
```
```
### ⚫︎ <u>ON_TURN_HOLD_OFF</u>
**概要:**
```
```
**使用例:**
```
```
### ⚫︎ <u>ON_HANGUP</u>
**概要:**
```
```
**使用例:**
```
```
### ⚫︎ <u>ON_CLICK_TRANSFER</u>
**概要:**
```
```
**使用例:**
```
```
