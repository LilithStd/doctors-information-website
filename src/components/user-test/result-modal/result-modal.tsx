import { Box, Button, Modal, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

interface ResultModalProps {
    resultCount: number
}

function ResultModal({ resultCount }: ResultModalProps) {
    const [open, setOpen] = useState(false);
    const [result, setResult] = useState('Не все ответы получены, возможно вы дебил не умеющий читать и считать?')
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    console.log(resultCount, result);


    useEffect(() => {
        if (resultCount > 3) {
            setResult('Не все ответы получены, возможно вы дебил не умеющий читать и считать?')
        }
        if (resultCount === 3) {
            setResult('Хватит ныть иди работай у тебя псевдодиагноз поставленный через интернет')
        }
        if (resultCount > 3 && resultCount <= 6) {
            setResult('Ну что то у тебя в голове покосилось, били в детстве?')
        }
        if (resultCount > 6 && resultCount <= 8) {
            setResult('Норм тебя штырит, напиши телефон дурик вызовем')
        }
        if (resultCount === 9) {
            setResult('Как ты раньше скрывался? Напиши мне я хочу кейс маньячиллы')
        }
    }, [resultCount])

    return (
        <div>
            <Button onClick={handleOpen}>узнать результат</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Text in a modal
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {result}
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}

export default ResultModal;