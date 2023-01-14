import { Typography} from "@mui/material";
import React, {useEffect, useState} from "react"
import "./NewPost.css"
import {useDispatch, useSelector} from "react-redux";
import {createNewPost} from "../../../features/action/postAction";
import {StyledPicButton} from "../../styledComponents/PostModalStyled";
import {UploadFile} from "@mui/icons-material";


const NewPost = () => {

    const [image, setImage] = useState(null);
    const [caption, setCaption] = useState("");

    const {loading, error, message} = useSelector((state) => state.like);
    const dispatch = useDispatch();


    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const Reader = new FileReader();
        Reader.readAsDataURL(file);
        Reader.onload = () => {
            if (Reader.readyState=== 2){
                setImage(Reader.result);
            }
        }
    };
    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(createNewPost(caption, image));
    };
    useEffect(() => {
        if (error) {
            dispatch({type:"clearErrors"});
        }
        if (message) {
            dispatch({type:"clearMessage"});
        }
    }, [dispatch,error,message]);



    return (
        <div className="newPost">
            <form className="newPostForm" onSubmit={submitHandler}>
                <Typography variant="h5">New Post</Typography>
                {image && <img src={image} alt="post"/>}
                <input type="file" accept="image/*" onChange={handleImageChange}/>
                <input type="text" placeholder="Caption..." value={caption} onChange={(e) =>setCaption(e.target.value)}/>
                <StyledPicButton disabled={loading} type="submit" endIcon={<UploadFile/>}>Upload</StyledPicButton>
            </form>
        </div>
    );
};
export default NewPost;