import React, { ReactElement } from "react";

interface WrapperProps {
    children: ReactElement<{ className?: string }>; // Ensures children has className prop
}

export const HeaderBox: React.FC<WrapperProps> = ({ children }) => {
    return React.cloneElement(children, {
        className: `${children.props.className} clipped-left`,
    });
};


