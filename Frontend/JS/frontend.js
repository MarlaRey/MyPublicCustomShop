// frontend.js

// Funktion til at foretage API-opkald
async function fetchData() {
    try {
        const response = await fetch('http://localhost:4000/products');
        const data = await response.json();

        // Behandl data her
        console.log(data);
    } catch (error) {
        console.error('Fejl ved hentning af data:', error);
    }
}

// Kald funktionen ved indlæsning af siden eller ved en begivenhed
fetchData();

//BILLEDESKIFTER

// Funktion til at foretage API-opkald og hente billeddata
async function fetchImageData() {
    try {
        const response = await fetch('http://localhost:4000/products');
        const data = await response.json();
        return data.map(product => product.image); // Udtræk billed-URL'er fra API-responsen
    } catch (error) {
        console.error('Fejl ved hentning af billeddata:', error);
        return [];
    }
}

// Funktion til at opdatere billedeskifteren med den givne billed-URL
function showImage(imageUrl) {
    const imageSlider = document.querySelector('.image-slider');
    console.log('Viser billede:', imageUrl); // Tjekker, om vi får billed-URL'en korrekt
    imageSlider.style.backgroundImage = `url(${imageUrl})`;
}

document.addEventListener('DOMContentLoaded', async function () {
    const imageData = await fetchImageData();
    let currentIndex = 0;

    function showImageByIndex(index) {
        showImage(imageData[index]);
    }

    showImageByIndex(currentIndex);

    document.getElementById('nextBtn').addEventListener('click', function () {
        currentIndex = (currentIndex + 1) % imageData.length;
        showImageByIndex(currentIndex);
    });

    document.getElementById('prevBtn').addEventListener('click', function () {
        currentIndex = (currentIndex - 1 + imageData.length) % imageData.length;
        showImageByIndex(currentIndex);
    });

});

//Burgermenu

document.addEventListener('DOMContentLoaded', function () {
    const burgerMenuIcon = document.querySelector('.burger-menu');
    const menu = document.querySelector('.menu');
    const closeBtn = document.querySelector('.close-btn');
    const categoryList = document.querySelector('.menu ul');

    // Funktion til at åbne menuen
    function openMenu() {
        menu.classList.add('show');
    }

    // Funktion til at lukke menuen
    function closeMenu() {
        menu.classList.remove('show');
    }


    // Event listener til burgermenu-ikonet
    burgerMenuIcon.addEventListener('click', openMenu);

    // Event listener til close-knappen
    closeBtn.addEventListener('click', closeMenu);
});


document.addEventListener('DOMContentLoaded', function () {
    const burgerMenuIcon = document.querySelector('.burger-menu');
    const menu = document.querySelector('.menu');
    const closeBtn = document.querySelector('.close-btn');
    const categoryList = document.querySelector('.category-list'); // Opdateret til .category-list

    // Funktion til at åbne menuen
    function openMenu() {
        menu.classList.add('show');
    }

    // Funktion til at lukke menuen
    function closeMenu() {
        menu.classList.remove('show');
    }

    // Funktion til at hente og vise kategorier
    async function fetchCategories() {
        try {
            const response = await fetch('http://localhost:4000/categories');
            const data = await response.json();

            // Opdater HTML med kategorier
            data.forEach(category => {
                const listItem = document.createElement('li');
                listItem.textContent = category.title;
                categoryList.appendChild(listItem);
            });

        } catch (error) {
            console.error('Fejl ved hentning af kategorier:', error);
        }
    }

    // Kald funktionen ved indlæsning af siden eller ved en begivenhed
    fetchCategories();

    // Event listener til burgermenu-ikonet
    burgerMenuIcon.addEventListener('click', openMenu);

    // Event listener til close-knappen
    closeBtn.addEventListener('click', closeMenu);
});



