const wrapString = (str) => {
    let newStr = "";
    let array = str.split(" ");
    for(let i = 0; i < array.length; i++) {
        if(i != 0) {
            if (i%5 == 0){
                newStr += "\n";
            }
        }
        newStr += array[i] + " ";
    } 
    return newStr;  
}

export {wrapString};

