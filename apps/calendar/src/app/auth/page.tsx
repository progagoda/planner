'use client';

import styled from 'styled-components';
import { TestList } from '../../features';

const StyledPage = styled.div`
  .page {
  }
`;

export default function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.styled-components file.
   */
  'use client'
  return (
    <StyledPage>
        <TestList/>
    </StyledPage>
  );
}
