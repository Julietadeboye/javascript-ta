const str = 'in girum imus nocte et consumimur igni';

const isPalindrome = (inStr) => {
    // removed all non-alphanumeric characters using a regular experession
    inStr = inStr.replace(/[^a-zA-Z0-9]+/g,'');
    // changed to upper case
    inStr = inStr.toUpperCase();
    // Check whether the string is empty or not
    if(inStr==="") {
        console.log("Nothing found!");
        return false;
    }
    for (let i=0; i<inStr.length; i++) {
        if (inStr[i] !== inStr[inStr.length -1 -i]) {
            return false;
        }
    }
    return true;
}

console.log(isPalindrome(str));