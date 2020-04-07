import React from 'react';
import styles from './heroimage.module.scss';

export default function Heroimage(props) {
    return(
        <div className={styles.wrapper}>
            <div className="hero__image">
                <h1 className={styles.title}>{props.selectedItem}</h1>
            </div>
        </div>
    )
}