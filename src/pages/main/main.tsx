import { Button, Container, Typography } from "@mui/material";
import { textAlign } from "@mui/system";
import { useEffect, useState } from "react";
import NewsColumn from "../../components/content/news-column/news-column";
import { mockNews } from "../../mock/mock-news";

function Main() {
	const [isCurrentArticle, setCurrentArticle] = useState(0)
	const [isActiveArticle, setIsActiveArticle] = useState([...mockNews])


	useEffect(() => {
		setIsActiveArticle([...mockNews.slice(isCurrentArticle, isCurrentArticle + 3)])
	}, [isCurrentArticle])

	const renderArticleNext = () => {
		setCurrentArticle(isCurrentArticle + 1)
	}

	const renderArticlePrevious = () => {
		setCurrentArticle(isCurrentArticle - 1)
	}

	return (
		<>
			<Container
				maxWidth={'xl'}
				sx={{
					backgroundColor: "gray",
					minHeight: "85vh",
					backgroundImage: `URL("images/brain_alpha.png")`,
					backgroundSize: "cover",
					backgroundRepeat: "no-repeat",
					backgroundOpacity: 0.3,
					border: "5px solid black",
					borderRadius: "20px",
					// textAlign: "center",

				}}
			>
				<Typography variant="h5" color="initial">Article</Typography>

				{isCurrentArticle === 0 ? <Button variant="contained" sx={{ visibility: 'hidden' }}>Previous Article</Button> : <Button variant="contained" onClick={renderArticlePrevious}>Previous Article</Button>}
				<NewsColumn news={isActiveArticle} />
				{isCurrentArticle === mockNews.length - 3 ? <Button variant="contained" sx={{ visibility: 'hidden' }}>Next Article</Button> : <Button variant="contained" onClick={renderArticleNext}>Next Article</Button>}
			</Container>
			<Container>

			</Container>
		</>
	);
};

export default Main



