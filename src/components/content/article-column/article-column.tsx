import { Grid } from "@mui/material";
import ArticleItem from "../article-item/article-item";
import { ArticleItems } from "../../../types/article-types";

interface ArticleCoulmnProps {
  article: ArticleItems[]
}

function ArticleColumn({ article }: ArticleCoulmnProps) {
  return (
    <Grid container spacing={2} direction={'column'} sx={{
      m: 1
    }}>
      {article.map((articleItem) => (<ArticleItem key={articleItem.id} articleItem={articleItem} />))}
    </Grid>
  )
}

export default ArticleColumn;