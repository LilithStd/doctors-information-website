import { Button, Container, Divider, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import ArticleColumn from "../../components/content/article-column/article-column";
import ArticleMainCard from "../../components/content/article-main-card/article-main-card";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchArticles } from "../../store/reducer/actionCreators";

function Main() {
	const { articles } = useAppSelector(state => state.articleReducer)
	const dispatch = useAppDispatch()

	const [isCurrentArticle, setCurrentArticle] = useState(0)
	const [isActiveArticle, setIsActiveArticle] = useState([...articles])




	useEffect(() => {
		setIsActiveArticle([...articles.slice(isCurrentArticle, isCurrentArticle + 3)])
	}, [articles, isCurrentArticle])

	useEffect(() => {
		dispatch(fetchArticles())
	}, [dispatch])

	const renderArticleNext = () => {
		setCurrentArticle(isCurrentArticle + 1)
	}

	const renderArticlePrevious = () => {
		setCurrentArticle(isCurrentArticle - 1)
	}

	return (
		<Grid
			container
			spacing={2}
			// columns={{ xs: 4, sm: 8, md: 6, lg: 12 }}
			sx={{
				border: "5px solid black",
				borderRadius: "20px",
				minHeight: "85vh",
				backgroundColor: "gray",
			}}>
			<Grid
				item
				md={4}
				lg={5}
			>
				<Container
					sx={{
						// backgroundImage: `URL("images/brain_alpha.png")`,
						backgroundSize: "cover",
						backgroundRepeat: "no-repeat",
						backgroundOpacity: 0.3,
					}}
				>
					<Typography variant="h5" color="initial">Article</Typography>

					{isCurrentArticle === 0 ? <Button variant="contained" sx={{ visibility: 'hidden' }}>Previous Article</Button> : <Button variant="contained" onClick={renderArticlePrevious}>Previous Article</Button>}
					<ArticleColumn article={isActiveArticle} />
					{isCurrentArticle === articles.length - 3 ? <Button variant="contained" sx={{ visibility: 'hidden' }}>Next Article</Button> : <Button variant="contained" onClick={renderArticleNext}>Next Article</Button>}
				</Container>
			</Grid>
			<Grid
				item
				lg={2}
			>
				<Divider orientation="vertical" flexItem />
			</Grid>
			<Grid
				item
				md={4}
				lg={5}
			>
				<ArticleMainCard />
			</Grid>
		</Grid>

	);
};

export default Main

