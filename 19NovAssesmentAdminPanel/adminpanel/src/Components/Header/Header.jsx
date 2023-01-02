import { Box } from "@mui/material";
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import {useNavigate  } from "react-router-dom";

import './Header.css'
const Header = () => {
  const navigate= useNavigate()
  return (
    <>
      <Box className="header-container">
        <Box className="logo" onClick={()=>navigate("/")}>POSTS <AutoStoriesIcon sx={{color:'#FFA384',height:"30px",fontSize:'22px',marginLeft:'5px'}}/> </Box>
      </Box>
    </>
  );
};
export default Header;
