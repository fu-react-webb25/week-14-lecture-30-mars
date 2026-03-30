import Button from "./Button";

const GenerateForm = () => {
	return (
		<form className="form">
			<input
				type="text"
				className="form__input form__input--three"
				placeholder="Pokemon Type"
				aria-label="Pokemon Type"
			/>
			<input
				type="number"
				className="form__input"
				placeholder="Size"
				aria-label="Team Size"
				min="1"
			/>
			<Button
				text="Generate!"
				type="submit"
				onClick={(e) => e.preventDefault()}
			/>
			<Button text="Clear" type="reset" />
		</form>
	);
};

export default GenerateForm;
