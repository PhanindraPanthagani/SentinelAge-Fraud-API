
import React, { useState } from 'react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Button } from '@/components/ui/button';
import { Transaction } from '@/lib/types';
import { cn } from '@/lib/utils';

interface TransactionTableProps {
  transactions: Transaction[];
}

const TransactionTable: React.FC<TransactionTableProps> = ({ transactions }) => {
  const [page, setPage] = useState(1);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(transactions.length / itemsPerPage);
  
  const startIndex = (page - 1) * itemsPerPage;
  const visibleTransactions = transactions.slice(startIndex, startIndex + itemsPerPage);
  
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };
  
  const getRiskClass = (score: number, threshold: number) => {
    if (score > threshold) {
      return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400";
    }
    return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400";
  };
  
  const getRiskLabel = (score: number, threshold: number) => {
    return score > threshold ? "High Risk" : "Normal";
  };
  
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>User</TableHead>
            <TableHead>Merchant</TableHead>
            <TableHead className="hidden md:table-cell">Date</TableHead>
            <TableHead className="text-right">Amount</TableHead>
            <TableHead className="hidden md:table-cell">Elder Fraud</TableHead>
            <TableHead className="hidden md:table-cell">Account Takeover</TableHead>
            <TableHead className="md:hidden">Risk</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {visibleTransactions.map((transaction) => (
            <TableRow key={transaction.id}>
              <TableCell className="font-medium">{transaction.userName}</TableCell>
              <TableCell>{transaction.merchantName}</TableCell>
              <TableCell className="hidden md:table-cell">
                {new Date(transaction.date).toLocaleDateString()}
              </TableCell>
              <TableCell className="text-right">{formatCurrency(transaction.amount)}</TableCell>
              <TableCell className="hidden md:table-cell">
                <span className={cn(
                  "px-2 py-1 rounded-md text-xs font-medium",
                  getRiskClass(transaction.elderFraudScore, 600)
                )}>
                  {transaction.elderFraudScore} ({getRiskLabel(transaction.elderFraudScore, 600)})
                </span>
              </TableCell>
              <TableCell className="hidden md:table-cell">
                <span className={cn(
                  "px-2 py-1 rounded-md text-xs font-medium",
                  getRiskClass(transaction.accountTakeoverScore, 750)
                )}>
                  {transaction.accountTakeoverScore} ({getRiskLabel(transaction.accountTakeoverScore, 750)})
                </span>
              </TableCell>
              <TableCell className="md:hidden">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm">View</Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Risk Scores</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      Elder Fraud: {transaction.elderFraudScore}
                      <span className={cn(
                        "ml-2 px-2 py-0.5 rounded-md text-xs font-medium",
                        getRiskClass(transaction.elderFraudScore, 600)
                      )}>
                        {getRiskLabel(transaction.elderFraudScore, 600)}
                      </span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      Account Takeover: {transaction.accountTakeoverScore}
                      <span className={cn(
                        "ml-2 px-2 py-0.5 rounded-md text-xs font-medium",
                        getRiskClass(transaction.accountTakeoverScore, 750)
                      )}>
                        {getRiskLabel(transaction.accountTakeoverScore, 750)}
                      </span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {totalPages > 1 && (
        <div className="flex items-center justify-end px-2 py-4 border-t">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious 
                  onClick={() => setPage(Math.max(1, page - 1))}
                  className={page === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                />
              </PaginationItem>
              {Array.from({length: Math.min(totalPages, 3)}, (_, i) => (
                <PaginationItem key={i}>
                  <PaginationLink 
                    isActive={page === i + 1}
                    onClick={() => setPage(i + 1)}
                  >
                    {i + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}
              {totalPages > 3 && <PaginationEllipsis />}
              <PaginationItem>
                <PaginationNext 
                  onClick={() => setPage(Math.min(totalPages, page + 1))}
                  className={page === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      )}
    </div>
  );
};

export default TransactionTable;
