import React from 'react';

// proptypes
import PropTypes from 'prop-types';

// styles
import { Wrapper } from './Button.styles';

const Button = ({ text, callback }) => (
    <Wrapper type='button' onClick={callback}>
        {text}
    </Wrapper>
);

Button.propTypes = {
    text: PropTypes.string,
    callBack: PropTypes.func,
}

export default Button;
