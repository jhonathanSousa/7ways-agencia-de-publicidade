// Button
let btn = document.querySelector("#btn");

btn.addEventListener("click",function (event) {

	event.preventDefault();

	let form = document.querySelector('#form-contato');

	// Input nome
	let nome = form.nome.value;
	
	if (nome === "") {
		form.nome.classList.add('valida');
	}else{
		form.nome.classList.remove('valida');
	}

	// Input email
	let email = form.email.value;

	if (email === "") {
		form.email.classList.add('valida');
	}else{
		form.email.classList.remove('valida');
	}

	// Input telefone
	let telefone = form.telefone.value;

	if (telefone === "") {
		form.telefone.classList.add('valida');
	}else{
		form.telefone.classList.remove('valida');
	}

	// Textarea mensagem
	let mensagem = form.mensagem.value;

	if (mensagem === "") {
		form.mensagem.classList.add('valida');
	}else{
		form.mensagem.classList.remove('valida');
	}
});