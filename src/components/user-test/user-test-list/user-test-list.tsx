import { Button, Container, Paper, Typography } from "@mui/material";
import { TestsItems } from "../../../types/test-types";

interface UserTestListProps {
    test: TestsItems
}

function UserTestList({ test }: UserTestListProps) {
    const { title } = test
    return (
        <Container>
            <Paper sx={{
                width: "100%",
                height: "300px"
            }}>
                <Typography variant="h6" color="initial">{title}</Typography>
                <Typography variant="h6" color="initial">Пройдите тест по {title} и узнайте рекомендации</Typography>
                <Button variant="contained">Пройти тест</Button>
            </Paper>
        </Container>
    );
}

export default UserTestList;