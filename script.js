const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const money=n=>new Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL',maximumFractionDigits:0}).format(n);
const toast=msg=>{const el=$('#toast');el.textContent=msg;el.classList.add('show');clearTimeout(window.toastTimer);window.toastTimer=setTimeout(()=>el.classList.remove('show'),2800)};

function filterCars(type='all'){
  const q=$('#searchInput').value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'');
  const brand=$('#brandFilter').value;
  const max=Number($('#priceFilter').value);
  let visible=0;
  $$('.vehicle-card').forEach(card=>{
    const text=card.dataset.search.normalize('NFD').replace(/[\u0300-\u036f]/g,'');
    const okType=type==='all'||card.dataset.type.includes(type);
    const ok=q.split(/\s+/).filter(Boolean).every(word=>text.includes(word))&&(!brand||card.dataset.brand===brand)&&Number(card.dataset.price)<=max&&okType;
    card.hidden=!ok;if(ok)visible++;
  });
  $('#emptyState').hidden=visible>0;
  if(!visible) toast('Nenhum veículo com esses filtros.');
}

$('#searchButton').addEventListener('click',()=>{filterCars($('.chip.active').dataset.type);$('#estoque').scrollIntoView()});
$('#searchInput').addEventListener('keydown',e=>{if(e.key==='Enter')$('#searchButton').click()});
$$('.chip').forEach(btn=>btn.addEventListener('click',()=>{$$('.chip').forEach(b=>b.classList.remove('active'));btn.classList.add('active');filterCars(btn.dataset.type)}));
$('#showAll').addEventListener('click',()=>{$('#searchInput').value='';$('#brandFilter').value='';$('#priceFilter').value='999999';$$('.chip').forEach(b=>b.classList.toggle('active',b.dataset.type==='all'));filterCars()});
$$('.favorite').forEach(btn=>btn.addEventListener('click',()=>{btn.classList.toggle('active');btn.textContent=btn.classList.contains('active')?'♥':'♡';toast(btn.classList.contains('active')?'Veículo salvo nos favoritos.':'Veículo removido dos favoritos.')}));
$$('.vehicle-cta').forEach(btn=>btn.addEventListener('click',()=>window.open(`https://wa.me/5511932382008?text=${encodeURIComponent('Olá! Tenho interesse no '+btn.dataset.car+'. Vi no site da Luia Veículos.')}`,'_blank','noopener,noreferrer')));

let term=48;
function calculate(){const value=Number($('#carValue').value)||0;const down=Math.min(Number($('#downPayment').value),value);$('#downPayment').max=Math.max(value*.8,10000);$('#downLabel').textContent=money(down);$('#downPercent').textContent=Math.round(down/value*100||0)+'%';const rate=.016;const financed=Math.max(value-down,0);const installment=financed*(rate*Math.pow(1+rate,term))/(Math.pow(1+rate,term)-1);$('#monthlyPayment').textContent=money(installment||0);$('.calc-result small').textContent=`em ${term} meses`;return installment}
['carValue','downPayment'].forEach(id=>$('#'+id).addEventListener('input',calculate));
$$('.term-buttons button').forEach(btn=>btn.addEventListener('click',()=>{$$('.term-buttons button').forEach(b=>b.classList.remove('active'));btn.classList.add('active');term=Number(btn.dataset.term);calculate()}));
$('#financeForm').addEventListener('submit',e=>{e.preventDefault();const msg=`Olá! Fiz uma simulação no site da Luia. Veículo: ${money(Number($('#carValue').value))}, entrada: ${money(Number($('#downPayment').value))}, prazo: ${term}x. Quero receber uma proposta.`;window.open(`https://wa.me/5511932382008?text=${encodeURIComponent(msg)}`,'_blank','noopener,noreferrer')});
$('#sellForm').addEventListener('submit',e=>{e.preventDefault();const msg=`Olá! Quero avaliar meu ${$('#sellCar').value}, com ${Number($('#sellKm').value).toLocaleString('pt-BR')} km. Meu WhatsApp: ${$('#sellPhone').value}.`;window.open(`https://wa.me/5511932382008?text=${encodeURIComponent(msg)}`,'_blank','noopener,noreferrer')});
$('.menu-button').addEventListener('click',()=>{const nav=$('.desktop-nav');const open=nav.classList.toggle('mobile-open');$('.menu-button').setAttribute('aria-expanded',open);if(open){nav.style.cssText='display:flex;position:absolute;top:70px;left:0;right:0;background:#0a0b0c;padding:22px;flex-direction:column;border-top:1px solid #292c2e'}else nav.style.cssText=''});
calculate();
