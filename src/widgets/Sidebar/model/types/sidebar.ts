import React from "react";

export interface SidebarItemType {
    path: string;
    text: string;
    t_file: string;
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
    authOnly?: boolean;
}
