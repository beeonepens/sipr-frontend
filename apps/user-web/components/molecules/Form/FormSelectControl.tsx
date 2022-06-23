import Label from '@components/atoms/Form/Label';
import { useLogoColor } from '@utils/hooks/useLogoColor';
import { Controller, useFormContext } from 'react-hook-form';
import Select from 'react-select';

interface Props {
  id: string;
  options: {
    value: number | string;
    label: string;
  }[];
  label?: string;
  placeholder?: string;
  menuPlacement?: 'bottom' | 'auto' | 'top';
}

export const customStyles = {
  control: (styles, state) => ({
    ...styles,
    background: '#fff',
    borderRadius: '8px',
    borderColor: '#d4d4d8',
    boxShadow: state.isFocused ? '0 0 0 1px #165EA2' : '0',
    '*': {
      boxShadow: 'none !important',
    },
  }),
  menu: (styles) => ({
    ...styles,
    borderRadius: '8px',
  }),
  menuList: (styles) => ({
    ...styles,
    borderRadius: '8px',
    padding: '4px 0',
    margin: 0,
  }),
  option: (styles, state) => ({
    ...styles,
    textSize: '0.875rem',
    textTransform: 'capitalize',
    color: '#3f3f46',
    background: state.isSelected ? '#D1D5DB' : 'white',
    ':hover': {
      background: '#E5E7EB',
    },
  }),
};

export const customStylesDark = {
  control: (styles, state) => ({
    ...styles,
    background: '#27272a',
    borderRadius: '8px',
    borderColor: '#52525b',
    color: '#e4e4e7',
    boxShadow: state.isFocused ? '0 0 0 1px #165EA2' : '0',
    '*': {
      boxShadow: 'none !important',
    },
  }),
  singleValue: (styles) => ({
    ...styles,
    color: '#e4e4e7',
  }),
  menu: (styles) => ({
    ...styles,
    borderRadius: '8px',
    background: '#262626',
  }),
  menuList: (styles) => ({
    ...styles,
    borderRadius: '8px',
    background: '#262626',
    padding: '4px 0',
    margin: 0,
  }),
  option: (styles, state) => ({
    ...styles,
    textSize: '0.875rem',
    textTransform: 'capitalize',
    color: '#d4d4d4',
    background: state.isSelected ? '#1f2937' : '#262626',
    ':hover': {
      background: '#1f2937',
    },
  }),
};

export default function FormSelectControl({
  id,
  label,
  options,
  placeholder,
  menuPlacement = 'auto',
}: Props) {
  const contentColor = useLogoColor();
  const { control } = useFormContext();

  return (
    <div className="flex flex-col justify-start gap-0.5">
      {label && <Label id={id}>{label}</Label>}
      <Controller
        name={id}
        control={control}
        render={({ field }) => (
          <Select
            {...field}
            placeholder={placeholder}
            options={options}
            instanceId={id}
            isSearchable
            maxMenuHeight={200}
            menuPlacement={menuPlacement}
            styles={contentColor === 'dark' ? customStyles : customStylesDark}
          />
        )}
      />
    </div>
  );
}

type IVal = { label: string; value: string | number };
interface StatelessProps extends Props {
  value: IVal;
  onChange: (val: IVal) => void;
}

export function FormSelectStateless({
  id,
  label = '',
  options,
  placeholder,
  menuPlacement = 'auto',
  onChange,
  value,
}: StatelessProps) {
  const contentColor = useLogoColor();

  return (
    <Select
      onChange={onChange}
      value={value}
      aria-label={label}
      placeholder={placeholder}
      options={options}
      instanceId={id}
      isSearchable
      maxMenuHeight={200}
      className="w-full"
      menuPlacement={menuPlacement}
      styles={contentColor === 'dark' ? customStyles : customStylesDark}
    />
  );
}
