const boxDiv=document.querySelectorAll('.box');
const paragraph = document.querySelectorAll('p');
const btn = document.querySelector('.btn');
const p = document.querySelector('p');
const h1 = document.querySelector('.title');
const X = document.querySelector('.X');
const O = document.querySelector('.O');
let points =false;
let pointsX=0;
let pointsO=0;
let move=1;
let gameOver=false; 


boxDiv.forEach((box,index)=>{

box.addEventListener('click',()=>{
  
  if(paragraph[index].textContent.length===0 && !gameOver){

    if(move%2===1){
      paragraph[index].textContent="X";
        
      }
      if(move%2===0){
        paragraph[index].textContent="O";
          
      }
      
      move++;
      
  }


  if(paragraph[0].textContent===paragraph[1].textContent && paragraph[1].textContent===paragraph[2].textContent){
    if(paragraph[0].textContent==='X'){
     h1.textContent="X Печели"
      if(!points){
        pointsX++;
        X.textContent=`X - ${pointsX}`
       
      }
      points=true;
     gameOver=true;
     
    }
    if(paragraph[0].textContent==='O'){
      h1.textContent="О Печели"
      if(!points){
        pointsO++;
        O.textContent=`O - ${pointsO}`
       
      }
      points=true;
      gameOver=true;
    }
   
   }

if(paragraph[3].textContent===paragraph[4].textContent && paragraph[4].textContent===paragraph[5].textContent){
    if(paragraph[3].textContent==='X'){
      h1.textContent="Х Печели"
      if(!points){
        pointsX++;
        X.textContent=`X - ${pointsX}`
       
      }
      points=true;
     gameOver=true;
    }
    if(paragraph[3].textContent==='O'){
      h1.textContent="О Печели"
      if(!points){
        pointsO++;;
        O.textContent=`O - ${pointsO}`
       
      }
      points=true;
      gameOver=true;
    }
   }

if(paragraph[6].textContent===paragraph[7].textContent && paragraph[7].textContent===paragraph[8].textContent){
    if(paragraph[6].textContent==='X'){
     h1.textContent="Х Печели"
     if(!points){
      pointsX++;
      X.textContent=`X - ${pointsX}`
     
    }
    points=true;
      gameOver=true;
      
    }
    if(paragraph[6].textContent==='O'){
      h1.textContent="О Печели"
      if(!points){
        pointsO++;
        O.textContent=`O - ${pointsO}`
       
      }
      points=true;
      gameOver=true;
    }     
    
}

//1va kolona
if(paragraph[0].textContent===paragraph[3].textContent && paragraph[3].textContent===paragraph[6].textContent){
  if(paragraph[0].textContent==='X'){
    h1.textContent="Х Печели";
    if(!points){
      pointsX++;
      X.textContent=`X - ${pointsX}`
     
    }
    points=true;
     gameOver=true;

   }
   if(paragraph[0].textContent==='O'){
    h1.textContent="О Печели"
    if(!points){
      pointsO++;
      O.textContent=`O - ${pointsO}`
     
    }
    points=true;
    gameOver=true;
   }   
}

//2ra kolona
if(paragraph[1].textContent===paragraph[4].textContent && paragraph[4].textContent===paragraph[7].textContent){
  if(paragraph[1].textContent==='X'){
    h1.textContent="Х Печели";
    if(!points){
      pointsX++;
      X.textContent=`X - ${pointsX}`
     
    }
    points=true;
     gameOver=true;

   }
   if(paragraph[1].textContent==='O'){
    h1.textContent="О Печели"
    if(!points){
      pointsO++;
      O.textContent=`O - ${pointsO}`
     
    }
    points=true;
    gameOver=true;
   }   
}

//3ta kolona
if(paragraph[2].textContent===paragraph[5].textContent && paragraph[5].textContent===paragraph[8].textContent){
  if(paragraph[2].textContent==='X'){
    h1.textContent="Х Печели";
    if(!points){
      pointsX++;
      X.textContent=`X - ${pointsX}`
     
    }
    points=true;
     gameOver=true;

   }
   if(paragraph[2].textContent==='O'){
    h1.textContent="О Печели"
    if(!points){
      pointsO++;
      O.textContent=`O - ${pointsO}`
     
    }
    points=true;
    gameOver=true;
   }   
}

//diagonal 1 
if(paragraph[0].textContent===paragraph[4].textContent && paragraph[4].textContent===paragraph[8].textContent){
  if(paragraph[0].textContent==='X'){
    h1.textContent="Х Печели";
    if(!points){
      pointsX++;
      X.textContent=`X - ${pointsX}`
     
    }
    points=true;
     gameOver=true;

   }
   if(paragraph[0].textContent==='O'){
    h1.textContent="О Печели"
    if(!points){
      pointsO++;
      O.textContent=`O - ${pointsO}`
     
    }
    points=true;
    gameOver=true;
   }   
}

//diagonal2
if(paragraph[2].textContent===paragraph[4].textContent && paragraph[4].textContent===paragraph[6].textContent){
  if(paragraph[2].textContent==='X'){
    h1.textContent="Х Печели";
    if(!points){
      pointsX++;
      X.textContent=`X - ${pointsX}`
     
    }
    points=true;
     gameOver=true;

   }
   if(paragraph[2].textContent==='O'){
    
    h1.textContent="О Печели"
    if(!points){
      pointsO++;
      O.textContent=`O - ${pointsO}`
     
    }
    points=true;
    gameOver=true;
   }   
}

if(move==10 && h1.textContent===""){

h1.textContent="Равенство"
}

})

})



btn.addEventListener('click', ()=>{
  for(let i=0;i<paragraph.length;i++){
    paragraph[i].textContent="";
  }
  h1.textContent="";
  points =false;
gameOver=false;
move=1;
})