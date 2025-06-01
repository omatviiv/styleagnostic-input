import React, {useState, useEffect} from 'react';
import {debounce} from 'throttle-debounce';
import InputTheme, {InputThemeType} from './theme';

const Input: React.FC<{
  type?: 'text' | 'email' | 'number' | 'password' | 'search' | 'tel' | 'url',
  value?: string,
  placeholder?: string,
  debounceTimeout?: number,
  // disabled?: boolean,
  onChange?: (v: string) => void,
  theme?: InputThemeType,
}> = ({
  type = 'text',
  value = '',
  placeholder = '',
  debounceTimeout = 300,
  // disabled = false,
  onChange = () => undefined,
  theme = InputTheme,
}) => {
  const [mounted, setMounted] = useState(false);
  const [val, setVal] = useState(value);
  const [{onChangeDebounced}] = useState({
    onChangeDebounced: debounce(debounceTimeout, onChange),
  });

  useEffect(() => { setVal(value); }, [value]);
  useEffect(() => {
    // Prevent onChange when mounting and value is set through props
    if (mounted && val !== value) {
      onChangeDebounced(val);
    }
    setMounted(true);
  }, [val]);

  const onInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => setVal(e.currentTarget.value);

  return <theme.Input
    type={type}
    value={val}
    placeholder={placeholder}
    onChange={onInputChange}
  />;
};

export default Input;
