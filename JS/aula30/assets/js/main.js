function cronometro() {
    const relogio = document.querySelector('.relogio');
    let segundos = 0;
    let timer;

    function mostraHora(segundos) {
        let data = new Date(segundos * 1000);

        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'UTC'
        });
    }

    function iniciaRelogio() {
        timer = setInterval(() => {
            segundos++;
            relogio.innerHTML = mostraHora(segundos);
        }, 1000);
    }

    document.addEventListener('click', function(e) {
        const el = e.target;

        if (el.classList.contains('zerar')) {
            relogio.classList.remove('pausado');
            clearInterval(timer);
            relogio.innerHTML = '00:00:00';
            segundos = 0;
        }

        if (el.classList.contains('iniciar')) {
            relogio.classList.remove('pausado');
            clearInterval(timer);
            iniciaRelogio();
        }

        if (el.classList.contains('pausar')) {
            relogio.classList.add('pausado');
            clearInterval(timer);
        }
    });

    /**iniciar.addEventListener('click', function() {
     * 
    relogio.classList.remove('pausado');
    clearInterval(timer);
    iniciaRelogio();
});

pausar.addEventListener('click', function() {
    relogio.classList.add('pausado');
    clearInterval(timer);
});

zerar.addEventListener('click', function() {
    relogio.classList.remove('pausado');
    clearInterval(timer);
    segundos = 0;
    relogio.innerHTML = '00:00:00';
}); **/
}

cronometro();