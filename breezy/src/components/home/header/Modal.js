import React, {useRef, useState} from 'react'
import styled from "styled-components"
import {IconButton} from "@mui/material";
import {CameraAlt} from "@mui/icons-material";
import db, {storage} from "../../config/firebaseConfig";

import {useDispatch, useSelector} from "react-redux";
import {selectEmail, selectName, selectPhoto} from "../../features/user/userSlice";
import {addDoc, collection, doc, serverTimestamp, updateDoc} from "@firebase/firestore"
import {getDownloadURL, ref, uploadString} from "@firebase/storage"
import {selectStarter, setStarter} from "../../features/user/BooleanSlice";


const Modal = () => {
    const [input, setInput] = useState(null);
    const filePicker = useRef(null)
    const [selected, setSelected] = useState(null);
    const [loading, setLoading] = useState(false);
    const name = useSelector(selectName)
    const photos = useSelector(selectPhoto)
    const email = useSelector(selectEmail)
    const starter = useSelector(selectStarter)
    const dispatch = useDispatch()


    console.log(starter)

    async function SubmitModal(e) {
        e.preventDefault()
        if (loading) return
        setLoading(true);
        const docs = await addDoc(collection(db, 'post'), {
            caption: input,
            name: name,
            email: email,
            photo: photos,
            timestamp: serverTimestamp(),
        });
        const image = ref(storage, `post/${docs}/image`);
        await uploadString(image, selected, `data_url`)
            .then(async (snapshot) => {
                const downloadUrl = await getDownloadURL(image);
                await updateDoc(doc(db, "post", docs.id),
                    {Image: downloadUrl})
            })
        setInput("");
        setSelected(null);
        setLoading(false)
        dispatch(setStarter({
            starter: false
        }))

    }

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
        <Container show={starter}>

            <Wrapper>
                <Header>
                    {selected ? (
                        <div className={"container"}>
                            <img
                                src={selected}
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
                        onClick={SubmitModal}
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