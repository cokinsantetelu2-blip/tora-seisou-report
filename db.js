const DB_NAME='tora-seisou-report';const DB_VERSION=1;const STORE='jobs';
function openDb(){return new Promise((resolve,reject)=>{const r=indexedDB.open(DB_NAME,DB_VERSION);r.onupgradeneeded=()=>{const db=r.result;if(!db.objectStoreNames.contains(STORE)){const s=db.createObjectStore(STORE,{keyPath:'id'});s.createIndex('updatedAt','updatedAt');s.createIndex('workDate','workDate')}};r.onsuccess=()=>resolve(r.result);r.onerror=()=>reject(r.error)})}
async function tx(mode,fn){const db=await openDb();return new Promise((resolve,reject)=>{const t=db.transaction(STORE,mode),s=t.objectStore(STORE);let result;try{result=fn(s)}catch(e){reject(e)}t.oncomplete=()=>resolve(result);t.onerror=()=>reject(t.error);t.onabort=()=>reject(t.error)})}
export async function putJob(job){job.updatedAt=new Date().toISOString();await tx('readwrite',s=>s.put(job));return job}
export async function getJob(id){const db=await openDb();return new Promise((res,rej)=>{const r=db.transaction(STORE).objectStore(STORE).get(id);r.onsuccess=()=>res(r.result);r.onerror=()=>rej(r.error)})}
export async function allJobs(){const db=await openDb();return new Promise((res,rej)=>{const r=db.transaction(STORE).objectStore(STORE).getAll();r.onsuccess=()=>res(r.result.sort((a,b)=>(b.workDate||'').localeCompare(a.workDate||'')||b.updatedAt.localeCompare(a.updatedAt)));r.onerror=()=>rej(r.error)})}
export async function deleteJob(id){await tx('readwrite',s=>s.delete(id))}
export async function importJobs(jobs){for(const j of jobs)await putJob(j)}
