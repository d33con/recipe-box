import React, { Component } from 'react';

import { Button, Form, Input, TextArea } from 'semantic-ui-react';

class AddRecipe extends Component {
    
    render() {
        return (
            <div>
                <h1>Add Recipe</h1>
                <Form>
                    <Form.Field control={Input} placeholder='Recipe name' />
                    <Form.Field control={TextArea} placeholder='Add ingredients (separated by comma)'/>
                    <Form.Field control={Button}>Submit</Form.Field>
                </Form>
            </div>
        );
    }
}

AddRecipe.propTypes = {

};

export default AddRecipe;