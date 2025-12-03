import React from "react";

interface StatCardProps {
    title: string;
    value: string | number;
    change: string;
    bgColor: string;
    iconBgColor: string;
    icon: React.ReactNode;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, change, bgColor, iconBgColor, icon }) => {
    return (
        <div className={`flex justify-between items-start px-[28.38px] pt-[19.65px] pb-[13px] rounded-[13px] ${bgColor}`}>
            <div>
                <p className="text-[#181717] font-medium text-[17px]">{title}</p>
                <p className="text-[30px] font-semibold text-[#181717] mt-[16.56px] mb-[10.67px]">{value}</p> 
                <p className="text-[#00A728] text-[17px] font-normal">{change}</p>
            </div>
            <div className={`h-[50.21px] w-[50.21px] flex items-center justify-center rounded-[5.46px] ${iconBgColor}`}>
                {icon}
            </div>
        </div>
    );
};

export default StatCard;

