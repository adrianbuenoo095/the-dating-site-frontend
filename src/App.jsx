import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundpage";
import SignUpPage from "./pages/SignUpPage";
import NewDogPage from "./pages/NewDogPage";
import DogDetailsPage from "./pages/DogDetailsPage.jsx";
import NewEventPage from "./pages/NewEventPage";
import UpdateUserPage from "./pages/UpdateUserPage.jsx";
import UpdateEventPage from "./pages/UpdateEventPage.jsx";
import EventDetailsPage from "./pages/EventDetailPage.jsx";
import UserPage from "./pages/UserPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import UpdateDogPage from "./pages/UpdateDogPage.jsx";
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/newdog" element={<NewDogPage />} />
      <Route path="/newevent" element={<NewEventPage />} />
      <Route path="/updateuser" element={<UpdateUserPage />} />
      <Route path="/updateevent" element={<UpdateEventPage />} />
      <Route path="/updatedog" element={<UpdateDogPage />} />
      <Route path="/dogs/:dogId" element={<DogDetailsPage />} />
      <Route path="/events/:eventId" element={<EventDetailsPage />} />
      <Route path="/users/:userId" element={<UserPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="*" exact={true} element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
