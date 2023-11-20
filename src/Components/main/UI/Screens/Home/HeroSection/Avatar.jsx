import React from "react";

export default function Avatar({ user }) {
  return (
    <label className="avatar" htmlFor="my-drawer-4">
      <div className="w-14 pt-2 rounded-full grid place-items-center bg-[crimson]/10">
        {user.details.img ? (
          <img src="https://picsum.photos/536/354" />
        ) : (
          <p className="text-4xl text-[crimson]">
            {user.details.name && user.details.name[0]}
          </p>
        )}
      </div>
    </label>
  );
}
