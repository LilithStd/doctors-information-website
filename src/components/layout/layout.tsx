import { Outlet } from "react-router-dom";
import Header from "../header/header";
import Footer from "../footer/footer";
import { Container } from "@mui/material";

function Layout() {
	return (
		<>
			<Header />
			<Container maxWidth={'xl'}>
				<main>
					<Outlet />
				</main>
			</Container>
			<Footer />
		</>
	)
}

export default Layout;