import React from "react";
import { LinkItem } from "../../GlobalNavbar";
import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";

export interface LayoutProps {
    links: LinkItem[];
}

export const Layout: React.FC<LayoutProps> = ({ children, links }) => {
    return (
        <div>
            <Header links={links} />
            <main>{children}</main>
            <Footer />
        </div>
    );
};
