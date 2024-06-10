import React from 'react';

const ContractInput = ({ contractNumber, onChange }) => {
  return (
    <div>
      <h2>Contract {contractNumber}</h2>
      <textarea
        onChange={(e) => onChange(e.target.value)}
        rows="10"
        cols="50"
      />
    </div>
  );
};

export default ContractInput;
