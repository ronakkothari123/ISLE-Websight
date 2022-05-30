document.addEventListener('scroll', function(e){
    if(window.scrollY === 0) document.getElementById('desktop-navbar').style.background = "transparent";
    else document.getElementById('desktop-navbar').style.background = "rgba(255,255,255,0.9)";
})