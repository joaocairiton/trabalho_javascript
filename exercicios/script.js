function carregar() {
  var msg = document.getElementById("msg");
  var img = document.getElementById("image");
  var data = new Date();
  var hora = data.getHours();

  msg.innerHTML = `Agora sao ${hora} horas`;
  if (hora >= 5 && hora < 12) {
    //bom dia
    img.src = "manha.png";
    document.body.style.background = "#fde3ca";
  } else if (hora >= 12 && hora <= 18) {
    //boa tarde
    img.src = "tarde.png";
    document.body.style.background = "#d98c00";
  } else {
    //boa noite
    img.src = "noite.png";
    document.body.style.background = "#2f464c";
  }
}
