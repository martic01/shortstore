const myItemStyles = {
    mainItemCont: {
        width: '100%',
        marginTop: '40px',
        flexWrap: 'wrap',
        fontFamily: 'cursive',
        fontSize: '1.6vmin',
    },
    itemCont: {
        width: '22%',
        margin: '10px',
        padding: '2px',
        borderRadius: '10px',
        boxShadow: 'rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset',
    },
    itemImgDiv: {
        width: '100%',
        height: '75%',
        backgroundColor: 'grey',
        borderRadius: '10px',
    },
    itemDetailDiv: {
        width: '100%',
        margin: '5px',
        gap: '7px',
    },
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.7)', // Semi-transparent black background
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000, // Ensure it appears above other content
    },
    modal: {
        backgroundColor: '#fff',
        borderRadius: '10px',
        width: '80%',
        maxWidth: '1000px',
        height: '90%',
        // Enable scrolling if content is too long
        position: 'relative',
    },
    closeButton: {
        position: 'absolute',
        top: '10px',
        right: '10px',
        background: 'none',
        border: 'none',
        fontSize: '24px',
        cursor: 'pointer',
    },
    content: {
        textAlign: 'center',
        height: '90%',
        width: '100%',
        gap: '20px',
        fontFamily: 'sans-serif',
        overflowX: 'auto',
    },
    itemDetailImgDiv: {
        width: '50%',
        boxShadow: ' rgba(87, 86, 86, 0.4) -5px 5px, rgba(56, 55, 56, 0.3) -10px 10px, rgba(75, 74, 74, 0.2) -15px 15px, rgba(138, 98, 123, 0.1) -20px 20px, rgba(122, 59, 99, 0.05) -25px 25px',
        
    },
    itemDetailsDiv: {
        width: '45%',
        height: '70%',
        gap: '20px',
        alignItems: 'flex-start',
    },
    smallDiv: {
        width: '100%',
        height: '40%',
        padding: '10px',
        backgroundColor: 'rgba(12, 12, 12, 0.13)',
        boxShadow: ' rgba(87, 86, 86, 0.4) -5px 5px, rgba(56, 55, 56, 0.3) -10px 10px, rgba(75, 74, 74, 0.2) -15px 15px, rgba(138, 98, 123, 0.1) -20px 20px, rgba(122, 59, 99, 0.05) -25px 25px',
    },
    marginTop: {
        marginTop: '30px',
    },
    h2: {
       padding:'10px',
         textShadow: '2px 2px 4px rgb(253, 253, 253)',
         boxShadow: ' rgba(87, 86, 86, 0.4) -5px 5px, rgba(56, 55, 56, 0.3) -10px 10px, rgba(75, 74, 74, 0.2) -15px 15px, rgba(138, 98, 123, 0.1) -20px 20px, rgba(122, 59, 99, 0.05) -25px 25px',
     },
     hoverMouse: {
        cursor: 'pointer',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Add shadow on hover
        transform: 'translateY(-5px)',
    }

}

export default myItemStyles;