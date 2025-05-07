
import { Badge } from "@/components/ui/badge";
import { RegionData } from "@/data/mockData";

interface IndiaMapProps {
  regions: RegionData[];
  selectedRegion: RegionData;
  onRegionSelect: (region: RegionData) => void;
}

const IndiaMap = ({ regions, selectedRegion, onRegionSelect }: IndiaMapProps) => {
  // Map visualization would typically use libraries like react-simple-maps
  // or a custom SVG map of India. For this mock, we'll show a placeholder.

  const getRiskColor = (riskLevel: string) => {
    switch (riskLevel) {
      case "high":
        return "#ef4444";
      case "medium":
        return "#fbbf24";
      case "low":
        return "#22c55e";
      default:
        return "#94a3b8";
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-medium mb-1">India NPA Risk Map</h2>
        <p className="text-sm text-muted-foreground">
          Regional NPA distribution across states
        </p>
      </div>

      {/* Placeholder for actual map implementation */}
      <div className="bg-muted/20 border rounded-lg flex justify-center items-center h-[400px] relative">
        <div className="text-center">
          <p className="text-sm text-muted-foreground mb-2">
            Interactive India map visualization
          </p>
          <p className="text-xs">
            (Map integration would use react-simple-maps or a custom SVG map)
          </p>
        </div>

        {/* State selection for demonstration */}
        <div className="absolute bottom-4 left-4 right-4 bg-background/90 backdrop-blur-sm border rounded-lg p-4">
          <h3 className="text-sm font-medium mb-2">Select a state for demonstration:</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {regions.map((region) => (
              <div
                key={region.name}
                className={`
                  px-3 py-2 rounded text-sm cursor-pointer flex items-center
                  ${selectedRegion.name === region.name ? 'bg-primary text-primary-foreground' : 'bg-muted/50 hover:bg-muted'}
                `}
                onClick={() => onRegionSelect(region)}
              >
                <div 
                  className="h-3 w-3 rounded-full mr-2"
                  style={{ backgroundColor: getRiskColor(region.riskLevel) }}
                />
                <span className="truncate">{region.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center space-x-6">
        <div className="flex items-center">
          <div className="h-3 w-3 rounded-full bg-good mr-2" />
          <span className="text-sm">Low Risk</span>
        </div>
        <div className="flex items-center">
          <div className="h-3 w-3 rounded-full bg-amber-500 mr-2" />
          <span className="text-sm">Medium Risk</span>
        </div>
        <div className="flex items-center">
          <div className="h-3 w-3 rounded-full bg-poor mr-2" />
          <span className="text-sm">High Risk</span>
        </div>
      </div>
    </div>
  );
};

export default IndiaMap;
