import React from 'react';

//No State so reformat for better readability
// Instead of using 'this.props...' it is now just 'props...'
const Form = (props) => (
    <form onSubmit={props.getWeather}>
        <input type="text" placeholder="City..." name="city" required/>
        <input type="text" placeholder="Country..." name="country" required/>
        <input type="submit" value="Get Weather" />
    </form>
);

export default Form;