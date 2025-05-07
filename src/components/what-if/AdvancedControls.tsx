
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface AdvancedControlsProps {
  scenario: {
    chequeBounces: number;
    willfulDefault: boolean;
    unsecuredLoansCount: number;
    securedLoansCount: number;
    bureauHistory: number;
    activeDpd1Plus: number;
    closedDpd1Plus: number;
    activeDpd30Plus: number;
    closedDpd30Plus: number;
    activeDpd60Plus: number;
    closedDpd60Plus: number;
    activeDpd90Plus: number;
    closedDpd90Plus: number;
    ccSettlements3Years: number;
    ccWriteOffs3Years: number;
    nonCcSettlements3Years: number;
    nonCcWriteOffs3Years: number;
    activeDefaultsCount: number;
    closedDefaultsCount: number;
    openLoanAccounts: number;
    closedLoanAccounts: number;
    emiBounce0: number;
    emiBounce1: number;
    emiBounce2: number;
    emiBounce3: number;
    [key: string]: any;
  };
  setScenario: React.Dispatch<React.SetStateAction<any>>;
}

const AdvancedControls = ({ scenario, setScenario }: AdvancedControlsProps) => {
  const handleNumberChange = (field: string, value: number | number[] | boolean) => {
    setScenario((prev) => ({
      ...prev,
      [field]: Array.isArray(value) ? value[0] : value,
    }));
  };

  return (
    <Card className="shadow-card">
      <CardHeader>
        <CardTitle className="text-lg font-medium">Advanced Risk Parameters</CardTitle>
        <CardDescription>Configure detailed borrower behavior and credit risk factors</CardDescription>
      </CardHeader>
      <CardContent className="p-4">
        <Tabs defaultValue="credit-history">
          <TabsList className="grid grid-cols-3 mb-4">
            <TabsTrigger value="credit-history">Credit History</TabsTrigger>
            <TabsTrigger value="dpd-history">DPD History</TabsTrigger>
            <TabsTrigger value="account-history">Account History</TabsTrigger>
          </TabsList>
          
          {/* Credit History Tab */}
          <TabsContent value="credit-history" className="space-y-4">
            {/* Cheque Bounces */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <Label htmlFor="chequeBounces">No. of Cheque Bounces</Label>
                <span className="text-sm font-mono">{scenario.chequeBounces}</span>
              </div>
              <div className="flex gap-2 items-center">
                <Slider
                  id="chequeBounces"
                  min={0}
                  max={10}
                  step={1}
                  value={[scenario.chequeBounces]}
                  onValueChange={(value) => handleNumberChange('chequeBounces', value)}
                  className="flex-1"
                />
              </div>
              <p className="text-xs text-muted-foreground">Number of cheque bounces in the last 6 months</p>
            </div>
            
            {/* Willful Default */}
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="willfulDefault">Willful Default for 24 Months</Label>
                <p className="text-xs text-muted-foreground">Has borrower willfully defaulted in the past 24 months</p>
              </div>
              <Switch
                id="willfulDefault"
                checked={scenario.willfulDefault}
                onCheckedChange={(checked) => handleNumberChange('willfulDefault', checked)}
              />
            </div>
            
            {/* Bureau History */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <Label htmlFor="bureauHistory">Bureau History (months)</Label>
                <span className="text-sm font-mono">{scenario.bureauHistory}</span>
              </div>
              <Slider
                id="bureauHistory"
                min={0}
                max={120}
                step={3}
                value={[scenario.bureauHistory]}
                onValueChange={(value) => handleNumberChange('bureauHistory', value)}
                className="flex-1"
              />
            </div>
            
            {/* Loan Counts */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="unsecuredLoansCount">Unsecured Loans</Label>
                <Input
                  id="unsecuredLoansCount"
                  type="number"
                  min="0"
                  max="20"
                  value={scenario.unsecuredLoansCount}
                  onChange={(e) => handleNumberChange('unsecuredLoansCount', parseInt(e.target.value) || 0)}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="securedLoansCount">Secured Loans</Label>
                <Input
                  id="securedLoansCount"
                  type="number"
                  min="0"
                  max="10"
                  value={scenario.securedLoansCount}
                  onChange={(e) => handleNumberChange('securedLoansCount', parseInt(e.target.value) || 0)}
                  className="mt-1"
                />
              </div>
            </div>
          </TabsContent>
          
          {/* DPD History Tab */}
          <TabsContent value="dpd-history" className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              {/* 1+ DPDs */}
              <div>
                <Label htmlFor="activeDpd1Plus">Active Account – 1+ DPDs</Label>
                <Input
                  id="activeDpd1Plus"
                  type="number"
                  min="0"
                  max="20"
                  value={scenario.activeDpd1Plus}
                  onChange={(e) => handleNumberChange('activeDpd1Plus', parseInt(e.target.value) || 0)}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="closedDpd1Plus">Closed Account – 1+ DPDs</Label>
                <Input
                  id="closedDpd1Plus"
                  type="number"
                  min="0"
                  max="20"
                  value={scenario.closedDpd1Plus}
                  onChange={(e) => handleNumberChange('closedDpd1Plus', parseInt(e.target.value) || 0)}
                  className="mt-1"
                />
              </div>
              
              {/* 30+ DPDs */}
              <div>
                <Label htmlFor="activeDpd30Plus">Active Account – 30+ DPDs</Label>
                <Input
                  id="activeDpd30Plus"
                  type="number"
                  min="0"
                  max="20"
                  value={scenario.activeDpd30Plus}
                  onChange={(e) => handleNumberChange('activeDpd30Plus', parseInt(e.target.value) || 0)}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="closedDpd30Plus">Closed Account – 30+ DPDs</Label>
                <Input
                  id="closedDpd30Plus"
                  type="number"
                  min="0"
                  max="20"
                  value={scenario.closedDpd30Plus}
                  onChange={(e) => handleNumberChange('closedDpd30Plus', parseInt(e.target.value) || 0)}
                  className="mt-1"
                />
              </div>
              
              {/* 60+ DPDs */}
              <div>
                <Label htmlFor="activeDpd60Plus">Active Account – 60+ DPDs</Label>
                <Input
                  id="activeDpd60Plus"
                  type="number"
                  min="0"
                  max="20"
                  value={scenario.activeDpd60Plus}
                  onChange={(e) => handleNumberChange('activeDpd60Plus', parseInt(e.target.value) || 0)}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="closedDpd60Plus">Closed Account – 60+ DPDs</Label>
                <Input
                  id="closedDpd60Plus"
                  type="number"
                  min="0"
                  max="20"
                  value={scenario.closedDpd60Plus}
                  onChange={(e) => handleNumberChange('closedDpd60Plus', parseInt(e.target.value) || 0)}
                  className="mt-1"
                />
              </div>
              
              {/* 90+ DPDs */}
              <div>
                <Label htmlFor="activeDpd90Plus">Active Account – 90+ DPDs</Label>
                <Input
                  id="activeDpd90Plus"
                  type="number"
                  min="0"
                  max="20"
                  value={scenario.activeDpd90Plus}
                  onChange={(e) => handleNumberChange('activeDpd90Plus', parseInt(e.target.value) || 0)}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="closedDpd90Plus">Closed Account – 90+ DPDs</Label>
                <Input
                  id="closedDpd90Plus"
                  type="number"
                  min="0"
                  max="20"
                  value={scenario.closedDpd90Plus}
                  onChange={(e) => handleNumberChange('closedDpd90Plus', parseInt(e.target.value) || 0)}
                  className="mt-1"
                />
              </div>
            </div>
          </TabsContent>
          
          {/* Account History Tab */}
          <TabsContent value="account-history" className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              {/* Credit Card Settlements/Write-offs */}
              <div>
                <Label htmlFor="ccSettlements3Years">CC Settlements (3 yrs)</Label>
                <Input
                  id="ccSettlements3Years"
                  type="number"
                  min="0"
                  max="10"
                  value={scenario.ccSettlements3Years}
                  onChange={(e) => handleNumberChange('ccSettlements3Years', parseInt(e.target.value) || 0)}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="ccWriteOffs3Years">CC Write-offs (3 yrs)</Label>
                <Input
                  id="ccWriteOffs3Years"
                  type="number"
                  min="0"
                  max="10"
                  value={scenario.ccWriteOffs3Years}
                  onChange={(e) => handleNumberChange('ccWriteOffs3Years', parseInt(e.target.value) || 0)}
                  className="mt-1"
                />
              </div>
              
              {/* Non-CC Settlements/Write-offs */}
              <div>
                <Label htmlFor="nonCcSettlements3Years">Non-CC Settlements (3 yrs)</Label>
                <Input
                  id="nonCcSettlements3Years"
                  type="number"
                  min="0"
                  max="10"
                  value={scenario.nonCcSettlements3Years}
                  onChange={(e) => handleNumberChange('nonCcSettlements3Years', parseInt(e.target.value) || 0)}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="nonCcWriteOffs3Years">Non-CC Write-offs (3 yrs)</Label>
                <Input
                  id="nonCcWriteOffs3Years"
                  type="number"
                  min="0"
                  max="10"
                  value={scenario.nonCcWriteOffs3Years}
                  onChange={(e) => handleNumberChange('nonCcWriteOffs3Years', parseInt(e.target.value) || 0)}
                  className="mt-1"
                />
              </div>
              
              {/* Defaults */}
              <div>
                <Label htmlFor="activeDefaultsCount">Active Defaults (0 DPD)</Label>
                <Input
                  id="activeDefaultsCount"
                  type="number"
                  min="0"
                  max="10"
                  value={scenario.activeDefaultsCount}
                  onChange={(e) => handleNumberChange('activeDefaultsCount', parseInt(e.target.value) || 0)}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="closedDefaultsCount">Closed Defaults (0 DPD)</Label>
                <Input
                  id="closedDefaultsCount"
                  type="number"
                  min="0"
                  max="10"
                  value={scenario.closedDefaultsCount}
                  onChange={(e) => handleNumberChange('closedDefaultsCount', parseInt(e.target.value) || 0)}
                  className="mt-1"
                />
              </div>
              
              {/* Loan Accounts */}
              <div>
                <Label htmlFor="openLoanAccounts">Open Loan Accounts</Label>
                <Input
                  id="openLoanAccounts"
                  type="number"
                  min="0"
                  max="15"
                  value={scenario.openLoanAccounts}
                  onChange={(e) => handleNumberChange('openLoanAccounts', parseInt(e.target.value) || 0)}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="closedLoanAccounts">Closed Loan Accounts</Label>
                <Input
                  id="closedLoanAccounts"
                  type="number"
                  min="0"
                  max="20"
                  value={scenario.closedLoanAccounts}
                  onChange={(e) => handleNumberChange('closedLoanAccounts', parseInt(e.target.value) || 0)}
                  className="mt-1"
                />
              </div>
            </div>
            
            {/* EMI Bounces */}
            <div className="space-y-3">
              <Label>EMI Bounce History</Label>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <Label htmlFor="emiBounce0" className="text-xs">Month 0 (Current)</Label>
                  <Select 
                    value={scenario.emiBounce0.toString()} 
                    onValueChange={(value) => handleNumberChange('emiBounce0', parseInt(value))}
                  >
                    <SelectTrigger id="emiBounce0">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0">No bounce</SelectItem>
                      <SelectItem value="1">1 bounce</SelectItem>
                      <SelectItem value="2">2 bounces</SelectItem>
                      <SelectItem value="3">3+ bounces</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="emiBounce1" className="text-xs">Month -1</Label>
                  <Select 
                    value={scenario.emiBounce1.toString()} 
                    onValueChange={(value) => handleNumberChange('emiBounce1', parseInt(value))}
                  >
                    <SelectTrigger id="emiBounce1">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0">No bounce</SelectItem>
                      <SelectItem value="1">1 bounce</SelectItem>
                      <SelectItem value="2">2 bounces</SelectItem>
                      <SelectItem value="3">3+ bounces</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="emiBounce2" className="text-xs">Month -2</Label>
                  <Select 
                    value={scenario.emiBounce2.toString()} 
                    onValueChange={(value) => handleNumberChange('emiBounce2', parseInt(value))}
                  >
                    <SelectTrigger id="emiBounce2">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0">No bounce</SelectItem>
                      <SelectItem value="1">1 bounce</SelectItem>
                      <SelectItem value="2">2 bounces</SelectItem>
                      <SelectItem value="3">3+ bounces</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="emiBounce3" className="text-xs">Month -3</Label>
                  <Select 
                    value={scenario.emiBounce3.toString()} 
                    onValueChange={(value) => handleNumberChange('emiBounce3', parseInt(value))}
                  >
                    <SelectTrigger id="emiBounce3">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0">No bounce</SelectItem>
                      <SelectItem value="1">1 bounce</SelectItem>
                      <SelectItem value="2">2 bounces</SelectItem>
                      <SelectItem value="3">3+ bounces</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default AdvancedControls;
