import { Container, Divider, Grid, Typography } from "@mui/material";
import { useEffect } from "react";
import ArticleMainCard from "../../components/content/article-main-card/article-main-card";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchArticles } from "../../store/reducer/actionCreators";
import ArticlesComponent from "../../components/content/articles-component/articles-component";
import NoArticleMessage from "../../components/content/no-articles-message/no-article-message";

function Main() {
	const { articles } = useAppSelector(state => state.articleReducer)
	const { isArticleLoading } = useAppSelector(state => state.articleReducer)
	const { error } = useAppSelector(state => state.articleReducer)
	const dispatch = useAppDispatch()

	useEffect(() => {
		if (!isArticleLoading) {
			console.log(1);

			dispatch(fetchArticles())
		}
	}, [dispatch, isArticleLoading])

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
					{isArticleLoading ? <ArticlesComponent articles={articles} /> : <NoArticleMessage error={error} />}
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

