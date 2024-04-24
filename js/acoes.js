class Acoes{

    constructor(){

        this.carta = document.querySelector('#cartaAberta');
        this.envelope = document.querySelector('#envelope');
        this.msg = document.querySelector('strong');

        this.abrirCarta();

    }

    abrirCarta(){

        this.envelope.addEventListener('click', e=>{

            this.envelope.style.display = 'none';
            this.msg.style.display = 'none';
            this.carta.style.display = 'block';

        });

    }

}

new Acoes();