import React from "react";
import Rectangle from "../../skeleton/Rectangle/Rectangle";
import Circle from "../../skeleton/circle/Circle";

function TableRowLoading({ numberColumn, number }) {

  return (
    <tr className="h-[50px] border-[#cddede] border-x border-y" key={number}>
      {Array.from({ length: numberColumn }, (_, index) => index + 1).map(
        (index) => {
          if (index === 2) {
            return (
              <td className="px-2 flex justify-center mt-3" key={index}>
                <Circle classes={"w-6 h-6"} />
              </td>
            );
          } else {
            return (
              <td className="px-2" key={index}>
                <Rectangle classes={"w-full h-2"} />
              </td>
            );
          }
        }
      )}
    </tr>
  );
}

export default TableRowLoading;
