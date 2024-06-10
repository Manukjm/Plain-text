// InputInterface.js
import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';

const InputInterface = () => {
  const [text, setText] = useState('');

  const onDrop = (acceptedFiles) => {
    const fileReader = new FileReader();
    fileReader.onload = (event) => {
      const uploadedText = event.target.result;
      setText(uploadedText);
    };
    fileReader.readAsText(acceptedFiles[0]);
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div>
      <div {...getRootProps()} style={{ border: '2px dashed #ccc', padding: '20px', textAlign: 'center', cursor: 'pointer' }}>
        <input {...getInputProps()} />
        <p>Drag and drop files here, or click to select files</p>
      </div>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Paste text here..."
        style={{ width: '100%', minHeight: '200px', marginTop: '20px' }}
      />
    </div>
  );
};

export default InputInterface;
