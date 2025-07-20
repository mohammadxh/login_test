import React from 'react';
type InputProps = {
  phone: string;
  setPhone: React.Dispatch<React.SetStateAction<string>>;
};

const Input_m = ({ phone, setPhone }: InputProps) => {
  return (
    <input
      type="tel"
      placeholder="شماره موبایل"
      value={phone}
      onChange={(e) => setPhone(e.target.value)}
    />
  );
}

export default Input_m;
