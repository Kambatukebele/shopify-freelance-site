//Font Awesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStore } from "@fortawesome/free-solid-svg-icons";
import { faShareFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faWrench } from "@fortawesome/free-solid-svg-icons";
import { faMeteor } from "@fortawesome/free-solid-svg-icons";
import { faHeartPulse } from "@fortawesome/free-solid-svg-icons";
import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { faBuilding } from "@fortawesome/free-solid-svg-icons";
import { faFaceTired } from "@fortawesome/free-solid-svg-icons";
import { faHeadset } from "@fortawesome/free-solid-svg-icons";
import { faFaceFrown } from "@fortawesome/free-solid-svg-icons";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";
import { faBatteryFull } from "@fortawesome/free-solid-svg-icons";

//Blog Images
import blog1 from "../../public/assets/images/blog1.png";
import blog2 from "../../public/assets/images/blog2.png";
import blog3 from "../../public/assets/images/blog3.png";

//Portfolio Images
import webizyCode from "../../public/assets/images/webizycodeVision.png";
import benzagroupe from "../../public/assets/images/benzagroupe.png";

//Hero Navigation data
import imageHero from "../../public/assets/images/judens.png";
import background from "../../public/assets/images/bg.png";
import logo from "../../public/assets/images/logo.png";
import blue_circle from "../../public/assets/images/blue_circle.png";
import circle from "../../public/assets/images/circle_bg.png";
//End Hero Navigation data

// Technologies
import laravel from "../../public/assets/svg/laravel.svg";
import php from "../../public/assets/svg/php.svg";
import javascript from "../../public/assets/images/javascript.webp";
import reactjs from "../../public/assets/svg/reactjs.svg";
import tailwindcss from "../../public/assets/images/tailwindcss.webp";
import mysqld from "../../public/assets/images/mysql.webp";
// End Technologies

export const heroNavigation = {
    circle: circle,
    imgHero: imageHero,
    background: background,
    logo: logo,
    blue_circle: blue_circle,
};

export const technologies = [
    {
        id: 1,
        title: "laravel",
        img: laravel,
    },
    {
        id: 2,
        title: "php",
        img: php,
    },
    {
        id: 3,
        title: "reactjs",
        img: reactjs,
    },
    {
        id: 4,
        title: "javascript",
        img: javascript,
    },
    {
        id: 5,
        title: "tailwindcss",
        img: tailwindcss,
    },
    {
        id: 6,
        title: "mysql",
        img: mysqld,
    },
];

export const Icon = () => {
    return (
        <span className="w-8 h-8 bg-white rounded-full flex justify-center items-center">
            <svg
                width="20px"
                height="20px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#000000"
            >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12.2929 4.29289C12.6834 3.90237 13.3166 3.90237 13.7071 4.29289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L13.7071 19.7071C13.3166 20.0976 12.6834 20.0976 12.2929 19.7071C11.9024 19.3166 11.9024 18.6834 12.2929 18.2929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L12.2929 5.70711C11.9024 5.31658 11.9024 4.68342 12.2929 4.29289Z"
                        fill="#000000"
                    ></path>{" "}
                </g>
            </svg>
        </span>
    );
};

export const services = [
    {
        id: 1,
        icon: <FontAwesomeIcon icon={faStore} />,
        title: "Shopify website",
        description:
            "Shopify is an ideal choice for a winning ecommerce website. From full, end to end builds, design and development, I've got you covered.",
    },
    {
        id: 2,
        icon: <FontAwesomeIcon icon={faShareFromSquare} />,
        title: "Migrations & moves",
        description:
            "Moving an ecommerce website to Shopify is no mean feat! Let me take the headache out of it and take over the heavy lifting for you",
    },
    {
        id: 3,
        icon: <FontAwesomeIcon icon={faWrench} />,
        title: "Theme development",
        description:
            "I can help build custom Shopify themes, add to existing themes or advise on your current Shopify site setup.",
    },
    {
        id: 4,
        icon: <FontAwesomeIcon icon={faMeteor} />,
        title: "Headless Shopify",
        description:
            "For ultimate ecommerce website performance, I can deliver Shopify as a headless ecommerce solution, wiring it up with a static front end.",
    },
    {
        id: 5,
        icon: <FontAwesomeIcon icon={faHeartPulse} />,
        title: "Conversion Rate Optimisation & SEO",
        description:
            "Current Shopify site not converting customers as well as it did? Need help climbing those search rankings? Let me take a look for you.",
    },
    {
        id: 6,
        icon: <FontAwesomeIcon icon={faEnvelopeOpenText} />,
        title: "Email Marketing Integration",
        description:
            "Will help you integrate an email provider to your store and creat and run email campaigns",
    },
];

