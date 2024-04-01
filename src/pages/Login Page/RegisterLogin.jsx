import { useRef, useState } from "react";
import "./RegisterLogin.css";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import { Link } from "react-router-dom";
import {Box, Container} from "@chakra-ui/react"

const RegisterLogin = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [avatar, setAvatar] = useState();
  const [avatarPreview, setAvatarPreview] = useState("/Profile.png");
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = user;

  const loginTab = useRef(null);
  const registerTab = useRef(null);
  const TabSwitcher = useRef(null);

  const switchTab = (e, tab) => {
    if (tab === "login") {
      TabSwitcher.current.classList.add("shiftToNeutral");
      TabSwitcher.current.classList.remove("shiftToRight");

      registerTab.current.classList.remove("shiftToNeutralForm");
      loginTab.current.classList.remove("shiftToLeft");
    }
    if (tab === "register") {
      TabSwitcher.current.classList.add("shiftToRight");
      TabSwitcher.current.classList.remove("shiftToNeutral");

      registerTab.current.classList.add("shiftToNeutralForm");
      loginTab.current.classList.add("shiftToLeft");
    }
  };

  const loginSubmit = (e) => {
    e.preventDefault();
    console.log("Login Submitted");
  };

  const registerSubmit = (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.set("name", name);
    myForm.set("email", email);
    myForm.set("password", password);
    myForm.set("avatar", avatar);
    console.log("Register Submitted");
  };

  const registerDataChange = (e) => {
    try {
      if (e.target.name === "avatar") {
        const reader = new FileReader();
        reader.onload = () => {
          if (reader.readyState === 2) {
            setAvatarPreview(reader.result);
            setAvatar(reader.result);
          }
        };
        reader.readAsDataURL(e.target.files[0]);
      } else {
        setUser({ ...user, [e.target.name]: e.target.value });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Box 
      width={"100vw"}
      height={"100vh"}
      max-width="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      position="fixed"
      top="0"
      left="0">
        <Box color="brands.primary" 
        width="30vw"
        height="70vh"
        margin="10px"
        overflow="hidden"
        borderRadius="30px"
        >
          <Box>
            <Container className="rl-toggle" display="flex" height="3vmax">
              <p onClick={(e) => switchTab(e, "login")}>LOGIN</p>
              <p onClick={(e) => switchTab(e, "register")}>REGISTER</p>
            </Container>
            <button className="tabSwitcher" ref={TabSwitcher}></button>
          </Box>
          <form className="loginForm" ref={loginTab} onSubmit={loginSubmit}>
            <div className="loginEmail">
              <MailOutlineOutlinedIcon />
              <input
                type="email"
                placeholder="Email"
                required
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
              />
            </div>
            <div className="loginPassword">
              <LockOpenIcon />
              <input
                type="password"
                placeholder="Password"
                required
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
              />
            </div>
            <Link to="/password/forgot">Forgot Password ?</Link>
            <input type="submit" value="Login" className="loginBtn" />
          </form>
          <form
            className="signUpForm"
            ref={registerTab}
            encType="multipart/form-data"
            onSubmit={registerSubmit}
          >
            <div className="signUpName">
              <PersonOutlineOutlinedIcon />
              <input
                type="text"
                placeholder="Name"
                required
                name="name"
                value={name}
                onChange={registerDataChange}
              />
            </div>
            <div className="signUpEmail">
              <MailOutlineOutlinedIcon />
              <input
                type="email"
                placeholder="Email"
                required
                name="email"
                value={email}
                onChange={registerDataChange}
              />
            </div>
            <div className="signUpPassword">
              <LockOpenIcon />
              <input
                type="password"
                placeholder="Password"
                required
                name="password"
                value={password}
                onChange={registerDataChange}
              />
            </div>
            <div id="registerImage">
              <img src={"/user.png"} alt="Avatar Preview" />
              <input
                type="file"
                name="avatar"
                accept="image/*"
                onChange={registerDataChange}
              />
            </div>
            <input
              type="submit"
              value="Register"
              className="signUpBtn"
              //   disabled={loading ? true : false}
            />
          </form>
        </Box>
      </Box>
    </>
  );
};

export default RegisterLogin;
