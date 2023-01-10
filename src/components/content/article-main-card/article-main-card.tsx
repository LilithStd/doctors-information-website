import { Button, Card, CardActions, CardContent, CardMedia, Container, IconButton, Paper, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite"
import ShareIcon from "@mui/icons-material/Share"
import { textAlign } from "@mui/system";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { ArticleItems } from "../../../types/article-types";
import { getRandomItem } from "../../../utils/utils";
import { useNavigate } from "react-router-dom";
import { AppRoute } from "../../../const/app-route";
import { fetchCurrentTest } from "../../../store/reducer/actionCreators";

interface ArticleMainCardProps {
    articles: ArticleItems[]
}

function ArticleMainCard({ articles }: ArticleMainCardProps) {
    const { currentArticle } = useAppSelector(state => state.articleReducer)
    const { currentArticleActive } = useAppSelector(state => state.articleReducer)
    const randomArticleWithoutCurrentActive = getRandomItem(articles)
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    if (currentArticleActive) {

    }

    const redirectToCurrentTestPageFromArticleHandler = () => {
        // dispatch(fetchCurrentTest())
        navigate(AppRoute.CurrentTest)
    }

    return (
        <Container sx={{ border: "2px solid red" }}>
            <Card sx={{

            }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={currentArticleActive ? currentArticle.images : randomArticleWithoutCurrentActive.images}
                    alt={currentArticleActive ? currentArticle.title : randomArticleWithoutCurrentActive.title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {currentArticleActive ? currentArticle.title : randomArticleWithoutCurrentActive.title}
                    </Typography>
                    <Typography variant="h6" color="initial">
                        {currentArticleActive ? currentArticle.text : randomArticleWithoutCurrentActive.text}
                    </Typography>
                </CardContent>
                <CardActions sx={{
                    justifyContent: 'space-between'
                }}>
                    <Button onClick={redirectToCurrentTestPageFromArticleHandler}>Пройти тест</Button>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share" edge="start">
                        <ShareIcon />
                    </IconButton>
                </CardActions>
            </Card>
        </Container>

    );
}

export default ArticleMainCard;