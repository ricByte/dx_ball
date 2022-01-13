import styles from "./Field.module.scss";
import {Block} from "../Block/Block";
import {Ball, BallPosition} from "../Ball/Ball";

export const Field = function Home() {
    let blockWidth = 50;
    let widthField = 800;
    const blockPerRow: number = widthField / blockWidth
    let position: BallPosition = {
        left: widthField / 2,
        bottom: 0
    };

    return (
        <div className={styles.fieldContainer}>
            {[...Array(blockPerRow)].map((value, index) =>
                <Block/>
            )}
            <Ball position={position}/>
        </div>
    )
}
