import "./App.css";
import Checkout from "./Checkout";
import Header from "./header";
import Home from "./Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { StateProvider } from "./StateProvider";
import reducer, { initialState } from "./Reducer";
import Login from "./Login.js";

function App() {
  return (
    <div className="App">
      <StateProvider initialState={initialState} reducer={reducer}>
        <Router>
          <Routes>
            <Route
              path="/checkout"
              element={
                <>
                  <Header />
                  <Checkout />
                </>
              }
            />

            <Route path="/login" element={<Login />} />

            <Route
              path="/"
              element={
                <>
                  <Header />
                  <Home />
                </>
              }
            />
          </Routes>
        </Router>
      </StateProvider>
    </div>
  );
}

export default App;
