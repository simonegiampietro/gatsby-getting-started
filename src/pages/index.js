import * as React from "react"
import Layout from "../components/layout";
import {StaticImage} from "gatsby-plugin-image";

const IndexPage = () => (
    <>
        <Layout pageTitle="Home Page">
            <p>I'm making this by following the Gatsby Tutorial.</p>
            <StaticImage src="../images/clifford.png"
                         alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"/>
        </Layout>
    </>
);

export default IndexPage
