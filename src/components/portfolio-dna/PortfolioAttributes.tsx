
import { PortfolioAttributes } from "@/data/mockData";
import { Progress } from "@/components/ui/progress";

interface PortfolioAttributesProps {
  attributes: PortfolioAttributes[];
}

const PortfolioAttributesComp = ({ attributes }: PortfolioAttributesProps) => {
  return (
    <div>
      <div className="mb-4">
        <h2 className="text-lg font-medium mb-1">Portfolio Attributes</h2>
        <p className="text-sm text-muted-foreground">
          Current vs ideal portfolio composition
        </p>
      </div>

      <div className="space-y-5">
        {attributes.map((attribute, index) => (
          <div key={index}>
            <div className="flex justify-between mb-1.5">
              <div className="font-medium">{attribute.name}</div>
              <div className="text-sm">
                <span className="text-muted-foreground">Current:</span>{" "}
                <span className="font-medium">{attribute.currentValue}%</span>
                <span className="mx-2">•</span>
                <span className="text-muted-foreground">Target:</span>{" "}
                <span className="font-medium text-primary">{attribute.idealValue}%</span>
              </div>
            </div>
            <div className="relative pt-1">
              <div className="bg-muted h-2 rounded-full w-full">
                <div
                  className="h-2 rounded-full bg-primary/70"
                  style={{ width: `${attribute.currentValue}%` }}
                ></div>
                <div
                  className="absolute h-4 w-px bg-primary -mt-3 rounded"
                  style={{ left: `${attribute.idealValue}%` }}
                >
                  <div className="h-2 w-2 rounded-full bg-primary absolute -left-1 top-1"></div>
                </div>
              </div>
            </div>
            <div className="mt-1 text-sm text-muted-foreground line-clamp-2">
              Adjust portfolio allocation based on performance analysis
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioAttributesComp;
