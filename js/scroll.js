(function () {
  
    
// Objeto con propiedades del scroll
var propScroll = {

    posicion: window.pageYOffset,
    scroll_suave: document.getElementsByClassName('scroll-suave'),
    volver_arriba: document.getElementsByClassName('volver-arriba'),
    destino: null,
    distancia: null,
    intervalo: null

}

// Objeto con metodos del scroll
var metScroll = {

    inicio: function () {
        for (let i = 0; i < propScroll.scroll_suave.length; i++) {
            propScroll.scroll_suave[i].addEventListener('click', metScroll.moverse); 
        }

        for (let i = 0; i < propScroll.volver_arriba.length; i++) {
            propScroll.volver_arriba[i].addEventListener('click', metScroll.subir); 
        }
    },

    moverse: function (e) {
        e.preventDefault();
        clearInterval(propScroll.intervalo);
        propScroll.destino = this.getAttribute('href');
        propScroll.distancia = document.querySelector(propScroll.destino).offsetTop - 65;

        propScroll.posicion = window.pageYOffset;
        propScroll.intervalo = setInterval(function () {

            if (propScroll.posicion < propScroll.distancia) {
                propScroll.posicion += 20;

                if (propScroll.posicion >= propScroll.distancia) {
                    clearInterval(propScroll.intervalo);
                }

            } else {

                propScroll.posicion -= 20;
                if (propScroll.posicion <= propScroll.distancia) {
                    clearInterval(propScroll.intervalo)
                }

            }

            window.scrollTo(0, propScroll.posicion)
            
        }, 15)
    },

    subir: function (e) {
        e.preventDefault();
        clearInterval(propScroll.intervalo)
        propScroll.posicion = window.pageYOffset;
        propScroll.intervalo = setInterval(function () {
            
            if (propScroll.posicion > 0) {
                propScroll.posicion -= 20;

                if (propScroll.posicion < 0) {
                    clearInterval(propScroll.intervalo)
                }

            } else {
                return;
            }

            window.scrollTo(0, propScroll.posicion);

        }, 15)
    }

}

metScroll.inicio()
    
}())