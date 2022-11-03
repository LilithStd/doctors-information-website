import { Container, Typography } from "@mui/material";
import { useAppSelector } from "../../../store/hooks";

function ArticleMainCard() {
    const { currentArticle } = useAppSelector(state => state.articleReducer)

    return (
        <Container sx={{ border: "2px solid red" }}>
            <Typography variant="h2" color={"primary"}>
                {currentArticle.title}
            </Typography>
            <Typography variant="h5" color="initial">
                {currentArticle.text}
            </Typography>
        </Container>
    );
}

export default ArticleMainCard;