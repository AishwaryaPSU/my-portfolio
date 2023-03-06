import utilStyles from '../../styles/utils.module.css';
import Image from 'next/image';
import Collapsible from "../../components/collapsible";
import styles from '../../components/layout.module.css';
import Layout from "../../components/layout";

function MyCertifications() {
    return (
        <Layout>
            <div className="container">
                <main>
                    <h2>
                        Certificates
                    </h2>
                    <div className="grid">
                        <div className="container">
                            <Collapsible label="Java">
                               <Image
                                  src="/images/javabasic.jpg"
                                  className={utilStyles.borderSquare}
                                  height={1000}
                                  width={1000}
                                />
                            </Collapsible>
                            <Collapsible label="SQL">
                                <Image
                                  src="/images/sqlbasic.jpg"
                                  className={utilStyles.borderSquare}
                                  height={1000}
                                  width={1000}
                                />
                                <Image
                                  src="/images/SQL_bootcamp.jpg"
                                  className={utilStyles.borderSquare}
                                  height={1000}
                                  width={1000}
                                />
                            </Collapsible>
                            <Collapsible label="DevOps">
                                <Image
                                    src="/images/docker_project.jpg"
                                    className={utilStyles.borderSquare}
                                    height={1000}
                                    width={1400}
                                />
                            </Collapsible>
                        </div>
                    </div>
                </main>
            </div>
        </Layout>
    );
}
export default MyCertifications;