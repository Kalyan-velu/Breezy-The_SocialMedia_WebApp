import React from 'react';
import {Avatar} from "@mui/material";

export default function AvatarPreview({state,setAvatar,onClick}) {
   const [avatarPreview, setAvatarPreview] = React.useState(null);

    React.useEffect(() => {
        if(state){
            const reader=new FileReader();
            reader.readAsDataURL(state)
            reader.onload=()=>{
                setAvatarPreview(reader.result);
                setAvatar(reader.result)
            }
        }
    }   , [state]);
    return (
        <div className={'avatar-container'}>
            <Avatar
                onClick={onClick}
                src={avatarPreview}
                sx={{
                    width: "100px",
                    height: "100px",
                    ':hover': {
                        cursor: "pointer",
                    }
                }}
            />
        </div>
    );

}