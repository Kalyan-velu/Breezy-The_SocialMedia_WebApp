import {Avatar} from "@mui/material";
import Typography from "@mui/material/Typography";
import {UserContainer} from "../../../styledComponents/UserAccountStyled";
import React from "react";



const UserListItem = ({userId,avatar,name, handleFunction}) => {

	return (
		<UserContainer onClick={handleFunction} key={userId}>
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
								color: '#111',
								fontSize: '1.2rem',
							}}>
							{name}
						</Typography>
					</div>

			</div>
		</UserContainer>
	)
}
export default UserListItem