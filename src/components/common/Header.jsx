import headerImage from "/src/assets/images/puppy.jpg";
import {Button} from "./Button.jsx";
import {Link} from "react-router-dom";
const Header = () => {
    return (
        <>
            <header>
                <div
                    className="flex flex-col justify-center items-center  max-w-full h-screen bg-cover"
                    style={{ backgroundImage: `url(${headerImage})` }}
                >
                    <h1 className="text-4xl font-bold text-white">
                        Let&apos;s get Dogether!!!
                    </h1>
                    <Link to="/signup">
                    <Button>
                        Sign Up
                    </Button>
                    </Link>
                </div>
            </header>
        </>
    );
}

export default Header;