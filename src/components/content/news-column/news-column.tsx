import { Grid } from "@mui/material";
import NewsItem from "../news-item/news-item";
import { ArticleItems } from "../../../types/article-types";

interface NewsCoulmnProps {
  news: ArticleItems[]
}

function NewsColumn({ news }: NewsCoulmnProps) {
  return (
    <Grid container spacing={2} direction={'column'} sx={{
      m: 1
    }}>
      {news.map((newsItem) => (<NewsItem key={newsItem.id} newsItem={newsItem} />))}
    </Grid>
  )
}

export default NewsColumn;