const photos = [
{"file": "assets/20250418_171123.jpg", "category": "celebration", "caption": "Ganesh Mandap Decorations \u00b7 20250418 171123"},
{"file": "assets/20250601_193012.jpg", "category": "mandap", "caption": "Ganesh Mandap Decorations \u00b7 20250601 193012"},
{"file": "assets/20250601_193016.jpg", "category": "mandap", "caption": "Ganesh Mandap Decorations \u00b7 20250601 193016"},
{"file": "assets/IMG-20250602-WA0024.jpg", "category": "celebration", "caption": "Ganesh Mandap Decorations \u00b7 IMG-20250602-WA0024"},
{"file": "assets/IMG-20250602-WA0025.jpg", "category": "mandap", "caption": "Ganesh Mandap Decorations \u00b7 IMG-20250602-WA0025"},
{"file": "assets/IMG-20251110-WA0031.jpg", "category": "mandap", "caption": "Ganesh Mandap Decorations \u00b7 IMG-20251110-WA0031"},
{"file": "assets/IMG-20251110-WA0032.jpg", "category": "celebration", "caption": "Ganesh Mandap Decorations \u00b7 IMG-20251110-WA0032"},
{"file": "assets/IMG-20251110-WA0038.jpg", "category": "mandap", "caption": "Ganesh Mandap Decorations \u00b7 IMG-20251110-WA0038"},
{"file": "assets/IMG-20251110-WA0043.jpg", "category": "mandap", "caption": "Ganesh Mandap Decorations \u00b7 IMG-20251110-WA0043"},
{"file": "assets/IMG-20251110-WA0047.jpg", "category": "celebration", "caption": "Ganesh Mandap Decorations \u00b7 IMG-20251110-WA0047"},
{"file": "assets/IMG-20260312-WA0039.jpg", "category": "mandap", "caption": "Ganesh Mandap Decorations \u00b7 IMG-20260312-WA0039"},
{"file": "assets/IMG-20260312-WA0040.jpg", "category": "mandap", "caption": "Ganesh Mandap Decorations \u00b7 IMG-20260312-WA0040"},
{"file": "assets/IMG-20260324-WA0037.jpg", "category": "celebration", "caption": "Ganesh Mandap Decorations \u00b7 IMG-20260324-WA0037"},
{"file": "assets/IMG-20260403-WA0012.jpg", "category": "mandap", "caption": "Ganesh Mandap Decorations \u00b7 IMG-20260403-WA0012"},
{"file": "assets/IMG20250601191645.jpg", "category": "mandap", "caption": "Ganesh Mandap Decorations \u00b7 IMG20250601191645"},
{"file": "assets/IMG20250601192645.jpg", "category": "celebration", "caption": "Ganesh Mandap Decorations \u00b7 IMG20250601192645"},
{"file": "assets/IMG_20251110_171407.jpg", "category": "mandap", "caption": "Ganesh Mandap Decorations \u00b7 IMG 20251110 171407"},
{"file": "assets/IMG_20251206_175713.jpg", "category": "mandap", "caption": "Ganesh Mandap Decorations \u00b7 IMG 20251206 175713"},
{"file": "assets/IMG_20251206_175724.jpg", "category": "celebration", "caption": "Ganesh Mandap Decorations \u00b7 IMG 20251206 175724"},
{"file": "assets/IMG_20251206_210920.jpg", "category": "mandap", "caption": "Ganesh Mandap Decorations \u00b7 IMG 20251206 210920"},
{"file": "assets/IMG_20260101_102303.jpg", "category": "mandap", "caption": "Ganesh Mandap Decorations \u00b7 IMG 20260101 102303"},
{"file": "assets/IMG_20260510_191950.jpg", "category": "celebration", "caption": "Ganesh Mandap Decorations \u00b7 IMG 20260510 191950"},
{"file": "assets/IMG_20260510_193117.jpg", "category": "mandap", "caption": "Ganesh Mandap Decorations \u00b7 IMG 20260510 193117"},
{"file": "assets/IMG_20260511_194021.jpg", "category": "mandap", "caption": "Ganesh Mandap Decorations \u00b7 IMG 20260511 194021"},
{"file": "assets/Screenshot_20260910_115222.jpg", "category": "celebration", "caption": "Ganesh Mandap Decorations \u00b7 Screenshot 20260910 115222"},
{"file": "assets/Screenshot_20260910_221749.jpg", "category": "mandap", "caption": "Ganesh Mandap Decorations \u00b7 Screenshot 20260910 221749"},
{"file": "assets/Screenshot_20260910_224224.jpg", "category": "mandap", "caption": "Ganesh Mandap Decorations \u00b7 Screenshot 20260910 224224"},
{"file": "assets/Screenshot_20260910_224332.jpg", "category": "celebration", "caption": "Ganesh Mandap Decorations \u00b7 Screenshot 20260910 224332"}
];
const grid=document.getElementById('galleryGrid');
const lightbox=document.getElementById('lightbox');
function getUploaded(){try{return JSON.parse(localStorage.getItem('ganeshMandapPhotos')||'[]')}catch(e){return []}}
function renderGallery(filter='all'){
 const all=[...photos,...getUploaded()];
 grid.innerHTML='';
 all.forEach((p,i)=>{
  if(filter!=='all'&&p.category!==filter)return;
  const item=document.createElement('div');item.className='gallery-item';
  const img=document.createElement('img');img.src=p.file;img.alt=p.caption||'Decoration photo';img.loading='lazy';
  img.onerror=()=>{item.style.display='none'};
  item.appendChild(img);item.addEventListener('click',()=>{document.getElementById('lightboxImage').src=p.file;document.getElementById('lightboxCaption').textContent=p.caption||'Ganesh Mandap Decorations';lightbox.classList.add('open');lightbox.setAttribute('aria-hidden','false')});
  grid.appendChild(item);
 });
}
renderGallery();
document.querySelectorAll('.filter').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('.filter').forEach(x=>x.classList.remove('active'));b.classList.add('active');renderGallery(b.dataset.filter)}));
document.getElementById('closeLightbox').addEventListener('click',()=>{lightbox.classList.remove('open');lightbox.setAttribute('aria-hidden','true')});
lightbox.addEventListener('click',e=>{if(e.target===lightbox){lightbox.classList.remove('open');lightbox.setAttribute('aria-hidden','true')}});
document.addEventListener('keydown',e=>{if(e.key==='Escape')lightbox.classList.remove('open')});
document.getElementById('menuToggle').addEventListener('click',()=>document.getElementById('navLinks').classList.toggle('show'));
document.querySelectorAll('#navLinks a').forEach(a=>a.addEventListener('click',()=>document.getElementById('navLinks').classList.remove('show')));
document.getElementById('year').textContent=new Date().getFullYear();
