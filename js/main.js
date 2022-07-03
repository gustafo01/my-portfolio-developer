
document.querySelector('.arrow').addEventListener('click', (e) => {
   e.preventDefault();
   const footer = document.querySelector('#footer');

   footer.scrollIntoView({behavior:"smooth", block:"end"});
   document.querySelector('.arrow').removeEventListener('click', console.log('unmount'));
});

