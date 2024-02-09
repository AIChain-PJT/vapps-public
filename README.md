# AIChain VAPPS
`VAPPS` は、既存アプリケーション内に新たな重要機能を組み込もうとするとき、インフラ・バックエンド・フロントエンドの構築及び実装を行わず、それら全てを含む `タグ` の埋め込みによって顧客提供までをショートカットする為の `Virtual Applications （VAPPS）` です。

# AIChain VAPPS Phone
`VAPPS Phone` は、既存のアプリケーションに AIChain が発行するタグを埋め込むことによって、既存のアプリケーション画面内に電話アプリケーションを出現させます。

`VAPPS Phone` を埋め込んだ既存アプリケーションには、どこからでも呼び出しが可能な `Vapps` というグローバルなコントローラーが変数として発生します。

既存アプリケーション側からは画面上からだけでなく、`Vapps` コントローラーの関数を呼び出すことにより、あらゆる操作が可能であるため、既存アプリケーションの仕様や用途に合わせてシームレスに連動させることが可能です。

また、`Vapps` コントローラーには、`Vapps Phone` 内で発生するあらゆるイベントを取得可能なイベントリスナーが網羅的に実装されています。着信を受けた時、電話をかけた時、電話帳を編集した時、など全ての場面がリアルタイムに既存アプリケーション側に通知されるため、`VAPPS Phone` は完全に既存アプリケーションの一部として扱うことが可能です。

## VAPPS Phone 呼び出し関数
### ◼️ アプリ操作
#### ◉ on (ename: string, callback: (e: CustomEvent) => void)
#### ◉ off (ename: string, callback: (e: CustomEvent) => void)
#### ◉ phone (options: VappsPhoneOptions): string
#### ◉ openPhone (x: VappsPhoneLowerX, y: VappsPhoneLowerY)
#### ◉ closePhone (x: VappsPhoneLowerX, y: VappsPhoneLowerY)
#### ◉ setPhoneLocale(x: VappsPhoneLowerX, y: VappsPhoneLowerY, locale?: VappsPhoneLocale)
#### ◉ getPhoneLocale(x: VappsPhoneLowerX, y: VappsPhoneLowerY): VappsPhoneLocale | string
#### ◉ setPhoneTab(x: VappsPhoneLowerX, y: VappsPhoneLowerY, tab?: VappsPhoneTabType)
#### ◉ getPhoneTab(x: VappsPhoneLowerX, y: VappsPhoneLowerY): string
#### ◉ setTabMemoryActive(x: VappsPhoneLowerX, y: VappsPhoneLowerY, isTabMemoryActive?: boolean)
#### ◉ getTabMemoryActive(x: VappsPhoneLowerX, y: VappsPhoneLowerY): boolean
#### ◉ getPhoneI18nDictionary(x: VappsPhoneLowerX, y: VappsPhoneLowerY, asJsonStr?: boolean, indent?: boolean): string | VappsPhoneDictionary
#### ◉ putPhoneBookItems (x: VappsPhoneLowerX, y: VappsPhoneLowerY, items: VappsPhoneBookItem[])
#### ◉ putPhoneBookItemsByUrl (x: VappsPhoneLowerX, y: VappsPhoneLowerY, url: string, headers: Record<string, string>)
#### ◉ putPhoneHistoryItems (x: VappsPhoneLowerX, y: VappsPhoneLowerY, items: VappsPhoneHistoryItem[])
#### ◉ putPhoneHistoryItemsByUrl (x: VappsPhoneLowerX, y: VappsPhoneLowerY, url: string, headers: Record<string, string>)
#### ◉ putPhoneSpeedDialItems (x: VappsPhoneLowerX, y: VappsPhoneLowerY, items: VappsPhoneSpeedDialItem[])
#### ◉ putPhoneSpeedDialItemsByUrl (x: VappsPhoneLowerX, y: VappsPhoneLowerY, url: string, headers: Record<string, string>)
#### ◉ pushPhoneBookItems (x: VappsPhoneLowerX, y: VappsPhoneLowerY, items: VappsPhoneBookItem[])
#### ◉ pushPhoneBookItemsByUrl (x: VappsPhoneLowerX, y: VappsPhoneLowerY, url: string, headers: Record<string, string>)
#### ◉ pushPhoneHistoryItems (x: VappsPhoneLowerX, y: VappsPhoneLowerY, items: VappsPhoneHistoryItem[])
#### ◉ pushPhoneHistoryItemsByUrl (x: VappsPhoneLowerX, y: VappsPhoneLowerY, url: string, headers: Record<string, string>)
#### ◉ pushPhoneSpeedDialItems (x: VappsPhoneLowerX, y: VappsPhoneLowerY, items: VappsPhoneSpeedDialItem[])
#### ◉ pushPhoneSpeedDialItemsByUrl (x: VappsPhoneLowerX, y: VappsPhoneLowerY, url: string, headers: Record<string, string>)
#### ◉ deletePhoneBookItems (x: VappsPhoneLowerX, y: VappsPhoneLowerY, itemIDs: string[])
#### ◉ deletePhoneBookItemsByUrl (x: VappsPhoneLowerX, y: VappsPhoneLowerY, url: string, headers: Record<string, string>)
#### ◉ deletePhoneHistoryItems (x: VappsPhoneLowerX, y: VappsPhoneLowerY, itemIDs: string[])
#### ◉ deletePhoneHistoryItemsByUrl (x: VappsPhoneLowerX, y: VappsPhoneLowerY, url: string, headers: Record<string, string>)
#### ◉ deletePhoneSpeedDialItems (x: VappsPhoneLowerX, y: VappsPhoneLowerY, itemIDs: string[])
#### ◉ deletePhoneSpeedDialItemsByUrl (x: VappsPhoneLowerX, y: VappsPhoneLowerY, url: string, headers: Record<string, string>)

---

### ◼️ 電話操作
#### ◉ register()
#### ◉ unregister()
#### ◉ call()
#### ◉ hangup()
#### ◉ accept()
#### ◉ hold()
#### ◉ unhold()
#### ◉ mute()
#### ◉ unmute()
#### ◉ transfer()
#### ◉ cancelTransfer()
#### ◉ park()
#### ◉ parkup()
#### ◉ listen()
#### ◉ whisper()
#### ◉ barge()
#### ◉ dtmf()

---