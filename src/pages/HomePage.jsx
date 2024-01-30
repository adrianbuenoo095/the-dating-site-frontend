import { useState, useEffect } from "react";
import Card from "../components/Card"; // Adjust the path as necessary
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";

const HomePage = () => {
  const [items, setItems] = useState([]);

  try {
    useEffect(() => {
      fetchData().then((data) => setItems(data));
    }, []);
    async function fetchData() {
      const dogResponse = await fetch("/api/dogs");
      const dogs = await dogResponse.json();

      const userResponse = await fetch("/api/users");
      const users = await userResponse.json();

      return combineData(dogs, users);
    }
  } catch (error) {
    console.log(error);
  }

  function combineData(dogs, users) {
    return dogs.map((dog) => {
      const owner = users.find((user) => user.id === dog.userId);
      return { ...dog, owner };
    });
  }

  return (
    <div>
      <Navbar />
      <Header />
      <main className="flex flex-wrap justify-center">
        {items.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
