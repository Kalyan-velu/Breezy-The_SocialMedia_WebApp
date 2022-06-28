import React, {useRef, useState} from 'react'
import {IconButton, Input} from "@mui/material";
import {CameraAlt} from "@mui/icons-material";
import Button from "@mui/material/Button";
import {Cameria, Caption, Container, Header, Wrapper} from "../../styledComponents/PostModalStyled";



const Modal = () => {
    const [input, setInput] = useState(null);
    const filePicker = useRef(null)
    const [selected, setSelected] = useState(null);
    const [loading, setLoading] = useState(false);


    const selectedPhoto = (e) => {
        const reader = new FileReader();
        if (e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0])
            reader.onload = (readerEvent) => {
                setSelected(readerEvent.target.result)
            }
        }
    }
    console.log(selected)

    return (
        <Container>

            <Wrapper>
                <Header>
                    {selected ? (
                        <div className={"container"}>
                            <img
                                src={}
                                onClick={() => filePicker.current.click()}
                                alt={"selected"}
                            />
                        </div>
                    ) : (
                        <Cameria>
                            <IconButton onClick={() => filePicker.current.click()}>
                                <CameraAlt/>
                            </IconButton>
                        </Cameria>)}
                    <input type={"file"}
                           accept={".jpg,.png,.jpeg"}
                           hidden={true}
                           onChange={selectedPhoto}
                           ref={filePicker}
                    />
                </Header>
                <Caption>
                    <Input
                        fullWidth
                        type={"text"}
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder={"Captions"}
                    />
                    <Button
                        type={"button"}
                        disabled={!selected}
                    >
                        {loading ? "Submitting" : "Submit"}
                        Submit
                    </Button>
                </Caption>
            </Wrapper>
        </Container>
    )
}
export default Modal;