import { Typography } from "@mui/material";
interface ErrorProps {
    error: string
}

function NoArticleMessage({ error }: ErrorProps) {
    return (
        <Typography variant="h5">{error}</Typography>
    );
}

export default NoArticleMessage;