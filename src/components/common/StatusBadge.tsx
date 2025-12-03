import type { Status } from '@/types/dataTable';
import React from 'react';

interface StatusBadgeProps {
    status: Status;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
    return (
        <div className={`flex justify-center items-center px-[14.5px]! py-[2.5px] w-8! h-[15px] rounded-[11.16px] text-[10px] text-[#005D23] font-medium bg-linear-to-r from-[#79D49B] to-[#25C962]`}>
            {status}
        </div>
    );
};

export default StatusBadge;