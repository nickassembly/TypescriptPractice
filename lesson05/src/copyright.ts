// Original JS code
// const year = document.getElementById("year");
// const thisYear = new Date().getFullYear();
// year.setAttribute("datetime", thisYear);
// year.textContent = thisYear;

// TS one
// let year: HTMLElement | null;
// year = document.getElementById("year");
// let thisYear: string;
// thisYear = new Date().getFullYear().toString();
// if (year) {
//     year.setAttribute("datetime", thisYear);
//     year.textContent = thisYear;
// }

// better version
const year =  document.getElementById("year") as HTMLSpanElement
const thisYear: string = new Date().getFullYear().toString();
year.setAttribute("datetime", thisYear);
year.textContent = thisYear;


