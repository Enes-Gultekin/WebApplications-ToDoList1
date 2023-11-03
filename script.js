const text_box = document.getElementById("input_box");
const submit = document.querySelector("#submit_button");
const list_val = document.querySelectorAll("buttons");
const the_list = document.getElementById("add_list");
const container = document.getElementById("container");
const label = document.createElement("buttons");
let a = new map([]);
let x;

submit.addEventListener("click", text_add);

function text_add() {
  const paragraph = document.createElement("input");

  a.push(text_box.value);
  console.log(a);
  paragraph.textContent = a[a.length - 1];
  the_list.appendChild(paragraph);
  input_func();
  list_val.appendChild(label);
  ch_box_function(label, paragraph);
  container.style.display = "block";
}

function ch_box_function(checkbox, paragraph) {
  checkbox.addEventListener("click", () => {
    if (checkbox.checked) {
      paragraph.style.textDecoration = "line-through";
    } else {
      paragraph.style.textDecoration = "";
    }
    2;
  });
}
function input_func() {
  list_val.forEach(
    button,
    button.addEventListener("click", () => {
      if (list_val === "delete") {
        container.remove();
      } else if (list_val === "update") {
        container.remove();
        const new_tb = document.createElement("input");
        new_tb.type = "textbox";
      }
    })
  );
}
