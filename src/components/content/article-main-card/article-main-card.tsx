import { Button, Card, CardActions, CardContent, CardMedia, Container, IconButton, Paper, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite"
import ShareIcon from "@mui/icons-material/Share"
import { textAlign } from "@mui/system";
import { useAppSelector } from "../../../store/hooks";
import { ArticleItems } from "../../../types/article-types";
import { getRandomItem } from "../../../utils/utils";

interface ArticleMainCardProps {
    articles: ArticleItems[]
}

function ArticleMainCard({ articles }: ArticleMainCardProps) {
    const { currentArticle } = useAppSelector(state => state.articleReducer)
    const { currentArticleActive } = useAppSelector(state => state.articleReducer)
    const randomArticleWithoutCurrentActive = getRandomItem(articles)

    return (
        <Container sx={{ border: "2px solid red" }}>
            <Card sx={{

            }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={currentArticleActive ? currentArticle.images : randomArticleWithoutCurrentActive.images}
                    alt="green iguana"
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
                    <Button>Пройти тест</Button>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share" edge="start">
                        <ShareIcon />
                    </IconButton>
                </CardActions>
            </Card>
            {/* <Paper sx={{
                padding: '1rem',
                boxShadow: '5px 10px #888888',
            }}>
                <Paper sx={{
                    background: '-webkit-linear-gradient(90deg, #FFFF00 0%, #EE82EE 100%)',
                }}>
                    <Typography variant="h2" color={"primary"} sx={{
                        textAlign: 'center',
                    }}>
                        {currentArticleActive ? currentArticle.title : randomArticleWithoutCurrentActive.title}
                    </Typography>
                </Paper>
                <Typography variant="h6" color="initial">
                    {currentArticleActive ? currentArticle.text : randomArticleWithoutCurrentActive.text}
                </Typography>
            </Paper> */}
        </Container>

    );
}

export default ArticleMainCard;