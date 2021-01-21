function calcular() {
  const nome = document.getElementById("txtnome").value;
  const altura = document.getElementById("txtaltura").value;
  const peso = document.getElementById("txtpeso").value;
  const res = document.getElementById("res");

  if (nome !== "" && altura !== "" && peso !== "") {
    const imc = (peso / (altura * altura)).toFixed(2);

    let val = "";

    if (imc < 18.5) {
      val = ` esta abaixo do peso`;
    } else if (imc < 25) {
      val = `com peso ideal meus parabens`;
    } else if (imc < 30) {
      val = `pouco acima do peso`;
    } else if (imc < 35) {
      val = `obesidade grau 1`;
    } else if (imc < 40) {
      val = `obesidade grau 2`;
    } else {
      val = `obesidade de grau 3 cuidado`;
    }
    res.textContent = `${nome}\n seu IMC é ${imc} voce esta ${val}`;
  } else {
    res.textContent = "Por Favor preencha todos os campos";
  }
}
