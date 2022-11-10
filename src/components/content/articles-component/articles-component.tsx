import { Button } from "@mui/material"
import { useState, useEffect } from "react"
import { useAppSelector, useAppDispatch } from "../../../store/hooks"
import { fetchArticles } from "../../../store/reducer/actionCreators"
import ArticleColumn from "../article-column/article-column"
import { ArticleItems } from "../../../types/article-types"

interface ArticlesComponentProps {
    articles: ArticleItems[]
}

function ArticlesComponent({ articles }: ArticlesComponentProps) {

    const [isCurrentArticle, setCurrentArticle] = useState(0)
    const [isActiveArticle, setIsActiveArticle] = useState([...articles])




    useEffect(() => {
        setIsActiveArticle([...articles.slice(isCurrentArticle, isCurrentArticle + 3)])
    }, [articles, isCurrentArticle])

    const renderArticleNext = () => {
        setCurrentArticle(isCurrentArticle + 1)
    }

    const renderArticlePrevious = () => {
        setCurrentArticle(isCurrentArticle - 1)
    }
    return (
        <>
            {isCurrentArticle === 0 ? <Button variant="contained" sx={{ visibility: 'hidden' }}>Previous Article</Button> : <Button variant="contained" onClick={renderArticlePrevious}>Previous Article</Button>}
            <ArticleColumn article={isActiveArticle} />
            {isCurrentArticle === articles.length - 3 ? <Button variant="contained" sx={{ visibility: 'hidden' }}>Next Article</Button> : <Button variant="contained" onClick={renderArticleNext}>Next Article</Button>}
        </>
    );
}

export default ArticlesComponent;