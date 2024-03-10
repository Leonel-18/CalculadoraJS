const pantalla = document.querySelector('.pantalla');
const boton = document.querySelectorAll('.btn');

boton.forEach(boton => {
    boton.addEventListener('click', ()=>{

        const botonApretado = boton.textContent;

        // Para borrar todos los números de una
        if(boton.id === "c"){
            pantalla.textContent = "0";
            return;
        }
        // Borrar de a un número
        if(boton.id === "borrar"){
            if(pantalla.textContent.length === 1 || pantalla.textContent === "Error!"){
                pantalla.textContent = "0";
            }else{
                pantalla.textContent = pantalla.textContent.slice(0, -1);
            }
            return;
        }

        // IGUAL
        if(boton.id === "igual"){
            try{
                pantalla.textContent = eval(pantalla.textContent);
            }catch{
                pantalla.textContent = "Error!"
            }
            return;
        }

        // Que los botones funcionen
        if(pantalla.textContent === "0" || pantalla.textContent === "Error!"){
            pantalla.textContent = botonApretado;
        }else{
            pantalla.textContent += botonApretado;
        }

    })
})