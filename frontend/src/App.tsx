import { Home } from "./Pages/Home/Home.tsx";
import { Navbar } from "./components/navBar/Navbar.tsx";
import { Route, Routes } from "react-router-dom";

import { GlobalContextWrapper } from "./context/GlobalContextWrapper.tsx";
import { Footer } from "./components/footer/Footer.tsx";
import { Example } from "./Pages/Example/Example.tsx";
import { QueryExample } from "./Pages/Example/QueryExample.tsx";

function App() {
  return (
    <GlobalContextWrapper>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/example" element={<Example />} />
        <Route path="query" element={<QueryExample />} />
        <Route path="*" element={<Home />} />
      </Routes>

      <Footer />
    </GlobalContextWrapper>
  );
}

export default App;
