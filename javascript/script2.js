var name = "XiaoChun";
alert("Hello" + 123);

var name = "XiaoChun";
var age = 5;
var isboy = false;
var fruits = ["pear","yummy","right?"];


alert(name); 
alert(age); 
alert(isboy); 
alert(fruits[0]); 
alert(fruits[1]); 
alert(fruits[2]); 

var addition= function(num){
return num+10;
};
var age = 18;
var trueage= addition(age);
alert(trueage);

var age2 = 41;
var trueage2 = addition(age2);
alert(trueage2);

document.getElementById("byid").innerHTML="我來自id";
document.getElementById("byid").style.color ="blue";

document.getElementsByClassName("byclass")[0].innerHTML="我來自class";
document.getElementsByClassName("byclass")[0].style.fontSize = "30px";

document.getElementsByTagName("div")[2].innerHTML="我來自Tag";
document.getElementsByTagName("div")[2].style.fontfamily ="微軟正黑體";

document.getElementsByTagName("p")[0].innerHTML ="dfgjkljytf";
document.getElementsByTagName("p")[0].style.color ="blue";

