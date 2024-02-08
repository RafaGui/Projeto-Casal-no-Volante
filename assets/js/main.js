const btn = document.getElementById('send');
btn.addEventListener('click', (event) => {
    const nome = document.getElementById('name').value;
	const email = document.getElementById('email').value;
	const text = document.getElementById('text').value;
	
    const url = "https://api.whatsapp.com/send?phone=5521964124256&text=Olá, meu nome é " + nome + " e meu e-mail é o " + email + " o motivo do meu contato é: " + text;
    window.location.href = url;
	event.preventDefault();
});