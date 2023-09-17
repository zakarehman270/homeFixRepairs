import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

function Header() {
	return (
		<Navbar
			collapseOnSelect
			expand="lg"
			className="outerContainerNavbar text-white">
			<Container>
				<Link to={"/"}>
					<img className="LogoImage" src="/assets/icons/logo.svg" alt="logo" />
				</Link>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="me-auto"></Nav>
					<Nav className="d-flex gap-3 flex-wrap">
						<Link to={"/"} className="text-white text-decoration-none">
							Home
						</Link>
						<Link to={"#"} className="text-white text-decoration-none">
							Services
						</Link>
						<Link to={"#"} className="text-white text-decoration-none">
							Blog
						</Link>
						<Link to={"#"} className="text-white text-decoration-none">
							Instant Booking
						</Link>
						<Link to={"/about-us"} className="text-white text-decoration-none">
							About Us
						</Link>
						<Link to={"contact-us"} className="text-white text-decoration-none">
							Contact Us
						</Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default Header;
