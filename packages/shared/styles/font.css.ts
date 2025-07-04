import { globalFontFace, globalStyle } from '@vanilla-extract/css';

const WANTED_SANS_VARIABLE = 'WANTED_SANS_VARIABLE';

globalFontFace(WANTED_SANS_VARIABLE, {
	src: `url('/fonts/WantedSansVariable.woff2') format('woff2'), url('/fonts/WantedSansVariable.woff') format('woff')`,
	fontDisplay: 'block',
});

globalStyle('html, body', {
	fontFamily: WANTED_SANS_VARIABLE,
	letterSpacing: '-0.0375em',
});
