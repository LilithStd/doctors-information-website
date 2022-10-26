import {
	AppBar,
	Box,
	Button,
	ButtonGroup,
	IconButton,
	Toolbar,
	Typography
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import ThemeSwitcher from "../content/theme-switcher/theme-switcher";


function Header() {

	return (
		<AppBar
			color={"primary"}
			position={"static"}
			sx={{

				backgroundColor: "black",
			}}

		>
			<Toolbar
				sx={{
					display: "flex",
					justifyContent: "space-between"
				}}
			>
				<Box
					sx={{
						// flexGrow:2.4,
						display: "flex",
						alignItems: "center"
					}}
				>
					<IconButton
						size="large"
						edge="start"
						color="inherit"
						aria-label="menu"
						sx={{

						}}
					>
						<MenuIcon />
					</IconButton>
					<Typography
						sx={{}}
					>
						Doctor's Applications
					</Typography>
				</Box>
				<ButtonGroup
					variant="contained"
					aria-label="outlined primary button group"
					size="large"

					sx={{

					}}
				>
					<Button>One</Button>
					<Button>Two</Button>
					<Button>Three</Button>
					<Button>Four</Button>
					<Button>Five</Button>
					<Button>Six</Button>
				</ButtonGroup>
				<ButtonGroup variant="text" color="primary" aria-label="">
					<ThemeSwitcher />
					<Button color="inherit">Login</Button>
				</ButtonGroup>

			</Toolbar>

		</AppBar>
	);
}

export default Header;