import React from 'react'
import styles from "./stylesheet.module.css"
const BookDetails = (props) => {
    const { val, i } = props
    const { img = '', title = '', year = '', author = '' } = val
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <img src={img} alt='' className={styles.image} />

                <div>
                    <h3>{title}</h3>
                    <p>Author: {author}</p>
                    <p>Year: {year}</p>
                </div>

            </div>
            {/* <div>{val.author}</div> */}
        </div>
    )
}

export default BookDetails