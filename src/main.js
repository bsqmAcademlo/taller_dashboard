import { printHeader, printInfo } from "./js/layout.js";
import { amountFollowers } from "./js/amountFollowers.js";
import "./js/darkMode.js";

const bodyHeaders = document.querySelector(".body__headers");
const bodyInfo = document.querySelector(".body__info-items");

const contentMonths = document.querySelector(".months");
const headerMonthTitle = document.querySelector(".header__month-title span");
const headerTitle = document.querySelector(".header__title h4 span");

let dataSocial = null;

contentMonths.addEventListener("click", (e) => {
    if (e.target.classList.contains("month")) {
        const name = e.target.textContent;
        headerMonthTitle.textContent = name;

        const { dataHead, dataBody } = dataSocial[name];

        headerTitle.textContent = amountFollowers(dataHead);

        printHeader(dataHead, bodyHeaders);
        printInfo(dataBody, bodyInfo);
    }
});

async function getData() {
    try {
        const data = await fetch("./src/data.json");
        const res = await data.json();
        dataSocial = res;

        const { dataHead, dataBody } = dataSocial.ene;

        headerTitle.textContent = amountFollowers(dataHead);

        printHeader(dataHead, bodyHeaders);
        printInfo(dataBody, bodyInfo);
    } catch (error) {
        console.log(error);
    }
}

getData();