//problems
export const problems = [
    {
        id: 1,
        icon: <FontAwesomeIcon icon={faLightbulb} />,
        description:
            "You're looking to launch a new Shopify ecommerce website and need planning and development advice to get started.",
    },
    {
        id: 2,
        icon: <FontAwesomeIcon icon={faBuilding} />,
        description: "You want to design and develop a custom Shopify theme.",
    },
    {
        id: 3,
        icon: <FontAwesomeIcon icon={faFaceTired} />,
        description:
            "You're existing Shopify website is not performing or converting sales well as it could.",
    },
    {
        id: 4,
        icon: <FontAwesomeIcon icon={faHeadset} />,
        description:
            "You want to use Shopify as a core part of your ecommerce strategy and need support to develop a solution.",
    },
    {
        id: 5,
        icon: <FontAwesomeIcon icon={faFaceFrown} />,
        description:
            "You want to migrate your current ecommerce solution to Shopify but aren't sure where to start.",
    },
    {
        id: 6,
        icon: <FontAwesomeIcon icon={faChartLine} />,
        description:
            "You want to maximise your site's performance by using Shopify as a headless ecommerce platform that powers a static site generator such as Next.js.",
    },
    {
        id: 7,
        icon: <FontAwesomeIcon icon={faBatteryFull} />,
        description:
            "You want conversion optimisation or SEO advice to improve your existing Shopify ecommerce website.",
    },
];

//solutions
export const solutions = [
    {
        id: 1,
        icon: <FontAwesomeIcon icon={faThumbsUp} />,
        description:
            "Insights from an experienced freelance developer with over 5 years in the industry.",
    },
    {
        id: 2,
        icon: <FontAwesomeIcon icon={faThumbsUp} />,
        description:
            "A reliable source of candid and business-oriented advice, always prioritizing your interests and those of your business.",
    },
    {
        id: 3,
        icon: <FontAwesomeIcon icon={faThumbsUp} />,
        description:
            "An approach focused on robust marketing objectives, conversion-optimized ecommerce websites, and delivering a tangible return on your investment.",
    },
    {
        id: 4,
        icon: <FontAwesomeIcon icon={faThumbsUp} />,
        description:
            "Exceptional support and guidance from the outset, throughout development, site launch, and beyond!",
    },
    {
        id: 5,
        icon: <FontAwesomeIcon icon={faThumbsUp} />,
        description: "Marketing and Search Engine Optimization (SEO) services ",
    },
    {
        id: 6,
        icon: <FontAwesomeIcon icon={faThumbsUp} />,
        description:
            "Specializing in expert Shopify services and leveraging modern development practices such as Next.js, GraphQL, and Jamstack with Shopify as a headless ecommerce platform.",
    },
    {
        id: 7,
        icon: <FontAwesomeIcon icon={faThumbsUp} />,
        description:
            "Assistance and support in launching ultra-fast, accessible, static websites that achieve high rankings on search engines.",
    },
];

//Blog post
export const blogs = [
    {
        id: 1,
        img: blog1,
        author: "kamba",
        published_date: "16 August 2024",
        title: "10 Essential SEO Tips to Boost Your Website's Ranking",
        description:
            "Are you looking to improve your website's visibility and attract more organic traffic?",
        link: "#",
    },
    {
        id: 2,
        img: blog2,
        author: "tuke",
        published_date: "06 October 2024",
        title: "The Power of PPC Advertising: How to Maximize Your ROI",
        description:
            "Unlock the full potential of your digital marketing strategy with the power of PPC.",
        link: "#",
    },
    {
        id: 3,
        img: blog3,
        author: "charles",
        published_date: "26 October 2024",
        title: "The Importance of Responsive Web Design in the Mobile Age",
        description:
            "Where mobile devices dominate internet usage, responsive web design more crucial.",
        link: "#",
    },
];

// bugdet
export const budgets = [
    {
        id: 1,
        description: "Please choose",
        selected: true,
    },
    {
        id: 2,
        description: "$500 - $1000",
        selected: false,
    },
    {
        id: 3,
        description: "$1000 - $2000",
        selected: false,
    },
    {
        id: 4,
        description: "$2000 - $3000",
        selected: false,
    },
    {
        id: 5,
        description: "$3000 - $4000",
        selected: false,
    },
    {
        id: 6,
        description: "$4000 - $5000",
        selected: false,
    },
];
// Type of business are you
export const businessType = [
    {
        id: 1,
        title: "Please choose",
        selected: true,
    },
    {
        id: 2,
        title: "Individual",
        selected: false,
    },
    {
        id: 3,
        title: "Company",
        selected: false,
    },
    {
        id: 4,
        title: "Agency",
        selected: false,
    },
];

//My recent work
export const works = [
    {
        id: 1,
        company_name: "Webizycode agency",
        niche: "Digitigal agency website",
        img: webizyCode,
        link: "https://webizycode.com/",
        reviews:
            "lorem loremloremloremloremloremloremloremloremloremloremlorem",
        name_of_representative: "kamba",
        title: "CEO",
    },
    {
        id: 2,
        company_name: "Webizycode agency",
        niche: "Digitigal agency website",
        img: benzagroupe,
        link: "https://benzagroupe.com/",
        reviews:
            "lorem loremloremloremloremloremloremloremloremloremloremlorem",
        name_of_representative: "Tukebele",
        title: "CEO",
    },
];
