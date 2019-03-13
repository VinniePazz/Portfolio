import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

	html {
		box-sizing: border-box;
	}

	body {
		font-family: 'Oswald', sans-serif;
    font-weight: 400;
    line-height: 1.6;
    color: #393939;
		overflow-x: hidden;
		background: #EDF2F4;
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
