import styles from "./Field.module.scss";
import {Block} from "../Block/Block";

export const Field = function Home() {
    return (
        <div className={styles.fieldContainer}>
            <Block/>
        </div>
    )
}
