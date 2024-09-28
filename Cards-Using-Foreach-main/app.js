// script.js
document.addEventListener('DOMContentLoaded', () => {
    const cardContainer = document.getElementById('card-container');

    const cardsData = [
        { title: 'Card 1', description: 'This is the first card.', imageUrl: 'https://via.placeholder.com/200' },
        { title: 'Card 2', description: 'This is the second card.', imageUrl: 'https://via.placeholder.com/200' },
        { title: 'Card 3', description: 'This is the third card.', imageUrl: 'https://via.placeholder.com/200' },
        // Add more card objects as needed
    ];

    cardsData.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        
        cardElement.innerHTML = `
            <img src="${card.imageUrl}" alt="${card.title}">
            <h3>${card.title}</h3>
            <p>${card.description}</p>
        `;

        cardContainer.appendChild(cardElement);
    });
});
