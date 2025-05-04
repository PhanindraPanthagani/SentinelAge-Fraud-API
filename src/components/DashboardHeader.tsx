
import React from 'react';
import { ArrowDown, ArrowUp } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Metric {
  title: string;
  value: string;
  change: number;
  trend: 'up' | 'down';
}

const metrics: Metric[] = [
  {
    title: 'Total Transactions',
    value: '857',
    change: 12.5,
    trend: 'up',
  },
  {
    title: 'Fraud Rate',
    value: '2.8%',
    change: 0.5,
    trend: 'down',
  },
  {
    title: 'High-Risk Transactions',
    value: '43',
    change: 8.3,
    trend: 'up',
  },
];

const DashboardHeader: React.FC = () => {
  return (
    <div>
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Fraud Insight Guardian</h1>
        <p className="text-muted-foreground">
          Monitor transactions and detect potential fraud with our advanced risk scoring system.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {metrics.map((metric) => (
          <div 
            key={metric.title} 
            className="rounded-lg border p-4 hover:shadow-md transition-all"
          >
            <p className="text-sm font-medium text-muted-foreground">{metric.title}</p>
            <div className="flex items-center mt-1">
              <p className="text-2xl font-bold">{metric.value}</p>
              <div className={cn(
                "flex items-center ml-2 px-1.5 py-0.5 rounded text-xs font-medium",
                metric.trend === 'up' 
                  ? metric.title.includes('Fraud') || metric.title.includes('Risk')
                    ? "bg-red-100 text-red-800"
                    : "bg-green-100 text-green-800"
                  : metric.title.includes('Fraud') || metric.title.includes('Risk')
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
              )}>
                {metric.trend === 'up' ? <ArrowUp className="h-3 w-3 mr-1" /> : <ArrowDown className="h-3 w-3 mr-1" />}
                {metric.change}%
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardHeader;
