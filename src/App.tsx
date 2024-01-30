import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MyContext } from "./context";
import Home from "./pages/Home";

export type MyContextProps = {};
function App() {
  return (
    <MyContext.Provider value={{}}>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Home />} />
        </Routes>
      </BrowserRouter>
    </MyContext.Provider>
  );
}

export default App;
