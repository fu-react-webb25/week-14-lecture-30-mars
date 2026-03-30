import NavItem from "./NavItem";

const Navbar = () => {
	const navitems = ["Pokedex", "Generate Team", "Search Pokemon"];

	return (
		<nav className="navbar">
			{navitems.map((item, index) => {
				return <NavItem text={item} key={index} />;
			})}
		</nav>
	);
};

export default Navbar;
