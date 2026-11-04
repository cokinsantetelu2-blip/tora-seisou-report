# セキュリティとプライバシー

## 公開されるもの

GitHub PagesにはHTML、CSS、JavaScript、PWAアイコンだけが公開されます。

## 公開されないもの

現場情報、住所、担当者、写真、不具合、JSONバックアップ、PDF、Google OAuth Client ID、アクセストークンはリポジトリへ保存しません。現場データは利用者のブラウザ内IndexedDBに保存されます。

## Google Drive

OAuth Client IDはアプリの設定画面から端末内localStorageへ保存します。アクセストークンはメモリ内だけで扱い、永続化しません。要求スコープは`drive.file`です。

## 注意

GitHub Pagesは公開サイトです。アプリ本体へログイン機能はありません。共有端末では使用せず、端末の画面ロックと定期的なJSONバックアップを利用してください。
