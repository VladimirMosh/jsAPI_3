const apiAccess = 'SEVAwKsnj47EnK3BRxOAiZvR-03nWndAqaxt9gia8e0';
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiAccess}`;
const photoEl = document.getElementById('photo');
const photographerEl = document.getElementById('photographer');
const likeButton = document.getElementById('likeButton');
const likeCountEl = document.getElementById('likeCount');
const counter = document.querySelector(".countLikes");

async function getRandomPhoto() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        const photoUrl = data.urls.regular;
        const photographerName = data.user.name;

        photoEl.src = photoUrl;
        photographerEl.textContent = `Фотограф: ${photographerName}`;
    } catch (error) {
        console.error('Ошибка при получении фото:', error);
    }
}
likeButton.addEventListener('click', function () {
    increaseCounter();
});

function increaseCounter() {
    const currentCounter = parseInt(counter.textContent, 10);
    counter.textContent = currentCounter + 1;
}

getRandomPhoto();




