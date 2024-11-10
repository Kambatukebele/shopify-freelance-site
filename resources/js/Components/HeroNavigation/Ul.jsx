import { Link } from "@inertiajs/react";
const Ul = ({ isOpen }) => {
    return (
        <>
            <ul
                className={`${
                    isOpen ? " left-0" : "-left-[1524px]"
                } flex w-full bg-white absolute top-16 right-0 bottom-0 z-50  ease-in duration-500 justify-start items-center gap-4 flex-col py-4 h-[600px] xl:static xl:top-0 xl:h-0 xl:flex-row xl:bg-transparent xl:justify-center xl:gap-8`}
            >
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="#work">Work</a>
                </li>
                <li>
                    <a href="#services">Services</a>
                </li>
                <li>
                    <Link to="/Articles">Articles</Link>
                    {/* <a href="#">Articles</a> */}
                </li>
                <li>
                    <a href="#contact">Videos</a>
                </li>
            </ul>
        </>
    );
};
export default Ul;
