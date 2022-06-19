function getName(x){
   if(x===1){
    return "Rock";
   }
   else if(x==2)
   return "Paper";

   else
   return "Scissor";
}

function getResult(selectedItem){
    var compBhai= Math.floor(Math.random()* 3)+ 1
    console.log(selectedItem, compBhai);
    var userChoice= getName(selectedItem);
    var compChoice= getName(compBhai);
    console.log(userChoice, compChoice);
    var result= " ";
    if(selectedItem==1 && compBhai==2){
        result = "You Loose";
    }
    else if(selectedItem==2 && compBhai==1){
        result="You Win";
    }
    else if(selectedItem==3 && compBhai==1){
        result="You Loose";
    }
    else if(selectedItem==1 && compBhai==3){
        result="You Win";
    }
    else if(selectedItem==2 && compBhai==3){
        result="You Loose";
    }
    else if(selectedItem==3 && compBhai==2){
        result="You Win";
    }
    else{
        result= "Match Draw";
    }
    document.getElementById("Results").innerHTML=
"Your Choice- " + userChoice + " \n" + "Computer Choice- " + compChoice + "\n" +
"Result- " + result;
}

