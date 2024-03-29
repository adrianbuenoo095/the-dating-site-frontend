import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import Navbar from "../../components/common/Navbar.jsx";
import Footer from "../../components/common/Footer.jsx";
import DogCard from "../../components/Dog/DogCard.jsx";
import DogList from "../../components/Dog/DogList.jsx";

function UserDogsPage() {
    return (
        <>
            <Navbar/>
            <DogList/>
            <Footer/>
        </>
    );
}

export default UserDogsPage;
