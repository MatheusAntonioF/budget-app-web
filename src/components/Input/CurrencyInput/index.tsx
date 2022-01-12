import React, { useState } from 'react';

import CurrencyFieldInput from 'react-currency-input-field';
import {
  FieldValues,
  useController,
  UseControllerProps,
} from 'react-hook-form';
import { IconType } from 'react-icons';

import { Container, Core } from '../styles';

interface ICurrencyInputProps<T> extends UseControllerProps<T> {
  label: string;
  icon?: IconType;
  placeholder: string;
}

const CurrencyInput = <T extends FieldValues>({
  label,
  control,
  name,
  placeholder,
  icon: Icon,
  ...rest
}: ICurrencyInputProps<T>): JSX.Element => {
  const [inputFocus, setInputFocus] = useState(false);

  const {
    field: { onChange, ...fieldProps },
    fieldState: { error },
  } = useController({
    name,
    control,
    rules: { required: true },
  });

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
        <CurrencyFieldInput
          {...rest}
          {...fieldProps}
          name={name}
          prefix="R$ "
          placeholder={placeholder}
          onValueChange={value => onChange(value)}
        />
      </Core>
      {!!error && <div className="container-error">{error?.message}</div>}
    </Container>
  );
};

export default CurrencyInput;
