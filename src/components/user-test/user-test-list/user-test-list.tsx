import { Button, Container, Paper, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { AppRoute } from "../../../const/app-route";
import { useAppDispatch } from "../../../store/hooks";
import { fetchCurrentTest } from "../../../store/reducer/actionCreators";
import { TestsItems } from "../../../types/test-types";

interface UserTestListProps {
    test: TestsItems
}

function UserTestList({ test }: UserTestListProps) {
    const { title } = test
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const redirectToCurrentTestHandler = () => {
        dispatch(fetchCurrentTest(test))
        navigate(AppRoute.CurrentTest)
    }
    return (
        <Container>
            <Paper sx={{
                width: "100%",
                height: "300px"
            }}>
                <Typography variant="h6" color="initial">{title}</Typography>
                <Typography variant="h6" color="initial">Пройдите тест по {title} и узнайте рекомендации</Typography>
                <Button
                    variant="contained"
                    onClick={redirectToCurrentTestHandler}
                >Пройти тест</Button>
            </Paper>
        </Container>
    );
}

export default UserTestList;