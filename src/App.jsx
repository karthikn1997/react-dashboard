import './App.css'
import Sidebar from './components/Sidebar'
import ProgressStepper from './components/ProgressStepper'


function App() {
 
 

  return (
    <>
      <div className="w-full bg-slate-200 h-screen flex justify-between items-center">
        <Sidebar/>
        <ProgressStepper/>
      </div>
    </>
  )
}

export default App
