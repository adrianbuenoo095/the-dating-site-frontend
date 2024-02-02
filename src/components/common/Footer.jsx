const getYear = () => {
    return new Date().getFullYear();
}

const Footer = () => {
    return (
        <>
            <footer className="flex flex-wrap -mx-3 my-5">
                <div className="w-full max-w-full sm:w-3/4 mx-auto text-center">
                    <span className="text-sm text-gray-600 py-1"> &copy;{getYear()} All Rights Reversed by the Dating Site</span>
                </div>
            </footer>
        </>);
}

export default Footer;