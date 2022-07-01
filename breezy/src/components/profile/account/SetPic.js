import React, {useEffect, useRef, useState} from 'react';
import {BootstrapInput, StyledPicButton} from "../../styledComponents/PostModalStyled";
import {Avatar, FormControl, InputLabel} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import './user.css'
import {Upload} from "@mui/icons-material";
import {loadUser, updateProfile} from "../../../features/action/userAction";

const SetProfilePic=()=>{
    const filePicker = useRef(null)
    const {user}=useSelector((state)=>state.user);
    const[avatar,setAvatar]=React.useState(user.avatar.url);
    const [email, setEmail] = React.useState(user.email);
    const [name, setName] = useState(user.name);
    const {error,loading, message} = useSelector((state) => state.updateProfile)
    const dispatch = useDispatch();
    const selectedPhoto = (e) => {
        const reader = new FileReader();
        if (e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0])
            reader.onload = (readerEvent) => {
                setAvatar(readerEvent.target.result)
            }
        }
    }

    const onSubmit=async({e,name,email,avatar})=>{
        e.preventDefault();
        dispatch(updateProfile({name,email,avatar}))
        dispatch(loadUser())
    }
    useEffect(()=>{
        if(error){
            console.log(error)
        }
        if(message){
            console.log(message)
        }
    },[])

    return(
        <div className={"upload-pic"}>
            <form className={'upload-pic-form'} onSubmit={onSubmit}>
                <Avatar
                    src={avatar}
                    alt={user.name}
                    title={user.name}
                    sx={{
                        width: '150px',
                        height: '150px',
                    }}
                    onClick={() => filePicker.current.click()}
                />
                <input type="file"
                       hidden={true}
                       onChange={selectedPhoto}
                       ref={filePicker}
                       name="file" id="file" />
                <FormControl variant="standard">
                    <InputLabel shrink htmlFor="bootstrap-input">
                        Change Name
                    </InputLabel>
                <BootstrapInput
                    type="text"
                    value={name}
                    label={"Change Name"}
                    id="bootstrap-input"
                    onChange={(e)=>setName(e.target.value)} />
                </FormControl>
                <FormControl variant="standard">
                    <InputLabel shrink htmlFor="bootstrap-input">
                        Change Email
                    </InputLabel>
                    <BootstrapInput
                        type="email"
                        value={email}
                        label={"Change Email"}
                        id="bootstrap-input"
                        onChange={(e)=>setEmail(e.target.value)}
                    />
                </FormControl>

            <StyledPicButton
                disabled={!avatar}
                variant={"contained"}
                type={"submit"}
                onClick={(e)=>onSubmit({e,name,email,avatar})}
                endIcon={<Upload/>}>
                {loading?'Uploading':'Upload'}
            </StyledPicButton>
            </form >
        </div>
    )
}
export default SetProfilePic;