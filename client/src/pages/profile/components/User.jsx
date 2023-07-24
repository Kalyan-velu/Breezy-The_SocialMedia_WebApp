/* eslint-disable react/prop-types */
import {Avatar, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {UserContainer} from "../styles";
import "../styles/user.css"

const User = ({userId, name, avatar}) => {
  const navigate = useNavigate()
  const goTo = () => {
    navigate(`/user/${userId}`)
  }
  return (
    <UserContainer onClick={goTo} key={userId}>
      <div className={'list'}>
        <Avatar
          title={name}
          src={avatar}
          alt={name}
        />
        <div className={'user-details'}>
          <Typography
            fontWeight={600}
            sx={{
              fontSize: '1.2rem',
            }}>
            {name}
          </Typography>
        </div>
      </div>
    </UserContainer>
  )
}
export default User;