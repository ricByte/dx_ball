import styles from "./Ball.module.scss";

export interface BallPosition {
    left?: number;
    bottom?: number;
    top?: number;
    right?: number;
}

export interface BallProps {
    position: BallPosition
}

let defaultValue = {
    position: {
        bottom: 0,
        left: 0
    }
};

export const Ball = function Home(props: BallProps = defaultValue) {
    let {position} = props;
    return (
        <div
            className={styles.ballContainer}
            style={position}
        >

        </div>
    )
}
