if(process.argv.length == 2)
    console.log("No parameters passed!");
else {
    let result = "";
    const num = process.argv[2];
    for (let i = num; i > 0; i--) {
        if(i != 1)
            result += i + "-";
        else
            result += i;
    }
    console.log(result);
}