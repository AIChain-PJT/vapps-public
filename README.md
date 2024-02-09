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

```
Vapps.on (ename: string, callback: (e: CustomEvent) => void)
```
#### ◉ Vapps.off (ename, callback)
```
Vapps.off (ename: string, callback: (e: CustomEvent) => void)
```
#### ◉ Vapps.phone (options)
```
Vapps.phone (options: VappsPhoneOptions): string
```
#### ◉ Vapps.openPhone (x, y)
```
Vapps.openPhone (x: VappsPhoneLowerX, y: VappsPhoneLowerY)
```
#### ◉ Vapps.closePhone (x, y)
```
Vapps.closePhone (x: VappsPhoneLowerX, y: VappsPhoneLowerY)
```
#### ◉ Vapps.setPhoneLocale (x, y, locale)
```
Vapps.setPhoneLocale(x: VappsPhoneLowerX, y: VappsPhoneLowerY, locale: VappsPhoneLocale)
```
#### ◉ Vapps.getPhoneLocale (x, y)
```
Vapps.getPhoneLocale (x: VappsPhoneLowerX, y: VappsPhoneLowerY): VappsPhoneLocale | string
```
#### ◉ Vapps.setPhoneTab (x, y, tab)
```
Vapps.setPhoneTab (x: VappsPhoneLowerX, y: VappsPhoneLowerY, tab: VappsPhoneTabType)
```
#### ◉ Vapps.getPhoneTab (x, y)
```
Vapps.getPhoneTab (x: VappsPhoneLowerX, y: VappsPhoneLowerY): string
```
#### ◉ Vapps.setTabMemoryActive (x, y, isTabMemoryActive)
```
Vapps.setTabMemoryActive (x: VappsPhoneLowerX, y: VappsPhoneLowerY, isTabMemoryActive: boolean)
```
#### ◉ Vapps.getTabMemoryActive (x, y)
```
Vapps.getTabMemoryActive (x: VappsPhoneLowerX, y: VappsPhoneLowerY): boolean
```
#### ◉ Vapps.getPhoneI18nDictionary (x, y, asJsonStr, indent)
```
Vapps.getPhoneI18nDictionary (x: VappsPhoneLowerX, y: VappsPhoneLowerY, asJsonStr?: boolean, indent?: boolean): string | VappsPhoneDictionary
```
#### ◉ Vapps.putPhoneBookItems (x, y, items)
```
Vapps.putPhoneBookItems (x: VappsPhoneLowerX, y: VappsPhoneLowerY, items: VappsPhoneBookItem[])
```
#### ◉ Vapps.putPhoneBookItemsByUrl (x, y, url, headers)
```
Vapps.putPhoneBookItemsByUrl (x: VappsPhoneLowerX, y: VappsPhoneLowerY, url: string, headers: Record<string, string>)
```
#### ◉ Vapps.putPhoneHistoryItems (x, y, items)
```
Vapps.putPhoneHistoryItems (x: VappsPhoneLowerX, y: VappsPhoneLowerY, items: VappsPhoneHistoryItem[])
```
#### ◉ Vapps.putPhoneHistoryItemsByUrl (x, y, url, headers)
```
Vapps.putPhoneHistoryItemsByUrl (x: VappsPhoneLowerX, y: VappsPhoneLowerY, url: string, headers: Record<string, string>)
```
#### ◉ Vapps.putPhoneSpeedDialItems (x, y, items)
```
Vapps.putPhoneSpeedDialItems (x: VappsPhoneLowerX, y: VappsPhoneLowerY, items: VappsPhoneSpeedDialItem[])
```
#### ◉ Vapps.putPhoneSpeedDialItemsByUrl (x, y, url, headers)
```
Vapps.putPhoneSpeedDialItemsByUrl (x: VappsPhoneLowerX, y: VappsPhoneLowerY, url: string, headers: Record<string, string>)
```
#### ◉ Vapps.pushPhoneBookItems (x, y, items)
```
Vapps.pushPhoneBookItems (x: VappsPhoneLowerX, y: VappsPhoneLowerY, items: VappsPhoneBookItem[])
```
#### ◉ Vapps.pushPhoneBookItemsByUrl (x, y, url, headers)
```
Vapps.pushPhoneBookItemsByUrl (x: VappsPhoneLowerX, y: VappsPhoneLowerY, url: string, headers: Record<string, string>)
```
#### ◉ Vapps.pushPhoneHistoryItems (x, y, items)
```
Vapps.pushPhoneHistoryItems (x: VappsPhoneLowerX, y: VappsPhoneLowerY, items: VappsPhoneHistoryItem[])
```
#### ◉ Vapps.pushPhoneHistoryItemsByUrl (x, y, url, headers)
```
Vapps.pushPhoneHistoryItemsByUrl (x: VappsPhoneLowerX, y: VappsPhoneLowerY, url: string, headers: Record<string, string>)
```
#### ◉ Vapps.pushPhoneSpeedDialItems (x, y, items)
```
Vapps.pushPhoneSpeedDialItems (x: VappsPhoneLowerX, y: VappsPhoneLowerY, items: VappsPhoneSpeedDialItem[])
```
#### ◉ Vapps.pushPhoneSpeedDialItemsByUrl (x, y, url, headers)
```
Vapps.pushPhoneSpeedDialItemsByUrl (x: VappsPhoneLowerX, y: VappsPhoneLowerY, url: string, headers: Record<string, string>)
```
#### ◉ Vapps.deletePhoneBookItems (x, y, itemIDs)
```
Vapps.deletePhoneBookItems (x: VappsPhoneLowerX, y: VappsPhoneLowerY, itemIDs: string[])
```
#### ◉ Vapps.deletePhoneBookItemsByUrl (x, y, url, headers)
```
Vapps.deletePhoneBookItemsByUrl (x: VappsPhoneLowerX, y: VappsPhoneLowerY, url: string, headers: Record<string, string>)
```
#### ◉ Vapps.deletePhoneHistoryItems (x, y, itemIDs)
```
Vapps.deletePhoneHistoryItems (x: VappsPhoneLowerX, y: VappsPhoneLowerY, itemIDs: string[])
```
#### ◉ Vapps.deletePhoneHistoryItemsByUrl (x, y, url, headers)
```
Vapps.deletePhoneHistoryItemsByUrl (x: VappsPhoneLowerX, y: VappsPhoneLowerY, url: string, headers: Record<string, string>)
```
#### ◉ Vapps.deletePhoneSpeedDialItems (x, y, itemIDs)
```
Vapps.deletePhoneSpeedDialItems (x: VappsPhoneLowerX, y: VappsPhoneLowerY, itemIDs: string[])
```
#### ◉ Vapps.deletePhoneSpeedDialItemsByUrl (x, y, url, headers)
```
Vapps.deletePhoneSpeedDialItemsByUrl (x: VappsPhoneLowerX, y: VappsPhoneLowerY, url: string, headers: Record<string, string>)
```

---

### ◼️ 電話操作
#### ◉ Vapps.register()
#### ◉ Vapps.unregister()
#### ◉ Vapps.call()
#### ◉ Vapps.hangup()
#### ◉ Vapps.accept()
#### ◉ Vapps.hold()
#### ◉ Vapps.unhold()
#### ◉ Vapps.mute()
#### ◉ Vapps.unmute()
#### ◉ Vapps.transfer()
#### ◉ Vapps.cancelTransfer()
#### ◉ Vapps.park()
#### ◉ Vapps.parkup()
#### ◉ Vapps.listen()
#### ◉ Vapps.whisper()
#### ◉ Vapps.barge()
#### ◉ Vapps.dtmf()

---