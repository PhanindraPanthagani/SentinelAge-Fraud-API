
import React from 'react';
import { transactions, merchantFraudRates } from '@/lib/mockData';
import DashboardHeader from '@/components/DashboardHeader';
import ScoreCard from '@/components/ScoreCard';
import TransactionTable from '@/components/TransactionTable';
import FraudRateChart from '@/components/FraudRateChart';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-8 px-4">
        <DashboardHeader />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <ScoreCard 
            title="Elder Fraud Score" 
            score={600}
            threshold={600}
            description="Evaluates the risk of financial exploitation targeting elderly customers. Scores above 600 indicate high risk."
          />
          
          <ScoreCard 
            title="Account Takeover Score" 
            score={750}
            threshold={750}
            description="Measures the risk of unauthorized access to customer accounts. Scores above 750 indicate high risk."
          />
        </div>
        
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">Recent Transactions</h2>
          <TransactionTable transactions={transactions} />
        </div>
        
        <div className="mt-8">
          <FraudRateChart merchantFraudRates={merchantFraudRates} />
        </div>
        
        <div className="text-center text-sm text-muted-foreground mt-10">
          Fraud Insight Guardian © {new Date().getFullYear()} | Protecting your transactions with advanced AI detection
        </div>
      </div>
    </div>
  );
};

export default Index;
