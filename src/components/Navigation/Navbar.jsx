import "./Nav.css";
import { Box, Button, Flex } from "@chakra-ui/react";
import ControlledSpeedDial from "./SpeedDial";

function Navbar({ isAuthUser }) {
  return (
    <Box className="t">
      <Box
        width={"95%"}
        height={"12vh"}
        margin={"0 auto"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        className="t"
      >
        <img className="logo" src="/logo.png" />
        {isAuthUser ? <ControlledSpeedDial /> : <Button>Login</Button>}
      </Box>
    </Box>
  );
}

export default Navbar;
