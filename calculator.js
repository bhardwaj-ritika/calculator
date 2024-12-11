function appendValue(value) {
    document.getElementById("result").value += value;
  }
  
 function addValue(value){
  document.getElementById("result").value +=value;}
  function minusValue(value){
    document.getElementById("result").value +=value;}
  function clearresult(){
    document.getElementById('result').value="";
    // console.log(value[""])
  }
  

  function calculator(){
    
    let result= document.getElementById("result");
    
    let eq=result.value;
    
    let part = [];
    let pos = 0;
    let ops = ['+','*','/', '-']
    
    
    for(let i = 0; i < eq.length; i++) {

      if(ops.includes(eq[i]) || ops.includes(part[pos])) {
        pos++;
      }
      
      if(part[pos] == undefined) part[pos] = "";
      
      part[pos] += eq[i];
    }
    console.log(part)
 let operators=[]
 let number=[]
 for(let i = 0; i < eq.length; i++) {
  if(ops.includes(part[i])) {
    operators.push(part[i])
  }
  
  else{
    number.push(Number(part[i]))
  }}
let total=number.reduce((h1, h2, index) => {
  if (index === 0) return  h2; 
  let op = operators[index - 1]; 
  switch (op) {


      case "+":
          return h1 + h2;
      case "-":
          return h1 - h2;
      
  
}}, 0);
  
 result.value=total;
 
}
