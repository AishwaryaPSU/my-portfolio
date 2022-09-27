import React from "react";
import Collapsible from "../../components/collapsible";
import Layout from "../../components/layout";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

function Contact() {
    return (
        <Layout>
            <h1>If you want to reach out.</h1>
            <div className="container">
                <Collapsible label="Email">
                    <div>
                        <h3>aishwarya.uvce@gmail.com</h3>
                            <FontAwesomeIcon icon={ faGoogle } style={{ height: "20px" }} round />
                    </div>
                </Collapsible>
            </div>
        </Layout>
    );
}

export default Contact;