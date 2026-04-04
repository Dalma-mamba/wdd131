const destinations = [
    {
        name: 'Mlilwane Wildlife Sanctuary',
        region: 'Hhohho',
        theme: 'wildlife',
        description: 'A protected reserve with easy walking trails, zebras, antelope, and birdwatching.',
        imageUrl: 'wdd131/images/landscapes.webp'
    },
    {
        name: 'Mantenga Cultural Village',
        region: 'Hhohho',
        theme: 'culture',
        description: 'Experience Swazi culture with traditional dances, local crafts, and village storytelling.',
        imageUrl: 'wdd131/images/interest.avif'
    },
    {
        name: 'Maguga Dam & Falls',
        region: 'Lubombo',
        theme: 'waterfall',
        description: 'A scenic dam and waterfall site ideal for hiking, photography, and sunset views.',
        imageUrl: 'wdd131/images/landscapes.webp'
    },
    {
        name: 'Mkhaya Game Reserve',
        region: 'Lubombo',
        theme: 'wildlife',
        description: 'A private reserve where visitors can see rhinos, giraffes, and rare antelope species.',
        imageUrl: 'wdd131/images/landscapes.webp'
    },
    {
        name: 'Reed Dance Festival',
        region: 'Lubombo',
        theme: 'culture',
        description: 'One of Eswatini’s most famous ceremonies celebrating music, dance, and traditional dress.',
        imageUrl: 'wdd131/images/interest.avif'
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('destination-container');
    const filterButtons = document.querySelectorAll('.filters button');

    function renderDestinations(list) {
        container.innerHTML = '';
        list.forEach(destination => {
            const card = document.createElement('article');
            card.className = 'destination-card';
            card.innerHTML = `
                <img src="${destination.imageUrl}" alt="${destination.name}" loading="lazy">
                <div class="destination-content">
                    <h2>${destination.name}</h2>
                    <p class="meta">Region: ${destination.region} | Theme: ${destination.theme}</p>
                    <p>${destination.description}</p>
                </div>
            `;
            container.appendChild(card);
        });
    }

    function getFilteredDestinations(filter) {
        return filter === 'all'
            ? destinations
            : destinations.filter(dest => dest.theme === filter);
    }

    function updateActiveButton(clickedButton) {
        filterButtons.forEach(btn => btn.classList.toggle('active', btn === clickedButton));
    }

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.dataset.filter;
            const filtered = getFilteredDestinations(filter);
            renderDestinations(filtered);
            updateActiveButton(button);
            localStorage.setItem('lastDestinationFilter', filter);
        });
    });

    const savedFilter = localStorage.getItem('lastDestinationFilter') || 'all';
    const defaultButton = Array.from(filterButtons).find(button => button.dataset.filter === savedFilter);
    if (defaultButton) {
        defaultButton.click();
    } else {
        renderDestinations(destinations);
    }
});
