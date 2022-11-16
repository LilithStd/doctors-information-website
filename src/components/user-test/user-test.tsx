import { TestsItems } from "../../types/test-types";
import UserTestContainer from "./user-test-container/user-test-container";

interface UserTestsProps {
    tests: TestsItems[]
}

function UserTest({ tests }: UserTestsProps) {

    return (
        <UserTestContainer tests={tests} />
    );
}

export default UserTest;