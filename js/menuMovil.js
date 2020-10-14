
(function () {
    
    
// Objeto con propiedades de menu movil
var propMenuMovil = {

    burguer: document.getElementById('burguer'),
    slideMenu: document.getElementById('slideMenu'),
    menu_activo: false,
    elem_menu: document.querySelectorAll('#slideMenu .movil-menu a')

}

// Objeto con metodos del menu movil
var metMenuMovil = {

    inicio: function () {
        propMenuMovil.burguer.addEventListener('click', metMenuMovil.aparece);

        for (let i = 0; i < propMenuMovil.elem_menu.length; i++) {
            propMenuMovil.elem_menu[i].addEventListener('click', metMenuMovil.ocultar);
        }
    },

    aparece: function () {
        if (propMenuMovil.menu_activo == false) {
            
            propMenuMovil.menu_activo = true
            propMenuMovil.slideMenu.style.marginLeft = '0'

        } else {
            propMenuMovil.menu_activo = false
            propMenuMovil.slideMenu.style.marginLeft = ''
        }

    },

    ocultar: function () {
        propMenuMovil.menu_activo = false
        propMenuMovil.slideMenu.style.marginLeft = ''
    }

}

metMenuMovil.inicio()

}())