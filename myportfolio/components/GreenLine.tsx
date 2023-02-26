import React from 'react';
import styled from 'styled-components';

import { UNDER_LINE_COLOR } from '@/BaseColor';


const GreenLine = ({ children }: { children: React.ReactNode }) => {
    return <Text>{children}</Text>;
};

const Text = styled.span`
  color: ${UNDER_LINE_COLOR};
`;
export default GreenLine;