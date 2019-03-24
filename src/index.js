module.exports = function check(str, bracketsConfig) {
    let openBracket, closeBracket;
    let checkBrackets = str.split("");
    for(let i = 0; i < str.length; i++){
      for(let j = 0; j < bracketsConfig.length; j++){
        openBracket = bracketsConfig[j][0] 
        closeBracket = bracketsConfig[j][1]              
          if(checkBrackets[i] == openBracket && checkBrackets[i+1] == closeBracket){
            checkBrackets.splice(i,2)
            i = -1;  
          }else{                   
           continue;
          };               
        };  
    };  
    if(checkBrackets.length == 0){
      return true;
    }else{
      return false;
    };  
};
