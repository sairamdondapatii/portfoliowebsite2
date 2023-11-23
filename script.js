let mode=document.getElementById('mode')



mode.addEventListener('click',change)

function change(){
    let nav=document.getElementById('nav')
    let links=nav.getElementsByClassName('links')
    document.body.classList.toggle("darkmode")
    let social=document.getElementById('social')
    let icons=social.getElementsByClassName('social')
    if(mode.innerText=='dark_mode'){
        mode.innerText='light_mode'
        mode.style.color='white'
        for(let i=0; i<links.length; i++){
            links[i].style.color='white'
        }
        for(let i=0; i<icons.length; i++){
            icons[i].style.color='grey'
        }
    }
    else{
        mode.innerText='dark_mode'
        mode.style.color='black'
        for(let i=0; i<links.length; i++){
            links[i].style.color='grey'
        }
        for(let i=0; i<icons.length; i++){
            icons[i].style.color='black'
        }
    }

}