// Banana Exchange — vanilla JS
(function(){
  // Mobile menu toggle
  document.querySelectorAll('[data-menu-toggle]').forEach(btn=>{
    btn.addEventListener('click',()=>{
      const target=document.querySelector(btn.getAttribute('data-target'));
      if(target) target.classList.toggle('open');
    });
  });

  // Year
  document.querySelectorAll('[data-year]').forEach(el=>{el.textContent=new Date().getFullYear()});

  // World cup swiper
  const wcRoot=document.querySelector('[data-wc]');
  if(wcRoot){
    const cups=window.__WORLD_CUPS__||[];
    const elBadge=wcRoot.querySelector('[data-wc-badge]');
    const elTitle=wcRoot.querySelector('[data-wc-title]');
    const elSub=wcRoot.querySelector('[data-wc-sub]');
    const elBlurb=wcRoot.querySelector('[data-wc-blurb]');
    const elFixtures=wcRoot.querySelector('[data-wc-fixtures]');
    const dotsWrap=wcRoot.querySelector('[data-wc-dots]');
    const body=wcRoot.querySelector('[data-wc-body]');
    let idx=0;

    function render(){
      const c=cups[idx];if(!c)return;
      elBadge.textContent=c.badge;
      const parts=c.title.split(' ');
      elTitle.innerHTML='<span class="text-primary">'+parts.slice(0,-1).join(' ')+'</span> '+parts.slice(-1);
      elSub.textContent=c.sub;
      elBlurb.textContent=c.blurb;
      elFixtures.innerHTML=c.fixtures.map(f=>(
        '<div class="card fixture"><div><div class="t">'+f.teams+'</div><div class="d">'+f.date+'</div></div><div class="o">'+f.odds+'</div></div>'
      )).join('');
      dotsWrap.innerHTML=cups.map((_,i)=>'<button class="wc-dot'+(i===idx?' active':'')+'" data-go="'+i+'" aria-label="Slide '+(i+1)+'"></button>').join('');
      dotsWrap.querySelectorAll('button').forEach(b=>b.addEventListener('click',()=>{idx=parseInt(b.dataset.go);render()}));
      body.classList.remove('rise');void body.offsetWidth;body.classList.add('rise');
    }
    wcRoot.querySelector('[data-wc-prev]').addEventListener('click',()=>{idx=(idx-1+cups.length)%cups.length;render()});
    wcRoot.querySelector('[data-wc-next]').addEventListener('click',()=>{idx=(idx+1)%cups.length;render()});
    render();
  }
})();
