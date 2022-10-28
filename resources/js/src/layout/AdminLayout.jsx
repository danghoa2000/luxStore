import React, { Suspense, useCallback, useEffect, useMemo } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { ADMIN_SESSION_ACCESS_TOKEN } from "../../utils/sessionHelper";
import Loading from "../../components/partial/Loading";
import axios from "axios";
import { API_BASE_URL, LOGIN_API } from "../../constants/api";
import { useAuth } from "../../hooks/useAuth";
import { axiosClient } from "../../hooks/useHttp";
import { MENU_MAPPING } from "../../constants/constants";
import { Collapse, Container, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, MenuList, Paper } from "@mui/material";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { AccountBalance, Cloud, ContentCopy, ContentCut, ContentPaste, Dashboard, ExpandLess, StarBorder } from "@mui/icons-material";
import "../../../sass/admin.scss";

const AdminLayout = () => {
    const navigate = useNavigate();
    const { setAuth } = useAuth();

    useEffect(() => {
        const adminToken = window.sessionStorage.getItem(
            ADMIN_SESSION_ACCESS_TOKEN
        );
        if (!adminToken) {
            navigate("/admin/login");
        }
    }, [])

    const redirect = (item) => navigate(item);

    const logout = useCallback(async () => {
        await axiosClient.get(API_BASE_URL + LOGIN_API.LOGOUT);
        setAuth({});
        window.sessionStorage.clear(ADMIN_SESSION_ACCESS_TOKEN);
        navigate("/admin/login");
    }, [])

    const MENU = [
        "Dashboard",
        "Categories",
        "Products",
        "Orders",
        "Manufacturer",
        "Banner",
        "Blogs",
        "Account",
        "Customer",
    ]

    // const icons = useMemo(() => [
    //     AppstoreOutlined,
    //     AuditOutlined,
    //     LaptopOutlined,
    //     ShoppingCartOutlined,
    //     UngroupOutlined,
    //     PictureOutlined,
    //     HeartOutlined,
    //     UserOutlined,
    //     UsergroupAddOutlined,
    // ].map((item, index) => {
    //     return {
    //         key: index,
    //         icon: React.createElement(item),
    //         label: MENU[index],
    //         onClick: () => redirect(MENU_MAPPING[index]),
    //     };
    // }), []);
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const pages = ['Products', 'Pricing', 'Blog'];
    const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

    return (
        <>
            <AppBar position="fixed">
                <Container maxWidth="xl" className="admin__header">
                    <Toolbar disableGutters>
                        <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            LOGO
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                // onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                // anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                // open={Boolean(anchorElNav)}
                                // onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                {pages.map((page) => (
                                    <MenuItem key={page}>
                                        <Typography textAlign="center">{page}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href=""
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            LOGO
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {pages.map((page) => (
                                <Button
                                    key={page}
                                    // onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    {page}
                                </Button>
                            ))}
                        </Box>

                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Open settings">
                                <IconButton
                                    //  onClick={handleOpenUserMenu} 
                                    sx={{ p: 0 }}>
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                            // onClose={handleCloseUserMenu}
                            >
                                {settings.map((setting) => (
                                    <MenuItem key={setting}
                                    // onClick={handleCloseUserMenu}
                                    >
                                        <Typography textAlign="center">{setting}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <Container maxWidth="xl" style={{ padding: '0', marginTop: '70px' }}>
                <div className="d-flex">
                    <Box className="left__menu">
                        <MenuList>
                            <MenuItem>
                                <ListItemIcon>
                                    <Dashboard fontSize="small" />
                                </ListItemIcon>
                                <ListItemText>Dashboard</ListItemText>
                            </MenuItem>
                            <MenuItem onClick={() => redirect('account')}>
                                <ListItemIcon>
                                    <AccountBalance fontSize="small" />
                                </ListItemIcon>
                                <ListItemText>Account</ListItemText>
                            </MenuItem>
                        </MenuList>
                    </Box>
                    <Box className="main__content">
                        <Suspense fallback={<Loading />}>
                            <Outlet />
                        </Suspense>
                    </Box>
                </div>
            </Container>
        </>

    );
};

export default AdminLayout;
