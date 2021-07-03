function validate(){
    var nombre,telefono,calles, numero_puerta,ciudad,expresion
    nombre= document.getElementById ("nombre").value;
    telefono= document.getElementById ("telefono").value;
    calles= document.getElementById ("calles").value;
    numero_puerta= document.getElementById ("numero_puerta").value;
    ciudad= document.getElementById ("ciudad").value;
    if(nombre===""){
        alert("debe completar este campo")
        return false;
    }
  


}