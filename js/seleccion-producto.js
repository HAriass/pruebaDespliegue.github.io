
var lomitos = [
    {
        imagen:"../assets/img/lomito 1.png",
        nombre:"Lomito 1",
        descripcion:"Descripcion lomito 1."
    },
    {
        imagen:"../assets/img/lomito2.png",
        nombre:"Lomito 2",
        descripcion:"Descripcion lomito 1."
    }
    
]

var hamburgesas = [
    {
        imagen:"../assets/img/burger1.png",
        nombre:"Burger 1",
        descripcion:"Descripcion burger 1."
    },
    {
        imagen:"../assets/img/burger2.png",
        nombre:"Burger 2",
        descripcion:"Descripcion burger 2."
    },
    {
        imagen:"../assets/img/burger3.png",
        nombre:"Burger 3",
        descripcion:"Descripcion burger 3."
    },
    {
        imagen:"../assets/img/burger4.png",
        nombre:"Burger 4",
        descripcion:"Descripcion burger 4."
    },
    {
        imagen:"../assets/img/burger5.png",
        nombre:"Burger 5",
        descripcion:"Descripcion burger 5."
    }
    
]

const contenedorProductos = document.querySelector(".carousel-inner");

function crearCarouselLomitos(){
    contenedorProductos.innerHTML="";
    for (let i = 0; i < lomitos.length; i++) {
        let item = 
        `
        <div class="carousel-item">
            <img src="${lomitos[i].imagen}" class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
            <h5>${lomitos[i].nombre}</h5>
            <p>${lomitos[i].descripcion}</p>
            </div>
        </div>
        `;
        const elemento = document.createElement('div');
        elemento.innerHTML = item;
        contenedorProductos.appendChild(elemento);
    }
    // Asegúrate de que solo el primer elemento tenga la clase 'active'
    contenedorProductos.querySelector('.carousel-item').classList.add('active');
}


function crearCarouselBurger(){
    contenedorProductos.innerHTML="";
    for (let i = 0; i < hamburgesas.length; i++) {
        let item = 
        `
        <div class="carousel-item">
            <img src="${hamburgesas[i].imagen}" class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
            <h5>${hamburgesas[i].nombre}</h5>
            <p>${hamburgesas[i].descripcion}</p>
            </div>
        </div>
        `;
        const elemento = document.createElement('div');
        elemento.innerHTML = item;
        contenedorProductos.appendChild(elemento);
    }
    // Asegúrate de que solo el primer elemento tenga la clase 'active'
    contenedorProductos.querySelector('.carousel-item').classList.add('active');
    
}


crearCarouselLomitos();