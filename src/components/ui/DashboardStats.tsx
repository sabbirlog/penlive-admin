import StatCard from "@/components/common/StatCard";
import { ChartLine, UploadIcon, Users, Wallet } from "lucide-react";
import Button from "../common/Button";

const DashboardStats: React.FC = () => {
    const stats = [
        {
            title: "Total Agencies",
            value: 3,
            change: "+3 this month",
            bgColor: "bg-[#EAE7F8]",
            iconBgColor: "bg-[#CCB3EC]",
            icon: <Users className="text-white text-xl" />,
        },
        {
            title: "Total Coin Sales",
            value: "5.3M",
            change: "+3 this month",
            bgColor: "bg-[#E4F1FA]",
            iconBgColor: "bg-[#9FBAE5]",
            icon: <Wallet className="text-white text-xl" />,
        },
        {
            title: "Avg Commission",
            value: "10.0%",
            change: "+3 this month",
            bgColor: "bg-[#D8FFDF]",
            iconBgColor: "bg-[#95CFA4]",
            icon: <ChartLine className="text-white text-xl font-bold" />,
        },
    ];

    return (
        <div className="py-[31px] px-[25px] rounded-[29px] bg-[#BCC5D7BF] border-[0.59px] border-white/35 space-y-[41px]">
            <div className="pb-[13px] flex items-center justify-between">
                <div className="space-y-[7.76px] leading-[100%]">
                    <h2 className="text-[#181717] text-[27px] font-semibold">
                        Dashboard
                    </h2>
                    <p className="text-[#636363] font-normal text-[15.52px]">
                        Manage ur app from your dashboard
                    </p>
                </div>
                <Button variant="primary" rightIcon={<UploadIcon />} className="rounded-[11px] border border-[#CCCCCC]/47 font-medium text-[18px]">
                    Export Data
                </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[60.15px]">
                {stats.map((stat, index) => (
                    <StatCard key={index} {...stat} />
                ))}
            </div>
        </div>
    );
};

export default DashboardStats;