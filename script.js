// contagem de likes
img = document.querySelector("#post");
img.addEventListener("dblclick", liked);
let coracao = document.querySelector(".fa-heart");
coracao.addEventListener("click", liked);
let contagem = document.querySelector("#num");
function liked() {
  if (coracao.classList.contains("fa-regular")) {
    contagem.innerHTML = Number(contagem.innerHTML) + 1;
    coracao.style.color = "red";
  } else {
    contagem.innerHTML = Number(contagem.innerHTML) - 1;
    coracao.style.color = "";
  }
  coracao.classList.toggle("fa-solid");
  coracao.classList.toggle("fa-regular");
}

// salvar foto

let salvar = document.querySelector(".fa-bookmark");
salvar.addEventListener("click", salvo);
function salvo() {
  salvar.classList.toggle("fa-solid");
  salvar.classList.toggle("fa-regular");
}

// zoom na foto
perfil = document.querySelector("#borda_img");
perfil.addEventListener("mouseover", zoomIn);
perfil.addEventListener("mouseout", zoomOut);
function zoomIn() {
  perfil.style.transform = "scale(1.3)";
}
function zoomOut() {
  perfil.style.transform = "scale(1)";
}

// comentario
let bolaComentario = document.querySelector(".fa-comment");
let boxComentario = document.querySelector("#input_comentario");
let envio = document.querySelector("#enviar");
let input = document.querySelector("#input");
let usuario = document.querySelector("#usuario");
let comentarioUsuario = document.querySelector("#comentario");

bolaComentario.addEventListener("click", caixa);
function caixa() {
  boxComentario.style.display = "block";
}

envio.addEventListener("click", enviar);
function enviar() {
  let comentario = input.value;
  usuario.innerHTML = "Usuario";
  comentarioUsuario.innerHTML = comentario;
  boxComentario.style.display = "none";
}

//apos clicar em enviar, botar o input_comentario display em ""
