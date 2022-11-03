import {
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	CircularProgress,
	Container,
	Grid,
	IconButton,
	Typography
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite"
import ShareIcon from "@mui/icons-material/Share"
import { ArticleItems } from "../../../types/article-types";
import { useAppDispatch } from "../../../store/hooks";
import { fetchCurrentArticle } from "../../../store/reducer/actionCreators";


interface ArtcleItemProps {
	articleItem: ArticleItems
}

<CircularProgress color="inherit" />



function ArticleItem({ articleItem }: ArtcleItemProps) {
	const { id, title, text, date, images } = articleItem
	const dispatch = useAppDispatch()
	const LearnMoreHundler = () => {
		dispatch(fetchCurrentArticle(articleItem))
	}

	return (
		<Grid item id={id} xs={12} md={4}
			sx={{
				// border: "solid 5px black",
				p: 1
			}}
		>
			<Card sx={{ maxWidth: 345 }}>
				<CardMedia
					component="img"
					alt="news images"
					height="140"
					image={images}
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						{title}
					</Typography>
					<Typography variant="body2" color="text.secondary">
						{text.length > 100 ? text.slice(0, 100) + '...' : text}
					</Typography>
				</CardContent>
				<CardActions>
					<Button size="small" onClick={LearnMoreHundler}>Learn More</Button>
					<IconButton aria-label="add to favorites">
						<FavoriteIcon />
					</IconButton>
					<IconButton aria-label="share" edge="start">
						<ShareIcon />
					</IconButton>
				</CardActions>
			</Card>
		</Grid>

	)
}

export default ArticleItem;