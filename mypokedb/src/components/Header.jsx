import Logo from "./Logo";
import Navbar from "./Navbar";

const Header = ({ handleRouting }) => {
	return (
		<header className="header">
			<Logo />
			<Navbar handleRouting={ handleRouting } />
		</header>
	);
};

export default Header;
