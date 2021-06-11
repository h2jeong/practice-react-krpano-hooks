import React from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter, Link } from 'react-router-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Krpano from '@/components/Krpano';
import PureCSS3D from '@/components/PureCSS3D';
import Three from '@/components/Three';
import theme from '@/styles/theme';
import '@/styles/globals';

// reset.css
const GlobalStyle = createGlobalStyle`
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="content">
        <h1>Panorama Demo</h1>
        <BrowserRouter>
          <ul>
            <li>
              <Link to="/pureCSS3D">PureCSS3D</Link>
            </li>
            <li>
              <Link to="/three">Three</Link>
            </li>
            <li>
              <Link to="/krpano">Krpano</Link>
            </li>
          </ul>
          <Switch>
            <Route path="/pureCSS3D" component={PureCSS3D} />
            <Route path="/three" component={Three} />
            <Route path="/krpano" component={Krpano} />
          </Switch>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
