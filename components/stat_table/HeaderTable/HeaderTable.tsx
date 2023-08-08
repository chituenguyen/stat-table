// HeaderRow.tsx
import { useTheme } from "next-themes";
import React from "react";

type Column = {
  accessorKey: string;
  header: string;
  sorted: boolean;
};

type Props = {
  group: string;
  columnDetail: any;
  selectedColumns: Column[];
  sorted: string;
  handleColumnClick: (accessorKey: string) => void;
  order: string;
  handleColumnDetailClick: (accessorKey: string) => void;
};

const HeaderRow: React.FC<Props> = ({
  group,
  columnDetail,
  selectedColumns,
  sorted,
  handleColumnClick,
  order,
  handleColumnDetailClick,
}) => {
  const { resolvedTheme } = useTheme();

  return (
    <tr className={`${resolvedTheme === "dark"?"bg-[#181D26] border-[#696f75] border-opacity-30":"bg-surface-1 border-white "}`}>
      {group === "Detailed"
        ? columnDetail.data.map((column: Column, id: number) => (
            <th
              key={id}
              className={`relative border border-solid ${resolvedTheme === "dark"?"text-gray-400 border-[#696f75] border-opacity-30":"text-[#555] border-[#CDDDED]"} text-xs not-italic leading-4 font-bold ${
                column.accessorKey === "player.name" ? "px-2" : "px-4"
              } py-4   ${
                id === 1 ? "text-start px-0" : ""
              } ${column.sorted ? "hover:cursor-pointer" : "cursor-auto"}`}
              onClick={() => handleColumnDetailClick(column.accessorKey)}
            >
              <div
                className={`flex ${
                  column.accessorKey === "player.name"
                    ? "text-start"
                    : "items-center"
                } flex-col`}
              >
                <p>{column.header}</p>
                {column.sorted ? (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    className={`absolute bottom-0 ${
                      column.accessorKey === order ? "rotate-180" : ""
                    }`}
                  >
                    <path
                      fill={`${
                        column.accessorKey === order ||
                        "-" + column.accessorKey === order
                          ? "#2187E5"
                          : ""
                      }`}
                      d="M13 5H3l5 8z"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                ) : (
                  ""
                )}
              </div>
            </th>
          ))
        : selectedColumns.map((column: Column, id: number) => (
            <th
              key={id}
              className={`relative ${resolvedTheme === "dark"?"text-gray-400 border-[#696f75] border-opacity-30":"text-[#555] border-[#CDDDED]"} text-xs not-italic leading-4 font-semibold ${
                column.accessorKey === "player.name" ? "px-2" : "px-4"
              } py-4 border-y border-x  ${
                id === 1 ? "text-start px-0" : ""
              } sorted:${column.sorted ? "true" : "false"} ${
                column.sorted ? "hover:cursor-pointer" : "cursor-auto"
              }`}
              onClick={() => handleColumnClick(column.accessorKey)}
            >
              <div
                className={`flex ${
                  column.accessorKey === "player.name"
                    ? "text-start"
                    : "items-center"
                } flex-col`}
              >
                <p>{column.header}</p>
                {column.sorted ? (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    className={`absolute bottom-0 ${
                      column.accessorKey === sorted ? "rotate-180" : ""
                    }`}
                  >
                    <path
                      fill={`${
                        column.accessorKey === sorted ||
                        "-" + column.accessorKey === sorted
                          ? "#2187E5"
                          : "#41464D"
                      }`}
                      d="M13 5H3l5 8z"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                ) : (
                  ""
                )}
              </div>
            </th>
          ))}
    </tr>
  );
};

export default HeaderRow;
