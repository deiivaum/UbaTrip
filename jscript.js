
const modal = document.getElementById('login-modal');
const openBtn = document.getElementById('open-login-btn');
const closeBtn = document.querySelector('.close-btn');


function openModal() {
    modal.style.display = 'flex';
    setTimeout(() => {
        modal.classList.add('show');
    }, 10); 
}


function closeModal() {
    modal.classList.remove('show');
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300); 
}


openBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);


window.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
});


document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    if (username === '' || password === '') {
        alert('Por favor, preencha todos os campos.');
    } else {
        alert('Login realizado com sucesso!');
        closeModal(); 
    }
});


function addimg(){
    document.getElementById('add-img')
}