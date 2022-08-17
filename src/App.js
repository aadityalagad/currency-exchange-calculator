import "./App.css";
import Calculator from "./Calculator";

function App() {
    return (
        <div className="app">
            <h1 className="app-heading">Currency Exchange Calculator</h1>
			<h2 className="app-description">Convert x value in the provided currency to btc</h2>
            <Calculator />
        </div>
    );
}

export default App;
