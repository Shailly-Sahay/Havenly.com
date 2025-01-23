module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust based on your file structure
  ],
  theme: {
    extend: {
      fontSize: {
        // Royal font scaling with 1rem = 10px

        // Extra Small: Use for fine print, disclaimers, or captions
        xs: ["1.4rem", { lineHeight: "2rem" }], // 14px

        // Small: Use for metadata, labels, or subtle text
        sm: ["1.6rem", { lineHeight: "2.4rem" }], // 16px

        // Base: Default body text for paragraphs, descriptions
        base: ["1.8rem", { lineHeight: "2.8rem" }], // 18px

        // Large: Use for emphasized text or larger body sections
        lg: ["2rem", { lineHeight: "3rem" }], // 20px

        // Extra Large: Use for subtitles or medium-sized headings (H6)
        xl: ["2.4rem", { lineHeight: "3.2rem" }], // 24px

        // 2XL: Use for smaller headings (H5) or section labels
        "2xl": ["3.2rem", { lineHeight: "4rem" }], // 32px

        // 3XL: Use for medium-sized headings (H4)
        "3xl": ["4rem", { lineHeight: "5rem" }], // 40px

        // 4XL: Use for larger headings (H3)
        "4xl": ["4.8rem", { lineHeight: "5.6rem" }], // 48px

        // 5XL: Use for section titles or prominent headings (H2)
        "5xl": ["6.4rem", { lineHeight: "1" }], // 64px

        // 6XL: Use for main page titles or hero sections (H1)
        "6xl": ["8rem", { lineHeight: "1" }], // 80px

        // 7XL: Rarely used, for extremely prominent headings or splash text
        "7xl": ["9.6rem", { lineHeight: "1" }], // 96px

        // 8XL: For banners or unique branding elements
        "8xl": ["11.2rem", { lineHeight: "1" }], // 112px

        // 9XL: Use for display text on full-screen landing pages
        "9xl": ["12.8rem", { lineHeight: "1" }], // 128px
      },
      screens: {
        // Popular breakpoints
        sm: "640px", // Small devices (phones)
        md: "768px", // Medium devices (tablets)
        lg: "1024px", // Large devices (desktops)
        xl: "1280px", // Extra large devices
        "2xl": "1536px", // Double extra large devices

        // Custom breakpoints (if needed)
        "3xl": "1920px", // Ultra-wide screens
        "4xl": "2560px", // 4K screens
      },
    },
  },
  plugins: [],
};
