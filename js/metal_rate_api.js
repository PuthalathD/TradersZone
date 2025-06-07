function getMetalRates() {
    const myHeaders = new Headers();
    myHeaders.append("x-api-key", "sk_29eCa9C778B20318175b8C80894c51B42176e7E16F506c87");

    const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow"
    };

    fetch("https://metals.g.apised.com/v1/market-data?symbols=XAU,XAG,XPD,XPT,XCU,NI,ZNC,ALU,LEAD&base_currency=USD", requestOptions)
        .then((response) => response.json())
        .then((data) => {
            const xauPrev = data.data.rates.XAU.prev;
            document.getElementById("closingPrice").innerText = xauPrev;
        })
        .catch((error) => console.error(error));
}