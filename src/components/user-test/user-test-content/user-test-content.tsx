import { Button, Container, Divider, Paper, Typography } from "@mui/material";
import { TestsItems } from "../../../types/test-types";

interface UserTestContentProps {
    test: TestsItems
}

function UserTestContent({ test }: UserTestContentProps) {
    const { id, title, questions } = test



    return (
        <Container >
            <Paper>
                <Typography variant="h3" sx={{
                    textAlign: "center"
                }} >{title}</Typography>
                <Divider />
                <Typography variant="h5">{ }</Typography>
                <Divider />
                <Button variant="contained" fullWidth>Contained Lorem ipsum dolor sit</Button>
                <Divider />
                <Container sx={{
                    alignItems: "center",
                    textAlign: "center"
                }} >
                    <Button variant="contained">Получить резуьтат</Button>
                </Container>
            </Paper>
        </Container>
    );
}

export default UserTestContent;