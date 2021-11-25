var students=[]
function submit (){
var name1=document.getElementById("input1").value
var name2=document.getElementById("input2").value
var name3=document.getElementById("input3").value
var name4=document.getElementById("input4").value
var name5=document.getElementById("input5").value
students.push(name1)
students.push(name2)
students.push(name3)
students.push(name4)
students.push(name5)
document.getElementById("displayname").innerHTML=students
document.getElementById("sumbitbutton").style.display="none"
document.getElementById("sortbutton").style.display="inline-block"
}
function sort (){
students.sort ()
document.getElementById("displayname").innerHTML=students
}