import React from 'react';

interface LevelBadgeProps {
    level: number;
}

const LevelBadge: React.FC<LevelBadgeProps> = () => {
    return (
        <div className={`flex items-center justify-center rounded-sm w-[38px] h-4 text-white text-[10px] font-medium leading-[22px] bg-linear-to-b from-[#DCE0ED] to-[#705996]`}>
            Lvl
        </div>
    );
};

export default LevelBadge;