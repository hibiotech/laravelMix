import React from "react";
import { Footer } from "../_Default/Footer/Footer";
import { Header } from "../_Default/Header/Header";
import { LayoutProps } from "../_Default/Layout";

interface Props extends LayoutProps {}

export const ECommerceProductPage: React.FC<Props> = ({ links, children }) => {
    return (
        <div>
            <Header links={links} />
            <main>{children}</main>
            <Footer />
        </div>
    );
};
