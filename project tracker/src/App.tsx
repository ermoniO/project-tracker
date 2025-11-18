import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Status from "./pages/Status";
import NotFound from "./pages/NotFound";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/status/:projectId" element={<Status />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
