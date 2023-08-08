// TableRow.tsx
import { useTheme } from "next-themes";
import React from "react";

type Column = {
  accessorKey: string;
  header: string;
};

type Props = {
  key?: number;
  index: number;
  row: any;
  columns: Column[];
};

const TableRow: React.FC<Props> = ({ index, row, columns }) => {
  const { resolvedTheme } = useTheme();

  return (
    <tr
      key={index}
      className={`text-center ${
        index % 2 === 1 && resolvedTheme === "light"
          ? "bg-surface-1"
          : index % 2 === 1 && resolvedTheme !== "light"
          ? "bg-[#181D26]"
          : index % 2 !== 1 && resolvedTheme === "light"
          ? "bg-white"
          : "bg-[#1C2632]"
      } ${
        resolvedTheme === "dark" ? "border-[#696f75] border-opacity-30" : "border-[#cddded]"
      } border-x border-y`}
    >
      {columns.map((column) => {
        const accessorKeys = column.accessorKey.split("."); // Split the accessorKey by '.' to access nested properties
        let cellData = row;
        accessorKeys.forEach((key) => {
          if (cellData) {
            cellData = cellData[key];
          }
        });
        return (
          <td
            key={column.accessorKey}
            className={`${
              column.accessorKey === "player.name"
                ? "text-start px-2"
                : "text-center"
            }  ${
              resolvedTheme === "dark" ? "text-gray-400" : "text-[#555]"
            } text-xs font-normal py-2 leading-smc border-r ${
              resolvedTheme === "dark" ? "border-[#696f75] border-opacity-30" : "border-[#cddded]"
            } ${
              column.accessorKey === "team.id" ? "flex justify-center" : ""
            } ${
              column.accessorKey === "rating"
                ? cellData >= 9
                  ? "!text-[#3498DB] !font-bold"
                  : cellData >= 8
                  ? "!text-[#47C152] !font-bold"
                  : cellData >= 7
                  ? "!text-[#A2B719] !font-bold"
                  : cellData >= 6
                  ? "!text-[#D8B62A] !font-bold"
                  : "!text-[#FA5151] !font-bold"
                : ""
            }`}
          >
            {column.accessorKey === "player.id" && column.header === "ID" ? (
              index + 1
            ) : column.header === "Team" ? (
              <img
                src={`https://apisf.p2pcdn.xyz/api/v1/team/${cellData}/image`}
                className="w-5 h-5 my-2"
                alt="Team flag"
              ></img>
            ) : (
              cellData
            )}
          </td>
        );
      })}
    </tr>
  );
};

export default TableRow;
