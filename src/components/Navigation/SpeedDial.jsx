import { Box, Image } from "@chakra-ui/react";
import { useState } from "react";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import Dashboard from "@mui/icons-material/Dashboard";
import Person from "@mui/icons-material/Person";
import Exit from "@mui/icons-material/ExitToApp";
import { Backdrop } from "@mui/material";
import { useNavigate } from "react-router-dom";

const actions = [
  { icon: <Dashboard />, name: "Dashboard", link: "/home" },
  { icon: <Person />, name: "Profile", link: "/profile" },
  { icon: <Exit />, name: "Logout", link: "/" },
];

function UserSpeedDial() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const navigate = useNavigate();

  return (
    <Box>
      <Backdrop open={open} />
      <SpeedDial
        ariaLabel="SpeedDial uncontrolled open example"
        sx={{ position: "absolute", top: 15, right: 40 }}
        icon={<Image borderRadius={"100%"} src="/avatar.jpg" />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
        direction="down"
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={() => {
              navigate(action.link);
            }}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}

export default UserSpeedDial;
