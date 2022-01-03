import React from 'react';

interface IProps {
  checked: boolean;
  onChange?: () => void;
}

export default function Switch(props: IProps) {
  const { checked, onChange } = props;

  return (
    <span className={`switch__wrapper ${checked ? 'switch__wrapper--checked' : ''}`}>
      <input className="switch__wrapper__input" role="switch" type="checkbox" checked={checked} onChange={onChange} />
    </span>
  );
}
