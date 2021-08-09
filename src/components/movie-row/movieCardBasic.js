
import React, { useEffect } from "react";

const MovieCardBasic = (props) => {

    useEffect(() => {

    }, [])

    return (
        <li style={styles.container}>
            <img style={styles.thumbnail} src={props.thumbnail} alt={props.name} />
        </li>
    )
}

const styles = {
    container: {
        position: 'relative',
        display: 'block',
        flex: 'none',
        marginRight: 10,
        marginBottom: 8,
        width: 147,
        height: 195,
        borderRadius: '20px'
    },
    thumbnail: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        borderRadius: '20px'
    }
}

export default MovieCardBasic;