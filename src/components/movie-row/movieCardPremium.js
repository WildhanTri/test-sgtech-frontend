
import React, { useEffect } from "react";

const MovieCardPremium = (props) => {

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
        width: 320,
        height: 180,
        borderRadius: '20px'
    },
    thumbnail: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        borderRadius: '20px'
    }
}

export default MovieCardPremium;