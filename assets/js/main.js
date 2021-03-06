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
        author_photo: "",
        date: "04-12-2022",
        post_text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi interdum odio vitae felis ultrices, tempus sagittis mi lobortis. In ac elit non enim semper auctor. Donec vel dictum metus. Duis sem erat, rutrum non diam vitae, luctus dictum mauris. Cras eget rhoncus quam. Integer sagittis ipsum sit amet faucibus ornare.",
        post_image: "https://picsum.photos/536/355",
        likes: 0
    },
    {
        id: 2,
        author_name: "Paolo Rossi",
        author_photo: "https://picsum.photos/536/356",
        date: "04-12-2022",
        post_text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi interdum odio vitae felis ultrices, tempus sagittis mi lobortis. In ac elit non enim semper auctor. Donec vel dictum metus. Duis sem erat, rutrum non diam vitae, luctus dictum mauris. Cras eget rhoncus quam. Integer sagittis ipsum sit amet faucibus ornare.",
        post_image: "https://picsum.photos/536/357",
        likes: 0
    },
    {
        id: 3,
        author_name: "Luca Verdi",
        author_photo: "https://picsum.photos/536/358",
        date: "04-12-2022",
        post_text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi interdum odio vitae felis ultrices, tempus sagittis mi lobortis. In ac elit non enim semper auctor. Donec vel dictum metus. Duis sem erat, rutrum non diam vitae, luctus dictum mauris. Cras eget rhoncus quam. Integer sagittis ipsum sit amet faucibus ornare.",
        post_image: "https://picsum.photos/536/359",
        likes: 0
    },
    {
        id: 4,
        author_name: "Matteo Bianchi",
        author_photo: "https://picsum.photos/536/360",
        date: "04-12-2022",
        post_text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi interdum odio vitae felis ultrices, tempus sagittis mi lobortis. In ac elit non enim semper auctor. Donec vel dictum metus. Duis sem erat, rutrum non diam vitae, luctus dictum mauris. Cras eget rhoncus quam. Integer sagittis ipsum sit amet faucibus ornare.",
        post_image: "https://picsum.photos/536/361",
        likes: 0
    },
    {
        id: 5,
        author_name: "Faolo Pazio",
        author_photo: "https://picsum.photos/536/362",
        date: "04-12-2022",
        post_text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi interdum odio vitae felis ultrices, tempus sagittis mi lobortis. In ac elit non enim semper auctor. Donec vel dictum metus. Duis sem erat, rutrum non diam vitae, luctus dictum mauris. Cras eget rhoncus quam. Integer sagittis ipsum sit amet faucibus ornare.",
        post_image: " ",
        likes: 0
    },
    {
        id: 6,
        author_name: "Paolo Mieli",
        author_photo: "https://picsum.photos/536/364",
        date: "04-12-2022",
        post_text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi interdum odio vitae felis ultrices, tempus sagittis mi lobortis. In ac elit non enim semper auctor. Donec vel dictum metus. Duis sem erat, rutrum non diam vitae, luctus dictum mauris. Cras eget rhoncus quam. Integer sagittis ipsum sit amet faucibus ornare.",
        post_image: "https://picsum.photos/536/365",
        likes: 0
    },
    {
        id: 7,
        author_name: "Amerigo Vespucci",
        author_photo: "https://picsum.photos/536/366",
        date: "04-12-2022",
        post_text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi interdum odio vitae felis ultrices, tempus sagittis mi lobortis. In ac elit non enim semper auctor. Donec vel dictum metus. Duis sem erat, rutrum non diam vitae, luctus dictum mauris. Cras eget rhoncus quam. Integer sagittis ipsum sit amet faucibus ornare.",
        post_image: "https://picsum.photos/536/367",
        likes: 0
    },
    {
        id: 8,
        author_name: "Tonio Cartonio",
        author_photo: "https://picsum.photos/536/368",
        date: "04-12-2022",
        post_text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi interdum odio vitae felis ultrices, tempus sagittis mi lobortis. In ac elit non enim semper auctor. Donec vel dictum metus. Duis sem erat, rutrum non diam vitae, luctus dictum mauris. Cras eget rhoncus quam. Integer sagittis ipsum sit amet faucibus ornare.",
        post_image: "https://picsum.photos/536/369",
        likes: 0
    },
    {
        id: 9,
        author_name: "Walter Veltroni",
        author_photo: "https://picsum.photos/536/370",
        date: "04-12-2022",
        post_text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi interdum odio vitae felis ultrices, tempus sagittis mi lobortis. In ac elit non enim semper auctor. Donec vel dictum metus. Duis sem erat, rutrum non diam vitae, luctus dictum mauris. Cras eget rhoncus quam. Integer sagittis ipsum sit amet faucibus ornare.",
        post_image: "https://picsum.photos/536/371",
        likes: 0
    },
    {
        id: 10,
        author_name: "Amedeo Della Valle",
        author_photo: "https://picsum.photos/536/372",
        date: "04-12-2022",
        post_text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi interdum odio vitae felis ultrices, tempus sagittis mi lobortis. In ac elit non enim semper auctor. Donec vel dictum metus. Duis sem erat, rutrum non diam vitae, luctus dictum mauris. Cras eget rhoncus quam. Integer sagittis ipsum sit amet faucibus ornare.",
        post_image: "https://picsum.photos/536/373",
        likes: 0
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

    // Gestire l'assenza dell'immagine del post

    /* BONUS 2:
    Gestire l'assenza dell'immagine profilo con un elemento di fallback 
    che contiene le iniziali dell'utente (es. Luca Formicola > LF). */

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
                <div class="col text-center">
                    <div class="like_btn"><i class="fa-solid fa-thumbs-up mx-1"></i>Mi piace</div>
                </div>
                <div class="col text-center">Piace a ${post.likes} persone</div>
            </div>

        </div>

        `;

}

/* MILESTONE 3
Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone 
e incrementiamo il counter dei likes relativo.
Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like. */

const likes_btn = document.querySelectorAll(".like_btn");
let liked_posts = [];

/* console.log(likes);
console.log(likes.length);
console.log(likes[0]);
console.log(likes[0].closest(".post_section").id); */

likes_btn.forEach(like => {
    like.addEventListener("click", handleLike);
});

function handleLike(event) {

    /* console.log(event);
    console.log(event.path);
    console.log(event.path[1]); */

    /* Al click il like_btn cambia colore (primary di Boostrap), 
    andando ad assegnare l'apposita classe al nodo della DOM relativo a like_btn
    (ossia il secondo elemento del path relativo all'elemento dell'event) */
    event.path[1].classList.add("text-primary");

    // Recuperare l'id della post_section in cui è contenuto il like premuto
    /* console.log(event.path);
    console.log(parseInt(event.path[4].id)); */

    const post_id = parseInt(event.path[4].id);

    // Incrementare il numero di likes
    posts[post_id - 1].likes++;
    //console.log(posts[post_id - 1].likes);

    // Stampare a schermo il nuovo numero di likes
    //console.log(event.path[2].lastElementChild);
    event.path[2].lastElementChild.innerHTML = `Piace a ${posts[post_id - 1].likes} persone`;

    // Salvare nell'apposito array l'id del post piaciuto
    liked_posts.push(post_id);
    liked_posts.sort();
    console.clear();
    console.log(`Liked posts IDs: ${liked_posts}`);

    /* BONUS 3
    Al click su un pulsante "Mi Piace" di un post, se abbiamo già cliccato 
    dobbiamo decrementare il contatore e cambiare il colore del bottone. */

    // Rimuovere l'eventListener per gestire il like
    event.path[0].removeEventListener("click", handleLike);

    // Aggiungere l'eventListener per gestire il dislike
    event.path[0].addEventListener("click", handleDislike);

}

function handleDislike(event) {

    /* Al click il like_btn ritorna del colore originale, 
    andando ad rimuovere l'apposita classe al nodo della DOM relativo a like_btn
    (ossia il secondo elemento del path relativo all'elemento dell'event) */
    event.path[1].classList.remove("text-primary");

    // Recuperare l'id della post_section in cui è contenuto il like premuto
    /* console.log(event.path);
    console.log(parseInt(event.path[4].id)); */

    const post_id = parseInt(event.path[4].id);

    // Ridurre il numero di likes
    posts[post_id - 1].likes--;
    //console.log(posts[post_id - 1].likes);

    // Stampare a schermo il nuovo numero di likes
    //console.log(event.path[2].lastElementChild);
    event.path[2].lastElementChild.innerHTML = `Piace a ${posts[post_id - 1].likes} persone`;

    // Rimuovere l'id del post dall'array dei post piaciuti 
    liked_posts = liked_posts.filter(id => id !== post_id);
    liked_posts.sort();
    console.clear();
    console.log(`Liked posts IDs: ${liked_posts}`);

    // Rimuovere l'eventListener per gestire il dislike
    event.path[0].removeEventListener("click", handleDislike);

    // Aggiungere l'eventListener per gestire il like
    event.path[0].addEventListener("click", handleLike);

}