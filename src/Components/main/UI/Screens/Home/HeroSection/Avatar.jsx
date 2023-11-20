import React from "react";
import { Avatar } from "@mui/material";
export default function AvatarWrapper({ user }) {
  return (
    <>
      {user.details.img ? (
        <Avatar src={user.details.img} />
      ) : (
        <Avatar
          sx={{ bgcolor: "crimson",height:56,width:56 }}
          alt="Remy Sharp"
          src="/broken-image.jpg"
        >
         <p className="text-4xl"> {user.details.name && user.details.name[0]}</p>
        </Avatar>
      )}
    </>
  );
}
