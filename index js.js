var email="rakesh@gmail.com"
var pass="1999"
var form=document.forms

function loginpage()
{
    var userdefemail=document.getElementById("email").value
    var userdefpass=document.getElementById("password").value
    var divbor=document.getElementsByClassName("borderdiv")

    if(email!=userdefemail && pass!=userdefpass)
    {
        document.body.style.backgroundImage="linear-gradient(75deg,red,red)"
        divbor[0].style.borderColor="red"
        divbor[1].style.borderColor="red"
        document.getElementById("result").innerHTML="user name and password are wrong"
    }
    else if(email==userdefemail && pass!=userdefpass)
    {
        document.body.style.backgroundImage="linear-gradient(75deg,green,red)"
        divbor[0].style.borderColor="green"
        divbor[1].style.borderColor="red"
        document.getElementById("result").innerHTML="password entered is wrong"
    }
    else if(email!=userdefemail && pass==userdefpass)
    {
        document.body.style.backgroundImage="linear-gradient(75deg,red,green)"
        divbor[0].style.borderColor="red"
        divbor[1].style.borderColor="green"
        document.getElementById("result").innerHTML="email entered is wrong"
    }
    else if(email==userdefemail && pass==userdefpass)
    {
        document.body.style.backgroundImage="linear-gradient(75deg,green,green)"
        divbor[0].style.borderColor="green"
        divbor[1].style.borderColor="green"
        document.getElementById("result").innerHTML="succusfully loged in"
        
        form[0].action="./PROJECT OF TECH .HTML"
        form[0].elements[2].type="submit"   
    }

}
function visible()
{
    form[0].elements[1].type="text";
    document.getElementById("passvisible").src="../ASSET/IMAGES/pexels-lukáš-dlutko-2440264.jpg"
    document.getElementById("passvisible").style.transform="rotateY()360deg"
    document.getElementById("passvisible").style.transition="transform 0.5s"
}
function invisible()
{
    form[0].elements[1].type="password"
}