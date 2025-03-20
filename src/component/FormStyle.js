const MyFormStyles = {
    Formbody: {
        position: 'fixed',
        top: '0',
        height: '100%',
        width: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.83)',
        zIndex: '1200px',
        // backdropFilter:'blur(5px)'
    },
    form: {
        height: '80%',
        width: '70vmin',
        backgroundColor: 'rgba(240, 235, 235, 0.25)',
        backdropFilter: 'blur(10px)',
        boxShadow: ' rgba(83, 83, 83, 0.4) -10px 10px, rgba(87, 86, 87, 0.3) -15px 15px, rgba(100, 99, 99, 0.2) -20px 20px, rgba(122, 122, 122, 0.1) -25px 25px, rgba(241, 237, 241, 0.01) -30px 30px',
    },
    formInputCont:{
        height: '80%',
        width: '45%',
        justifyContent: 'space-around',
    },
    formInput: {
        height: '5vmin',
        width: '25vmin',
        borderRadius:'10px',
        outline: 'none',
        border: '1px solid rgb(158, 157, 157)',
        paddingLeft: '10px',
        backgroundColor: 'rgba(17, 17, 17, 0.47)',
        color:'rgb(167, 165, 165)',
        fontSize:'2vmin',
    },
}

export default MyFormStyles