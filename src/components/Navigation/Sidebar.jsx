import React from "react";
import "./Nav.css";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Box, Button, Icon, Text } from "@chakra-ui/react";
import Dashboard from "@mui/icons-material/Dashboard";
import LogoutIcon from "@mui/icons-material/Logout";
import SettingsIcon from "@mui/icons-material/Settings";
import HistoryIcon from "@mui/icons-material/History";
import NotStartedIcon from "@mui/icons-material/NotStarted";
import { Link } from "react-router-dom";

function Sidebar() {
  const actions = [
    { icon: <Dashboard />, name: "Dashboard", link: "/home" },
    { icon: <NotStartedIcon />, name: "Interview", link: "/interview" },
    { icon: <HistoryIcon />, name: "History", link: "/history" },
    { icon: <SettingsIcon />, name: "Settings", link: "/settings" },
    { icon: <LogoutIcon />, name: "Logout", link: "/" },
  ];
  return (
    <>
      <Box
        display={"flex"}
        bg={"brands.bg"}
        className="t sidebar_container"
        width={"15vw"}
        height={"88vh"}
        alignItems={"center"}
        justifyContent={"flex-start"}
      >
        <Box
          width={"15vw"}
          display={"flex"}
          justifyContent="center"
          bg={"brands.bg"}
          color="white"
          p={2}
          fontSize={"1.3rem"}
          className="t sidebar"
        >
          <Box margin={"4rem 3rem"}>
            {actions.map((action) => (
              <Box margin={"1rem 0"} key={action.name}>
                <Link to={action.link}>
                  <Button className="sidebar_btn">
                    <Icon margin={"1rem"} fontSize={"2rem"}>
                      {action.icon}
                    </Icon>
                    <Text className="sidebar_tooltip">{action.name}</Text>
                    <Text className="sidebar_text">{action.name}</Text>
                  </Button>
                </Link>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Sidebar;
