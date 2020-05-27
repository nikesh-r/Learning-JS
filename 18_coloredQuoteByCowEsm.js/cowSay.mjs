import cowsay from "cowsay";

const sayUsingcow = (str) => {
    const result = cowsay.say({
        text : str,
        e : "oO",
        T : "U "
    });
    return result;
}

export {sayUsingcow};