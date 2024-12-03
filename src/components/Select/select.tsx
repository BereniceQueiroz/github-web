import s from './select.module.scss';
import {SelectProps} from './types';

export function Select({label, options, value, onChange}: SelectProps) {
  return (
    <div className={`d-flex flex-row gap-3 align-items-center ${s.form}`}>
      {label && <span>{label}</span>}
      <select
        className="form-select"
        value={value}
        onChange={e => onChange(e.target.value)}>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
