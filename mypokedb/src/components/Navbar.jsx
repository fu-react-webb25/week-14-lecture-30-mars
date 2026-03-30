import NavItem from "./NavItem";

const Navbar = ({ handleRouting }) => {
	const navitems = ["Pokedex", "Generate Team", "Search Pokemon"];

	return (
		<nav className="navbar">
			{navitems.map((item, index) => {
				return <NavItem handleRouting={handleRouting} text={item} key={index} />;
			})}
		</nav>
	);
};

export default Navbar;
