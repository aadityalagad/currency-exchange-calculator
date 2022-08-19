import "./Output.css";

const Output = (props) => {
	return (
		<div className="output">
			<label className="output-label">Amount in BTC: </label>
			<div className="output-value">{props.value}</div>
		</div>
	);
};

export default Output;
