import React, { memo, useEffect, useState } from 'react';

import { FiCheckCircle, FiAlertCircle } from 'react-icons/fi';

import { IToastMessage } from '../../hooks/toast';
import { Container } from './styles';

interface IToastProps {
  toast: IToastMessage;
  removeToast: () => void;
}

const DELAY_TO_HIDDEN = 2500;
const DELAY_WITH_ANIMATION_DURATION = 3000;

const Toast = ({
  toast: { type, title, description },
  removeToast,
}: IToastProps): JSX.Element => {
  const [activeAnimationToHidden, setActiveAnimationToHidden] = useState(false);

  const defaultIcons = {
    success: <FiCheckCircle />,
    error: <FiAlertCircle />,
  };

  useEffect(() => {
    setTimeout(() => setActiveAnimationToHidden(true), DELAY_TO_HIDDEN);

    setTimeout(() => removeToast(), DELAY_WITH_ANIMATION_DURATION);
  }, [removeToast]);

  return (
    <Container type={type} itShouldBeRemove={activeAnimationToHidden}>
      <div className="icon">{defaultIcons[type]}</div>
      <div className="content">
        <p>{title}</p>
        <p>{description}</p>
      </div>
    </Container>
  );
};

export default memo(Toast);
