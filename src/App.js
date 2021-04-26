import "./App.css";

import Main from "./containers/Main";
import Footer from "./containers/Footer";
import Header from "./containers/Header";

import { theme } from "./theme";
import { ThemeProvider } from "@material-ui/core";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
