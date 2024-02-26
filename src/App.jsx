import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/layout/HomePage.jsx";
import LoginPage from "./pages/registration/LoginPage.jsx";
import NotFoundPage from "./pages/layout/NotFoundpage.jsx";
import SignUpPage from "./pages/registration/SignUpPage.jsx";
import NewDogPage from "./pages/dogs/NewDogPage.jsx";
import DogDetailsPage from "./pages/dogs/DogDetailsPage.jsx";
import NewEventPage from "./pages/events/NewEventPage.jsx";
import UpdateUserPage from "./pages/users/UpdateUserPage.jsx";
import UpdateEventPage from "./pages/events/UpdateEventPage.jsx";
import EventDetailsPage from "./pages/events/EventDetailPage.jsx";
import UserPage from "./pages/users/UserPage.jsx";
import AboutPage from "./pages/layout/AboutPage.jsx";
import UpdateDogPage from "./pages/dogs/UpdateDogPage.jsx";
import UserDogsPage from "./pages/users/UserDogsPage.jsx";
import AllEventsPage from "./pages/events/AllEventsPage.jsx";
import PrivateRoute from './components/privateRoutes/PrivateRoute.jsx'

function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/signup" element={<SignUpPage/>}/>
            <Route path="/newdog" element={
                <PrivateRoute>
                    <NewDogPage/>
                </PrivateRoute>
            }
            />
            <Route path="/newevent" element={
                <PrivateRoute>
                    <NewEventPage/>
                </PrivateRoute>
            }
            />
            <Route path="/updateuser" element={<UpdateUserPage/>}/>
            <Route path="/updateevent" element={
                <PrivateRoute>
                    <UpdateEventPage/>
                </PrivateRoute>
            }/>
            <Route path="/dogs/:dogId/update" element={
                <PrivateRoute>
                    <UpdateDogPage/>
                </PrivateRoute>
            }/>
            <Route path="/mydog" element={
                <PrivateRoute>
                    <UserDogsPage/>
                </PrivateRoute>
            }/>
            <Route path="/myevents" element={
                <PrivateRoute>
                    <AllEventsPage/>
                </PrivateRoute>
            }/>
            <Route path="/dogs/:dogId" element={
                <PrivateRoute>
                    <DogDetailsPage/>
                </PrivateRoute>
            }/>
            <Route path="/events/:eventId" element={
                <PrivateRoute>
                    <EventDetailsPage/>
                </PrivateRoute>
            }/>
            <Route path="/users/:userId" element={
                <PrivateRoute>
                    <UserPage/>
                </PrivateRoute>
            }/>
            <Route path="/about" element={<AboutPage/>}/>
            <Route path="*" exact={true} element={<NotFoundPage/>}/>
        </Routes>
    );
}

export default App;
