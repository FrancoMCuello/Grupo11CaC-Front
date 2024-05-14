const consultas = [];

const form = document.querySelector("form");
const firstname = document.querySelector("#firstname");

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = firstname.value.trim();

    const erroresValidation = false;

    if (name.length < 3) {
       
        erroresValidation = true;

        const error = document.querySelector('.error');
        error.textContent = ("El nombre no puede tener menos de 3 caracteres");

        setTimeout(() => {
            error.textContent = "";
        }, 2000);

    } 

    if (!erroresValidation) {
       // console.log(name);
        const consulta = {
            id: Date.now(),
            name: name,
            complete: false, 
        };
        

        consultas.push(consulta);
        console.log(consultas);

        form.reset();

        //crear cartel de formulario enviado correctamente
    };


 });