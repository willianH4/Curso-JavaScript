let nombres = ["pedro", "maria", "jorge"];
// pop() elimina o saca el ultimo elemento de un array
let resultado = nombres.pop()

// document.write(resultado + "<br>");
// document.write(nombres);

// metodo shift remueve el primer elemento en un arreglo
// push() agrega un elemento al final de la lista push()
// let frutas = ["mango", "uvas", "limon"];

// document.write(frutas + "<br>");
// let result = frutas.push("coco", "licha");
// document.write(result);
// document.write(frutas);

// metodo reverse()

// let numeros = [1,2,3,4,5];
// document.write(numeros + "<br>");
// numeros.reverse();
// document.write(numeros)

// metodo unshift
// agrega elementos al inicio de un array

// sort()
// este metodo ordena los elementos en orden alfabetico o de menor a mayor si son numeros

// splice()
let verduras = ["limon", "rabano", "repollo"];
document.write(verduras + "<br>");
// agrega o elimina elementos a un array indicando las posiciones en donde agregar o eliminar
// el primer parametro indica de donde iniciar, y el segundo paramtro es cuantos elementos eliminar
// luego los elementos a agregar
verduras.splice(0, 0, "lloo", "zanahoria");
document.write(verduras);
