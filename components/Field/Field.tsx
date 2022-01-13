import styles from "./Field.module.scss";
import {Block} from "../Block/Block";

export const Field = function Home() {
    let blockWidth = 50;
    let widthField = 800;
    const blockPerRow: number = widthField / blockWidth
    return (
        <div className={styles.fieldContainer}>
            {[...Array(blockPerRow)].map((value, index) =>
                <Block/>
            )}
        </div>
    )
}
