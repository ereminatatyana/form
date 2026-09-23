function fishka() {
var c1=document.getElementById("color1").value;
document.getElementById("cs").style.color=c1;
var c2=document.getElementById("color2").value;
document.getElementById("math").style.color=c2;
var c3=document.getElementById("color3").value;
document.getElementById("physics").style.color=c3;

  k = "rgb(";
  if (document.getElementById("red").checked) {k = k + "255,"} else {k = k + "0,"}

  if (document.getElementById("green").checked) {k = k + "255,"} else {k = k + "0,"}

  if (document.getElementById("blue").checked) {k = k + "255)"} else {k = k + "0)"}

document.getElementById("eng").style.color = k;

}