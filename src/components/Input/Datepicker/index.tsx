import React, { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';

import ReactDatepicker from 'react-datepicker';
import {
  FieldValues,
  useController,
  UseControllerProps,
} from 'react-hook-form';
import { IconType } from 'react-icons';

import { Container } from '../styles';
import { DatepickerCore } from './styles';

interface IDatepickerProps<T> extends UseControllerProps<T> {
  label: string;
  icon?: IconType;
  placeholder?: string;
}

const Datepicker = <T extends FieldValues>({
  label,
  control,
  name,
  placeholder,
  icon: Icon,
  ...rest
}: IDatepickerProps<T>): JSX.Element => {
  const [inputFocus, setInputFocus] = useState(false);

  const {
    field: { value, onChange, ...fieldProps },
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
      <DatepickerCore>
        {!!Icon && (
          <div className="icon">
            <Icon />
          </div>
        )}
        <ReactDatepicker
          selected={value}
          onChange={onChange}
          placeholderText={placeholder}
          {...rest}
          {...fieldProps}
        />
      </DatepickerCore>
      {!!error && <div className="container-error">{error?.message}</div>}
    </Container>
  );
};

export default Datepicker;
