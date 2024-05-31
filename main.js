const root = document.getElementById("root");
console.log(root);
const div = document.createElement("div");
div.setAttribute("id", "wrap");
root.appendChild(div);
// console.log(div);
const button = document.createElement("button");
wrap.appendChild(button);
console.log(button);

// root -style
root.style.width = "500px";
root.style.height = "500px";

root.style.backgroundColor = "pink";
root.style.display = "flex";
root.style.justifyContent = "center";
root.style.alignContent = "center";
root.style.flexDirection = "column-reverse";

// 버튼 - style

button.innerHTML = "질문 더 받기";
button.style.width = "100px";
button.style.height = "50px";
button.style.borderRadius = "30px";

// wrap
wrap.style.width = "50vw";
wrap.style.height = "70vh";
wrap.style.backgroundColor = "white";
wrap.style.display = "flex";
wrap.style.justifyContent = "center";
wrap.style.alignContent = "center";
wrap.style.flexDirection = "column-reverse";
wrap.style.margin = "200px";

function textAppear() {
  let clickBtn = document.createElement("div");
  clickBtn.innerHTML = "최근에 읽은 책은 무엇인가요?";
  clickBtn.style.width = "500px";
  clickBtn.style.height = "50px";
  clickBtn.style.backgroundColor = "gray";
  clickBtn.style.margin = "5px";

  if (wrap.children.length < 11) {
    wrap.appendChild(clickBtn);
  } else {
    return;
  }
}
button.addEventListener("click", textAppear);

let questionData = {
  1: "좋아하는 색은 무엇인가요?",
  2: "나는 올해 무엇을 포기했나요?",
  3: "어떤 계절을 좋아 하나요?",
  4: "좋아하는 좋아하는 단어가 있나요?",
  5: "오늘의 당신은 행복한 가요?",
  6: "오늘의 하늘은 어떤가요?",
  7: "지금 사고싶은 물건이 있나요?",
  8: "좋아하는 노래는 어떤 노래인가요?",
  9: "오늘 밤 무슨 꿈을 꾸고싶나요?",
  10: "당신은 지금 행복한가요?",
};

function textAppear() {
  let clickBtn = document.createElement("div");
  clickBtn.innerHTML = "question 1: 이건 클릭 했을 때 나오는 텍스트이다.";
  root.appendChild(clickBtn);
  clickBtn.style.width = "200px";
  clickBtn.style.height = "50px";
  clickBtn.style.backgroundColor = "gray";
  clickBtn.style.margin = "5px";
}
button.addEventListener("click", textAppear);
