import {Container} from "@mui/material";

function Main () {
	return (
		<>
			<Container
				sx={{
					backgroundColor:"gray",
					minHeight: "85vh",
					backgroundImage:`URL("images/brain_alpha.png")`,
					backgroundSize:"cover",
					backgroundRepeat:"no-repeat",
					opacity: 0.3,
					border:"5px solid black",
					borderRadius:"20px"
				}}
			>
				<p>Main Pages</p>
			</Container>
		</>
	);
};

export default Main



