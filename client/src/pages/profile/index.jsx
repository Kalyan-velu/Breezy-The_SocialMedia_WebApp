import {useSelector} from "react-redux";

const Profile = () => {
  const {user} = useSelector(({app}) => app)


  return (
    <>Profile: {user.name}</>
  )
}

export default Profile