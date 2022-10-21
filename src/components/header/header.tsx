import {AppBar, Box, Button, ButtonGroup, Container, IconButton, Toolbar, Typography} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';


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
					display:"flex",
					justifyContent:"space-between"
				}}
			>
				<Box
					sx={{
						// flexGrow:2.4,
						display:"flex",
						alignItems:"center"
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
					<MenuIcon/>
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
						mr:10
					}}
				>
					<Button>One</Button>
					<Button>Two</Button>
					<Button>Three</Button>
					<Button>Four</Button>
					<Button>Five</Button>
					<Button>Six</Button>
				</ButtonGroup>
				<Button color="inherit">Login</Button>
			</Toolbar>

		</AppBar>
	);
}

export default Header;