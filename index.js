const root = document.getElementById("root");
const div = document.createElement("div");
div.setAttribute("id", "wrap");
root.appendChild(div);

function imgTag() {
  for (let i = 0; i < 2; i++) {
    const img = document.createElement("img");

    // console.log(img);

    div.appendChild(img);
  }
}
imgTag();
const h1 = document.createElement("h1");

// console.log(h1);

const button = document.createElement("button");

// console.log(button);

div.appendChild(h1);

div.appendChild(button);

// scroll Event
