const typed = new Typed('.typed', {
    strings: [
    '<i class=nombre>Demian Faulhaber <br> Web Developer</i>'    
    ],
    typeSpeed: 40,
    startDelay: 300,
});

//Animación FadeUp
window.addEventListener('scroll', function(){
    var animacion = document.querySelectorAll('.fade_up');

    for(var i = 0; i < animacion.length; i++){

        var posicion = animacion[i].getBoundingClientRect().top;
        var tamanodepantalla = window.innerHeight/1.3;  
    
            animacion[i].classList.add('transform_up')
    
        if(posicion <= tamanodepantalla ){
    
    
            animacion[i].classList.add('show');
    
        }
            else{
            
                    animacion[i].classList.remove('show')
    
    
            }

    }
})


//Animación FadeLeft
window.addEventListener('scroll', function(){
    var animacion = document.querySelectorAll('.fade_left');

    for(var i = 0; i < animacion.length; i++){

        var posicion = animacion[i].getBoundingClientRect().top;
        var tamanodepantalla = window.innerHeight/1.3;  
    
            animacion[i].classList.add('transform_left')
    
        if(posicion <= tamanodepantalla ){
    
    
            animacion[i].classList.add('show');
    
        }
            else{
            
                    animacion[i].classList.remove('show')
    
    
            }

    }
})


//Animación FadeRight
window.addEventListener('scroll', function(){
    var animacion = document.querySelectorAll('.fade_right');

    for(var i = 0; i < animacion.length; i++){

        var posicion = animacion[i].getBoundingClientRect().top;
        var tamanodepantalla = window.innerHeight/1.3;  
    
            animacion[i].classList.add('transform_right')
    
        if(posicion <= tamanodepantalla ){
    
    
            animacion[i].classList.add('show');
    
        }
            else{
            
                    animacion[i].classList.remove('show')
    
    
            }

    }
})


//Animación FadeDown
window.addEventListener('scroll', function(){
    var animacion = document.querySelectorAll('.fade_down');

    for(var i = 0; i < animacion.length; i++){

        var posicion = animacion[i].getBoundingClientRect().top;
        var tamanodepantalla = window.innerHeight/1.3;  
    
            animacion[i].classList.add('transform_down')
    
        if(posicion <= tamanodepantalla ){
    
    
            animacion[i].classList.add('show');
    
        }
            else{
            
                    animacion[i].classList.remove('show')
    
    
            }

    }
})

//Acceso directo a redes sociales

//instagram
document.getElementById("icono-instagram").addEventListener("click", e=>{
    window.location.href = "https://www.instagram.com/demian126/"
})

//github
document.getElementById("icono-github").addEventListener("click", e=>{
    window.location.href = "https://github.com/DemianFaulhaber"
})

//linkedin
document.getElementById("icono-linkedin").addEventListener("click", e=>{
    window.location.href = "https://www.linkedin.com/in/demian-faulhaber-644b68234/"
})

document.getElementById("icono-linkedin").addEventListener("click", e=>{
    window.location.href = "https://www.linkedin.com/in/demian-faulhaber-644b68234/"
})








































/*

(animacion scroll desplazamiento)

window.addEventListener('scroll', function(){
    let animacion = document.getElementById('icono-linkedin');
    let posicionlinked = animacion.getBoundingClientRect().top;
    console.log(posicionlinked);
    let tamanodepantalla = window.innerHeight;  

    if(posicionlinked < tamanodepantalla ){
        animacion.style.animation = 'moverlinked 1s ease-out'
    }
})



window.addEventListener('scroll', function(){
    let animacion = document.getElementById('icono-instagram');
    let posicioninsta = animacion.getBoundingClientRect().top;
    console.log(posicioninsta);
    let tamanodepantalla = window.innerHeight;  

    if(posicioninsta < tamanodepantalla ){
        animacion.style.animation = 'moverinsta 1s ease-out'
    }
})*/