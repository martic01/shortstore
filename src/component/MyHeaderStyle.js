// Desc: Header component styles
const myHeaderStyles = {

    myNav: {
        backgroundColor: 'white',
        fontFamily: 'sans-serif',
        height: '10vmin',
        weight: '100vw',
        justifyContent: 'space-around',
        boxShadow:' rgba(0, 0, 0, 0.45) 0px 25px 20px -20px',
    },
    myImg: {
        height: 'auto',
        width: '100%',
        ObjectFit: 'contain',
        borderRadius: 'inherit',
    },
    myLogo: {
        color: 'black',
        fontSize: '3vmin',

    },
    myInput: {
        transition: 'all 0.5s',
        paddingLeft: '10px',
        height: '5vmin',
        width: '70vmin',
        borderRadius: '5px',
        outline: 'none',
        border: '2px solid grey',
        margin: '5px',
    },
    myButton: {
        transition: 'all 0.5s',
        padding: '1.8vmin',
        borderRadius: '5px',
        backgroundColor: 'black',
        color: 'white',
        border: 'none',
        cursor: 'pointer',
        fontWeight: 'bold',
        margin: '5px',
        boxShadow:'rgba(241, 238, 238, 0.56) 0px 10px 20px 4px',
        '&:hover': {
            backgroundColor: 'darkblue',
        },
    },
    myUl: {
        width: '30vmin',
        height: '9vmin',
        justifyContent: 'space-between',
        fontSize: '2vmin',
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
        color: 'black',
    },

    myCartLabelDiv: {
        width: '9vmin',
        height: '5vmin',
        position: 'relative',
    },
    myCartImg: {
        width: '60%',
        height: '96%',
        backgroundColor: 'grey',
        borderRadius: '5px',
    },
    myCartCount: {
        position: 'absolute',
        top: '0',
        left: '5px',
        width: '3vmin',
        height: '3vmin',
        backgroundColor: 'black',
        fontWeight:"bold",
        color: 'white',
        borderRadius: '50%',
        padding: '3px',
    },
    myFlagDiv: {
        backgroundColor: 'green',
        width: '10vmin',
        height: '5vmin',
        boxShadow: 'rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px',

    },
    myFlagMiddle: {
        width: '50%',
        height: '95%',
        margin: '0 auto',
        backgroundColor: 'white',
        boxShadow: 'rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px',
    },
}

export default myHeaderStyles