import {Upload} from "@mui/icons-material";
import {Avatar, FormControl, InputLabel} from "@mui/material";
import {BootstrapInput, StyledPicButton} from "client/src/common/components/NewPost/PostModalStyled.jsx";
import React, {useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {loadUser, updateProfile} from "../../../../features/action/userAction";
import ErrorSnackbar from "../../../styledComponents/error-message/ErrorMessage";
import {StyledButtons} from "../../../styledComponents/UserAccountStyled";
import '../loggeduser/user.css'

const SetProfilePic = () => {
  const filePicker = useRef(null)
  const [error, setError] = useState(null);
  const [openS, setOpenS] = useState(false)
  const [success, setSuccess] = useState(null);
  const [openE, setOpenE] = useState(false);
  const {user} = useSelector((state) => state.user);
  const [avatar, setAvatar] = React.useState(user.avatar.url);
  const [email, setEmail] = React.useState(user.email);
  const [name, setName] = useState(user.name);
  const {error: errorAlert, loading, message} = useSelector((state) => state.updateProfile)
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

  const onSubmit = async ({e, name, email, avatar}) => {
    e.preventDefault();
    dispatch(updateProfile({name, email, avatar}))

  }
  useEffect(() => {
    if (errorAlert) {
      setOpenE(true)
      setError(errorAlert)
    }
    if (message) {
      dispatch(loadUser())
      setOpenS(true)
      setSuccess("Profile Updated Successfully")
    }
  }, [errorAlert, message, dispatch])

  return (
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
               name="file" id="file"/>
        <FormControl variant="standard">
          <InputLabel shrink htmlFor="bootstrap-input">
            Change Name
          </InputLabel>
          <BootstrapInput
            type="text"
            value={name}
            label={"Change Name"}
            id="bootstrap-input"
            onChange={(e) => setName(e.target.value)}/>
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
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>

        <StyledPicButton
          disabled={!avatar}
          variant={"contained"}
          type={"submit"}
          onClick={(e) => onSubmit({e, name, email, avatar})}
          endIcon={<Upload/>}>
          {loading ? 'Uploading' : 'Upload'}
        </StyledPicButton>
        <Link to={`/u/forgot-password`}>
          <StyledButtons>
            Update Password
          </StyledButtons>
        </Link>
        <div style={{flexGrow: 1}}/>
      </form>
      <ErrorSnackbar
        openS={openS}
        openE={openE}
        setOpenS={setOpenS}
        setOpenE={setOpenE}
        error={error}
        success={success}
      />
    </div>
  )
}
export default SetProfilePic;