import Image from "next/image";
import React from "react";

export default function Masonry({
  columnCount = 3,
  items,
  renderItem,
  gap = 10,
}: {
  columnCount: number;
  renderItem: (any) => React.ReactNode;
  items: any[];
  gap?: number;
}) {
  const containerStyle = {
    display: "grid",
    gridTemplateColumns: `repeat(${columnCount}, 1fr)`,
    gap: `${gap}px`,
  };

  const columns = Array.from({ length: columnCount }, () => []);
  items.forEach((item, index) => {
    columns[index % columnCount].push(item);
  });

  return (
    <div style={containerStyle}>
      {columns.map((column, columnIndex) => (
        <div
          key={columnIndex}
          style={{ gap: `${gap}px` }}
          className="flex flex-col"
        >
          {column.map((item) => renderItem(item))}
        </div>
      ))}
    </div>
  );
}
