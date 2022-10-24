import {Grid} from "@mui/material";
import NewsItem from "../news-item/news-item";
import {NewsItems} from "../../../types/news-types";

interface NewsCoulmnProps {
	news:NewsItems[]
}

function NewsColumn ({news}:NewsCoulmnProps) {
    return  (
      <Grid container spacing={2}>
	      {news.map((newsItem) => (<NewsItem key={newsItem.id}newsItem={newsItem}/>))}
      </Grid>
    )
}

export default NewsColumn;