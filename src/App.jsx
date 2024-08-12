import { useState } from "react";
import "./App.css";
import { Header } from "./assets/components/Header";
import { Main } from "./assets/components/Main";
import { Footer } from "./assets/components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </>
  );
}

export default App;
