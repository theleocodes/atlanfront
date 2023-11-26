import React from "react";
import {
} from "react-table";

const Table = ({ columns, data, completeData, query }) => {

  return (
    <div className="flex flex-col min-h-screen">
      <footer className="text-center text-white py-4 mt-auto bg-black">
        <div className="flex flex-col items-center">
          <p>Made with ❤️ by Tanvi</p>
          {/* <p>Contact: example@email.com</p>
          <p>Address: 123 Street, City, Country</p> */}
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            GitHub
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Table;
