function level1_1(){
  let a = 3, b = 1;
  while(b <= a){
    alert("-")
    b++;
    console.log("-");
  }
}

//
function level1_2(){
  let a = prompt("Введите число");
  for(let i = 1; i <= a; i++){
    alert("-")
    console.log("-");
  }
}

//
function level1_3(){
  let a = prompt("Введите число");
  add(a);
  }
function add(a){
  for(let i = 1; i <= a; i++){
    alert("-");
    console.log("-");
  }
}
//

function level1_4(){
  let a = +prompt("Введите число");
  let b = +prompt("Введите число");
  let add = addNumbers(a,b);
  let sub = SubNumbers(a,b);
  let mult = MultNumbers(a,b);
  let div = DivNumbers(a,b);
  if(Number.isNaN){
  return alert("Вы ввели не число");
  }
  alert(`\nСумма ${add},\nРазница ${sub}, \nУмножение ${mult}, \nДеление ${div}`);
}
function addNumbers(a,b){
  return a + b;
}
function SubNumbers(a,b){
  return a - b;
}
function MultNumbers(a,b){
  return a * b;
}
function DivNumbers(a,b){
  return a / b;
}

//
function level1_5(){
  let a = prompt("ВВедите любое число");
  for(;a;a--){
    alert(a)
    console.log(a);
  }
} 
//

function level2_1(){
  let a = prompt("Введите число");
  let b = prompt("Введите степень");
  let res = Math.pow(a,b);
  alert(res);
}

//

function level2_2(){
  adad();
}
function adad(){
  let b = 0; 
  for(var i = 1000; i > 50; i = i / 2){
    b++;
  }
  alert(`Результат деления: ${i} \nКоличевство дилений ${b} `);
}

//
function level2_3(){
  wWw();
}
function wWw(){
  let userNumber = prompt("Введите число"); 
  for(; userNumber > 11; userNumber++){
    if(Number.isInteger(userNumber / 11)){
    alert(`Ближайшее кратное 11 число \n${userNumber}`);
    return userNumber;
    }
  }

}