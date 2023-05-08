/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-CyanBlue": `linear-gradient(86.88deg, #3DD5F3, #3D8BFD)`,
                "gradient-BluePurple": `linear-gradient(86.88deg, #3D8BFD, #8c68cd)`,
                "gradient-PurplePink": `linear-gradient(86.88deg, #8c68cd, #de5c9d)`,
                "gradient-PinkRed": `linear-gradient(86.88deg, #de5c9d, #e35d6a)`,
                "gradient-RedOrange": `linear-gradient(86.88deg, #e35d6a, #fd9843)`,
                "gradient-YellowTeal": `linear-gradient(86.88deg, #ffcd39, #4dd4ac)`,
                "gradient-Background": `linear-gradient(86.88deg, #383838, #191414)`,
            },
        },
    },
    plugins: [],
};
