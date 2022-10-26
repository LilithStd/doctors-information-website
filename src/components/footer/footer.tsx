import { Container } from "@mui/material";

function Footer() {
	return (
		<Container
			maxWidth={'xl'}
			sx={{
				backgroundColor: "green",
				flexGrow: 1,
				minHeight: "10vh"
			}}
		>
			footer
		</Container>
	)
}

export default Footer;