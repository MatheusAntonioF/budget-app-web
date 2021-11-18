import React, { forwardRef, ForwardRefRenderFunction, useState } from 'react';

import { FieldError } from 'react-hook-form';
import { IconType } from 'react-icons/lib';

import { Container, Core } from './styles';

type IInputProps = {
  label: string;
  icon?: IconType;
  name: string;
  error?: FieldError;
};

const Input: ForwardRefRenderFunction<HTMLInputElement, IInputProps> = (
  { label, icon: Icon, name, error = null, ...rest },
  ref,
): JSX.Element => {
  const [inputFocus, setInputFocus] = useState(false);

  console.log(inputFocus);

  return (
    <Container
      hasError={!!error && !inputFocus}
      onFocus={() => setInputFocus(true)}
      onBlur={() => setInputFocus(false)}
    >
      <label htmlFor={name}>{label}</label>
      <Core>
        {!!Icon && (
          <div className="icon">
            <Icon />
          </div>
        )}
        <input ref={ref} name={name} {...rest} />
      </Core>
      <div className="container-error">{error?.message}</div>
    </Container>
  );
};

export default forwardRef(Input);
