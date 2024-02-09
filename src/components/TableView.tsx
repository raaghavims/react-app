import { Column, useFilters, useTable, usePagination } from "react-table";
import { Columns } from "./TableColumns";
import { useMemo } from "react";
import { Listing } from "../models/listingModel";
import Loader from "./LoadingSpinner";

interface Props {
  data: Listing[];
  isSpinnerLoading: boolean;
}

function TableView({ data, isSpinnerLoading }: Props) {
  const columns = useMemo<readonly Column<Listing>[]>(() => Columns, []);
  const initialState = {
    pageSize: 10,
    pageIndex: 0,
  };

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable({ columns, data, initialState }, useFilters, usePagination);

  return (
    <>
      {isSpinnerLoading ? (
        <Loader />
      ) : (
        <div className="container mt-5">
          <h3 style={{ textAlign: "center" }}>
            Explore all the listings available here.
          </h3>
          <table
            {...getTableProps()}
            style={{
              width: "100%",
              borderCollapse: "collapse",
            }}
          >
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th
                      {...column.getHeaderProps()}
                      style={{
                        background: "grey",
                        color: "white",
                        fontWeight: "bold",
                        textAlign: "center",
                        border: "1px solid #dddddd",
                        padding: "8px",
                      }}
                    >
                      {column.render("Header")}
                      <div>
                        {column.canFilter ? column.render("Filter") : null}
                      </div>
                    </th>
                  ))}
                </tr>
              ))}
            </thead>

            <tbody {...getTableBodyProps()}>
              {page.map((row) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => {
                      return (
                        <td
                          {...cell.getCellProps()}
                          style={{
                            textAlign: "center",
                            padding: "10px",
                            border: "1px solid #dddddd",
                          }}
                        >
                          {cell.render("Cell")}{" "}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>

            <div className="float-right">
              <button
                className="btn btn-primary"
                onClick={() => previousPage()}
              >
                Previous
              </button>
              <button className="btn btn-primary" onClick={() => nextPage()}>
                Next
              </button>

              <select
                value={pageSize}
                onChange={(e) => {
                  setPageSize(Number(e.target.value));
                }}
              >
                {[10, 25, 50].map((pageSize) => (
                  <option key={pageSize} value={pageSize}>
                    Show {pageSize}
                  </option>
                ))}
              </select>
            </div>
          </table>
        </div>
      )}
    </>
  );
}

export default TableView;
