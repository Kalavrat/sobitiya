//Квадрат

// function kvadrat() {
//   let square = document.querySelector(`.square`);
//   square.style.background = "red";
// }

//1

// function Hi() {
//   alert("Привет мир!");
// }

// 2

// function inp() {
//   let input = document.querySelector(".input");
//   input.value = "test@email.ru";
// }

//3

// function text() {
//   let input = document.querySelector(".input");
//   let vvod = input.value;
//   if (vvod == "") {
//     alert("Вы ничего не ввели в поле");
//   } else {
//     alert(`Вы ввели ${vvod}`);
//   }
// }

//4

// function swap() {
//   let input1 = document.querySelector(".input1");
//   let input2 = document.querySelector(".input2");
//   let per = input1.value;
//   input1.value = input2.value;
//   input2.value = per;
// }

//5

// function ban() {
//   let input = document.querySelector(".input");
//   input.disabled = true;
// }
// function unban() {
//   let input = document.querySelector(".input");
//   input.disabled = false;
// }

//6

// let square = document.querySelector(".square");
// function hide() {
//   if (btn.textContent == "Показать квадрат") {
//     btn.textContent = "Скрыть Квадрат";
//   } else {
//     btn.textContent = "Показать квадрат";
//   }
//   square.toggleAttribute("hidden");
// }

// 7

// let square = document.querySelector(".square");
// square.addEventListener("mouseover", () => {
//   square.style.backgroundColor = "green";
// });
// square.addEventListener("mouseout", () => {
//   square.style.backgroundColor = "red";
// });

// 8

// let squares = document.getElementsByClassName("square");

// con.addEventListener("click", () => {
//   for (let i = 0; i < squares.length; i++) {
//     if (event.target == squares[i]) {
//       for (let i = 0; i < squares.length; i++) {
//         squares[i].style.backgroundColor = "";
//       }
//       event.target.style.backgroundColor = "green";
//     }
//   }
// });

// 9

// let buttons = document.querySelectorAll(".btn");

// function inputer() {
//   let outValue = output.value;
//   output.value = `${outValue}` + `${event.target.textContent}`;
// }

// console.log(buttons);

// for (let i = 0; i < buttons.length; i++) {
//   buttons[i].addEventListener("click", inputer);
// }

// res.onclick = () => {
//   output.value = eval(output.value);
// };

// let buts = document.querySelectorAll(".btn");

// function input() {
//   let outValue = inp.value;
//   inp.value = `${outValue}` + `${event.target.textContent}`;
// }
// for (let i = 0; i < buts.length; i++) {
//   buts[i].addEventListener("click", input);
// }
// res.onclick = () => {
//   inp.value = eval(inp.value);
// };
