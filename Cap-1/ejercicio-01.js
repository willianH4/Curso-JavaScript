let dineroCofla;
let dineroRoberto;
let dineroPedro;

dineroCofla = prompt("Cuanto dinero tienes Cofla?");
dineroRoberto = prompt("Cuanto dinero tienes Roberto?");
dineroPedro = prompt("Cuanto dinero tienes Pedro?");

dineroCofla = parseInt(dineroCofla);

if (dineroCofla >= 0.6 && dineroCofla < 1) {
    alert("Cofla, Comprate el helado de agua");
    alert("y te sobran: $" + (dineroCofla - 0.6));
}
else if (dineroCofla >= 1 && dineroCofla < 1.60) {
    alert("Cofla, Comprate el helado de crema");
    alert("y te sobran: $" + (dineroCofla - 1));
}
else if (dineroCofla >= 1.60 && dineroCofla < 1.70) {
    alert("Cofla, Comprate el helado de heladix");
    alert("y te sobran: $" + (dineroCofla - 1.60));
}
else if (dineroCofla >= 1.70 && dineroCofla < 1.80) {
    alert("Cofla, Comprate el helado de heladovich");
    alert("y te sobran: $" + (dineroCofla - 1.70));
}
else if (dineroCofla >= 1.80 && dineroCofla < 2.90) {
    alert("Cofla, Comprate el helado de helardo");
    alert("y te sobran: $" + (dineroCofla - 1.80));
}
else if (dineroCofla >= 2.90) {
    alert("Cofla, Comprate el helado con confites o el pote 1/4");
    alert("y te sobran: $" + (dineroCofla - 2.90));
}
else{
    alert("Cofla, No hay helado para ti xD")
}


if (dineroRoberto >= 0.6 && dineroRoberto < 1) {
    alert("Roberto, Comprate el helado de agua");
}
else if (dineroRoberto >= 1 && dineroRoberto < 1.60) {
    alert("Roberto, Comprate el helado de crema");
}
else if (dineroRoberto >= 1.60 && dineroRoberto < 1.70) {
    alert("Roberto, Comprate el helado de heladix");
}
else if (dineroRoberto >= 1.70 && dineroRoberto < 1.80) {
    alert("Roberto, Comprate el helado de heladovich");
}
else if (dineroRoberto >= 1.80 && dineroRoberto < 2.90) {
    alert("Roberto, Comprate el helado de helardo");
}
else if (dineroRoberto >= 2.90) {
    alert("Roberto, Comprate el helado con confites o el pote 1/4");
}
else{
    alert("Roberto, No hay helado para ti xD")
}


if (dineroPedro >= 0.6 && dineroPedro < 1) {
    alert("Pedro, Comprate el helado de agua");
}
else if (dineroPedro >= 1 && dineroPedro < 1.60) {
     alert("Pedro, Comprate el helado de crema");
}
else if (dineroPedro >= 1.60 && dineroPedro < 1.70) {
    alert("Pedro, Comprate el helado de heladix");
}
else if (dineroPedro >= 1.70 && dineroPedro < 1.80) {
    alert("Pedro, Comprate el helado de heladovich");
}
else if (dineroPedro >= 1.80 && dineroPedro < 2.90) {
    alert("Pedro, Comprate el helado de helardo");
}
else if (dineroPedro >= 2.90) {
    alert("Pedro, Comprate el helado con confites o el pote 1/4");
}
else{
    alert("Pedro, No hay helado para ti xD")
}