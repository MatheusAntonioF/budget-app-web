import styled from 'styled-components';

import { Core } from '../styles';

export const SelectCore = styled(Core)`
  .select-component {
    width: 100%;
    height: 100%;
  }
  ._select__control {
    width: 100%;
    height: 100%;

    border: 0;
    background: transparent;
  }

  ._select__placeholder {
    font-size: 14px;
  }
`;
