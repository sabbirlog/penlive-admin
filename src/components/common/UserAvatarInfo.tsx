import React from "react";

interface UserAvatarInfoProps {
    name: string;
    adminId: string;
    avatar: string;
}

const UserAvatarInfo: React.FC<UserAvatarInfoProps> = ({ name, adminId, avatar }) => {
    return (
        <div className="flex items-center gap-4">
            <img
                src={avatar}
                alt="avatar"
                className="w-[57px] h-[57px] rounded-full object-cover"
            />
            <div className="flex flex-col leading-tight">
                <span className="text-[#7822E4] font-semibold text-lg">@{name}</span>
                <span className="text-[#938988] text-xs font-medium">admin id : {adminId}</span>
            </div>
        </div>
    );
};

export default UserAvatarInfo;
