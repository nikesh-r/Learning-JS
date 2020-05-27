import lolcatjs from "lolcatjs";

lolcatjs.options.seed = Math.round(Math.random() * 1000);
lolcatjs.options.colors = true;

const printColored = (str) => {
    lolcatjs.fromString(str);
}

export {printColored};