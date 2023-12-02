//  this code is for srno s=container
const srno = document.querySelector("#srno");
function CreateSrno(){

  for(let i = 0;i <= 100 ; i++){
   const creatediv = document.createElement("div");
   creatediv.className="srdiv";
   if(i !== 0){
   creatediv.innerText= i ;
   }
   srno.appendChild(creatediv);
  }

}
CreateSrno();
// end

const column = document.querySelector(".column");
function createColumn(){
  
   for(let i = 1; i<=26;i++){
       const creatediv = document.createElement("div");
       creatediv.className="columndiv";
       creatediv.innerText=String.fromCharCode(i+64);
       column.appendChild(creatediv);
   }
}
createColumn();

const mainCol = document.querySelector(".maincolumn");

function createColumnDiv(b){
   const row = document.createElement("div");
   row.className="row";
  for(let i = 1 ;i<=26; i++){
   const cells = document.createElement("div");
   cells.className="columndiv";
   cells.contentEditable=true;
   cells.id = String.fromCharCode(64+i) + b;
   row.appendChild(cells);
   cells.addEventListener("focus",onfocus);
   cells.addEventListener("input",changeIt);
  }
  mainCol.appendChild(row);
}

for(let i = 1; i<=100; i++){
   createColumnDiv(i);
}

const active = document.querySelector(".header3");
let activeElement;
const state = {

}

function onfocus(event){
   const Infocus = event.target.id;
   active.innerText = Infocus;
   activeElement = event.target;
   if(state[activeElement.id]){
       resetIt(state[activeElement.id]);
   }
   else{
       resetIt(defaultval);
   }
}
function resetIt(valueop){
   form.bold.checked = valueop.bold;
   form.italic.checked = valueop.italic;
   form.underline.checked = valueop.underline;
   form.align.value = valueop.align;
   form.backgroundColor.value = valueop.backgroundColor;
   form.color.value = valueop.color;

}

function changeIt(optionval){

if(!activeElement){
   alert("please select a cell");
  form.reset();
  return;
}  

let currentvalue = {
   bold: form.bold.checked,
   italic: form.italic.checked,
   underline: form.underline.checked,
   align: form.align.value,
   backgroundColor: form.backgroundColor.value,
   color: form.color.value
 };
 state[activeElement.id]={...currentvalue,value:activeElement.innerText};
 
  ActiveChange(currentvalue);
}

const form = document.querySelector(".form");
const defaultval = {
   bold: false,
   italic:false,
   underline:false,
   align:"left",
   backgroundColor:"#ededed",
   color:"#000000"
}
function ActiveChange(currentvalue){
  activeElement.style.color = currentvalue.color;
  activeElement.style.backgroundColor = currentvalue.backgroundColor;
  activeElement.style.textAlign = currentvalue.align;
  console.log(activeElement.style.textAlign);
  if(currentvalue.bold)
  {
   activeElement.style.fontWeight = "bold";
  }
  else{
   activeElement.style.fontWeight = "normal";
  }

  if(currentvalue.italic)
  {
   activeElement.style.fontStyle = "italic";
  }
  else{
   activeElement.style.fontStyle = "normal";
  }

  if(currentvalue.underline)
  {
   activeElement.style.textDecoration = "underline";
  }
  else{
   activeElement.style.textDecoration = "none";
  }

}

// for download button
const button1 = document.querySelector(".button1");

button1.addEventListener("click",btnclick);

function btnclick(){
   let data = JSON.stringify(state);
   let file = new Blob([data],{type:"application/json"});
   let url = URL.createObjectURL(file);
   let a = document.createElement("a");
   a.href=url;
   a.download="sheet.json";
   a.click();
}
// end


// copy paste and cut function code

let copy=document.querySelector("#copy");
let cut=document.querySelector("#cut");
let paste=document.querySelector("#paste");
let content="";
copy.addEventListener("click",()=>{
   content=activeElement.innerText;
})
paste.addEventListener("click",()=>{
   activeElement.innerText=content;
   
})
cut.addEventListener("click",()=>{
   content=activeElement.innerText;
   if(cut){
       activeElement.innerText="";
   }
})

//  end
 

let input=document.querySelector(".input");
input.addEventListener("change",()=>{
   let expression=input.value;
   let result=eval(expression);
   activeElement.innerText=result;
})