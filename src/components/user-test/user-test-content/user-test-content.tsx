import { Button, Container, Divider, Paper, Typography } from "@mui/material";
import { nanoid } from "nanoid";
import { useState } from "react";
import { TestsItems } from "../../../types/test-types";
import ResultModal from "../result-modal/result-modal";

interface UserTestContentProps {
    test: TestsItems
}

function UserTestContent({ test }: UserTestContentProps) {
    const { title, questions } = test
    const questionsArray = [...questions].map((el) => {
        return {
            question: el.title,
            answer: '',
            count: 0
        }
    });

    const [isSelect, setIsSelect] = useState(questionsArray)
    const sumAnswerCount = isSelect.reduce(
        (accumulator, currentValue) => accumulator + currentValue.count,
        0,
    );

    const updateSelectElementHandler = (title: string, updateAnswer: string, updateCount: number) => {
        const copyArray = isSelect
        const result = copyArray.map((el) => {
            if (el.question === title) {
                return {
                    ...el,
                    answer: updateAnswer,
                    count: updateCount
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
                                    updateSelectElementHandler(question.title, item.title, item.count)
                                }}
                                key={nanoid()}
                                color={isSelect.some((element) => element.answer === item.title && element.question === question.title) ? "success" : "primary"}>
                                {item.title}
                            </Button>
                        ))}

                    </Container>
                ))
                }
                <Divider />
                <Container
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        border: "2px solid blue"
                    }}
                >
                    <ResultModal resultCount={sumAnswerCount} />
                </Container>
                <Divider />
            </Paper >
        </Container >
    );
}

export default UserTestContent;