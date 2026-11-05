/* One shared, versioned store keeps every page in sync. */
const KEY='trimtime_data_v1', ACCOUNTS='trimtime_accounts_v1', SESSION='trimtime_session';
const read=()=>JSON.parse(localStorage.getItem(KEY));
const save=data=>localStorage.setItem(KEY,JSON.stringify(data));
const uid=prefix=>prefix+'-'+Date.now().toString(36).toUpperCase()+Math.random().toString(36).slice(2,5).toUpperCase();
const money=n=>'RM '+Number(n||0).toFixed(2);
const esc=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const dateLabel=d=>d?new Date(d+'T12:00:00').toLocaleDateString('en-MY',{day:'numeric',month:'short',year:'numeric'}):'—';
if(!localStorage.getItem(KEY)){
 const services=[['Classic Haircut','A timeless cut, tailored to your style.',25,30,'Hair'],['Skin Fade','A clean, seamless fade with sharp detail.',35,45,'Hair'],['Beard Trim','Shape and tidy your beard.',15,20,'Beard'],['Haircut & Beard Combo','The complete cut and beard refresh.',45,60,'Combo'],['Hair Wash & Styling','A refreshing wash and finished style.',20,25,'Styling'],['Premium Grooming','A premium head-to-toe grooming experience.',60,75,'Premium']].map((s,i)=>({id:'SVC-00'+(i+1),name:s[0],description:s[1],price:s[2],duration:s[3],category:s[4]}));
 const customers=[['Adam Rahman','adam@example.com','012-345 6789'],['Daniel Tan','daniel@example.com','012-567 8901'],['Arif Ismail','arif@example.com','013-222 4521'],['Marcus Lim','marcus@example.com','016-987 2345'],['Farhan Aziz','farhan@example.com','019-876 1234'],['Ryan Lee','ryan@example.com','012-333 7788']].map((c,i)=>({id:'CUS-00'+(i+1),name:c[0],email:c[1],phone:c[2]}));
 const now=new Date();const day=(offset)=>{const d=new Date(now.getFullYear(),now.getMonth(),now.getDate()+offset);return [d.getFullYear(),String(d.getMonth()+1).padStart(2,'0'),String(d.getDate()).padStart(2,'0')].join('-')};
 const appointments=Array.from({length:18},(_,i)=>({id:'BK-'+String(1001+i),customerId:customers[i%6].id,serviceId:services[i%6].id,barber:['Amir','Daniel','Zack'][i%3],date:day(i<6?i+1:-i*7),time:['10:00','11:30','14:00','15:30'][i%4],price:services[i%6].price,status:i<6?(i%2?'Pending':'Confirmed'):(i%5===0?'Cancelled':'Completed')}));
 save({services,customers,appointments});
}
