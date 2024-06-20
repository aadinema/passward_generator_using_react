import React, { useState } from 'react';


function App() {
  const [password, setPassword] = useState('');
  const [passwordLength, setPasswordLength] = useState(12);
  const [includeUppercase, setIncludeUppercase] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);

  const generatePassword = () => {
    const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+';

    let characters = lowercaseLetters;
    if (includeUppercase) characters += uppercaseLetters;
    if (includeNumbers) characters += numbers;
    if (includeSymbols) characters += symbols;

    let generatedPassword = '';
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      generatedPassword += characters[randomIndex]; 
    }

    setPassword(generatedPassword);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-900">
      <div className="bg-teal-800 p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Password Generator</h2>
        <div className="mb-4">
          <label htmlFor="passwordLength" className="block mb-2">Password Length:</label>
          <input
            type="number"
            id="passwordLength"
            value={passwordLength}
            onChange={(e) => setPasswordLength(e.target.value)}
            className="w-full py-2 px-3 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="flex items-center mb-2">
            <input
              type="checkbox"
              checked={includeUppercase}
              onChange={(e) => setIncludeUppercase(e.target.checked)}
              className="mr-2"
            />
            Include Uppercase Letters
          </label>
          <label className="flex items-center mb-2">
            <input
              type="checkbox"
              checked={includeNumbers}
              onChange={(e) => setIncludeNumbers(e.target.checked)}
              className="mr-2"
            />
            Include Numbers
          </label>
          <label className="flex items-center mb-2">
            <input
              type="checkbox"
              checked={includeSymbols}
              onChange={(e) => setIncludeSymbols(e.target.checked)}
              className="mr-2"
            />
            Include Symbols
          </label>
        </div>
        <button onClick={generatePassword} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          Generate Password
        </button>
        <div className="mt-4">
          <label htmlFor="generatedPassword" className="block mb-2">Generated Password:</label>
          <input
            type="text"
            id="generatedPassword"
            value={password}
            readOnly
            className="w-full py-2 px-3 border border-gray-300 rounded"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
