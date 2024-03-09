import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MyContext } from "./context";
import Home from "./pages/Home";
import { useEffect, useState } from "react";
import Experience from "./pages/Experience";
import Education from "./pages/Education";
import Information from "./components/Information";

type ExperienceType = {
  position: string;
  employer: string;
  startNumber: string;
  endNumber: string;
  description: string;
};

type EducationType = {
  school: string;
  quality: string;
  graduation: string;
  description: string;
  workDescription: string;
};

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

  experience: ExperienceType[] | [];
  setExperience: (value: ExperienceType[] | []) => void;

  education: EducationType[] | [];
  setEducation: (value: EducationType[] | []) => void;
};
function App() {
  const [count, setCount] = useState<number>(1);

  const [name, setName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [personalImg, setPersonalImg] = useState<File | null>(null);
  const [about, setAbout] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [number, setNumber] = useState<string>("");

  const [experience, setExperience] = useState<ExperienceType[] | []>([]);

  const [education, setEducation] = useState<EducationType[] | []>([]);

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
        experience,
        setExperience,
        education,
        setEducation,
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
