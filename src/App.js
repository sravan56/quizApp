import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AuthForm from "./components/AuthForm";
import QuizCreate from "./components/QuizCreate";
import QuizAnalytics from "./components/QuizAnalytics";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AuthForm/>} />
        <Route path="/quiz" element={<QuizCreate/>}/>
        <Route path="/dashboard" element={<Home />} />
        <Route path="/analytics" element={<QuizAnalytics/>}/>
      </Routes>
    </div>
  );
}

export default App;
