import {Container} from "@mui/material";
import NewsColumn from "../../components/content/news-column/news-column";
import {mockNews} from "../../mock/mock-news";

function Main () {
	console.log(mockNews)
	return (
		<>
			<Container
				sx={{
					backgroundColor:"gray",
					minHeight: "85vh",
					backgroundImage:`URL("images/brain_alpha.png")`,
					backgroundSize:"cover",
					backgroundRepeat:"no-repeat",
					backgroundOpacity: 0.3,
					border:"5px solid black",
					borderRadius:"20px"
				}}
			>
				<NewsColumn news={mockNews}/>
			</Container>
		</>
	);
};

export default Main



