import { ThemeProvider } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import { muiTheme } from "../utils";
import { Flex } from "@chakra-ui/react";

export default function Paginate({ count, page, goToPage }) {
  return (
    <ThemeProvider theme={muiTheme}>
      <Flex justify={"center"} pb={"20px"}>
        <Pagination
          count={count}
          size="large"
          color="primary"
          page={page}
          onChange={goToPage}
        />
      </Flex>
    </ThemeProvider>
  );
}
