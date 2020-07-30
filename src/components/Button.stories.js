import React from 'react';
import { action } from '@storybook/addon-actions';

import Button from './Button';

export default {
    title: 'Button',
    component: Button,
  };

  export const Primary = () => <Button label="Primary" 
  style={{background: '#fecd43'}}/>;

  export const Outline = () => <Button label="Outline" 
  style={{ background: 'transparent', border: '3px solid #fecd43' }}/>;

  export const RoundedCorner = () => <Button label="RoundCorner" 
  style={{ background: 'transparent', border: '3px solid #fecd43', borderRadius: '15px' }}/>;