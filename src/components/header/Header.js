// import React from 'react';

// const Header = React.memo(() => {
//     return (
//         <header className="bg-gray-900 py-4">
//             <div className="container mx-auto flex items-center justify-between">
//                 <h1 className="text-white text-3xl font-semibold">SQL Editor</h1>
//                 <nav className="text-white text-lg">
//                     <ul className="flex items-center space-x-6">
//                         <li className="cursor-pointer hover:text-blue-500 transition duration-300">
//                             Tables
//                         </li>
//                         <li className="cursor-pointer hover:text-blue-500 transition duration-300">
//                             Queries
//                         </li>
//                         <li className="cursor-pointer hover:text-blue-500 transition duration-300">
//                             About
//                         </li>
//                         <li className="cursor-pointer hover:text-blue-500 transition duration-300">
//                             Documentation
//                         </li>
//                         <li className="cursor-pointer hover:text-blue-500 transition duration-300">
//                             Contact
//                         </li>
//                     </ul>
//                 </nav>
//             </div>
//             {/* <div className="container mx-auto mt-4">
//                 <p className="text-white text-lg">
//                     Welcome to the SQL Editor! A place to manage your SQL queries with ease.
//                 </p>
//             </div> */}
//         </header>
//     );
// });

// export default Header;



import React from 'react';

const Header = React.memo(() => {
  return (
    <header className="bg-gray-900 py-4">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-white text-4xl font-bold tracking-wide">SQL Editor</h1>
        <nav className="text-white text-lg">
          <ul className="flex items-center space-x-10">
            <li className="nav-item">Tables</li>
            <li className="nav-item">Queries</li>
            <li className="nav-item">About</li>
            <li className="nav-item">Documentation</li>
            <li className="nav-item">Contact</li>
          </ul>
        </nav>
      </div>
    </header>
  );
});

export default Header;
