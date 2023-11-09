import type { ChangeEventHandler } from 'react';
import { useState } from 'react';

const useSpaceValidator = (initialValue = '') => {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState('');

  const handleChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    const newValue = e.target.value;
    setValue(newValue);

    const isWhitespaceOnly = !newValue.trim() && newValue.length > 2;
    const isConsecutiveSpaces = /\s{10,}/.test(newValue);
    const isConsecutiveNewlines = /\n{4,}/.test(newValue);

    isWhitespaceOnly || isConsecutiveSpaces || isConsecutiveNewlines
      ? setError('의미 있는 리뷰를 작성해보는 건 어떨까요? 🫨')
      : setError('');
  };

  return { value, error, handleChange };
};

export default useSpaceValidator;
