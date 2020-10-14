(function () {
   
    
// Objeto con propiedades del formulario
var propFormulario = {

    formulario: document.formulario_contacto,
    elementos: document.formulario_contacto.elements,
    error: null,
    textError: null

}

// Objeto con metodos del formulario
var metFormulario = {

    inicio: function () {
        for (let i = 0; i < propFormulario.elementos.length; i++) {
            if (propFormulario.elementos[i].type == 'text' || propFormulario.elementos[i].type == 'email' || propFormulario.elementos[i].nodeName.toLowerCase() == 'textarea') {
                propFormulario.elementos[i].addEventListener('focus', metFormulario.focusInputs);
                propFormulario.elementos[i].addEventListener('blur', metFormulario.blurInputs);
            }            
        }

        propFormulario.formulario.addEventListener('submit', metFormulario.validarInputs);

    },

    focusInputs: function () {
        this.parentElement.children[1].className = 'label active'
    },

    blurInputs: function () {
        if (this.value == '') {
            this.parentElement.children[1].className = 'label'
        }
    },

    validarInputs: function (e) {
        for (let i = 0; i < propFormulario.elementos.length; i++) {
            if (propFormulario.elementos[i].value == '') {
                e.preventDefault()

                if (propFormulario.elementos[i].parentElement.children.length < 3) {
                    
                    propFormulario.error = document.createElement('p');
                    propFormulario.textError = document.createTextNode('Por favor llene el campo con el ' + propFormulario.elementos[i].name);
                    propFormulario.error.appendChild(propFormulario.textError);
                    propFormulario.error.className = 'error';

                    propFormulario.elementos[i].parentElement.appendChild(propFormulario.error);
                }

            }   else {

                if (propFormulario.elementos[i].parentElement.children.length >= 3 ) {
                    propFormulario.error = propFormulario.elementos[i].parentElement.getElementsByTagName('p')[0];
                    propFormulario.elementos[i].parentElement.removeChild(propFormulario.error)
                }
                
                console.log(propFormulario.elementos[i])
            }  
            

        }
    }

}

metFormulario.inicio()
    
})()