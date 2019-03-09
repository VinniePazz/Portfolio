import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

	html {
		font-size: 62.5%;
		box-sizing: border-box;
	}

	body {
		font-family: 'Cabin Sketch', cursive, sans-serif;
    font-weight: 400;
    line-height: 1.6;
    color: #393939;
		overflow-x: hidden;
		background: #ece9e6;
		background: linear-gradient(
			to left,
			#ffffff,
			#ece9e6
		);
	}

	* {
    margin: 0;
    padding: 0;
	}

	*,
	*::before,
	*::after {
			box-sizing: inherit;
	}
`;

export default GlobalStyle;
