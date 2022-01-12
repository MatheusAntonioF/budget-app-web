import React, { useState } from 'react';

import {
  FieldValues,
  useController,
  UseControllerProps,
} from 'react-hook-form';
import { IconType } from 'react-icons';
import ReactSelect, { ActionMeta } from 'react-select';
import makeAnimated from 'react-select/animated';

import { Container } from '../styles';
import { SelectCore } from './styles';

const animatedComponents = makeAnimated();

interface ISelectOption {
  label: string;
  value: string;
}

type ISelectProps<T> = UseControllerProps<T> & {
  label: string;
  icon?: IconType;
  options: ISelectOption[];
  name: string;
  placeholder: string;
};

const Select = <T extends FieldValues>({
  label,
  control,
  name,
  options,
  placeholder,
  icon: Icon,
  ...rest
}: ISelectProps<T>): JSX.Element => {
  const [inputFocus, setInputFocus] = useState(false);

  const [selectedOption, setSelectedOption] = useState('');

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
      <SelectCore>
        {!!Icon && (
          <div className="icon">
            <Icon />
          </div>
        )}
        <ReactSelect
          {...rest}
          {...fieldProps}
          className="select-component"
          classNamePrefix="_select"
          placeholder={placeholder}
          components={animatedComponents}
          options={options}
          onChange={(newValue: unknown, _: ActionMeta<unknown>): void => {
            const { value: selectedValue } = newValue as ISelectOption;
            setSelectedOption(selectedValue);
            onChange(selectedValue);
          }}
          value={options.find(option => option.value === selectedOption)}
        />
      </SelectCore>
      {!!error && <div className="container-error">{error?.message}</div>}
    </Container>
  );
};

export default Select;
