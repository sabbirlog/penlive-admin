import {
    BarChart3,
    Building2,
    Clock,
    Coins,
    Gift,
    Home,
    Settings,
    ShieldCheck,
    UserCheck,
    Users,
    Video,
} from "lucide-react";
import React from "react";
import NavItem from "../ui/NavItem";

const MENU = [
  { label: "Dashboard", icon: Home, to: "/" },
  { label: "Users", icon: Users, to: "/users" },
  { label: "Agencies", icon: Building2, to: "/agencies" },
  { label: "Coin Management", icon: Coins, to: "/coins" },
  { label: "Live Streams", icon: Video, to: "/streams" },
  { label: "Transaction History", icon: Clock, to: "/transactions" },
  { label: "PK Masters", icon: UserCheck, to: "/pk-masters" },
  { label: "Kyc Centre", icon: ShieldCheck, to: "/kyc" },
  { label: "Moderation", icon: ShieldCheck, to: "/moderation" },
  { label: "Analytics", icon: BarChart3, to: "/analytics" },
  { label: "Gifts & Assets", icon: Gift, to: "/gifts" },
  { label: "Settings", icon: Settings, to: "/settings" },
];

const Sidebar: React.FC = () => {
  return (
    <aside className="w-50.5 pl-2.5 pt-2.5 pb-5.5 rounded-[14px] bg-[#BCC5D7BF] border-[0.59px] border-white/35 flex flex-col">
      <div className="flex items-center gap-[8.47px] mb-[18px]">
        <img src="/src/assets/logo.png" alt="logo" className="w-[57px] h-[57px]" />
        <div className="leading-tight">
          <div className="font-semibold text-[18px] text-[#7822E4]">Pen Live</div>
          <div className="text-[#FE543C] text-[15px] font-semibold">Admin Panel</div>
        </div>
      </div>

      <nav className="flex-1 flex flex-col gap-y-[17.7px]">
        {MENU.map((m) => (
          <NavItem key={m.label} icon={m.icon} label={m.label} to={m.to} />
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
