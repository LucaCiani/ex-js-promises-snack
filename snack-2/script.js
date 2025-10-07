function creaLanciaDado() {
    let ultimoRisultato = null;

    return function lanciaDado() {
        const promessa = new Promise((resolve, reject) => {
            console.log("Lancio il dado...");

            setTimeout(() => {
                let dado = Math.floor(Math.random() * 6 + 1);
                let possibilita1 = Math.floor(Math.random() * 5 + 1);
                let possibilita2 = Math.floor(Math.random() * 5 + 1);

                if (possibilita1 == possibilita2) {
                    reject("Il dado si è incastato");
                } else {
                    if (dado === ultimoRisultato) {
                        console.log("Incredibile!");
                    }
                    ultimoRisultato = dado;
                    resolve(`È uscito ${dado}`);
                }
            }, 3000);
        });
        return promessa;
    };
}

const lanciaDado = creaLanciaDado();

lanciaDado()
    .then((messaggio) => console.log(messaggio))
    .catch((err) => console.log(err));

lanciaDado()
    .then((messaggio) => console.log(messaggio))
    .catch((err) => console.log(err));
