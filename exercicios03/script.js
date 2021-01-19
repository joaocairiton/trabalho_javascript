function buscar() {
  let ini = document.getElementById("txti")
  let fn = document.getElementById("txtf")
  let ps = document.getElementById("txtp")
  let res = document.getElementById("res")

  if (ini.value.length == 0 || fn.value.length == 0 || ps.value.length == 0) {
    res.innerHTML = 'impossivel contar'
    window.alert("ERRO: falta dados a ser digitados")
    
  } else {
    res.innerHTML = "Contando:  <br>"
    let i = Number(ini.value)
    let f = Number(fn.value)
    let p = Number(ps.value)
if (p <= 0 ) {
    window.alert('passo invalido considerando o passo 1')
    p =1
    
}

    if (i < f) {
        //contagem crescente
      for (let c = i; c <= f; c += p) {
        res.innerHTML += `${c}=\u{1F47D} `
      }
    } else {
        // contagem descrecente
      for (let c = i; c >= f; c -= p) {
        res.innerHTML += `${c}=\u{1F47D} `
      }
    }
    res.innerHTML += `  \u{1F4BB}`
  }
}
