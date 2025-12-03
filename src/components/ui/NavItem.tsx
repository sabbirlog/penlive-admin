import type { LucideIcon } from "lucide-react";
import React from "react";
import { NavLink } from "react-router-dom";

type Props = {
  icon: LucideIcon;
  label: string;
  to: string;
  className?: string;
  end?: boolean;
};

const NavItem: React.FC<Props> = ({ icon: Icon, label, to, className = "", end = false }) => {
  return (
    <NavLink
      to={to}
      end={end}
      className={({ isActive }) =>
        [
          "flex items-center gap-[5.9px] pl-[5.9px] pr-[4.94px] py-[2.95px] transition",
          "text-gray-700",
          isActive ? "text-[#FE543C]!" : "",
          className,
        ].join(" ")
      }
    >
      <Icon className="w-[17.11px] h-[17.11px]" />
      <span className={`text-sm font-medium te`}>{label}</span>
    </NavLink>
  );
};

export default NavItem;
