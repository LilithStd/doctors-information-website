import { Button, Container, Divider, Paper, Typography } from "@mui/material";
import { nanoid } from "nanoid";
import { useState } from "react";
import { TestsItems } from "../../../types/test-types";

interface UserTestContentProps {
    test: TestsItems
}

function UserTestContent({ test }: UserTestContentProps) {
    const { title, questions } = test
    const questionsArray = [...questions].map((el) => {
        return {
            question: el.title,
            answer: ''
        }
    });

    const [isSelect, setIsSelect] = useState(questionsArray)
    const [isActive, setIsActive] = useState()

    const updateSelectElementHandler = (title: string, updateAnswer: string) => {
        const copyArray = isSelect
        const result = copyArray.map((el) => {
            if (el.question === title) {
                return {
                    ...el,
                    answer: updateAnswer
                }
            }
            return el
        });

        setIsSelect(result)
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
                        <Typography>{question.title}</Typography>
                        {question.variants.map((item) => (
                            <Button
                                variant="contained"
                                fullWidth
                                onClick={() => {
                                    updateSelectElementHandler(question.title, item.title)
                                }}
                                key={nanoid()}
                                color={isSelect.some((element) => element.answer === item.title && element.question === question.title) ? "success" : "primary"}>
                                {item.title}
                            </Button>
                        ))}
                        <Divider />
                    </Container>
                ))
                }
            </Paper >
        </Container >
    );
}

export default UserTestContent;