import {AppDispatch} from "../store";
import axios from "axios";
import {ArticleItems} from "../../types/article-types";
import {articleSlice } from "./articleSlice";
import { ARTICLES_BACKEND_URL } from "../../const/conts";
import { TESTS_BACKEND_URL } from "../../const/conts";
import { TestsItems } from "../../types/test-types";
import {testSlice} from "./testSlice";


export const fetchArticles = () =>  async (dispatch: AppDispatch) => {
    try {
        const response = await axios.get<ArticleItems[]>(ARTICLES_BACKEND_URL)
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

export const fetchTests = () =>async (dispatch: AppDispatch) => {
    try {
        const response = await axios.get<TestsItems[]>(TESTS_BACKEND_URL)
        dispatch(testSlice.actions.loadTests(response.data))
    } catch{

    }
}