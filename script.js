document.addEventListener('DOMContentLoaded',function(){
  const year = document.getElementById('year');
  if(year) year.textContent = new Date().getFullYear();

  const btn = document.getElementById('playAudio');
  const audio = document.getElementById('crowd');
  if(btn && audio){
    btn.addEventListener('click',()=>{
      if(audio.paused){
        audio.play();
        btn.textContent = 'Pause crowd sound';
      } else {
        audio.pause();
        btn.textContent = 'Play crowd sound';
      }
    });
    audio.addEventListener('ended',()=>{btn.textContent='Play crowd sound'});
  }

  // small enhancement: smooth scroll for internal bookmark links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click',function(e){
      const target = document.querySelector(this.getAttribute('href'));
      if(target){e.preventDefault();target.scrollIntoView({behavior:'smooth'});}
    });
  });
});
