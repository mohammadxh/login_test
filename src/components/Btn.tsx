import React from 'react';

const Btn = ({ handleLogin }: { handleLogin: () => void }) => {
  return (
    <button onClick={handleLogin}>ورود</button>
  );
}

export default Btn;
