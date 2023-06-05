import React from 'react';
import { motion } from 'framer-motion';
import { pageAnimation } from '../assets/animation/animations';


interface Props {
}

export const DivContainer = (props: Props & { children?: React.ReactNode }) => {
    return (
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        maxWidth: 1330,
        margin: 'auto',
      }}>
        {props.children}
      </div>
    )
  }