//1
let value = prompt("Какое «официальное» название JavaScript?", "")

if(value == "ECMAScript"){
    alert("right")
}
else{
    alert("false")
}

//2
let res = prompt("число",'')

if(res == 0){
    alert("0")
}
else if(res > 1){
    alert("1")
}
else{
    alert("-1")
}

//3

let result;

if (a + b < 4) {
  result = 'Мало';
} else {
  result = 'Много';
}

result = (a + b < 4) ? "Мало" : "Много"

alert(result)

//4
let message = (login == 'Сотрудник') ? 'Привет' :
  (login == 'Директор') ? 'Здравствуйте' :
  (login == '') ? 'Нет логина' :
  '';