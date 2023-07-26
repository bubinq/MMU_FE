import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    yellow: {
      100: "#fffcf1",
      200: "#ffff00",
      300: "#d9af0e",
      500: "#fea004",
      800: "#e48834",
      900:"#C34723"
    },
    red: {
      300: "#FF3C00"
    },
    gray: {
      300: "#acb0ad",
      500: "#6a6a6b",
    },
    blue: {
      500: "#329ffe",
      900: "#181938",
    },
  },
  breakpoints: {
    sm: '48em',
    md: '68em',
    lg: '82em',
    xl: '100em',
    '2xl': '96em',
  },
  components: {
    Button: {
      variants: {
        login: {
          bg: "transparent",
          textColor: "blue.900",
          fontSize: "2xl",
          paddingX: 4,

          _hover: {
            bg: "transparent",
            textColor: "blue.900",
            outline: `2px solid #181938`,
          },
        },
        logout: {
          bg: "transparent",
          textColor: "#181938",
          fontSize: "2xl",
          border: "2px solid #181938",
          paddingX: 4,
          outline: "none",
          transition: "1s ease-in-out",
          borderRadius: "2px",
          _hover: { transition: "1s ease-in-out" },
        },
        signup: {
          bg: "yellow.900",
          textColor: "white",
          fontSize: "2xl",
          paddingX: 3,
          outline: "none",
          transition: "1s ease-in-out",
          _hover: { transition: "1s ease-in-out", background: "red.300" },
        },
      },
    },
    Heading: {
      variants: {
        main: {
          color: "blue.900",
          mt: "3.25rem",
        },
      },
    },
  },
});
