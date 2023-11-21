import React from "react";
import { Avatar } from "@mui/material";
export default function AvatarWrapper({ user }) {
  return (
    <>
      {user.details.img ? (
        <Avatar src={user.details.img} />
      ) : (
        <Avatar
          sx={{ bgcolor: "rgb(254 202 202)", height: 56, width: 56 }}
          src="/broken-image.jpg"
        >
          <p className="text-4xl text-[crimson] opacity-80">
            {" "}
            {user.details.name && user.details.name[0]}
          </p>
        </Avatar>
      )}
    </>
  );
}
