import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Nav = () => {
	return (
		<StyledNav>
			<h1><Link to="/">Capture</Link></h1>
			<ul>
				<li>
					<Link to="/">1. About Us</Link>
				</li>
				<li>
					<Link to="/work">2. Our Work</Link>
				</li>
				<li>
					<Link to="/contact">3. Cotact Us</Link>
				</li>
			</ul>
		</StyledNav>
	)
}


const StyledNav = styled.nav`
	min-height: 10vh;
	display: flex;
	margin: auto;
	justify-content: space-between;
	align-items: center;
	padding: 1rem 5rem;
	background: #282828;
	a {
		color: white;
		text-decoration: none;
		font-size: 1rem;
	}
	h1 a{
		font-size: 1.5rem;
		font-family: "Lobster", cursive;
		font-weight: lighter;
	}
	ul {
		display: flex;
		list-style: none;
	}
	li {
		padding-left: 3rem;
	}
	
`

export default Nav