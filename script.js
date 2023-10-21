const text_box = document.getElementById("input_box");
const submit = document.querySelector("#submit_button");

const lm = document.getElementById("list_maker");
let a = [];
let x;

submit.addEventListener("click", text_add);

function text_add() {
  a.push(text_box.value);
  const paragraph = document.createElement("li");
  console.log(a);
  paragraph.textContent = a[a.length - 1];

  lm.appendChild(paragraph);
}
