import React from "react";
import Collapsible from "../../components/collapsible";
import Image from 'next/image';
import utilStyles from '../../styles/utils.module.css';
import Link from 'next/Link';
import styles from '../../components/layout.module.css';
import Layout from "../../components/layout";

function Education() {
    return (
        <Layout>
            <div className="container">
                <main>
                    <h2>
                        Education
                    </h2>
                    <div className="grid">
                        <div className="container">
                            <Collapsible label="Masters">
                                <div>
                                    <h5>August 2018 - August 2019</h5>
                                    <ul>
                                        <li>Master of Science in Computer Science</li>
                                        <li>Texas A&M University</li>
                                        <li>GPA 3.8</li>
                                        <li>Worked as a Graduate Assitant in the IT department.</li>
                                    </ul>
                                </div>
                            </Collapsible>
                            <Collapsible label="Bacelors">
                                <h5>September 2009 - August 2013</h5>
                                <ul>
                                    <li>Bachelor of Engineering in Information Science</li>
                                    <li>University Visvesvaraya College Of Engineering</li>
                                    <li>Distinction Graduate</li>
                                </ul>
                            </Collapsible>
                        </div>
                    </div>
                </main>

            </div>
        </Layout>
    );
}

export default Education;