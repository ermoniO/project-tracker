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
        <Route path="/status/:projectId" element={<Status clientName='Sunny Side Construction' projectId='112501' projectName='Website Startup' currentStatus='Design Phase' projectNotes='No notes available' recentActivity={['2024-07-29: Dev update for modules A & B submitted.', '2024-07-28: Meeting with client regarding enhancements.', '2024-07-25: Critical bug fixed in authentication module.', '2024-07-20: Planning revised and approved.']} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
