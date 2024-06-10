import React, { useState } from 'react';
import { diffWords } from 'diff';

const ContractComparison = ({ contract1, contract2 }) => {
  const [diffOutput, setDiffOutput] = useState('');

  const compareContracts = () => {
    const diff = diffWords(contract1, contract2);

    let html = '';
    diff.forEach((part) => {
      const color = part.added ? 'green' : part.removed ? 'red' : 'grey';
      html += `<span style="color: ${color}">${part.value}</span>`;
    });

    setDiffOutput(html);
  };

  return (
    <div>
      <h2>Comparison</h2>
      <div dangerouslySetInnerHTML={{ __html: diffOutput }}></div>
      <button onClick={compareContracts}>Compare Contracts</button>
    </div>
  );
};

export default ContractComparison;
