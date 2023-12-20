const emoji = document.querySelector("#emoji");
const h2 = document.querySelector(".h2");
const emojis = [
  "😆",
  "😅",
  "🤣",
  "😂",
  "😀",
  "🤑",
  "🤨",
  "🙂",
  "😊",
  "😗",
  "😛",
  "😏",
  "🤥",
  "😴",
  "🥺",
  "😧",
  "😇",
  "😳",
  "🙃",
  "🥴",
  "🧐",
  "🤨",
  "😒",
  "🤔",
  "🤭",
  "🥰",
  "🤐",
  "😄",
  "🤔",
  "🤪",
  "🥲",
  "😃",
  "😁",
  "😬",
];
const texts =["hehe","told ya","u understand now?","ask your girl","your girl got mood swings too","keep hovering","u like this emoji?","this emoji is exactly her"];
emoji.addEventListener("mouseover",()=>{
    // h2.innerHTML=texts[math.floor(Math.random()*texts.length)];
    emoji.innerHTML= emojis[Math.floor(Math.random()*emojis.length)];
})


