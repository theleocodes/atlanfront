import React, { useState } from "react";
import {
  useTable,
  useGlobalFilter,
  useAsyncDebounce,
  useSortBy,
  usePagination,
} from "react-table";

const GlobalFilter = ({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
}) => {
  const count = preGlobalFilteredRows.length;
  const [value, setValue] = useState(globalFilter);
  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 200);

  return (
    <>
      <label className="flex gap-x-2 items-baseline py-5">
  <span className="text-black md:inline-block font-semibold">
    Search:{" "}
  </span>
  <input
    type="text"
    className="text-gray-500 rounded-md shadow-sm outline-none border-2 border-black-300 focus:border-primary-dark transition p-1 w-40 md:w-52 dark:text-gray-200 dark:border-black-800 dark:focus:border-primary-dark transition"
    value={value || ""}
    onChange={(e) => {
      setValue(e.target.value);
      onChange(e.target.value);
    }}
    placeholder={`${count} records...`}
  />
</label>
{/* <span class="mr-7 text-sm px-3 py-2 rounded-lg bg-white dark:empty dark:text-black dark:border-slate-600 border-solid border border-gray-500 focus:border-primary-dark transition p-2 w-40 md:w-52 flex items-center ">Execution Time: <span class="text-[#4FC996] font-semibold">0.00 s</span></span> */}
<div className="flex justify-between mb-4">
            {/* <span className="mr-7 text-sm px-3 py-2 rounded-lg bg-white dark:empty dark:text-black dark:border-slate-600 border-solid border border-gray-500 focus:border-primary-dark transition p-2 w-40 md:w-52 flex items-center"> */}
            <span className="text-black rounded-md shadow-sm outline-none border-2 border-black-300 focus:border-primary-dark transition p-1 w-40 md:w-52 dark:text-black dark:border-black-800 dark:focus:border-primary-dark transition flex items-center">
              Execution Time: <span className="text-[#4FC996] font-semibold ml-1">0.00 s</span>
            </span>
          </div>
            
    </>
  );
};

const Table = ({ columns, data, completeData, query }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    previousPage,
    nextPage,
    canPreviousPage,
    canNextPage,
    state,
    setPageSize,
    pageOptions,
    gotoPage,
    pageCount,
    setGlobalFilter,
    preGlobalFilteredRows,
  } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  return (
    <>
      <div className="flex justify-between items-center">
        <GlobalFilter
          preGlobalFilteredRows={preGlobalFilteredRows}
          globalFilter={state.globalFilter}
          setGlobalFilter={setGlobalFilter}
        />
      </div>

      <div className="shadow overflow-auto border-b-2 border-gray-300 sm:rounded-lg">
        <table
          {...getTableProps()}
          className="min-w-full divide-y divide-gray-300"
        >
          <thead className="bg-grey-500 text-black">
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th
                    scope="col"
                    className="px-6 py-4 text-left text-xs font-medium uppercase tracking-wider"
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                  >
                    <span className="hover:text-gray-300">
                      {column.render("Header")}
                    </span>
                    <span>
                      {column.isSorted
                        ? column.isSortedDesc
                          ? " ▼"
                          : " ▲"
                        : ""}
                    </span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody
            {...getTableBodyProps()}
            className="bg-white text-black divide-y divide-gray-300"
          >
            {page.map((row, i) => {
              prepareRow(row);
              return (
                <tr
                  {...row.getRowProps()}
                  className="hover:bg-gray-100"
                >
                  {row.cells.map((cell) => {
                    return (
                      <td
                        {...cell.getCellProps()}
                        className="px-6 py-4 whitespace-nowrap text-sm text-gray-700"
                      >
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="py-3 flex items-center justify-between">
        <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
          <div className="flex gap-x-2">
            <span className="text-md text-gray-700 py-4">
              Page <span className="font-medium">{state.pageIndex + 1}</span> of{" "}
              <span className="font-medium">{pageOptions.length}</span>
            </span>
            <select
              className="text-black outline-none bg-white border-2 border-transparent focus:border-primary-dark rounded-md cursor-pointer"
              value={state.pageSize}
              onChange={(e) => {
                setPageSize(Number(e.target.value));
              }}
            >
              {[5, 10, 20].map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                  Show {pageSize}
                </option>
              ))}
            </select>
          </div>
          <div>
            <nav
              className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px text-violet-800"
              aria-label="Pagination"
            >
              {/* ... (existing code) */}
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Table;
