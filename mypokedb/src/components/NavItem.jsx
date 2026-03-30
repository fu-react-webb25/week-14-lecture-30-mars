const NavItem = ({ text, handleRouting }) => {
	return <p 
		className="navbar__navitem"
		onClick={() => handleRouting(text)}
	>{text}</p>;
};

export default NavItem;
