let mode=document.getElementById('mode')
mode.addEventListener('click',change)
function change(){
    
    let nav=document.getElementById('nav')
    let links=nav.getElementsByClassName('links')
    
    if(mode.innerText=='dark_mode'){
        let body=document.getElementById('body')
        body.style.backgroundColor='#292929'
        body.style.color='white'
        mode.innerText='light_mode'
        mode.style.color='white'
        for(let i=0; i<links.length; i++){
            links[i].style.color='white'
        }
        
        let social=document.getElementById('social')
        let icons=social.getElementsByClassName('social')
        
        for(let i=0; i<icons.length; i++){
            icons[i].style.color='white'
        }
    }
    else if(mode.innerText='light_mode'){
        body.style.backgroundColor='white'
        body.style.color='black'
        mode.innerText='dark_mode'
        mode.style.color='black'
        for(let i=0; i<links.length; i++){
            links[i].style.color='grey'
        }
        let social=document.getElementById('social')
        let icons=social.getElementsByClassName('social')
        for(let i=0; i<icons.length; i++){
            icons[i].style.color='black'
        }
    }

}