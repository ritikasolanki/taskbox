import React from 'react';
import { action } from '@storybook/addon-actions';

 const Button = props =>(
    <div className="button-text">
      <button className="button" type="button" style={props.style}><span>{props.label}</span></button>
    </div>
);

export default Button;