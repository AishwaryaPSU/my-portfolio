import React from "react";
import Collapsible from "../../components/collapsible";
import Layout from "../../components/layout";

function WorkExperience() {
    return (
        <Layout>
            <h1>Work Experience</h1>
            <div className="container">
                <Collapsible label="ZUHLKE">
                    <div>
                        <h3>ADVANCED SOFTWARE ENGINEER</h3>
                        <h5>August 2021 - Present</h5>
                        <ul>
                            <li>Working as a backend engineer with client Credit Suisse.</li>
                            <li>Writing microservices for the backend of a private investment banking application.</li>
                            <li>Working on feature development and maintenance of legacy monolith service for a private banking application.</li>
                            <li>Writing extensive unit and integration testing for the API's.</li>
                            <li>Currently contributing to frontend development for a customer facing application.</li>
                        </ul>
                    </div>
                </Collapsible>
                <Collapsible label="GARMIN">
                    <h3>SOFTWARE ENGINEER 1</h3>
                    <h5>October 2019 - November 2020</h5>
                    <ul>
                        <li>Was a member of Garmin’s MES-Operations engineering team, was responsible for building as well as migrating services and applications across geo locations (from Taiwan to USA and Poland) which were required for functioning of MES system.</li>
                        <li>Responsible for building microservices with best practices along with thorough unit and integration tests followed by shipping the same across distributed production servers and maintaining it.</li>
                    </ul>
                </Collapsible>
                <Collapsible label="INTERNSHIP">
                    <h3>APPLICATION PROGRAMMER</h3>
                    <h5>September 2018 - August 2019</h5>
                    <ul>
                        <li>As a Graduate Assistant in Texas A&M University, worked in collaboaration with Columbia Advisory Group(CAG) as an Application Programmer.</li>
                        <li>Provided assistance in gathering requirements and designing the student database system for the Texas A&M University, Rellis campus.</li>
                    </ul>
                </Collapsible>
            </div>
            
        </Layout>
    );
}

export default WorkExperience;