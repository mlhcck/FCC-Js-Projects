function convertToRoman(num) {
    const romanNum =[
        {value:1000, numeral:"M"},
        {value:900, numeral:"CM"},
        {value:500, numeral:"D"},
        {value:400, numeral:"CD"},
        {value:100, numeral:"C"},
        {value:90, numeral:"XC"},
        {value:50, numeral:"L"},
        {value:40, numeral:"XL"},
        {value:10, numeral:"X"},
        {value:9, numeral:"IX"},
        {value:5, numeral:"V"},
        {value:4, numeral:"IV"},
        {value:1, numeral:"I"}
    ];
    let ans="";
    
    while(num>0){
        while(num > 1000){
            ans += romanNum[0].numeral;
            num -= romanNum[0].value;
        }
        for(let i=12; i>=0; i--){
            if(num == romanNum[i].value){
                ans += romanNum[i].numeral;
                return ans;
            }
            if(num < romanNum[i].value){
                ans+=romanNum[i+1].numeral;
                num -= romanNum[i+1].value;
                break;
            }
        }
    }
    return ans;
}

console.log(convertToRoman(2014));
