const list_box = document.getElementById("input_box");
const value_list = document.getElementById("add_list");
const submit_button = document.getElementById("submit_button");
const delete_button = document.getElementById("delete");
const new_text_box = document.getElementById("new_block");

let todo_map = new Map();
let keyCounter = 1;
submit_button.addEventListener("click", create_div);
// Add this code to your existing code

function create_div() {
  let container = document.createElement("div");
  container.classList.add("container");
  keyCounter++;
  console.log("Container's Class Name=" + container.className);
  create_elements(container);
  new_text_box.appendChild(container);
  list_box.value = "";
  saveToLocalStorage();
  return container;
}
function create_elements(container) {
  const list = document.createElement("li");
  list.classList.add("cr_list");

  const button_container = document.createElement("container");

  button_container.classList.add("bc");

  const delete_button = document.createElement("button");
  delete_button.classList.add("btn", "btn-primary");
  const update_button = document.createElement("button");
  update_button.classList.add("btn", "btn-primary");
  const color_button = document.createElement("button");
  color_button.classList.add("btn", "btn-primary");

  delete_button.textContent = "Delete";
  update_button.textContent = "Update";
  color_button.textContent = "Change Color";

  list.textContent = list_box.value;
  container.appendChild(list);

  button_container.appendChild(delete_button);
  button_container.appendChild(update_button);
  button_container.appendChild(color_button);
  container.appendChild(button_container);

  todo_map.set(keyCounter - 1, list_box.value);

  console.log("Entered List Element:" + list_box.value);
  console.log(todo_map.has(list.textContent));
  console.log(mapping(todo_map, list.textContent));
  console.log(typeof mapping(todo_map, list.textContent));

  const key_map = mapping(todo_map, list.textContent);
  console.log("key_map:" + key_map);
  let color_picker = document.createElement("input");
  color_picker.type = "color";
  color_picker.value = "#ffffff";
  color_button.addEventListener("mouseenter", () => {
    color_button.appendChild(color_picker);
    console.log("color hovered");
    console.log(color_picker.value);
  });

  color_button.addEventListener("mouseleave", () => {
    change_back_color(color_button);
    color_picker.remove();
    list.style.backgroundColor = color_picker.value;
  });
  color_picker.addEventListener("click", () => {
    list.style.backgroundcolor = color_picker.value;
    console.log(color_picker.value);
    console.log(color_picker);
  });

  delete_button.addEventListener("click", () => {
    container.remove();
    todo_map.delete(key_map);
    console.log(todo_map);
  });

  container.addEventListener("mouseenter", () => {
    mouseentered(button_container);
    list.style.textDecoration = "underline";
  });

  container.addEventListener("mouseleave", () => {
    mouseleft(button_container);
    list.style.textDecoration = "none";
  });

  update_button.addEventListener("click", () => {
    console.log(list.value);
    const update_textb = document.createElement("input");
    const ok = document.createElement("button");
    ok.textContent = "OK";
    update_textb.type = "text";
    update_textb.value = list.textContent;

    console.log(update_textb.value);

    list.replaceWith(update_textb, list);
    list.replaceWith(ok);
    ok.addEventListener("click", () => {
      console.log("entered");
      list.textContent = update_textb.value;
      console.log(list.value);
      console.log(update_textb.value);
      container.appendChild(list);
      update_textb.replaceWith(list);
      ok.remove();
      todo_map.set(key_map, list.textContent);
      console.log(todo_map);
    });
  });
}
function mapping(todo_map, searchvalue) {
  for (let [key, value] of todo_map.entries()) {
    if (value === searchvalue) return key;
  }
}

function mouseentered(button_container) {
  button_container.style.display = "block";
}

function mouseleft(button_container) {
  button_container.style.display = "none";
}

function change_back_color(color_button) {
  color_button.replaceWith(color_button);
}
function saveToLocalStorage() {
  const items = Array.from(new_text_box.querySelectorAll(".cr_list")).map(
    (item) => item.textContent
  );
  localStorage.setItem("todoList", JSON.stringify(items));
}
window.addEventListener("load", () => {
  if (localStorage.getItem("todoList")) {
    const savedList = JSON.parse(localStorage.getItem("todoList"));
    for (let item of savedList) {
      const container = create_div();
      container.querySelector("li").textContent = item;
    }
  }
});
