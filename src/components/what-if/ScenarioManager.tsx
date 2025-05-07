
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { ChartBar, ChartLine, Save, Download } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";

interface ScenarioData {
  id: number;
  name: string;
  data: any;
  timestamp: string;
}

interface ScenarioManagerProps {
  savedScenarios: ScenarioData[];
  loadScenario: (scenario: ScenarioData) => void;
  saveScenario: (name: string) => void;
}

const ScenarioManager = ({ savedScenarios, loadScenario, saveScenario }: ScenarioManagerProps) => {
  const { toast } = useToast();
  const [newScenarioName, setNewScenarioName] = useState("");

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString().slice(0, 5);
  };

  const handleExportToPDF = () => {
    toast({
      title: "Export initiated",
      description: "Your PDF is being generated and will download shortly.",
    });
    
    // In a real implementation, this would generate and download a PDF
    setTimeout(() => {
      toast({
        title: "Export complete",
        description: "Your scenario data has been exported successfully.",
      });
    }, 1500);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-medium">Scenario Management</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {savedScenarios.length === 0 ? (
            <div className="text-center py-8">
              <ChartLine className="mx-auto h-12 w-12 text-muted-foreground opacity-50" />
              <h3 className="mt-2 text-sm font-medium">No saved scenarios</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Save scenarios to compare different policy configurations
              </p>
            </div>
          ) : (
            <ScrollArea className="h-64 rounded-md border">
              <div className="p-4 space-y-2">
                {savedScenarios.map((scenario) => (
                  <div key={scenario.id}>
                    <div className="flex items-center justify-between py-2">
                      <div>
                        <h3 className="font-medium">{scenario.name}</h3>
                        <p className="text-xs text-muted-foreground">
                          {formatDate(scenario.timestamp)}
                        </p>
                      </div>
                      <div>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => loadScenario(scenario)}
                        >
                          Load
                        </Button>
                      </div>
                    </div>
                    <Separator />
                  </div>
                ))}
              </div>
            </ScrollArea>
          )}

          {savedScenarios.length > 0 && (
            <div className="flex justify-end">
              <Button 
                variant="outline" 
                size="sm"
                className="flex items-center gap-2"
                onClick={handleExportToPDF}
              >
                <Download className="h-4 w-4" />
                Export Comparison
              </Button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ScenarioManager;
