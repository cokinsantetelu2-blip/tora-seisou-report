# とら清掃報告

本人1名向けの、iPhone Safari優先・オフライン対応PWAです。現場、ビフォー／アフター写真、不具合、履歴、PDF印刷、JSONバックアップをブラウザ内に保存します。

## データ保護

- 物件情報と写真はIndexedDBへ保存され、GitHubへ送信されません。
- OAuth Client IDは利用者が設定した端末のlocalStorageだけに保存されます。
- Google Driveは`drive.file`権限を要求し、このアプリが作成するバックアップだけを扱います。
- GitHub Pagesは静的アプリ本体だけを公開します。

## PDF

報告書ボタンで印刷用画面を開きます。印刷先で「PDFとして保存」を選択してください。iPhoneは共有→プリント→プレビューをピンチ拡大→共有でPDF保存できます。

## Google Drive設定

Google Cloud ConsoleでWeb OAuth Client IDを作成し、承認済みJavaScript生成元にGitHub PagesのURLを登録してください。Client IDをアプリの設定画面へ入力すると、JSONバックアップをDriveへ保存できます。Client IDは秘密鍵ではありませんが、リポジトリには保存しません。

## 開発確認

```sh
npm test
python -m http.server 4173
```

## 制約

- iPhone実機でのカメラ、ホーム画面追加、印刷UIは実機未確認です。
- Google Drive自動保存はOAuth Client ID設定後に利用できます。
- Googleフォトとの自動同期は提供APIの制限上、実装していません。iPhone側のGoogleフォトバックアップを併用してください。
