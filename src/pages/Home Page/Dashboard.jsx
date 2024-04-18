import React from "react";
import Sidebar from "../../components/Navigation/Sidebar";
import { Box } from "@chakra-ui/react";
import Performance from "../../components/Dashboard/Performance";
import InterviewInfo from "../../components/Dashboard/InterviewInfo";
import ProgressBar from "../../components/Dashboard/ProgressBar";
import ProfileInfo from "../../components/Dashboard/ProfileInfo";
import Sample from "../../components/Dashboard/Sample";

function Dashboard() {
  return (
    <Box className="t" display={"flex"}>
      <Sidebar />
      <Box className="t" flex={"1"}>
        <Box
          display={"flex"}
          justifyContent={"space-evenly"}
          className="t"
          width={"100%"}
          height={"40%"}
          p={"0.5rem 0.3rem"}
        >
          <ProfileInfo />
          <InterviewInfo />
          <Sample />
        </Box>
        <Box display={"flex"} className="t" height={"60%"} p={"0.5rem 0.3rem"}>
          <ProgressBar />
          <Performance />
        </Box>
      </Box>
    </Box>
  );
}

export default Dashboard;
