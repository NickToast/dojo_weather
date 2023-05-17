var cookie = document.querySelector("#cookie-message")

function removeCookie() {
    cookie.remove();
}

function c2f(temp) {
    return Math.round((9 / 5 * temp) + 32);
}

function f2c(temp) {
    return Math.round(5 / 9 * (temp - 32));
}

function convertTemp(element) {
    for (var i = 1; i < 9; i++) {
        var tempClass = document.querySelector("#temp" + i);
        var tempValue = parseInt(tempClass.innerText);
        if (element.value == "°C") {
            tempClass.innerText = f2c(tempValue) + "°";
        } else {
            tempClass.innerText = c2f(tempValue) + "°";
        }
    }
}