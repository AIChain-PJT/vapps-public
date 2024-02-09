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
#### ◉ Vapps.getPhoneI18nDictionary (x, y, asJsonStr, indent)
INTERFACE
```
Vapps.getPhoneI18nDictionary (x: VappsPhoneLowerX, y: VappsPhoneLowerY, asJsonStr?: boolean, indent?: boolean): string | VappsPhoneDictionary
```
#### ◉ Vapps.putPhoneBookItems (x, y, items)
INTERFACE
```
Vapps.putPhoneBookItems (x: VappsPhoneLowerX, y: VappsPhoneLowerY, items: VappsPhoneBookItem[])
```
#### ◉ Vapps.putPhoneBookItemsByUrl (x, y, url, headers)
INTERFACE
```
Vapps.putPhoneBookItemsByUrl (x: VappsPhoneLowerX, y: VappsPhoneLowerY, url: string, headers: Record<string, string>)
```
#### ◉ Vapps.putPhoneHistoryItems (x, y, items)
INTERFACE
```
Vapps.putPhoneHistoryItems (x: VappsPhoneLowerX, y: VappsPhoneLowerY, items: VappsPhoneHistoryItem[])
```
#### ◉ Vapps.putPhoneHistoryItemsByUrl (x, y, url, headers)
INTERFACE
```
Vapps.putPhoneHistoryItemsByUrl (x: VappsPhoneLowerX, y: VappsPhoneLowerY, url: string, headers: Record<string, string>)
```
#### ◉ Vapps.putPhoneSpeedDialItems (x, y, items)
INTERFACE
```
Vapps.putPhoneSpeedDialItems (x: VappsPhoneLowerX, y: VappsPhoneLowerY, items: VappsPhoneSpeedDialItem[])
```
#### ◉ Vapps.putPhoneSpeedDialItemsByUrl (x, y, url, headers)
INTERFACE
```
Vapps.putPhoneSpeedDialItemsByUrl (x: VappsPhoneLowerX, y: VappsPhoneLowerY, url: string, headers: Record<string, string>)
```
#### ◉ Vapps.pushPhoneBookItems (x, y, items)
INTERFACE
```
Vapps.pushPhoneBookItems (x: VappsPhoneLowerX, y: VappsPhoneLowerY, items: VappsPhoneBookItem[])
```
#### ◉ Vapps.pushPhoneBookItemsByUrl (x, y, url, headers)
INTERFACE
```
Vapps.pushPhoneBookItemsByUrl (x: VappsPhoneLowerX, y: VappsPhoneLowerY, url: string, headers: Record<string, string>)
```
#### ◉ Vapps.pushPhoneHistoryItems (x, y, items)
INTERFACE
```
Vapps.pushPhoneHistoryItems (x: VappsPhoneLowerX, y: VappsPhoneLowerY, items: VappsPhoneHistoryItem[])
```
#### ◉ Vapps.pushPhoneHistoryItemsByUrl (x, y, url, headers)
INTERFACE
```
Vapps.pushPhoneHistoryItemsByUrl (x: VappsPhoneLowerX, y: VappsPhoneLowerY, url: string, headers: Record<string, string>)
```
#### ◉ Vapps.pushPhoneSpeedDialItems (x, y, items)
INTERFACE
```
Vapps.pushPhoneSpeedDialItems (x: VappsPhoneLowerX, y: VappsPhoneLowerY, items: VappsPhoneSpeedDialItem[])
```
#### ◉ Vapps.pushPhoneSpeedDialItemsByUrl (x, y, url, headers)
INTERFACE
```
Vapps.pushPhoneSpeedDialItemsByUrl (x: VappsPhoneLowerX, y: VappsPhoneLowerY, url: string, headers: Record<string, string>)
```
#### ◉ Vapps.deletePhoneBookItems (x, y, itemIDs)
INTERFACE
```
Vapps.deletePhoneBookItems (x: VappsPhoneLowerX, y: VappsPhoneLowerY, itemIDs: string[])
```
#### ◉ Vapps.deletePhoneBookItemsByUrl (x, y, url, headers)
INTERFACE
```
Vapps.deletePhoneBookItemsByUrl (x: VappsPhoneLowerX, y: VappsPhoneLowerY, url: string, headers: Record<string, string>)
```
#### ◉ Vapps.deletePhoneHistoryItems (x, y, itemIDs)
INTERFACE
```
Vapps.deletePhoneHistoryItems (x: VappsPhoneLowerX, y: VappsPhoneLowerY, itemIDs: string[])
```
#### ◉ Vapps.deletePhoneHistoryItemsByUrl (x, y, url, headers)
INTERFACE
```
Vapps.deletePhoneHistoryItemsByUrl (x: VappsPhoneLowerX, y: VappsPhoneLowerY, url: string, headers: Record<string, string>)
```
#### ◉ Vapps.deletePhoneSpeedDialItems (x, y, itemIDs)
INTERFACE
```
Vapps.deletePhoneSpeedDialItems (x: VappsPhoneLowerX, y: VappsPhoneLowerY, itemIDs: string[])
```
#### ◉ Vapps.deletePhoneSpeedDialItemsByUrl (x, y, url, headers)
INTERFACE
```
Vapps.deletePhoneSpeedDialItemsByUrl (x: VappsPhoneLowerX, y: VappsPhoneLowerY, url: string, headers: Record<string, string>)
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