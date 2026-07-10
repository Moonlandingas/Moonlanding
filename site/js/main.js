(function(){
  var els=document.querySelectorAll('.reveal');
  // stagger: kort i samme grid får trinnvis delay
  document.querySelectorAll('.why-grid,.need-grid,.model-grid,.svc-cols').forEach(function(grid){
    [].slice.call(grid.querySelectorAll('.reveal')).forEach(function(el,i){el.style.transitionDelay=(i*0.12)+'s'});
  });
  if(!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('in')});return;}
  var io=new IntersectionObserver(function(entries){
    entries.forEach(function(en){if(en.isIntersecting){en.target.classList.add('in');io.unobserve(en.target);}});
  },{threshold:.12});
  els.forEach(function(e){io.observe(e)});
})();
(function(){
  // count-up på hero-tallene
  var meta=document.querySelector('.hero-meta');if(!meta)return;
  var done=false;
  function run(){
    if(done)return;done=true;
    meta.querySelectorAll('strong').forEach(function(el){
      var txt=el.textContent,m=txt.match(/\d+/);if(!m)return;
      var target=parseInt(m[0],10),pre=txt.slice(0,m.index),post=txt.slice(m.index+m[0].length);
      var t0=null,dur=1600;
      function step(ts){if(!t0)t0=ts;var p=Math.min((ts-t0)/dur,1);var e=1-Math.pow(1-p,3);
        el.textContent=pre+Math.round(target*e)+post;
        if(p<1)requestAnimationFrame(step)}
      requestAnimationFrame(step);
    });
  }
  if(window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  setTimeout(run,900);
})();
(function(){
  var orb=document.getElementById('aiOrb'),panel=document.getElementById('aiPanel'),teaser=document.getElementById('aiTeaser');
  setTimeout(function(){if(!panel.classList.contains('open'))teaser.classList.add('show')},2500);
  setTimeout(function(){teaser.classList.remove('show')},12000);
  orb.addEventListener('click',function(){
    teaser.classList.remove('show');
    panel.classList.toggle('open');
  });
  teaser.addEventListener('click',function(){teaser.classList.remove('show');panel.classList.add('open')});
})();