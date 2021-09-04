const body = document.querySelector("body");
const imgTag = document.createElement('img');
const img = [
    "back1.jpg",
    "back2.jpg",
    "back3.jpg"
];

const jpg = img[Math.floor(Math.random() * img.length)];
body.style.backgroundImage = `url("img/${jpg}")`;
body.style.bacgroundSize = 'cover';
