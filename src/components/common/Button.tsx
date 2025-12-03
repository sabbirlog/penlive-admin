import React, { type ButtonHTMLAttributes, type ReactNode } from "react";

type ButtonProps = {
    children: ReactNode;
    variant?: "primary" | "secondary" | "danger" | string;
    size?: "small" | "medium" | "large" | string;
    disabled?: boolean;
    loading?: boolean;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    className?: string;
    type?: "button" | "submit" | "reset";
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({
    children,
    variant = "primary",
    size = "medium",
    disabled = false,
    loading = false,
    leftIcon,
    rightIcon,
    className = "",
    type = "button",
    ...props
}) => {
    const baseStyles =
        "rounded font-semibold flex items-center justify-center gap-2 focus:outline-none transition-colors duration-200 cursor-pointer";

    const variantStyles: Record<string, string> = {
        primary: "bg-[#2F2E2E]/1 shadow-md drop-shadow-[0px_4px_17px_0px_rgba(0,0,0,0.18)] text-[#181717]",
        secondary: "bg-gray-300 text-gray-800 hover:bg-gray-400",
        danger: "bg-red-500 text-white hover:bg-red-600",
    };

    const sizeStyles: Record<string, string> = {
        small: "px-3 py-1 text-sm",
        medium: "px-4 py-2 text-base",
        large: "px-6 py-3 text-lg",
    };

    const isDisabled = disabled || loading;

    return (
        <button
            type={type}
            disabled={isDisabled}
            className={`${baseStyles} ${variantStyles[variant] || variant} ${sizeStyles[size] || size} ${isDisabled ? "opacity-50 cursor-not-allowed" : ""
                } ${className}`}
            {...props}
        >
            {loading && (<span className="animate-spin border-2 border-white border-t-transparent rounded-full w-4 h-4"></span>
            )}
            {leftIcon && !loading && leftIcon}
            {children}
            {rightIcon && !loading && rightIcon} </button>
    );
};

export default Button;
