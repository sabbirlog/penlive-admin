import UserAvatarInfo from "@/components/common/UserAvatarInfo";
import { LogOut } from "lucide-react";

interface HeaderProps {
  name: string;
  adminId: string;
  avatar: string;
  onLogout?: () => void;
}

export default function Header({ name, adminId, avatar, onLogout }: Readonly<HeaderProps>) {
  return (
    <header className="w-full bg-[#EBF6FF] shadow-xl px-11 pt-[47px] pb-6">
      <div className="max-w-full flex items-center justify-between">

        <UserAvatarInfo name={name} adminId={adminId} avatar={avatar} />

        <button
          onClick={onLogout}
          className="flex items-center gap-2 text-[#BE8283] hover:text-red-600 transition cursor-pointer"
        >
          <LogOut size={18} />
          <span className="text-base font-medium">Logout</span>
        </button>

      </div>
    </header>
  );
}
