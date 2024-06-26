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
root.style.width = "100vw";
root.style.height = "100vh";
root.style.backgroundColor = "black";
root.style.display = "flex";
root.style.justifyContent = "center";
root.style.alignContent = "center";
root.style.flexDirection = "column-reverse";

// 버튼 - style

button.innerHTML = "질문 더 받기";
button.style.width = "100px";
button.style.height = "50px";
button.style.borderRadius = "30px";
button.style.position = "fixed";
button.style.top = "700px";
button.style.left = "400px";
button.style.right = "0";

// wrap
wrap.style.width = "30vw";
wrap.style.height = "70vh";
wrap.style.backgroundColor = "#21201E";
wrap.style.display = "flex";
wrap.style.justifyContent = "center";
wrap.style.alignContent = "center";
wrap.style.flexDirection = "column-reverse";
wrap.style.margin = "200px";

let questionData = [
  "Question 1: 좋아하는 색은 무엇인가요?",
  "Question 2: 나는 올해 무엇을 포기했나요?",
  "Question 3: 어떤 계절을 좋아 하나요?",
  "Question 4: 좋아하는 좋아하는 단어가 있나요?",
  "Question 5: 오늘의 당신은 행복한 가요?",
  "Question 6: 오늘의 하늘은 어떤가요?",
  "Question 7: 지금 사고싶은 물건이 있나요?",
  "Question 8: 좋아하는 노래는 어떤 노래인가요?",
  "Question 9: 오늘 밤 무슨 꿈을 꾸고싶나요?",
  "Question 10: 당신은 지금 행복한가요?",
];
let questionText = 0;
function textAppear() {
  let clickBtn = document.createElement("div");
  clickBtn.innerHTML = questionData[questionText];
  questionText = (questionText + 1) % questionData.length;

  clickBtn.style.width = "500px";
  clickBtn.style.height = "50px";
  clickBtn.style.backgroundColor = "gray";
  clickBtn.style.margin = "5px";
  clickBtn.style.borderRadius = "20px";
  clickBtn.style.textAlign = "center";
  if (wrap.children.length < 11) {
    wrap.appendChild(clickBtn);
  } else {
    return;
  }
}
button.addEventListener("click", textAppear);
