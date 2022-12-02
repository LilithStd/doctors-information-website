import { useEffect } from "react";
import UserTest from "../../components/user-test/user-test";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { fetchTests } from "../../store/reducer/actionCreators";

function Tests() {
    const { tests } = useAppSelector(state => state.testReducer)
    const { isTestsLoading } = useAppSelector(state => state.testReducer)
    const { error } = useAppSelector(state => state.testReducer)
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (error === '') {
            dispatch(fetchTests())
        }


    }, [dispatch, error, isTestsLoading])

    return (
        <UserTest tests={tests} />
    );
}

export default Tests;