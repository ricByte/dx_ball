import styles from "./Field.module.scss";
import {Block} from "../Block/Block";
import {Ball} from "../Ball/Ball";
import {useEffect, useRef, useState} from "react";

export const Field = function Home() {
    let blockWidth = 50;
    let widthField = 800;
    let heightField = 600;
    const FPS = 100;
    const speed = 10;
    const ballRadius = 10;

    const blockPerRow: number = widthField / blockWidth

    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const timer = useRef(null);

    useEffect(() => {
        if ((x < widthField - ballRadius) && (y < heightField - ballRadius * 2 - 2))
            timer.current = setInterval(() => {
                setX((current) => current + speed);
                setY((current) => current + speed);
            }, FPS);
        else
            clearInterval(timer.current)

        // clear on component unmount
        return () => {
            clearInterval(timer.current);
        };
    }, [x]);

    return (
        <div>
            <div className={styles.fieldContainer}>
                {[...Array(blockPerRow)].map((value, index) =>
                    <Block/>
                )}
                <Ball position={{left: x, bottom: y}}/>
            </div>
            {`x:${x};y:${y}`}
        </div>
    );
}
