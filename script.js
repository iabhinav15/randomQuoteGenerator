const quote = document.getElementById('quote')
const author = document.getElementById("author")

const btn = document.getElementById("btn");
// const quotes = document.getElementById('quotes')
let i=0;

btn.addEventListener("click", async ()=>{
  getQuotes();
  //   fetch("https://type.fit/api/quotes")
  // .then(function(response) {
  //     return response.json();
  // })
  // .then((data)=> {
    // // console.log(data);
    // let div = document.createElement("div");
    // // data.map((ele)=>{ 
      //   let p1 = document.createElement('p')
      //   let p2 = document.createElement('p')
      //   p1.innerText = ele.text;
      //   p2.innerText = ele.author;
      //   div.appendChild(p1)
      //   div.appendChild(p2)
      // // })
      // quotes.innerHTML = div.innerHTML;
      
      

    // }
       
  // )
  myFun();
  
})

const getQuotes = async () =>{
  const response = await fetch("https://type.fit/api/quotes")
  const data = await response.json();
  quote.innerHTML=data[i].text;
  author.innerHTML=data[i].author;
  i++;
}

getQuotes();

// const buton=document.getElementById("btn");
const allchar="0123456789ABCDEF";

// buton.addEventListener("click",myFun);

function myFun(){
  var  randcol= "";
for(var i=0; i<6; i++){
   randcol += allchar[Math.floor(Math.random()*16)];
}
document.body.style.backgroundColor= "#"+randcol;
}
myFun();