import {ArticleItems} from "../../types/article-types";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface HotelsState {
    hotels: ArticleItems[];
    isHotelsLoading: boolean;
    favoritesHotels: ArticleItems[];
    isFavoritesHotelsLoading: boolean;
    countHotelsOnPage: string;
    hotelsSort: ArticleItems[];
    error: string;
}

const initialState: HotelsState = {
    hotels: [],
    isHotelsLoading: false,
    favoritesHotels: [],
    isFavoritesHotelsLoading: false,
    countHotelsOnPage: '3',
    hotelsSort: [],
    error:''
}

export const articleSlice = createSlice({
    name: 'articles',
    initialState,
    reducers: {
        loadHotels(state, action: PayloadAction<ArticleItems[]>) {
            state.hotels = action.payload
            state.error = ''
        },
        setLoadingHotelsStatus  (state) {
            state.isHotelsLoading = true
            state.error = ''
        },
        loadHotelsError(state, action: PayloadAction<string>) {
            state.error = action.payload
            state.isHotelsLoading = false
        },
        loadHotelsOnPage(state, action: PayloadAction<string>) {
            state.countHotelsOnPage = action.payload
        },
        loadSortHotels(state, action: PayloadAction<ArticleItems[]>) {
            state.hotelsSort = action.payload
        }
    }

})

export default articleSlice.reducer