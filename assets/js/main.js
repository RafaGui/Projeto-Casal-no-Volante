const nome = document.getElementById('name');
const email = document.getElementById('email');
const btn = document.getElementById('send');

btn.addEventListener('click', () => {
    const texto = document.getElementById('texto').value;
    const url = "https://api.whatsapp.com/send?phone=5521964124256&text=Olá, meu nome é " + nome.value + ".";
    window.location.href = url;
});