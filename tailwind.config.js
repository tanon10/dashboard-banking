/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        visaC2: "#4EB4FF",
        addnewcard: "#A8A3D7",
        primaryBank: "#3629B7",
      },
      borderRadius: {
        "70px": "70px",
      },
    },
  },
  plugins: [],
};
