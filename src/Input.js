import { useEffect, useState } from "react";
import "./Input.css";
import Output from "./Output";

const Input = () => {
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
        <div className="input">
            <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
            >
                {listOfCurrency.map((currency) => {
                    return (
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    );
                })}
            </select>

            <input
                value={value}
                onChange={(e) => {
                    setValue(e.target.value);
                }}
                type="text"
                placeholder="Enter amount"
            />
            <Output value={result} />
        </div>
    );
};

export default Input;
