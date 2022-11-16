import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {TestsItems} from "../../types/test-types"

const currentTest = {
    id: '',
    title:'',
    questions:[]
}

interface TestsState {
    tests: TestsItems[];
    isTestsLoading: boolean;
    currentTest: TestsItems;
    error: string;
}

const initialState: TestsState = {
    tests: [],
    isTestsLoading: false,
    currentTest: currentTest,
    error:''
}

export const testSlice = createSlice({
    name: 'tests',
    initialState,
    reducers: {
        loadTests(state, action: PayloadAction<TestsItems[]>) {
            state.tests = action.payload
            state.isTestsLoading = true
            state.error = ''
        }
   
    }

})

export default testSlice.reducer