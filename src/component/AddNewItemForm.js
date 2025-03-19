import React from "react";
import PropTypes from "prop-types"; //import PropTypes
import fakeApi from "./fakeApi"; 
import MyFormStyles from "./FormStyle"; 
import myItemStyles from "./itemStyle";//import fakeApi



function AddNewItemForm(props) {
    const { onNewItemCreation, onCloseForm } = props; // Destructure props
    function handleNewItemForm(event) {
        event.preventDefault();
        onNewItemCreation({

            id: fakeApi.length + 1,
            img: event.target.img.value,
            name: event.target.names.value,
            brand: event.target.brand.value,
            price: event.target.price.value,
            color: event.target.color.value,
            size: event.target.size.value,
            description: event.target.description.value,
        });
    }
    return (
        <div style={{...MyFormStyles.Formbody}}>
                 <button onClick={onCloseForm} style={{ ...myItemStyles.closeButton }}>×</button>
            <form onSubmit={handleNewItemForm}>
                <input
                    type='file'
                    name='img'
                />
                <input
                    type='text'
                    name='name'
                    placeholder='Enter name'
                />
                <input
                    name='brand'
                    placeholder='Enter brand'
                />
                <input
                    name='price'
                    placeholder='Enter price'
                />
                <input
                    name='color'
                    placeholder='Enter color'
                />
                <input
                    name='size'
                    placeholder='Enter size'

                />
                <input
                    name='description'
                    placeholder='Enter description'
                />
                <button type='submit'>Add Item</button>
            </form>
        </div>
    );
}

AddNewItemForm.propTypes = {
    onNewItemCreation: PropTypes.func
};


export default AddNewItemForm;