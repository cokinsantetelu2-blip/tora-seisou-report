export const DRIVE_SCOPE='https://www.googleapis.com/auth/drive.file';
export const DRIVE_FILE_PREFIX='とら清掃報告-';

export function driveFileName(date=new Date()){
  return `${DRIVE_FILE_PREFIX}${date.toISOString().slice(0,10)}.json`;
}

export function driveListUrl(){
  const query="mimeType='application/json' and trashed=false and name contains 'とら清掃報告-'";
  const params=new URLSearchParams({spaces:'drive',orderBy:'createdTime desc',pageSize:'20',fields:'files(id,name,createdTime)',q:query});
  return `https://www.googleapis.com/drive/v3/files?${params}`;
}

export function latestDriveBackup(response){
  const files=Array.isArray(response?.files)?response.files:[];
  return files[0]||null;
}

export function multipartBackup(payload,name,boundary){
  const meta={name,mimeType:'application/json',appProperties:{application:'tora-seisou-report',schema:'1'}};
  return `--${boundary}\r\nContent-Type: application/json; charset=UTF-8\r\n\r\n${JSON.stringify(meta)}\r\n--${boundary}\r\nContent-Type: application/json\r\n\r\n${JSON.stringify(payload)}\r\n--${boundary}--`;
}
