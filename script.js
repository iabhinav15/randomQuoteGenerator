const quote = document.getElementById('quote');
const author = document.getElementById('author');

const btn = document.getElementById("btn");
let i = 0;

btn.addEventListener("click", async () => {
  await getQuotes();
  myFun();
})

const getQuotes = async () => {
  const response = await fetch("https://type.fit/api/quotes");
  const data = await response.json();
  // console.log(data);
  if(i == data.length){
    i = 0;
  }
  quote.innerHTML = data[i].text;
  author.innerHTML = data[i].author;
  i++;
}
getQuotes();

const allchar = "0123456789ABCDEF";
function myFun() {
  let randcol = "";
  for (let i = 0; i < 6; i++) {
    randcol += allchar[Math.floor(Math.random() * 16)];
  }
  document.body.style.backgroundColor = "#" + randcol;
}
myFun();

const copybtn = document.getElementById("copybtn");

copybtn.addEventListener("click",  () =>{
  let quote = document.getElementById("quote");
  navigator.clipboard.writeText(quote.innerHTML);
  alert("Copied the text: " + quote.innerHTML);
})