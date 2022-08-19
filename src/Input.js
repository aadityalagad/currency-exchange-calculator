import "./Input.css";

const Input = (props) => {
	return (
		<div className="input">
			<label className="input-label">Amount in {props.currency}: </label>
			<input
				className="input-input"
				value={props.value}
				onChange={(e) => {
					props.setValueHandler(e.target.value);
				}}
				type="number"
				placeholder="Enter amount"
			/>
			<select
				className="input-select"
				value={props.currency}
				onChange={(e) => props.setCurrencyHandler(e.target.value)}
			>
				{props.listOfCurrency.map((currency) => {
					return (
						<option key={currency} value={currency}>
							{currency}
						</option>
					);
				})}
			</select>
		</div>
	);
};

export default Input;
