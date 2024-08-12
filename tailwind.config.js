/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                c_Light_Grey: "hsl(217, 12%, 63%)",
                c_Dark_Blue: "hsl(213, 19%, 18%)",
                c_Very_Dark_Blue: "hsl(216, 12%, 8%)",
                c_Orange: "hsl(25, 97%, 53%)"
            },
            fontFamily: {
                overpass: ["Overpass", "sans-serif"]
            }
        },
    },
    plugins: [],
}

