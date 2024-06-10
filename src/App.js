import React, { useState } from 'react';
import './App.css';
import ContractInput from './ContractInput';
import ContractComparison from './ContractComparison';

const App = () => {
  const [contractText1, setContractText1] = useState('');
  const [contractText2, setContractText2] = useState('');

  return (
    <div className="App">
      <header className="App-header">
        <h1>Contract Comparison Tool</h1>
        <div style={{ display: 'flex' }}>
          <ContractInput
            contractNumber={1}
            onChange={(value) => setContractText1(value)}
          />
          <ContractInput
            contractNumber={2}
            onChange={(value) => setContractText2(value)}
          />
        </div>
        <ContractComparison contract1={contractText1} contract2={contractText2} />
      </header>
    </div>
  );
}

export default App;
