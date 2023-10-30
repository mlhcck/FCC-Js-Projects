function palindrome(str){
    let alphabeticstr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    let comparestr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    console.log(alphabeticstr);
    for(let i=alphabeticstr.length-1; i>=0; i--){
        if(alphabeticstr[i] == comparestr[alphabeticstr.length-i+-1]){
        }else{
          return false;
        } 
    }
    return true;
} 
console.log(palindrome("My age is 0, 0 si ega ym."));
