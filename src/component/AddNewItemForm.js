import React from "react";
import PropTypes from "prop-types"; // Import PropTypes
import fakeApi from "./fakeApi";
import MyFormStyles from "./FormStyle";
import myItemStyles from "./itemStyle";
import myHeaderStyles from "./MyHeaderStyle";
import flexBoxStyles from "./FlexBoxStyle";

function AddNewItemForm(props) {
    const { onNewItemCreation, handleImageAdd, onCloseForm,imagePreview } = props; // Destructure props

    // Handle form submission
    function handleNewItemForm(event) {
        event.preventDefault();
        const newItem = {
            id: Date.now(), // Generate a unique ID
            img: imagePreview,
            name: event.target.names.value,
            brand: event.target.brand.value,
            price: event.target.price.value,
            color: event.target.color.value,
            size: event.target.size.value,
            description: event.target.description.value,
        };

        // Call the parent function to handle new item creation
        onNewItemCreation(newItem);
    }
    return (
        <div style={{ ...flexBoxStyles.myFlex, ...MyFormStyles.Formbody }}>
            <button onClick={onCloseForm} style={{ ...myItemStyles.closeButton }}>×</button>
            <form style={{ ...flexBoxStyles.myFlex, ...MyFormStyles.form }} onSubmit={handleNewItemForm}>
                <div style={{ ...flexBoxStyles.myFlex, ...myItemStyles.itemDetailImgDiv }}>
                    <img
                        style={{ ...myHeaderStyles.myImg }}
                        src={imagePreview || "placeholder.jpg"}// Placeholder for image preview
                        alt="Preview"
                    />
                </div>
                <div style={{ ...flexBoxStyles.myFlex2, ...MyFormStyles.formInputCont }}>
                    {/* File input for image */}
                    <input
                        style={{ ...MyFormStyles.formFile }}
                        onChange={handleImageAdd}
                        type="file"
                        name="img"
                    />

                    {/* Dynamically generate text inputs */}
                    {['names', 'brand', 'price', 'color', 'size', 'description'].map((elm) => (
                        <input
                            style={{ ...MyFormStyles.formInput }}
                            type="text"
                            name={elm} // Use the correct name attribute
                            placeholder={`Enter ${elm}`} // Add placeholder for better UX
                        
                        />
                    ))}

                    <button type="submit" style={{ ...myHeaderStyles.myButton }}>
                        Add Item
                    </button>
                </div>
            </form>
        </div>
    );
}

// Define prop types for type checking
AddNewItemForm.propTypes = {
    onNewItemCreation: PropTypes.func.isRequired, // Function to handle new item creation
    onCloseForm: PropTypes.func.isRequired, // Function to close the form
};

export default AddNewItemForm;