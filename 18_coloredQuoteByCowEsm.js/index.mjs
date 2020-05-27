import {generateQuote} from './inspiringQuotes.mjs';
import {printColored} from "./coloredCat.mjs";
import {wrapString} from "./splitLine.mjs";
import {sayUsingcow} from './cowSay.mjs';

const myQuote = generateQuote();
const wrapQuote = wrapString(myQuote);
const strSaidByCow = sayUsingcow(wrapQuote);
printColored(strSaidByCow);