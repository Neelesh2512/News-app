import { Toolbar } from '../components/toolbar';
import styles from '../styles/EOM.module.css';

export const EOM = ({ employee }) => {
    console.log(employee);
    return(
        <div className="page-container">
        <Toolbar />
            <div className={styles.main}>
                <h1>Employee of the month</h1>

                <div className={styles.employeeOfTheMonth}>
                    <h1>Neelesh Sharma</h1>
                    <h3>Software Engineer</h3>
                    <img src="https://avatars.githubusercontent.com/u/77741561?v=4" />
                    <p>Dev guy and tech enthusiast</p>
                </div>
            </div>
        </div>
    )
};

export const getServerSideProps = async pageContext => {
    const apiResponse = await fetch(`https://my-json-server.typicode.com/portexe/next-news/employeeOfTheMonth`);

    const employee = await apiResponse.json();

    return {
        props: {
            employee
        }
    }
};

export default EOM;

