import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import App from './app/app';
import {HelmetProvider} from "react-helmet-async";
import HistoryRouter from "./history/historyRouter";
import browserHistory from "./history/browserHistory";
import {Provider} from "react-redux";
import Store from "./store/store";
import {ThemeProvider} from "styled-components";
import defaultTheme from "./theme/theme";
import GlobalStyles from "./components/globalStyles/globalStyles";
import ScrollToTop from "./components/scrollToTop/ScrollToTop";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <StrictMode >
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
        <Provider store={Store}>
          <ThemeProvider theme={defaultTheme}>
            <GlobalStyles />
            <ScrollToTop />
            <App />
          </ThemeProvider>
        </Provider>
      </HistoryRouter>
    </HelmetProvider>
  </StrictMode >
);
