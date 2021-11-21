const bgUrl = ['1.jpg', '2.jpg', '3.jpg','4.jpg'];

const chosenBgUrl = bgUrl[Math.floor(Math.random() * bgUrl.length)];

document.body.style.backgroundImage = `url('./img/${chosenBgUrl}')`;