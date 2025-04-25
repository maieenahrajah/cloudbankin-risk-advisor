
import { PortfolioAttributes } from "@/data/mockData";
import { Badge } from "@/components/ui/badge";

interface IdealPortfolioMatrixProps {
  attributes: PortfolioAttributes[];
}

const IdealPortfolioMatrix = ({ attributes }: IdealPortfolioMatrixProps) => {
  // Sort attributes by improvement potential (descending)
  const sortedAttributes = [...attributes].sort(
    (a, b) => b.improvementPotential - a.improvementPotential
  );

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-lg font-medium mb-1">Portfolio Improvement Matrix</h2>
        <p className="text-sm text-muted-foreground">
          Key areas with highest improvement potential
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {sortedAttributes.slice(0, 3).map((attribute, index) => (
          <div
            key={index}
            className="bg-muted/20 rounded-xl p-5 border"
          >
            <div className="flex justify-between items-start">
              <h3 className="font-medium">{attribute.category}</h3>
              <Badge variant="outline">
                +{attribute.improvementPotential}% potential
              </Badge>
            </div>
            <div className="mt-3 grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-muted-foreground">Current</p>
                <p className="text-2xl font-semibold">{attribute.currentValue}%</p>
              </div>
              <div>
                <p className="text-muted-foreground">Ideal</p>
                <p className="text-2xl font-semibold text-primary">
                  {attribute.idealValue}%
                </p>
              </div>
            </div>
            <div className="mt-4 bg-muted h-1.5 rounded-full w-full">
              <div
                className="h-1.5 rounded-full bg-primary"
                style={{ width: `${attribute.currentValue / attribute.idealValue * 100}%` }}
              ></div>
            </div>
            <div className="mt-4 text-sm">
              <p className="font-medium">Recommended Action:</p>
              <p className="mt-1">{attribute.recommendation}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 border rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-muted/50">
            <tr>
              <th className="text-left p-3 font-medium">Portfolio Attribute</th>
              <th className="text-center p-3 font-medium">Current</th>
              <th className="text-center p-3 font-medium">Target</th>
              <th className="text-center p-3 font-medium">Gap</th>
              <th className="text-left p-3 font-medium">Action Plan</th>
            </tr>
          </thead>
          <tbody>
            {sortedAttributes.map((attribute, index) => (
              <tr key={index} className="border-t">
                <td className="p-3">{attribute.category}</td>
                <td className="p-3 text-center">{attribute.currentValue}%</td>
                <td className="p-3 text-center text-primary">{attribute.idealValue}%</td>
                <td className="p-3 text-center">
                  <span className="font-medium text-primary">
                    {attribute.improvementPotential}%
                  </span>
                </td>
                <td className="p-3 text-sm">{attribute.recommendation}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default IdealPortfolioMatrix;
