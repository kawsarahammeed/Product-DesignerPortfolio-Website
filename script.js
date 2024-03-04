       // Nav Bg............
       let nav  = document.querySelector('nav');

       window.addEventListener('scroll', ()=>{
           nav.classList.toggle('nav-bg', window.scrollY > 0)
       });

       // NavLinks Show............
       let Open = document.querySelector('.open');
       let Close = document.querySelector('.close');
       let NavLinks = document.querySelector('.nav-links');

       Open.addEventListener('click',()=>{
           NavLinks.classList.add('nav-links-Show');
           Close.style.display='inline-block'
           Open.style.display='none'
       });
       Close.addEventListener('click',()=>{
           NavLinks.classList.remove('nav-links-Show');
           Close.style.display='none'
           Open.style.display='inline-block'
       });

        // NavLinks Hide Scroll............
        if(innerWidth < 768){
           window.addEventListener('scroll', ()=>{
               NavLinks.classList.remove('nav-links-Show');
               Close.style.display='none'
               Open.style.display='inline-block'
           })
        }