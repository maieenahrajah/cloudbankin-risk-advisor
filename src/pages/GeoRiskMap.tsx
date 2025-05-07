
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import IndiaMap from "@/components/geo-risk/IndiaMap";
import RegionDetails from "@/components/geo-risk/RegionDetails";
import { RegionData } from "@/data/mockData";

// Type-safe mock data for geo risk with explicit riskLevel values
const geoRiskData: RegionData[] = [
  {
    id: "region-1",
    name: "Maharashtra",
    riskScore: 65,
    loanVolume: 1250000000, // 125 Cr
    npaRate: 3.2,
    approvalRate: 68.5,
    suggestedEIRCap: 12.5,
    keyFactors: ["Urban concentration", "Industry diversification", "Income stability"],
    riskLevel: "medium" as const,
    trend: "stable" as const,
    districts: [
      { name: "Mumbai", npaRate: 2.8 },
      { name: "Pune", npaRate: 3.1 },
      { name: "Nagpur", npaRate: 3.6 },
      { name: "Nashik", npaRate: 3.8 }
    ]
  },
  {
    id: "region-2",
    name: "Karnataka",
    riskScore: 48,
    loanVolume: 980000000, // 98 Cr
    npaRate: 2.5,
    approvalRate: 72.3,
    suggestedEIRCap: 11.0,
    keyFactors: ["Tech industry presence", "Higher income levels", "Urban infrastructure"],
    riskLevel: "low" as const,
    trend: "improving" as const,
    districts: [
      { name: "Bangalore", npaRate: 2.0 },
      { name: "Mysore", npaRate: 2.8 },
      { name: "Hubli", npaRate: 3.2 }
    ]
  },
  {
    id: "region-3",
    name: "Tamil Nadu",
    riskScore: 52,
    loanVolume: 850000000, // 85 Cr
    npaRate: 2.8,
    approvalRate: 70.5,
    suggestedEIRCap: 11.5,
    keyFactors: ["Manufacturing base", "Export orientation", "Education levels"],
    riskLevel: "low" as const,
    trend: "stable" as const,
    districts: [
      { name: "Chennai", npaRate: 2.4 },
      { name: "Coimbatore", npaRate: 2.9 },
      { name: "Madurai", npaRate: 3.5 }
    ]
  },
  {
    id: "region-4",
    name: "Uttar Pradesh",
    riskScore: 78,
    loanVolume: 1320000000, // 132 Cr
    npaRate: 5.6,
    approvalRate: 58.2,
    suggestedEIRCap: 14.0,
    keyFactors: ["Agricultural dependence", "Income volatility", "Infrastructure gaps"],
    riskLevel: "high" as const,
    trend: "worsening" as const,
    districts: [
      { name: "Lucknow", npaRate: 4.8 },
      { name: "Kanpur", npaRate: 5.5 },
      { name: "Agra", npaRate: 5.2 },
      { name: "Varanasi", npaRate: 6.1 }
    ]
  }
];

const GeoRiskMap = () => {
  const [selectedRegion, setSelectedRegion] = useState<RegionData>(geoRiskData[0]);
  
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Geo-Risk Heatmap</h1>
        <p className="text-muted-foreground">
          Visualize geographic risk distribution across India
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-2">
          <CardContent className="pt-6">
            <IndiaMap 
              regions={geoRiskData} 
              onRegionSelect={setSelectedRegion}
              selectedRegion={selectedRegion}
            />
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <RegionDetails region={selectedRegion} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default GeoRiskMap;
