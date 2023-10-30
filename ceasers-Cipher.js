function rot13(str) {
    let ans = "";

    for (let i = 0; i < str.length; i++) {
        if (str[i] === " " || str.charCodeAt(i) < 65 || str.charCodeAt(i) > 90) {
            ans += str[i];
            continue;
        } else {
            if (str.charCodeAt(i) + 13 > 90) {
                let starter = 12 - (90 - str.charCodeAt(i));
                ans += String.fromCharCode(65 + starter);
            } else {
                ans += String.fromCharCode(str.charCodeAt(i) + 13);
            }
        }
    }
    return ans;
}

console.log(rot13("SERR CVMMN!"));