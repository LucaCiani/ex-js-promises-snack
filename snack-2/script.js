function lanciaDado() {
    const promessa = new Promise((resolve, reject) => {
        console.log("Lancio il dado...");

        setTimeout(() => {
            let dado = Math.floor(Math.random() * 6 + 1);
            let possibilita1 = Math.floor(Math.random() * 5 + 1);
            let possibilita2 = Math.floor(Math.random() * 5 + 1);

            if (possibilita1 == possibilita2) {
                reject("Il dado si è incastato");
            } else {
                resolve(`È uscito ${dado}`);
            }
        }, 3000);
    });
    return promessa;
}

lanciaDado()
    .then((messaggio) => console.log(messaggio))
    .catch((err) => console.log(err));
