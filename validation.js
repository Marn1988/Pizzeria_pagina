function validate(){
    var nombre,telefono,calles, numero_puerta,ciudad,expresion
    nombre= document.getElementById ("nombre").value;
    telefono= document.getElementById ("telefono").value;
    calles= document.getElementById ("calles").value;
    numero_puerta= document.getElementById ("numero_puerta").value;
    ciudad= document.getElementById ("ciudad").value;
    /*expresion= / \w+@\w\.+[a-z]/;*/
    if(nombre===""){
        alert("debe completar este campo")
        return false;
    }
    else if(telefono===""){
        alert("debe completar este campo")
        return false;
    }
    else if(isNaN(telefono)){
        alert("telefono debe ser un numero")
        return false
    }
    else if(calles===""){
        alert("debe completar este campo")
        return false;

    }
    else if(numero_puerta===""){
        alert("debe completar este campo")
        return false;
    }
    else if(calles===""){
        alert("debe completar este campo")
        return false;
    }
   
    /*else if(!expresion.test(correo)){
        alert("ingrese una direccion de correo valida")

    }*/
    /* agregar longitud maxima de los valores*/
 /*if(nombre==="" || telefono==="" || calles==="" ||...) otra forma de reprecentar el codigo de arriba */

}