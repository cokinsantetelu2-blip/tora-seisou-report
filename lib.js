export const AREAS=['キッチン','浴室','洗面','トイレ','玄関','居室','ベランダ','その他'];
export const uid=()=>crypto.randomUUID?.()||`${Date.now()}-${Math.random().toString(16).slice(2)}`;
export function emptyJob(){return{id:uid(),client:'',property:'',room:'',address:'',workDate:new Date().toISOString().slice(0,10),worker:'',notes:'',photos:[],defects:[],createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()}}
export function escapeHtml(v=''){return String(v).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
export function searchJobs(jobs,q){q=q.trim().toLowerCase();if(!q)return jobs;return jobs.filter(j=>[j.client,j.property,j.room,j.address,j.worker].some(v=>(v||'').toLowerCase().includes(q)))}
export function validateBackup(data){return data&&data.app==='tora-seisou-report'&&Array.isArray(data.jobs)}
export function backupPayload(jobs){return{app:'tora-seisou-report',version:1,exportedAt:new Date().toISOString(),jobs}}
