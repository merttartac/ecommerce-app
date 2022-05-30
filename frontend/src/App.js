import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import { GlobalStyle } from "./GlobalStyle";
import HomePage from "./pages/homepage/HomePage";
import NotFound from "./pages/not-found/NotFound";

function App() {
  return (
    <main style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
      <Header />

      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/*" element={<NotFound />} />
        </Routes>
        <GlobalStyle />
      </Router>
    </main>
  );
}

export default App;
