import {AgeCalculator} from "./age-calculator";
import "../css/app.css";
import "../scss/reset.scss";
import "../scss/style.scss";

/********** Paste your code here! ************/

window.onload = () => {
    console.log("Paste your code here!");
    AgeCalculator.init();
};

document.addEventListener("DOMContentLoaded", () => {
    AgeCalculator.init();
});
