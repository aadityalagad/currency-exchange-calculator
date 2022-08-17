import { useEffect, useState } from "react";
import "./Calculator.css";
import Input from "./Input";
import Output from "./Output";

const Calculator = () => {
    const [value, setValue] = useState(0);
    const [result, setResult] = useState(0);
    const [currency, setCurrency] = useState("INR");
    const listOfCurrency = [
        "AUD",
        "USD",
        "BRL",
        "CAD",
        "CHF",
        "CLP",
        "CNY",
        "DKK",
        "EUR",
        "GBP",
        "HKD",
        "INR",
        "ISK",
        "JPY",
        "KRW",
        "NZD",
        "PLN",
        "RUB",
        "SEK",
        "SGD",
        "THB",
        "TRY",
        "TWD",
    ];

    const handleValue = (value) => {
        setValue(value);
    };

    const handleCurrency = (currency) => {
        setCurrency(currency);
    };

    useEffect(() => {
        var requestOptions = {
            method: "GET",
            redirect: "follow",
        };

        fetch(
            `https://blockchain.info/tobtc?currency=${currency}&value=${
                value ? value : 0
            }`,
            requestOptions
        )
            .then((response) => response.text())
            .then((result) => setResult(result))
            .catch((error) => console.log("error", error));
    }, [value, currency]);

    return (
        <div className="calculator">
            <Input
                currency={currency}
                listOfCurrency={listOfCurrency}
                setCurrencyHandler={handleCurrency}
                setValueHandler={handleValue}
            />
            <Output value={result} />
        </div>
    );
};

export default Calculator;
