import { Button, Container, Grid } from "@mui/material";
import { TestsItems } from "../../../types/test-types";
import UserTestContent from "../user-test-content/user-test-content";
import UserTestList from "../user-test-list/user-test-list";

interface UserTestContainerProps {
    tests: TestsItems[]
}

function UserTestContainer({ tests }: UserTestContainerProps) {


    return (
        <Grid
            container
            spacing={1}
            lg={12}
            sx={{
                textAlign: "center",
                justifyContent: "space-between",
                minHeight: "80vh"
            }}
        >

            {tests.map((test) => (
                <Grid
                    item
                    lg={4}
                    sx={{
                        border: "5px solid blue",
                        width: "100%",
                    }}
                >
                    <UserTestList key={test.id} test={test} />
                </Grid>
            ))}

            {/* {tests.map((test) => (<UserTestContent key={test.id} test={test} />))}
            <Container sx={{
                alignItems: "center",
                textAlign: "center"
            }} >
                <Button variant="contained">Получить резуьтат</Button>
            </Container> */}
        </Grid>
    );
}

export default UserTestContainer;