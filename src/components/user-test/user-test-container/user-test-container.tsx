import { Grid } from "@mui/material";
import { TestsItems } from "../../../types/test-types";
import UserTestContent from "../user-test-content/user-test-content";

interface UserTestContainerProps {
    tests: TestsItems[]
}

function UserTestContainer({ tests }: UserTestContainerProps) {


    return (
        <Grid>
            {tests.map((test) => (<UserTestContent key={test.id} test={test} />))}
        </Grid>
    );
}

export default UserTestContainer;