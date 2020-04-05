import { theme } from '@chakra-ui/core'


const customTheme = {
  ...theme,
  icons: {
    ...theme.icons,
  },
  colors: {
    ...theme.colors,
    c1: {
      100: "white",
      200: "white", 
      300: "white",
      400: "white",
      500: "white"
    },
    c2: {
      100: "#63cbfe",
      200: "#63cbfe", 
      300: "#63cbfe",
      400: "#63cbfe",
      500: "#63cbfe"    
    },
    c3: {
      100: "#27679C",
      200: "#27679C", 
      300: "#27679C",
      400: "#27679C",
      500: "#27679C"   
    },
    c4: {
      100: "#72C7D2",
      200: "#72C7D2", 
      300: "#72C7D2",
      400: "#72C7D2",
      500: "#72C7D2"
    },
    c5: {
      100: "#1792b2",
      200: "#1792b2", 
      300: "#1792b2",
      400: "#1792b2",
      500: "#1792b2"
    }

  }
}
export default customTheme