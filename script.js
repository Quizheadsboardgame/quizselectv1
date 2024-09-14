document.addEventListener('DOMContentLoaded', () => {
    const items = [
        { title: "AEW", url: "https://quizheadsboardgame.github.io/AllEliteWrestlingv1/" },
        { title: "Alternative Music 1990-2010", url: "https://quizheadsboardgame.github.io/AlternativeMusic1990-2010/" },
        { title: "Animated Movies", url: "https://quizheadsboardgame.github.io/AnimatedMoviesv1/" },
        { title: "Childrens-TV 2000-2024", url: "https://quizheadsboardgame.github.io/CHILDREN-S-TV-2004-2024/" },
        { title: "Classic 80's Music", url: "https://quizheadsboardgame.github.io/Classic80sMusicV2/" },
        { title: "Classice Hollywood Movies", url: "https://quizheadsboardgame.github.io/ClassicHollywoodMoivesv1/" },
        { title: "Cult Classic Movies", url: "https://quizheadsboardgame.github.io/CultClassicMovies/" },
        { title: "Cult TV", url: "https://quizheadsboardgame.github.io/CultTVv1/" },
        { title: "Disney Movies", url: "https://quizheadsboardgame.github.io/Disneymoviesv2/" },
        { title: "Famous Movie Quotes", url: "https://quizheadsboardgame.github.io/Famous-Movie-Quotes/" },
        { title: "Foreign Cinema", url: "https://quizheadsboardgame.github.io/FOREIGNCINEMAV1/" }, // Updated text
        { title: "General Knowledge", url: "https://quizheadsboardgame.github.io/GeneralKnowledgev4/" },
        { title: "George Michael", url: "https://quizheadsboardgame.github.io/georgemichealv1/" },
        { title: "Harry Potter", url: "https://quizheadsboardgame.github.io/HarryPotterv1/" },
        { title: "Iconic 90's TV", url: "https://quizheadsboardgame.github.io/Iconic90-sTV/" },
        { title: "Iconic Movies", url: "https://quizheadsboardgame.github.io/iconicmoviesv1/" },
        { title: "Must Watch UK TV", url: "https://quizheadsboardgame.github.io/MustWatchUKTVv1/" },
        { title: "Oasis", url: "https://quizheadsboardgame.github.io/Oasis/" },
        { title: "Olympics 1992-2024", url: "https://quizheadsboardgame.github.io/Olympics-from-1992-2024V1/" },
        { title: "Pop Music", url: "https://quizheadsboardgame.github.io/PopMusic/" },
        { title: "Rock Legends", url: "https://quizheadsboardgame.github.io/RocklegendsV2/" },
        { title: "Star Wars", url: "https://quizheadsboardgame.github.io/StarWarsv1/" },
        { title: "Streaming Orignals", url: "https://quizheadsboardgame.github.io/StreamingOrignalsv1/" },
        { title: "Superhero's Blockbusters", url: "https://quizheadsboardgame.github.io/SuperherosBlockbustersV2/" },
        { title: "The Rise of Hip-Hop and Rap", url: "https://quizheadsboardgame.github.io/The-rise-of-Hip-hop-and-rap/" },
        { title: "Things you should know by 10 years old", url: "https://quizheadsboardgame.github.io/THINGS-YOU-SHOULD-KNOW-BY-10-YEARS-OLD/" },
        { title: "UK Chart toppers 2000-2024", url: "https://quizheadsboardgame.github.io/UKMusic2000-2024/" },
        { title: "UK Sports Champions 2000-2024", url: "https://quizheadsboardgame.github.io/UK-Sports-Champions-2000-2024/" },
        { title: "WWE", url: "https://quizheadsboardgame.github.io/WWEv1/" },
        { title: "World Cup & Euro's", url: "https://quizheadsboardgame.github.io/WORLD-CUP-EUROS/" }
    ];

    // Sort items alphabetically by title
    items.sort((a, b) => a.title.localeCompare(b.title));

    const carouselItemsContainer = document.querySelector('.carousel-items');

    items.forEach(item => {
        const carouselItem = document.createElement('div');
        carouselItem.className = 'carousel-item';
        carouselItem.innerHTML = `<a href="${item.url}" target="_blank">${item.title}</a>`;
        carouselItemsContainer.appendChild(carouselItem);
    });

    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const itemsContainer = document.querySelector('.carousel-items');
    const itemWidth = 150; // Adjusted to match the CSS width of the items
    let scrollAmount = 0;

    // Handle arrow clicks
    prevButton.addEventListener('click', () => {
        scrollAmount += itemWidth; // Scroll right on "prev" button
        itemsContainer.style.transform = `translateX(${scrollAmount}px)`;
    });

    nextButton.addEventListener('click', () => {
        scrollAmount -= itemWidth; // Scroll left on "next" button
        itemsContainer.style.transform = `translateX(${scrollAmount}px)`;
    });

    // Handle touch events
    let startX = 0;
    let endX = 0;

    itemsContainer.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
    });

    itemsContainer.addEventListener('touchend', (e) => {
        endX = e.changedTouches[0].clientX;
        const deltaX = startX - endX;

        if (Math.abs(deltaX) > 50) { // Adjust sensitivity as needed
            if (deltaX > 0) {
                // Swipe left
                scrollAmount -= itemWidth;
            } else {
                // Swipe right
                scrollAmount += itemWidth;
            }
            itemsContainer.style.transform = `translateX(${scrollAmount}px)`;
        }
    });
});
