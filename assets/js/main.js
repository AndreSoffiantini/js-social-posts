/* MILESTONE 1
Creiamo il nostro array di oggetti che rappresentano ciascun post. 
Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
id del post, numero progressivo da 1 a n
nome autore,
foto autore,
data in formato americano (mm-gg-yyyy),
testo del post,
immagine (non tutti i post devono avere una immagine),
numero di likes. */

const posts = [{
        id: 1,
        author_name: "Andrea Soffiantini",
        author_photo: " ",
        date: "04-12-2022",
        post_text: " ",
        post_image: " ",
        likes: 0
    },
    {
        id: 2,
        author_name: "Paolo Rossi",
        author_photo: " ",
        date: "04-12-2022",
        post_text: " ",
        post_image: " ",
        likes: 0
    }
]

/* MILESTONE 2
Prendendo come riferimento il layout di esempio presente nell'html, 
stampiamo i post del nostro feed. */

/* MILESTONE 3
Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone 
e incrementiamo il counter dei likes relativo.
 Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like. */