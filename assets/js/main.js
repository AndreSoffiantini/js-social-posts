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
        author_photo: "https://picsum.photos/536/354",
        date: "04-12-2022",
        post_text: "",
        post_image: "https://picsum.photos/536/355",
        likes: 60
    },
    {
        id: 2,
        author_name: "Paolo Rossi",
        author_photo: "https://picsum.photos/536/356",
        date: "04-12-2022",
        post_text: " ",
        post_image: "https://picsum.photos/536/357",
        likes: 50
    }
]

/* MILESTONE 2
Prendendo come riferimento il layout di esempio presente nell'html, 
stampiamo i post del nostro feed. */

posts.forEach(post => {
    printPost(post);
});

/**
 * La funzione estrae i dati del post dall'array e li stampa a schermo all'interno
 * di apposite cards
 * @param {object} post Il post da stampare
 */
function printPost(post) {

    const mainContainer = document.getElementById("main_container");

    // Creare la sezione del post
    const postSection = document.createElement("section");
    postSection.classList.add("post_section", "bg-white", "mb-5", "p-2");
    postSection.id = `${post.id}`;
    mainContainer.appendChild(postSection);

    // Generare testo random da inserire nel post

    // Inserire il contenuto del post all'interno della sezione, estraendo i dati dall'array
    postSection.innerHTML = `

        <div class="post_header d-flex">

            <img src=${post.author_photo} class="author_photo rounded-circle" alt="...">

            <div class="post_header_text d-flex flex-column mx-4">
                <strong>${post.author_name}</strong>
                <span>${post.date}</span>
            </div>

        </div>

        <div class="post_body mt-3 mb-2">

            <p class="post_text">${post.post_text}</p>
            <img src=${post.post_image} alt="" class="post_image">

        </div>

        <div class="post_footer py-2">

            <div class="row row-cols-2">
                <div class="col text-center"><i class="fa-solid fa-thumbs-up mx-1"></i>Mi piace</div>
                <div class="col text-center">Piace a ${post.likes} persone</div>
            </div>

        </div>

        `;

}

/* MILESTONE 3
Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone 
e incrementiamo il counter dei likes relativo.
Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like. */