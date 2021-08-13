import React from "react";
import { Footer } from "../_Default/Footer/Footer";
import { Header } from "../_Default/Header/Header";
import { LayoutProps } from "../_Default/Layout";

export interface Props extends LayoutProps {}

export const BlogPage: React.FC<Props> = ({ children, links }) => {
    return (
        <div>
            <Header links={links} />
            <main>{children}</main>
            <Footer />
        </div>
    );
};
