import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useViewports } from "helpers/viewports";
import { useTheme, Theme } from "@mui/material";
import SearchBar from "./SearchBar";



export interface NavbarProps {
  theme: string;
  toggleTheme: () => void;
}
export const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
  const mode: Theme = useTheme();
  const { isMobile } = useViewports();
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
const pages: string[] = ["Home", "My Articles", "Create Article"];


  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <AppBar
        sx={{
          background: mode.palette.primary.main,
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {!isMobile && (
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                <Button sx={{ my: 2, color: "inherit" }}>Home</Button>
                <Button sx={{ my: 2, color: "inherit" }}>My Articles</Button>
              </Box>
            )}
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                gap: 2,
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                <SearchBar />
              </Box>
              {!isMobile && (
                <Button variant="contained" color="secondary">
                  Create Article
                </Button>
              )}
              <IconButton color="inherit" onClick={toggleTheme}>
                {theme === "light" ? <Brightness4Icon /> : <Brightness7Icon />}
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};


  