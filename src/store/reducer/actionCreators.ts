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
        dispatch(hotelSlice.actions.loadHotelsError(e.message))
    }
}
