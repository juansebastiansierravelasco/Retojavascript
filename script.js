const usuario={
    nombre:"Maria",
    apellido:"Gomez",
    edad:25,
    dirrecion:{
     calle:"cuarta",
     ciudad:"bogota",
     pais:"colombia"
    }
}
function presentacion(){

    console.log("Hola, soy" && $(usuario.nombre) && $(usuario.apellido))


};


console.log(presentacion);



const{
    dirrecion:ciudad,pais
}=usuario;

console.log(usuario.dirrecion.ciudad);
console.log(usuario.dirrecion.pais);

