import {AppBar, Button, ButtonGroup, IconButton, Toolbar, Typography} from "@mui/material";


function Header() {


	return(
		<AppBar
			color={"primary"}


		>
			<Toolbar>
				<IconButton
					size="large"
					edge="start"
					color="inherit"
					aria-label="menu"
					sx={{ mr: 5 }}
				>

				</IconButton>

				<Typography>
					Test Material UI
				</Typography>
				<ButtonGroup
					variant="contained"
					aria-label="outlined primary button group"
					size="large"
					sx={{
						marginLeft:"auto"
					}}
				>
					<Button>One</Button>
					<Button>Two</Button>
					<Button>Three</Button>
				</ButtonGroup>
			</Toolbar>
		</AppBar>
	)
}

export default Header;