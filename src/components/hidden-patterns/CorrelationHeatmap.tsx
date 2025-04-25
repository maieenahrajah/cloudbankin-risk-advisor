
import { useState } from "react";
import { ResponsiveContainer, Tooltip } from "recharts";
import { multidimensionalCorrelations } from "@/data/mockData";

const CorrelationHeatmap = () => {
  const [hoveredCell, setHoveredCell] = useState<{
    parameter1: string;
    parameter2: string;
    value: number;
  } | null>(null);

  // Extract unique parameters
  const parameters = Array.from(
    new Set([
      ...multidimensionalCorrelations.map((item) => item.parameter1),
      ...multidimensionalCorrelations.map((item) => item.parameter2),
    ])
  );

  // Create a matrix for the heatmap
  const matrix = parameters.map((param1) =>
    parameters.map((param2) => {
      if (param1 === param2) {
        return { parameter1: param1, parameter2: param2, value: 1 };
      }
      const correlation = multidimensionalCorrelations.find(
        (c) =>
          (c.parameter1 === param1 && c.parameter2 === param2) ||
          (c.parameter1 === param2 && c.parameter2 === param1)
      );
      return correlation
        ? { parameter1: param1, parameter2: param2, value: correlation.value }
        : { parameter1: param1, parameter2: param2, value: 0 };
    })
  );

  // Function to get cell color based on correlation value
  const getCellColor = (value: number) => {
    if (value === 1) return "#f1f5f9";
    const absValue = Math.abs(value);
    if (value > 0) {
      return `rgba(34, 197, 94, ${absValue.toFixed(2)})`;
    } else {
      return `rgba(239, 68, 68, ${absValue.toFixed(2)})`;
    }
  };

  // Function to get text color based on background color
  const getTextColor = (value: number) => {
    if (Math.abs(value) > 0.7) {
      return "white";
    }
    return "inherit";
  };

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-lg font-medium mb-1">Risk Parameter Correlations</h2>
        <p className="text-sm text-muted-foreground">
          Visualize relationships between different risk parameters
        </p>
      </div>

      <div className="relative overflow-x-auto rounded-lg border">
        <div className="min-w-[600px]">
          <table className="w-full text-sm text-center">
            <thead className="bg-muted/50">
              <tr>
                <th className="p-2 border-r border-b"></th>
                {parameters.map((param) => (
                  <th key={param} className="p-2 border-b font-medium">
                    {param}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {matrix.map((row, i) => (
                <tr key={i}>
                  <th className="p-2 border-r font-medium text-left">
                    {parameters[i]}
                  </th>
                  {row.map((cell, j) => (
                    <td
                      key={j}
                      className="p-0 relative"
                      style={{
                        backgroundColor: getCellColor(cell.value),
                      }}
                      onMouseEnter={() => setHoveredCell(cell)}
                      onMouseLeave={() => setHoveredCell(null)}
                    >
                      <div
                        className="w-full h-full p-4 transition-opacity"
                        style={{
                          color: getTextColor(cell.value),
                        }}
                      >
                        {cell.value.toFixed(2)}
                      </div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {hoveredCell && (
        <div className="bg-card text-card-foreground rounded-md shadow-md p-3 border">
          <div className="font-medium">
            {hoveredCell.parameter1} × {hoveredCell.parameter2}
          </div>
          <div className="text-sm text-muted-foreground mt-1">
            Correlation: {hoveredCell.value.toFixed(2)}
          </div>
          <div className="text-sm mt-1">
            {Math.abs(hoveredCell.value) > 0.7
              ? "Strong correlation"
              : Math.abs(hoveredCell.value) > 0.4
              ? "Moderate correlation"
              : "Weak correlation"}
          </div>
        </div>
      )}
    </div>
  );
};

export default CorrelationHeatmap;
