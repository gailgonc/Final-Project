// Responsive Menu - Dropdown
window.onload=function(){

    const body = document.body;
    
    const sticker = document.querySelector('.rotating-sticker');
    const hamburger = document.getElementById('hamburger');
    const titleText = document.getElementById('picture-text');
        
    hamburger.addEventListener('click', openMenu);

    function openMenu(){
        body.classList.toggle('show');
        console.log(titleText.classList);
        titleText.classList.toggle('banner-child-location');
        console.log(titleText.classList);
       
    }
    

}