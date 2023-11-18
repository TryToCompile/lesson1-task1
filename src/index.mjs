import "./styles.css";

document.getElementById("app").innerHTML = `
<button id="rectCalc">Calculate Rect!</button>
<button id="monthCheck">Check month!</button>
<button id="numCheck">Check Number!</button>
`;
const rectCalcBtn = document.getElementById("rectCalc");
const monthCheckBtn = document.getElementById("monthCheck");
const numCheckBtn = document.getElementById("numCheck");

rectCalcBtn.addEventListener('click', () => {
  let width = Number(prompt('Type width of your rect:'));
  let length = Number(prompt('Type length of your rect:'));
  if (!isNaN(width) || !isNaN(length)){
    if (width <= 0 || length <= 0){
      console.log("Error: one or more values <= 0")
    } else {
      console.log('Your rectangle is a square!!!') 
      let perimeterRect = 2*(+width+length);
      let squareRect = width*length;
      console.log(`Square: ${squareRect};\nPerimeter: ${perimeterRect}`);
    }
  } else {
    console.log('Error: one or more values == NaN');
  }
});

monthCheckBtn.addEventListener('click', () => {
  let month = Number(prompt('Type number of month:'));
  // Способ 1
  // if (!isNaN(month)){
  //   if (month == 12 || month == 1 || month == 2){
  //     console.log("Зима");
  //   } else if (month == 3 || month == 4 || month == 5){
  //     console.log("Весна");
  //   } else if (month == 6 || month == 7 || month == 8){
  //     console.log("Лето");
  //   } else if (month == 9 || month == 10 || month == 11){
  //     console.log("Осень");
  //   } else {
  //     console.log("Не найдено!");
  //   }
  // } else {
  //   console.log('Error: one or more values == NaN');
  // }  
  // Способ 2
  if (!isNaN(month)){
    let cnt = 0;
    let list = {
      "Зима": [12,1,2],
      "Весна": [3,4,5],
      "Лето": [6,7,8],
      "Осень": [9,10,11],
    }
    for (let key in list){
      list[key].forEach((item,i) => {
        if (item === month){
          console.log(key);        
          ++cnt;
        }       
      });
    }
    // ИЛИ ТАК
    // for (let [season, months] of Object.entries(seasons)) {
    //   if (months.includes(month)) {
    //     console.log(season);
    //   }
    // }


    if (cnt <= 0) {
      console.log('Не найдено!');
    }
  }
});

numCheckBtn.addEventListener("click",() => {
  let num = Number(prompt("Type your number:"));
  if (!isNaN(num)){
    let str = '';    
    if (Number.isInteger(num)){
      if (num % 2 == 0) {
        str += '1) Odd \n';
      } else {
        str += '1) Even \n';
      }      
      str += '2) Integer \n';
    } else {      
      str += '1) Error: Non-integer value \n2) Fractional \n';
    }
    if (num < 0 ){
      str += '3) Negative';
    } else {
      str += '3) Positive';
    } 
    console.log(str);
  }
});
//
//





