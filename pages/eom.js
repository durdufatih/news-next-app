import Image from 'next/image';
import { Toolbar } from '../components/toolbar';
import styles from '../styles/eom.module.css';

function eom({ employee }) {

    console.log(employee)
    return (
        <div className="page-container">
            <Toolbar></Toolbar>
            <div className={styles.main}>
                <h1>
                    Emplyee Of The Month
                </h1>
            </div>
            <div className={styles.employeeOfMonth}>
                <h3>{employee.name}</h3>
                <h6>{employee.position}</h6>
                <Image src={employee.image}></Image>
                <p>{employee.description}</p>
            </div>
        </div>

    )
}

export const getServerSideProps = async pageContext => {

    const apiResponse = await fetch('https://my-json-server.typicode.com/portexe/next-news/employeeOfTheMonth')

    const employee = await apiResponse.json();

    return {
        props: {
            employee: employee
        }
    }
}

export default eom
