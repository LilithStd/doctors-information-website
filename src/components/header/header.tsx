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
import { Link, useNavigate } from "react-router-dom";
import { AppRoute } from "../../const/app-route";


function Header() {
	const navigate = useNavigate();
	const redirectToTestsPageHandler = () => {
		navigate(AppRoute.Tests)
	}
	const redirectToMainPageHandler = () => {
		navigate(AppRoute.Main)
	}

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
					<Button onClick={redirectToMainPageHandler}>Главная</Button>
					<Button onClick={redirectToTestsPageHandler}>Тесты</Button>
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