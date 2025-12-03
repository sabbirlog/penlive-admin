import React, { type FC, type InputHTMLAttributes } from "react";

interface SearchInputProps {
    value: string;
    onValueChange: (value: string) => void;
    placeholder?: string;
    icon?: React.ReactNode;
    inputProps?: InputHTMLAttributes<HTMLInputElement>;
}

const SearchInput: FC<SearchInputProps> = ({ value, onValueChange, placeholder = "Search...", icon, inputProps }) => {
    return (
        <div className="flex items-center border border-[#BBBBBB] rounded-lg w-full px-3 py-2 bg-[#BCC5D7BF] focus-within:ring-0">
            {icon && <div className="mr-2 text-gray-400">{icon}</div>}
            <input
                type="text"
                value={value}
                onChange={(e) => onValueChange(e.target.value)}
                placeholder={placeholder}
                className="flex-1 outline-none text-gray-700 placeholder-[#181717]"
                {...inputProps}
            />
        </div>
    );
};

export default SearchInput;
