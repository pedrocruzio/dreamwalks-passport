import type { NextPage } from "next";
import StampList from "../components/StampList"
import styles from "../styles/Home.module.css";

const Stamps: NextPage = () => {
    return (
        <div className={styles.container}>
            <StampList />
        </div>
    )
}

export default Stamps;
