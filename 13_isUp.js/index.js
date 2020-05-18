// const isUp = require('is-up');
// const commandLineArgs = process.argv;

// if (commandLineArgs.length <= 2) {
//     console.log("No parameters passed!");
// } else {
//     const url = commandLineArgs[2];
//     (async () => {
//         console.log(await isUp(url));
//     })();
// }



const isUp = require('is-up');

async function main() {

    const commandLineArgs = process.argv;
    if (commandLineArgs.length <= 2) {
        console.log("No parameters passed!");
    } else {
        const url = commandLineArgs[2];
        const result = await isUp(url);
        console.log(result);
    }
    
}

main();
