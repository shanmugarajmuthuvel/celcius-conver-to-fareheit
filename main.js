const celcius=document.querySelector("#input")
const faranhe=document.querySelector("#input1")
  window.addEventListener("load",()=>celcius.focus())
  celcius.addEventListener("input",()=>{
       faranhe.value=((celcius.value*9)/5+32).toFixed(2)
	   if(!celcius.value) faranhe.value=""
  })
  faranhe.addEventListener("input",()=>{
  celcius.value=((faranhe.value-32)*5/9).toFixed(2)
  if(!faranhe.value) celcius.value=""
  })