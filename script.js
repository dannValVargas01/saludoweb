btnGreet = document. getAnimations("btnSaludo");
txtName = document. getElementById("txtNombre");
txtGreet = document. getElementById("txtSaludo");
lista = [
    "Hello",
    "Bon jour",
    "Hallo",
    "Clao",
    "Ola",
    "Namaste",
    "Aloha",
    "konnichiwa",
    "Merhaba",
    "Que mas"

]
function saludar () {
  if (txtName.value == "" ) {
    alert("Error, ingresa un nombre.")
    txtGreet.innerHTML=" "
  }else{

    var nombre = txtName.value
    var numero = Math.floor(Math.random()*lista.length) 
    var saludo = lista [numero] + ", " + nombre
    txtGreet.innerHTML = saludo
  }
}

