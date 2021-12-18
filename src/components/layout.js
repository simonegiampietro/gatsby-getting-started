import * as React from 'react';
import {Helmet} from "react-helmet";
import {Link} from "gatsby";
import {layoutContainer} from "./layout.module.css";

const Layout = ({pageTitle, children}) => (
    <div className={layoutContainer}>
        <Helmet title={pageTitle}/>
        <nav className="pt-2 pb-2">
            <ul className="flex list-none p-0">
                <li className="pr-8"><Link className="underline" to="/">Home</Link></li>
                <li className="pr-8"><Link className="underline" to="/about">About</Link></li>
            </ul>
        </nav>
        <main>
            <h1 className={"text-violet-600 font-extrabold text-4xl mt-5 mb-4"}>{pageTitle}</h1>
            {children}
        </main>
    </div>
);

export default Layout;
