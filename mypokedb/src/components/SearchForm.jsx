import Button from "./Button";

const SearchForm = () => {
	return (
		<form className="form">
			<input
				type="text"
				className="form__input form__input--four"
				placeholder="Pokemon Name"
				aria-label="Pokemon Name"
			/>
			<Button
				onClick={(e) => e.preventDefault()}
				text="Search"
				type="submit"
			/>
			<Button text="Clear" type="reset" />
		</form>
	);
};

export default SearchForm;
