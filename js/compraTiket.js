function total(){
    const precio = 200;
    let cantidad = document.getElementById("cantidad").value;
    let desc = document.getElementById("categoria").value;
    if(cantidad >=1){
        let total = precio * cantidad;
        total= total - (total*desc/100);
        document.getElementById("total").innerHTML = total;
    }else{
        document.getElementById("total").innerHTML="Ingrese una cantidad mayor o igual a 1";
    }
    
}

// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add('was-validated')
        }, false)
    })
})()

function selectValue(valor){
    document.getElementById("categoria").value=valor;
}

