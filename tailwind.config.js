module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "custom-pink": "#FF1D6C",
        "custom-yellow": "#FFB72C",
        "custom-green": "#007350",
      },
      backgroundImage: (theme) => ({
        logo: "url('assets/images/logo.png')",

        // banners
        home: "url('assets/images/banner/banner-home.png')",
        hotel: "url('assets/images/banner/banner-hotel.png')",
        restaurant: "url('assets/images/banner/banner-restaurant.jpeg')",
        scenicspot: "url('assets/images/banner/banner-scenicspot.jpeg')",

        // cities
        ChanghuaCounty: "url('assets/images/cities/ChanghuaCounty.jpeg')",
        Chiayi: "url('assets/images/cities/Chiayi.jpeg')",
        ChiayiCounty: "url('assets/images/cities/ChiayiCounty.jpeg')",
        Hsinchu: "url('assets/images/cities/Hsinchu.jpeg')",
        HsinchuCounty: "url('assets/images/cities/HsinchuCounty.jpeg')",
        HualienCounty: "url('assets/images/cities/HualienCounty.jpeg')",
        Kaohsiung: "url('assets/images/cities/Kaohsiung.jpeg')",
        KinmenCounty: "url('assets/images/cities/KinmenCounty.jpeg')",
        Keelung: "url('assets/images/cities/Keelung.jpeg')",
        LienchiangCounty: "url('assets/images/cities/LienchiangCounty.jpeg')",
        MiaoliCounty: "url('assets/images/cities/MiaoliCounty.jpeg')",
        NantouCounty: "url('assets/images/cities/NantouCounty.jpeg')",
        NewTaipei: "url('assets/images/cities/NewTaipei.jpeg')",
        PenghuCounty: "url('assets/images/cities/PenghuCounty.jpeg')",
        PingtungCounty: "url('assets/images/cities/PingtungCounty.jpeg')",
        Taichung: "url('assets/images/cities/Taichung.jpeg')",
        Tainan: "url('assets/images/cities/Tainan.jpeg')",
        Taipei: "url('assets/images/cities/Taipei.jpeg')",
        TaitungCounty: "url('assets/images/cities/TaitungCounty.jpeg')",
        Taoyuan: "url('assets/images/cities/Taoyuan.jpeg')",
        YilanCounty: "url('assets/images/cities/YilanCounty.jpeg')",
        YunlinCounty: "url('assets/images/cities/YunlinCounty.jpeg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    require("@tailwindcss/line-clamp"),
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          "@screen sm": {
            maxWidth: "640px",
          },
          "@screen md": {
            maxWidth: "768px",
          },
          "@screen lg": {
            maxWidth: "1024px",
          },
          "@screen xl": {
            maxWidth: "1062px",
          },
        },
      });
    },
  ],
};
