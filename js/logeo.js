function loguear()
{
let user=document.getElementById("usuario").value;
let pass=document.getElementById("clave").value;

if(user=="73654374" && pass=="123456")
{

    window.location="factura.html"
}

else
{

    alert("Datos Incorrectos")
}
}