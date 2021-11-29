function next()
{
var namej=document.getElementById("name");
var fnamej=document.getElementById('fname');
var emailj=document.getElementById('email');
var phonej=document.getElementById('phone');
var datej=document.getElementById('date1');
var rEmail=/^([a-z A-Z 0-9]+)@([a-z]+).([a-z]{2,4})$/;
var rdate=/^([0-3][0-9])-([0-1][0-9])-([0-9][0-9][0-9][0-9])$/;
var rphone=/^([0-9]{10})$/;
var rcode=/^([0-9]{6})$/;
if(namej.value.trim()=="")
{
    document.getElementById('ne').style.visibility="visible";
    document.getElementById('name').style.border= "2px solid red"; 
    return false;
}
if(fnamej.value.trim()=="")
{
    document.getElementById('fname').style.border= "2px solid red"; 
    document.getElementById('fe').style.visibility="visible";
    return false;
}
if((emailj.value.trim()==""))
{
    document.getElementById('email').style.border= "2px solid red"; 
    document.getElementById('er').style.visibility="visible";
    return false;
}
// if(rEmail.test(emailj))
// {
//     document.getElementById('email').style.border= "2px solid red"; 
//     document.getElementById('er').style.visibility="visible";
//     return false;
// }
if(phonej.Value.trim=="")
{
    document.getElementById('phone').style.border= "2px solid red"; 
    document.getElementById('pe').style.visibility="visible";
    return false;
}
if(datej.Value.trim=="")
{
    // document.getElementById('phone').style.border= "2px solid red"; 
    document.getElementById('de').style.visibility="visible";
    return false;
}
}