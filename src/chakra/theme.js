import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    yellow: {
      100: "#FFFFE0",
      300: "#feef7b",
      500: "#fea004",
      800: "#e48834",
    },
    gray: {
      300: "#acb0ad",
      500: "#6a6a6b",
    },
    blue: {
      900: "#181938",
    },
  },
  components: {
    Button: {
      variants: {
        login: {
          bg: "transparent",
          textColor: "#181938",
          fontSize: "2xl",
          paddingX: 4,
          borderRadius: "px",
          _hover: { bg: "transparent", textColor: "#01a0e2", outline: "2px solid #01a0e2" },
        },
        logout: {
          bg: "transparent",
          textColor: "#181938",
          fontSize: "2xl",
          border: "1px solid #acb0ad",
          paddingX: 4,
          outline: "none",
          transition: "1s ease-in-out",
          borderRadius: "2px",
          _hover: { transition: "1s ease-in-out", background: "#fea004" },
        },
        signup: {
          bg: "#fea004",
          textColor: "white",
          fontSize: "2xl",
          paddingX: 3,
          borderRadius: "2px",
          outline: "none",
          transition: "1s ease-in-out",
          _hover: { transition: "1s ease-in-out", background: "#e48834" },
        },
      },
    },
  },
});
