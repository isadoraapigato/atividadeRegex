function valida() {
  var texto = document.getElementById("campo").value
  document.getElementById("campo").value = texto.replace(/\D/g, "")
}