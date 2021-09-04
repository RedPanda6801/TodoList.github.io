const loginPage = document.querySelector('.login');
const form = loginPage.querySelector('form');
const input = form.querySelector('input');
const mainPage = document.querySelector('.main');
const helloTitle = document.querySelector('.helloText h1');
const logoutBtn = mainPage.querySelector('.logout');

const HIDDEN_CLASS = 'hidden';
const USER_KEY = 'username';

const handleInputName = (e) => {
    e.preventDefault();
    const name = input.value;
    localStorage.setItem(USER_KEY, name);
    input.value = '';
    displayPage(name);
}

const displayPage = (name) => {
    const username = name;
    helloTitle.innerText = `Hello ${username}!`;
    loginPage.classList.add('hidden')
    mainPage.classList.remove('hidden');
}

const handleLogout = () => {
    localStorage.removeItem(USER_KEY);
    loginPage.classList.remove('hidden')
    mainPage.classList.add('hidden');
}

const main = () => {
    const user = localStorage.getItem(USER_KEY);
    if(user === null){
        form.addEventListener('submit', handleInputName);
    }
    else{
        displayPage(user);
    }
    logoutBtn.addEventListener('click', handleLogout);
}

main();