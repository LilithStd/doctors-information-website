import {ArticleItems} from "../../types/article-types";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface ArticlesState {
    articles: ArticleItems[];
    isArticleLoading: boolean;
    currentArticle:ArticleItems,
    articlesSort: ArticleItems[];
    currentArticleActive: boolean,
    error: string;
}

const initialState: ArticlesState = {
    articles: [],
    isArticleLoading: false,
    currentArticle: {
        id: '',
        images:'',
        title:'',
        text:'',
        date:''
    },
    currentArticleActive: false,
    articlesSort: [],
    error:''
}

export const articleSlice = createSlice({
    name: 'articles',
    initialState,
    reducers: {
        loadArticles(state, action: PayloadAction<ArticleItems[]>) {
            state.articles = action.payload
            state.error = ''
        },
        setCurrentArticle(state, action: PayloadAction<ArticleItems>) {
            state.currentArticle = action.payload
            state.currentArticleActive = true
        },
        setLoadingArticlesStatus  (state) {
            state.isArticleLoading = true
            state.error = ''
        },
        loadArticlesError(state, action: PayloadAction<string>) {
            state.error = action.payload
            state.isArticleLoading = false
        },
        loadSortArticles(state, action: PayloadAction<ArticleItems[]>) {
            state.articlesSort = action.payload
        }
    }

})

export default articleSlice.reducer