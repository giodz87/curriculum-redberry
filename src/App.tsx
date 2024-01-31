import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MyContext } from "./context";
import Home from "./pages/Home";
import { useEffect, useState } from "react";

export type MyContextProps = {
  name: string;
  setName: (value: string) => void;
  lastName: string;
  setLastName: (value: string) => void;
  personalImg: File | null;
  setPersonalImg: (value: File | null) => void;
  about: string;
  setAbout: (value: string) => void;
  email: string;
  setEmail: (value: string) => void;
  number: string;
  setNumber: (value: string) => void;
};
function App() {
  const [name, setName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [personalImg, setPersonalImg] = useState<File | null>(null);
  const [about, setAbout] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [number, setNumber] = useState<string>("");
  useEffect(() => {}, []);

  return (
    <MyContext.Provider
      value={{
        name,
        setName,
        lastName,
        setLastName,
        personalImg,
        setPersonalImg,
        about,
        setAbout,
        email,
        setEmail,
        number,
        setNumber,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Home />} />
        </Routes>
      </BrowserRouter>
    </MyContext.Provider>
  );
}

export default App;
