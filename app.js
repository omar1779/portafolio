//scroll Reveal//
ScrollReveal().reveal('.title');
ScrollReveal().reveal('.a1',{ delay: 400 });
ScrollReveal().reveal('.a2',{ delay: 700 });
ScrollReveal().reveal('.image-menu',{ delay: 900 });
ScrollReveal().reveal('.title2',{ delay: 1200});
ScrollReveal().reveal('.carousel');
ScrollReveal().reveal('.carousel-item',{ delay: 200});
ScrollReveal().reveal('.container-aboute');
ScrollReveal().reveal('.title-about');
ScrollReveal().reveal('.container-description');
ScrollReveal().reveal('.container-language');
ScrollReveal().reveal('.img-one',{ delay: 900});
ScrollReveal().reveal('.img-two',{ delay: 1200});
ScrollReveal().reveal('.img-three',{ delay: 1500});
ScrollReveal().reveal('.img-four',{ delay: 1800});
ScrollReveal().reveal('.container-form',{ delay: 200});
ScrollReveal().reveal('.title-form',{ delay: 400});
ScrollReveal().reveal('.formulario',{ delay: 600});
ScrollReveal().reveal('.c-input',{ delay: 800});
ScrollReveal().reveal('.c-input2',{ delay: 1000});
ScrollReveal().reveal('.message',{ delay: 1200});

//recoleccion de datos del formulario ejecutado por consola mediante una funcion//

function captura(){
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    let formulario ="hola soy: "+ name+
                    " mi email es el siguiente: "+ email+
                    " este mensaje es para ti: "+message;
    console.log(formulario);
}

