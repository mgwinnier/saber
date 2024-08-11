const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

// This plugin adds each Tailwind color as a global CSS variable, e.g., var(--gray-200).
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjusted to include all your project files
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // Custom colors
        primary: '#ffd700', // Gold color for primary
        secondary: '#ffed4a', // Lighter gold for secondary
        // You can continue to add or adjust colors as needed
      },
      fontFamily: {
        // Custom font families
        body: ['"Segoe UI"', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'],
        // Add other custom fonts as needed
      },
      screens: {
        // Custom breakpoints
        xl: '1280px',
        '2xl': '1536px',
        // Add or adjust breakpoints as needed
      },
      // Any other theme extensions can be added here
    },
    // You can also override other theme values or add new ones
  },
  plugins: [
    addVariablesForColors, // Include the plugin for adding color variables
    // Include any other Tailwind CSS plugins you might need
  ],
};
