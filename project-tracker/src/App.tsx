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

        <Route path="/status/:projectId" element={<Status 
        
        clientName='Sunny Side Construction' 
        projectId='112501' 
        projectName='Website Startup' 
        currentStatus='Design Phase' 
        projectNotes='CLient mentioned more pages might be needed based on initial scope.' 
        nextSteps='Finalize design mockups and get client approval.' 
        recentActivity={['2025-11-17: Project start date.', '2025-11-19: Discovery call.', '2025-12-20: Initial Home Page design mockups shared.'
                        
                       ]} 
        currentStage='IN PROGRESS'
        
        />} />
        
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
