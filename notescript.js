
window.alert("THE NOTES ON THIS WEBSITE WERE CREATED BY MR.GARRISON OF EPS")

function select(num) {
    "use strict";
    var iframe = document.getElementById("doc");
    if (num === 2 || num === 3 || num === 4 || num === 5 || num === 6 || num === 7 || num === 9 || num === 10) {
        iframe.src = "sections/" + String(num) + ".0.pdf";
    } else {
        iframe.src = "sections/" + String(num) + ".pdf";
    }
}