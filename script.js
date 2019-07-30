
function analizar(){
    var cadena = document.getElementById("No.1").value;
    var cadena2 = new String(cadena);
    var contNum = 0;
    var contLetras = 0;
    var contSimbolo = 0;

    console.log(cadena2)//para consola
    if(cadena2 == ""){
        alert("Casilla Vacia: Ingrese un Caracter");
    } else {
    for(var i = 0; i < cadena2.length; i++){
        if(cadena2.charCodeAt(i)>= 65 && cadena2.charCodeAt(i) <= 90 || cadena2.charCodeAt(i)>=97 && cadena2.charCodeAt(i) <= 122){//Compara con el ascii de las mayusculas y minusculas
            contLetras++;//Cuenta la cantidad de letras que tiene el array y sirve para la comparativa siguiente
        }
        else if(cadena2.charCodeAt(i)>= 48 && cadena2.charCodeAt(i) <=59   ){//Compara el ascii de los numeros
           contNum++;//Cuenta la cantidad de numeros que tiene el array y sirve para la comparativa siguiente
        }
        else if((cadena2.charCodeAt(i)>=32 && cadena2.charCodeAt(i)<=47) || (cadena2.charCodeAt(i)>=58 && cadena2.charCodeAt(i)<=64) || (cadena2.charCodeAt(i)>=91 && cadena2.charCodeAt(i)<=96) || (cadena2.charCodeAt(i)>=123 && cadena2.charCodeAt(i)<=126)) {//Compara el ascii de los simbolos
            contSimbolo++;//Cuenta la cantidad de simbolos que tiene el array y sirve para la comparativa siguiente

        } 
        
    }
    if((contNum)==cadena2.length){//Si la cantidad de Numeros es igual al tamaño del array, entonces es un numero. Asi para cada uno
        console.log("NUMERO")   //Para Consola
        var numero = "Numeros"; //Variable de Identificador
        document.getElementById("tbl").insertRow(-1).innerHTML = '<tr><td>'+cadena2+'</td><td></td><td>'+numero+'</td><td></td></tr>';//Valores para la Tabla
        alert("Numeros")
    }else if((contLetras)==cadena2.length){
        console.log("LETRAS")
        var letra = "Letras";
        document.getElementById("tbl").insertRow(-1).innerHTML = '<tr><td>'+cadena2+'</td><td></td><td>'+letra+'</td><td></td></tr>';
        alert("Letras")
    }else if((contSimbolo)==cadena2.length){
        console.log("SIMBOLOs")
        var simbolo = "Simbolos";
        document.getElementById("tbl").insertRow(-1).innerHTML = '<tr><td>'+cadena2+'</td><td></td><td>'+simbolo+'</td><td></td></tr>';
        alert("Simbolos")
    }else{// De lo contrario, al no tener solo un tipo de Dato, se convierte en un error
        console.log("ERROR")
        var error = "Error";
        document.getElementById("tbl").insertRow(-1).innerHTML = '<tr><td>'+cadena2+'</td><td></td><td>'+error+'</td><td></td></tr>';
        alert("Error") 
    }}
}