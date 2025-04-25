
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import IndiaMap from "@/components/geo-risk/IndiaMap";
import RegionDetails from "@/components/geo-risk/RegionDetails";
import { geoRiskData } from "@/data/mockData";

const GeoRiskMap = () => {
  const [selectedRegion, setSelectedRegion] = useState(geoRiskData[0]);
  
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
              onRegionSelect={(region) => setSelectedRegion(region)}
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
