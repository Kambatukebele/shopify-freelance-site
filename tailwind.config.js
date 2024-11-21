import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        extend: {
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
            },
            colors: {
                black900: "#000000",
                blue: "#0000ee",
                green: "#82b440",
                white: "#ffffff",
                black500: "#262626",
                black50: "#545454",
                gray50: "#3D4C5E",
                purple900: "#4E2FDA",
                purple50: "#DED4F4",
            },
            backgroundImage: {
                "custom-bg": "url(./assets/images/bg.png)",
                "bg-longue": "url(./assets/images/bg_longue.png)",
            },
            container: {
                padding: {
                    DEFAULT: "1rem",
                    sm: "2rem",
                    lg: "4rem",
                    xl: "5rem",
                    "2xl": "6rem",
                },
            },
            keyframes: {
                upAndDown: {
                    "0%, 100%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(-5px)" },
                },
                scroll: {
                    "0%": { transform: "translateX(100%)" },
                    "100%": { transform: "translateX(-50%)" },
                },
                rotate: {
                    "0%": { transform: "rotate(0deg)" },
                    "100%": { transform: "rotate(360deg)" },
                },
                slide: {
                    "0%": { transform: "translateX(50%)" },
                    "100%": { transform: "translateX(-100%)" },
                },
            },
            animation: {
                upAndDown: "upAndDown 3s infinite",
                slowRotate: "rotate 100s linear infinite",
                slide: "slide 10s linear infinite",
                scroll: "scroll 10s linear infinite",
            },
        },
    },

    plugins: [
        forms,
        function ({ addUtilities }) {
            addUtilities({
                ".no-scrollbar": {
                    "-ms-overflow-style": "none" /* IE and Edge */,
                    "scrollbar-width": "none" /* Firefox */,
                },
                ".no-scrollbar::-webkit-scrollbar": {
                    display: "none" /* Chrome, Safari, Opera */,
                },
            });
        },
    ],
};
