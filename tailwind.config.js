/**@type {import (tailwindcss).Config} */
module.exports={
    content:["./src/**/*.{html,js}"],
    darkMode: "class",
    theme:{
        extend: {
        gridColumn: {
         'span-16': 'span 16 / span 16',
        },
    },
},
    plugins:[],
};