aniOnVisible_El = [] 
aniOnVisible_El =  document.querySelectorAll('.aniOnVisible');


showcaseboxs = document.querySelectorAll('.showcase_box')

showcaseboxs.forEach(element => {
    element.style.opacity = 0;
});


//add delay to the animation of the boxes so that they come in one by one
for (let i = 0; i < showcaseboxs.length; i++) {
    const element = showcaseboxs[i];

    if(i > 0)
    {
        element.style.animationDelay =  (i - 1) + 's'
    }
 
    else{
        element.style.animationDelay = '-1s'
    }

   
    
}

aniOnVisible_El.forEach(element => {
    element.style.opacity = 0;
});



const addVisibleClass = () =>{
    aniOnVisible_El.forEach(el => {
        el.classList.add('visible')
    });
}

const checkVisibility = (off = 0) => {
 aniOnVisible_El.forEach(el => {
     if(
        el.getBoundingClientRect().top < 
        ((window.innerHeight || document.documentElement.clientHeight)) - off )
        {
           el.classList.add('visible')
        }
         
     
 })
}




window.addEventListener('scroll',()=>{
   checkVisibility(5)
})
