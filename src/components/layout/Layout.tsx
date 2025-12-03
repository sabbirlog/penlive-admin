import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="min-h-screen bg-[#90B4C8]">
            <Header
                name="Mumtahina"
                adminId="090990"
                avatar="https://images.unsplash.com/photo-1502685104226-ee32379fefbe"
                onLogout={() => console.log("Logged out")}
            />
            <div className="flex gap-4 pt-6 pb-7 pl-11 pr-13 items-start">
                <Sidebar />
                <main className="flex-1 flex flex-col">{children}</main>
            </div>
        </div>
    );
};

export default Layout;
