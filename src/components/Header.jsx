import headerImage from "../assets/puppy.jpg";
import {Button} from "./Button.jsx";
const Header = () => {
    return (
        <>
            <header>
                <div
                    id="Home"
                    className="flex flex-col justify-center items-center  max-w-full h-screen bg-cover"
                    style={{ backgroundImage: `url(${headerImage})` }}
                >
                    <h1 className="text-4xl font-bold text-white">
                        Let&apos;s get Dogether!!!
                    </h1>
                    <Button/>
                </div>
            </header>
        </>
    );
}

export default Header;