
import { Slider } from "@/components/ui/slider";
import { 
  Table, 
  TableBody, 
  TableCell,
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { PolicyVersion } from "@/data/mockData";

interface CriteriaEditorProps {
  policies: PolicyVersion[];
}

const CriteriaEditor = ({ policies }: CriteriaEditorProps) => {
  const criteriaLabels: Record<keyof PolicyVersion['criteria'], string> = {
    creditScore: 'Min. Credit Score',
    maxDti: 'Max. DTI (%)',
    minIncome: 'Min. Income (₹)',
    maxLoanToValue: 'Max. LTV (%)'
  };

  // Ranges for sliders
  const ranges = {
    creditScore: { min: 500, max: 800 },
    maxDti: { min: 20, max: 80 },
    minIncome: { min: 5000, max: 50000 },
    maxLoanToValue: { min: 0, max: 100 }
  };

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-lg font-medium mb-1">Policy Criteria Comparison</h2>
        <p className="text-sm text-muted-foreground">
          Compare lending criteria across selected policies
        </p>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Criteria</TableHead>
            {policies.map(policy => (
              <TableHead key={policy.id}>{policy.name}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {Object.entries(criteriaLabels).map(([key, label]) => (
            <TableRow key={key}>
              <TableCell className="font-medium">{label}</TableCell>
              {policies.map(policy => {
                const criteriaKey = key as keyof PolicyVersion['criteria'];
                const value = policy.criteria[criteriaKey];
                const range = ranges[criteriaKey];
                
                return (
                  <TableCell key={`${policy.id}-${key}`} className="min-w-[150px]">
                    <div className="flex flex-col space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>{formatCriteriaValue(criteriaKey, value)}</span>
                      </div>
                      <Slider
                        value={[value]}
                        min={range.min}
                        max={range.max}
                        step={criteriaKey === 'minIncome' ? 1000 : 1}
                        disabled
                      />
                    </div>
                  </TableCell>
                );
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

function formatCriteriaValue(key: keyof PolicyVersion['criteria'], value: number): string {
  switch (key) {
    case 'minIncome':
      return `₹${value.toLocaleString()}`;
    case 'maxDti':
    case 'maxLoanToValue':
      return `${value}%`;
    default:
      return `${value}`;
  }
}

export default CriteriaEditor;
