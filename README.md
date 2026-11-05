# とら清掃報告

本人1名向けの、iPhone Safari優先・オフライン対応PWAです。現場、ビフォー／アフター写真、不具合、履歴、PDF印刷、JSONバックアップをブラウザ内に保存します。

## データ保護

- 物件情報と写真はIndexedDBへ保存され、GitHubへ送信されません。
- Web OAuth Client IDは公開識別子としてアプリに設定済みです。必要な場合だけブラウザごとに上書きできます。
- Google Driveは`drive.file`権限を要求し、このアプリが作成するバックアップだけを扱います。
- GitHub Pagesは静的アプリ本体だけを公開します。

## PDF

報告書ボタンで印刷用画面を開きます。印刷先で「PDFとして保存」を選択してください。iPhoneは共有→プリント→プレビューをピンチ拡大→共有でPDF保存できます。

## Google Drive設定

Google Cloud Consoleで作成したWeb OAuth Client IDとGitHub Pagesの承認済みJavaScript生成元は設定済みです。ChromeやiPhoneでClient IDを入力せず、JSONバックアップをDriveへ保存し、同じアプリが作成した最新バックアップから復元できます。権限は`drive.file`に限定します。Client IDは公開識別子であり、クライアントシークレットとアクセストークンはアプリにもリポジトリにも保存しません。

## 開発確認

```sh
npm test
python -m http.server 4173
```

## 制約

- iPhone実機でのカメラ、ホーム画面追加、印刷UIは実機未確認です。
- Google DriveバックアップはGoogle本人認証後に利用できます。
- Googleフォトとの自動同期は提供APIの制限上、実装していません。iPhone側のGoogleフォトバックアップを併用してください。


iPhone Safariのポップアップ制限に対応するため、Google Identity Servicesはページ起動時に準備し、アクセストークン要求はバックアップ／復元ボタンのタップから同期的に開始します。IndexedDBの現場・写真データは更新処理の対象外です。

