import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePape";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundpage";
import SignUpPage from "./pages/SignUpPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/dogs" element={<DogsPage />} />
      <Route path="/events" element={<EventsPage />} />
      <Route path="/dogs/:dogId" element={<DogDetailsPage />} />
      <Route path="/events/:eventId" element={<EventDetailsPage />} />
      <Route path="*" exact={true} element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
