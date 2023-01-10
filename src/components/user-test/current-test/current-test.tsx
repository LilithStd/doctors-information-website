import { useAppSelector } from "../../../store/hooks";
import UserTestContent from "../user-test-content/user-test-content";



function CurrentTest() {
    const { currentTest } = useAppSelector(state => state.testReducer)
    return (
        <UserTestContent test={currentTest} />
    );
}

export default CurrentTest;