if(process.argv.length == 2)
    console.log("No parameters passed");
else {
    const name = process.argv[2];
    console.log(`Hello ${name}!`);
}