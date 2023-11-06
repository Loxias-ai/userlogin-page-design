let username;
document.getElementById("but1").onclick = function(){
    username = document.getElementById("text1").value;
    console.log(username);
    document.getElementById("laab").innerHTML = username;
    
}
let number;
number = Number(number);

document.getElementById("but1").onclick = function () {
    number+=1;
    document.getElementById("numb1").innerHTML = number;
    
}
document.getElementById("reset").onclick = function () {
    number = 0;
    
    document.getElementById("numb1").innerHTML = number;
}

document.getElementById("but2").onclick = function () {
    
    number -= 1;
    document.getElementById("numb1").innerHTML = number;
}
let y;
let x;
let z;

y = Math.floor(Math.random()* 10) + 1 ;

x = Math.floor(Math.random()* 10) + 1 ;

z = Math.floor(Math.random()* 10) + 1 ;
console.log(y);
console.log(x);
console.log(z);
let L = "11223444565";
L = L.replaceAll("4","7");
console.log(L);
let fullName = "bhupendra jogi";
let firstname;
let lastanme;
firstname = fullName.slice(0, fullName.indexOf(" "));
lastname = fullName.slice(fullName.indexOf(" ") +1);
console.log(firstname);
console.log(lastname);

