import React, {useRef} from 'react';
import {StyledPicButton} from "../../styledComponents/PostModalStyled";
import {Avatar} from "@mui/material";
import {useSelector} from "react-redux";
import './user.css'
import {Upload} from "@mui/icons-material";
const SetProfilePic=()=>{
    const filePicker = useRef(null)
    const {user}=useSelector((state)=>state.user);
    const[avatar,setAvatar]=React.useState(null);
    const {error,loading, message} = useSelector((state) => state.updateProfile)

    const selectedPhoto = (e) => {
        const reader = new FileReader();
        if (e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0])
            reader.onload = (readerEvent) => {
                setAvatar(readerEvent.target.result)
            }
        }
    }

    const submitHandler=(e)=>{
        e.preventDefault();
        console.log(avatar);
    }
    return(
        <div className={"upload-pic"}>
            <form className={'upload-pic-form'} onSubmit={submitHandler}>
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

            <StyledPicButton
                disabled={!avatar}
                variant={"contained"}
                type={"submit"}
                onClick={submitHandler}
                endIcon={<Upload/>}>
                Upload
            </StyledPicButton>
            </form>
        </div>
    )
}
export default SetProfilePic;