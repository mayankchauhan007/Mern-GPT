import { AppBar, Divider, Toolbar } from "@mui/material";

import Logo from "./shared/Logo";
import { useAuth } from "../context/AuthContext";
import NavigationLink from "./shared/NavigationLink";

const Header = () => {
  const auth = useAuth();
  return (
    <AppBar
      sx={{ bgcolor: "transparent", position: "static", boxShadow: "none" }}
    >
      <Toolbar sx={{ display: "flex" }}>
        <Logo />
        <div>
          {auth?.isLoggedIn ? (
            <>
              <NavigationLink
                to={"/chat"}
                bg={"#52E75D"}
                text={"Go to Chat"}
                textColor="black"
              />
              <NavigationLink
                to={"/"}
                bg={"#2352D2"}
                text={"Logout"}
                textColor={"white"}
                onClick={auth.logout}
              />
            </>
          ) : (
            <>
            <NavigationLink
                to={"/login"}
                bg={"#52E75D"}
                text={"Login"}
                textColor="black"
              />
              <NavigationLink
                to={"/signup"}
                bg={"#2352D2"}
                text={"signup"}
                textColor={"white"}
              />
            </>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
