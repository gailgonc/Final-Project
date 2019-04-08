// Responsive Menu - Dropdown
window.onload=function(){

    const body = document.body;
    
    const sticker = document.querySelector('.rotating-sticker');
    const hamburger = document.getElementById('hamburger');
        
    hamburger.addEventListener('click', openMenu);

    function openMenu(){
        body.classList.toggle('show');
    }
    

}