import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MyContext } from "./context";
import Home from "./pages/Home";
import { useEffect, useState } from "react";
import Experience from "./pages/Experience";
import Education from "./pages/Education";
import Information from "./components/Information";

export type MyContextProps = {
  count: number;
  setCount: (value: number) => void;

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
  position: string;
  setPosition: (value: string) => void;
  employer: string;
  setEmployer: (value: string) => void;
  startNumber: string;
  setStartNumber: (value: string) => void;
  endNumber: string;
  setEndNumber: (value: string) => void;
  description: string;
  setDescription: (value: string) => void;

  school: string;
  setSchool: (value: string) => void;
  quality: string;
  setQuality: (value: string) => void;
  graduation: string;
  setGraduation: (value: string) => void;
  workDescription: string;
  setWorkDescription: (value: string) => void;
};
function App() {
  const [count, setCount] = useState<number>(1);

  const [name, setName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [personalImg, setPersonalImg] = useState<File | null>(null);
  const [about, setAbout] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [number, setNumber] = useState<string>("");

  const [position, setPosition] = useState<string>("");
  const [employer, setEmployer] = useState<string>("");
  const [startNumber, setStartNumber] = useState<string>("");
  const [endNumber, setEndNumber] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const [school, setSchool] = useState<string>("");
  const [quality, setQuality] = useState<string>("");
  const [graduation, setGraduation] = useState<string>("");
  const [workDescription, setWorkDescription] = useState<string>("");

  useEffect(() => {}, []);

  return (
    <MyContext.Provider
      value={{
        count,
        setCount,
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
        position,
        setPosition,
        employer,
        setEmployer,
        startNumber,
        setStartNumber,
        endNumber,
        setEndNumber,
        description,
        setDescription,
        school,
        setSchool,
        quality,
        setQuality,
        graduation,
        setGraduation,
        workDescription,
        setWorkDescription,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/education" element={<Education />} />
          <Route path="/information" element={<Information />} />
        </Routes>
      </BrowserRouter>
    </MyContext.Provider>
  );
}

export default App;
