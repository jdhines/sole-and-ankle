import React from 'react';
import styled from 'styled-components/macro';
import { COLORS, WEIGHTS } from '../../constants'

const TAG_STYLES = {
  'on-sale': {
    '--bgColor': COLORS.primary,
    '--fontColor': COLORS.white
  },
  'new-release': {
    '--bgColor': COLORS.secondary,
    '--fontColor': COLORS.white
  },
  'default': {
    '--bgColor': 'transparent',
    '--fontColor': 'transparent'
  },
}

const SpecialsTag = ({variant}) => {
  const tagStyle = TAG_STYLES[variant];

  return (
    <Tag style={tagStyle}>
      {variant === 'on-sale' && 'Sale'}
      {variant === 'new-release' && 'Just released!'}
    </Tag>
  );
};

const Tag = styled.div `
  position: absolute;
  right: -4px;
  top: 12px;
  padding: 8px 12px;
  background: var(--bgColor);
  color: var(--fontColor);
  border-radius: 2px;
  font-weight: ${WEIGHTS.bold}
`


export default SpecialsTag;
