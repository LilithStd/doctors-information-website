import { Button, Container, Divider, Paper, Typography } from "@mui/material";
import { nanoid } from "nanoid";
import { useState } from "react";
import { TestsItems } from "../../../types/test-types";

interface UserTestContentProps {
    test: TestsItems
}

function UserTestContent({ test }: UserTestContentProps) {
    const [isSelect, setIsSelect] = useState([{}])
    const { id, title, questions } = test

    const findElementInArray = (element: any) => {
        return element.questions === test.id
    }

    const setChoiceHandler = (id: string) => {

        if (isSelect.find(findElementInArray)) {
            setIsSelect([{ ...questions, answer: id }])
            console.log(isSelect);
            console.log(1);

        } else {
            setIsSelect([...isSelect, { questions: test.id, answer: id }])
            console.log(isSelect);
            console.log(2);
        }




    }

    return (
        <Container >
            <Paper>
                <Typography variant="h3" sx={{
                    textAlign: "center"
                }} >{title}</Typography>
                <Divider />
                {questions.map((question) => (
                    <Container key={nanoid()}>
                        <Typography variant="h5">{question.title}</Typography>
                        <Divider />
                        {question.variants.map((item) => (<Button
                            variant="contained"
                            fullWidth
                            onClick={() => {
                                setChoiceHandler(item.id)
                            }}
                            key={nanoid()}
                            color={isSelect ? "success" : "primary"}>
                            {item.title}
                        </Button>))}
                        <Divider />
                    </Container>
                ))}
            </Paper>
        </Container>
    );
}

export default UserTestContent;