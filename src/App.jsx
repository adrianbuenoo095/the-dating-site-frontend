import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundpage";
import SignUpPage from "./pages/SignUpPage";
import NewDogPage from "./pages/NewDogPage";
import DogDetailsPage from "./pages/DogDetailsPage.jsx";
import NewEventPage from "./pages/NewEventPage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/newdog" element={<NewDogPage />} />
      <Route path="/newevent" element={<NewEventPage />} />
      <Route path="/dogs/dogId" element={<DogDetailsPage/>} />
      <Route path="*" exact={true} element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
