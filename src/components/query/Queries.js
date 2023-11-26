import React, { useState } from 'react';

const Query = () => {
  const [selectedQuery, setSelectedQuery] = useState('');
  const [result, setResult] = useState('');

  const queries = [
    'SELECT * FROM categories',
    'SELECT * FROM customers',
    'SELECT * FROM employee_territories',
    'SELECT * FROM employees',
    'SELECT * FROM order_details',
    'SELECT * FROM orders',
    'SELECT * FROM products',
    'SELECT * FROM regions',
    'SELECT * FROM shippers',
    'SELECT * FROM suppliers',
    'SELECT * FROM territories',
  ];

  const handleExecute = () => {
    // Simulate executing the query (replace this with your actual logic)
    const queryResult = `Result for ${selectedQuery}`;
    setResult(queryResult);
  };

  return (
    <div className="query-container">
      <h2 className="text-2xl font-bold mb-4">SQL Query Executor</h2>
      <div className="space-y-2">
        {queries.map((query, index) => (
          <button
            key={index}
            onClick={() => setSelectedQuery(query)}
            className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300"
          >
            {query}
          </button>
        ))}
      </div>
      <button
        onClick={handleExecute}
        className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300"
      >
        Execute
      </button>
      <div className="result mt-4">
        <h3 className="text-lg font-semibold">Result:</h3>
        <p className="mt-2">{result}</p>
      </div>
    </div>
  );
};

export default Query;
