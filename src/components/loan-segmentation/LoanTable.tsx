
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Loan } from "@/data/mockData";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface LoanTableProps {
  loans: Loan[];
  filters: {
    creditScoreMin: number;
    creditScoreMax: number;
    dpdMax: number;
    abbMin: number;
  };
}

const LoanTable = ({ loans, filters }: LoanTableProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedRow, setExpandedRow] = useState<string | null>(null);

  const filteredLoans = loans.filter((loan) => {
    return (
      (loan.borrowerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        loan.id.toLowerCase().includes(searchTerm.toLowerCase())) &&
      loan.creditScore >= filters.creditScoreMin &&
      loan.creditScore <= filters.creditScoreMax &&
      loan.dpd <= filters.dpdMax &&
      loan.abb >= filters.abbMin
    );
  });

  const getCreditScoreColor = (score: number) => {
    if (score >= 750) return "text-green-600";
    if (score >= 700) return "text-green-500";
    if (score >= 650) return "text-yellow-600";
    if (score >= 600) return "text-yellow-500";
    if (score >= 550) return "text-orange-500";
    return "text-red-500";
  };

  const toggleRowExpansion = (id: string) => {
    if (expandedRow === id) {
      setExpandedRow(null);
    } else {
      setExpandedRow(id);
    }
  };

  return (
    <Card className="shadow-card animate-fade-in">
      <CardHeader className="pb-3">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <CardTitle>Loan Portfolio</CardTitle>
          <div className="relative w-full md:w-72">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search by ID or name..."
              className="w-full pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border">
          <Table>
            <TableHeader className="sticky top-0 bg-card">
              <TableRow>
                <TableHead className="w-[100px]">Loan ID</TableHead>
                <TableHead>Borrower Name</TableHead>
                <TableHead>Credit Score</TableHead>
                <TableHead>DPD</TableHead>
                <TableHead>ABB</TableHead>
                <TableHead>EIR</TableHead>
                <TableHead>Risk Tag</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredLoans.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={7} className="text-center py-4">
                    No loans found matching your criteria
                  </TableCell>
                </TableRow>
              ) : (
                filteredLoans.map((loan) => (
                  <>
                    <TableRow 
                      key={loan.id} 
                      className="cursor-pointer hover:bg-secondary/50"
                      onClick={() => toggleRowExpansion(loan.id)}
                    >
                      <TableCell className="font-medium">{loan.id}</TableCell>
                      <TableCell>{loan.borrowerName}</TableCell>
                      <TableCell className={cn("font-medium", getCreditScoreColor(loan.creditScore))}>
                        {loan.creditScore}
                      </TableCell>
                      <TableCell>{loan.dpd}</TableCell>
                      <TableCell>${loan.abb.toLocaleString()}</TableCell>
                      <TableCell>{(loan.eir * 100).toFixed(0)}%</TableCell>
                      <TableCell>
                        <Badge variant={loan.status === "Good" ? "outline" : "destructive"}>
                          {loan.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                    {expandedRow === loan.id && (
                      <TableRow className="bg-muted/50">
                        <TableCell colSpan={7} className="p-4">
                          <div className="rounded-lg bg-card p-4 shadow-sm">
                            <h3 className="font-semibold mb-2">Borrower Details</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div>
                                <p className="text-sm text-muted-foreground mb-1">Risk Assessment</p>
                                <div className="flex items-center gap-4 mb-2">
                                  <div className="text-sm">
                                    <span className="text-muted-foreground">Default Probability:</span> {loan.creditScore < 650 ? "High" : loan.creditScore < 725 ? "Medium" : "Low"}
                                  </div>
                                  <div className="text-sm">
                                    <span className="text-muted-foreground">Risk Score:</span> {Math.round(100 - (loan.creditScore - 500) / 3)}%
                                  </div>
                                </div>
                              </div>
                              <div>
                                <p className="text-sm text-muted-foreground mb-1">Payment History</p>
                                <div className="text-sm">
                                  <span className="text-muted-foreground">Last Payment:</span> {new Date().toLocaleDateString()}
                                </div>
                              </div>
                            </div>
                          </div>
                        </TableCell>
                      </TableRow>
                    )}
                  </>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};

export default LoanTable;
