import React from 'react';
import PropTypes from 'prop-types';
import TextInput from '../../../components/TextInput';
import Button from '../../../components/Button';

const HomeForm = (props) => (
    <form name="homeFrom" onSubmit={props.handleSumbit} className="homeForm">
        <TextInput type="text" name="homeForm" value={props.homeFormValue} placeholder="e.g. Shanna@melissa.tv" handleChange={props.handleChange}/>
        <Button type="sumbit">Submit</Button>
    </form>
);

HomeForm.propTypes = {
    homeFormValue: PropTypes.string,
    onSubmit: PropTypes.func,
    handleChange: PropTypes.func
};

export default HomeForm;