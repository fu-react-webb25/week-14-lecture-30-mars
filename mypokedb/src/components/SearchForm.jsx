import { useState } from "react";
import Button from "./Button";

const SearchForm = ({ handleSearch }) => {
	const [userInput, setUserInput] = useState('');

	const handleClick = (e) => {
		e.preventDefault();
		handleSearch(userInput);
	}

	return (
		<form className="form">
			<input
				type="text"
				className="form__input form__input--four"
				placeholder="Pokemon Name"
				aria-label="Pokemon Name"
				onChange={(e) => setUserInput(e.target.value)}
			/>
			<Button
				onClick={handleClick}
				text="Search"
				type="submit"
			/>
			<Button text="Clear" type="reset" />
		</form>
	);
};

export default SearchForm;
