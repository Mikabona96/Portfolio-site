import {createGlobalStyle} from 'styled-components';


const GlobalStyle = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	body {
		background: #1b1b1b;
		font-family: 'Inter', sans-serif;
	}

	button {
		font-weight: bold;
		font-size: 1.1rem;
		cursor: pointer;
		border: 3px solid #23d997;
		background: transparent;
		color: white;
		transition: all 0.5s ease;
		font-family: 'Inter', sans-serif;
		&:hover {
			background-color: #23d997;
			color: white;
		}
	}
	h2 {
			font-weight: lighter;
			font-size: 2rem;
		}
		h3 {
			color: white;
		}
		h4 {
			font-weight: bold;
		}
		span {
			font-weight: bold;
			color: #23d997;
		}
		a {
			font-size: .5rem;
		}
		p {
			padding: 1rem;
			color: #ccc;
			font-size: 1.3rem;
			line-height: 150%;
		}
`

export default GlobalStyle;