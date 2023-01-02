import { Box,} from "@mui/material";
import { logo } from "../../configure";

const Navbar = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          height: "100px",
          width: "100%",
          borderBottom: "1px solid black",
          alignItems: "center",
          padding: "0 15px",
        }}
      >
        <Box sx={{ fontWeight: "bolder", fontSize: "22px" }}>{logo}</Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{ fontWeight: "bold", fontSize: "18px", margin: "0 3px 0 5px" }}
          >
            Home
          </Box>
          <Box
            sx={{ fontWeight: "bold", fontSize: "18px", margin: "0 3px 0 5px" }}
          >
            Contact
          </Box>
          <Box
            sx={{ fontWeight: "bold", fontSize: "18px", margin: "0 3px 0 5px" }}
          >
            About
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default Navbar;
