import React, {useRef, useState} from 'react'
import styled from "styled-components"
import {IconButton} from "@mui/material";
import {CameraAlt} from "@mui/icons-material";


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

const Container = styled.div`
			position:fixed;
  			top:0;
  			left:0;
  			right:0;
  			bottom:0;
  			z-index: 999;
  			display:flex;
		  	align-items: center;
		  	justify-content: center;
		  	background-color: rgba(0,0,0,0.75);
		  
		`
const Wrapper = styled.div`
			display: flex;
			flex-direction: column;
		  	align-items: center;
		  	background-color: white;
		  	z-index: 999;
		  	border-radius:2px;
		  	width:400px;
		`
const Input = styled.input`
  font-weight: bold;
  font-size: 15px;
  margin: 0 10px;
  flex: 1;
  border: none;
  padding: 10px;
  text-align: center;
  :focus {
    outline: none;
  }
`;
const Header = styled.div`
			display: grid;
		  	grid-template-columns:repeat(1 minmax(0,1fr)) ;
		  	width:90%;
		  	.container{
			  width:100%;
			  img{
			    height:90%;
			    width:90%;
			  object-fit: contain;
			  cursor:pointer;}
		    }

		`
const Caption = styled.div`
		margin-top: 15px;
		  display: flex;
		  flex-direction: column;
		`
const Button = styled.button`
  padding: 10px 0;
  margin: 30px;
  border-radius: 20px;
  border: none;
  background-color: rgba(239, 68, 68, 1);
  color: white;
  cursor: pointer;
`;

const Cameria = styled.div`
			height: 1.75rem !important;
		  	width: 1.5rem !important;
		  	color:rgba(228,30,28,80);
		   	cursor:pointer;
		  	margin-top: 10px;
		  	text-align: center;
			
		`