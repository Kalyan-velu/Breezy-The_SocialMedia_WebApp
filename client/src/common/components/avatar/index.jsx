import {Avatar as Av} from "@mui/material";

const Avatar = ({name, avatar}) => {
  return (
    <>
      <Av
        title={name}
        src={avatar}
        alt={name}
      />
    </>
  )
}

export default Avatar