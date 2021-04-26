import "./App.css";

import { Provider as StoreProvider } from "react-redux";
import { store } from "./redux/store";

import { ThemeProvider } from "@material-ui/core";
import { theme } from "./theme";

import Main from "./containers/Main";
import Footer from "./containers/Footer";
import Header from "./containers/Header";

function App() {
  return (
    <StoreProvider store={store}>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Header />
          <Main />
          <Footer />
        </div>
      </ThemeProvider>
    </StoreProvider>
  );
}

export default App;
