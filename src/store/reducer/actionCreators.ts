import {AppDispatch} from "../store";
import axios from "axios";
import {ArticleItems} from "../../types/article-types";
import {articleSlice } from "./articleSlice";
import { BACKEND_URL } from "../../const/conts";


export const fetchArticles = () =>  async (dispatch: AppDispatch) => {
    try {
        const response = await axios.get<ArticleItems[]>(BACKEND_URL)
        dispatch(articleSlice.actions.loadArticles(response.data))
        dispatch(articleSlice.actions.setLoadingArticlesStatus())
    } catch (e)  {
        // @ts-ignore
        dispatch(articleSlice.actions.loadArticlesError(e.message))
    }
}

export const fetchCurrentArticle = (currentArticle: ArticleItems) =>   async (dispatch: AppDispatch) => {
    try {
        dispatch(articleSlice.actions.setCurrentArticle(currentArticle))
    } catch {

    }
}