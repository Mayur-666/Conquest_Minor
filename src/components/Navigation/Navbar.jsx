import "./Nav.css";
import { Box, Button } from "@chakra-ui/react";
import UserSpeedDial from "./SpeedDial";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Navbar() {
  const isAuthUser = useSelector((state) => state.isAuth);
  console.log(isAuthUser);
  return (
    <Box className="t" zIndex={9} backdropBlur={"10px"}>
      <Box
        backdropBlur={"10px"}
        zIndex={10}
        width={"95%"}
        height={"10vh"}
        minHeight={"80px"}
        maxHeight={"150px"}
        margin={"0 auto"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        className="t"
      >
        <img className="logo" src="/logo.png" />
        {isAuthUser ? <UserSpeedDial /> : <Link to={"/register"}>Login</Link>}
      </Box>
    </Box>
  );
}

export default Navbar;
