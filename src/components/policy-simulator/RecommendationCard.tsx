
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PolicyRecommendation } from "@/data/mockData";
import { ChartLine } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface RecommendationCardProps {
  recommendation: PolicyRecommendation;
}

const RecommendationCard = ({ recommendation }: RecommendationCardProps) => {
  return (
    <Card className="shadow-card">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-base font-medium">{recommendation.parameter}</CardTitle>
            <CardDescription className="mt-1">Suggested policy change</CardDescription>
          </div>
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
            <ChartLine className="h-4 w-4 text-primary" />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div className="text-sm text-muted-foreground">Current</div>
            <div className="text-sm font-medium">{recommendation.currentValue}</div>
          </div>
          <div className="flex justify-between items-center">
            <div className="text-sm text-primary">Suggested</div>
            <div className="text-sm font-medium text-primary">{recommendation.suggestedValue}</div>
          </div>
          <div className="h-1.5 w-full bg-secondary rounded-full overflow-hidden">
            <div 
              className="h-full bg-primary rounded-full transition-all duration-500"
              style={{ width: '100%' }}
            ></div>
          </div>
          
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="justification" className="border-none">
              <AccordionTrigger className="py-2 text-sm">More Information</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2 text-sm">
                  <p><span className="font-medium">Justification:</span> {recommendation.justification}</p>
                  <p><span className="font-medium">Expected NPA Impact:</span> {recommendation.impact > 0 ? '+' : ''}{recommendation.impact.toFixed(1)}%</p>
                  <p className="text-xs text-muted-foreground pt-2">
                    AI analysis shows this change would have the most significant impact on portfolio health.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </CardContent>
    </Card>
  );
};

export default RecommendationCard;
