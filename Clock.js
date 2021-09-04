const clockTitle = document.querySelector('.clock');
const h1 = clockTitle.querySelector('h1');

const twoString = (args) => {
    return (args<10) ? `0${args}` : args;
}

const tickTok = () => {
    const date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    h1.innerText = `${twoString(hour)}:${twoString(min)}:${twoString(sec)}`;
}

setInterval(tickTok, 1000);