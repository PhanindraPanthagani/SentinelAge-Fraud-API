
import React, { useState } from 'react';
import { 
  ResponsiveContainer, 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend 
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { MerchantFraudRate } from '@/lib/types';

interface FraudRateChartProps {
  merchantFraudRates: MerchantFraudRate[];
}

const COLORS = [
  "#2563eb", // blue-600
  "#9333ea", // purple-600
  "#10b981", // emerald-500
  "#f59e0b", // amber-500
  "#ef4444", // red-500
];

const FraudRateChart: React.FC<FraudRateChartProps> = ({ merchantFraudRates }) => {
  // Get unique merchant names
  const merchants = [...new Set(merchantFraudRates.map(rate => rate.merchantName))];
  
  // State for selected merchants
  const [selectedMerchants, setSelectedMerchants] = useState<string[]>(merchants.slice(0, 3));
  
  // Filter data by selected merchants
  const filteredData = merchantFraudRates.filter(
    rate => selectedMerchants.includes(rate.merchantName)
  );
  
  // Transform data for chart
  const months = ["Jan", "Feb", "Mar", "Apr", "May"];
  const chartData = months.map(month => {
    const dataPoint: any = { month };
    merchants.forEach(merchant => {
      if (selectedMerchants.includes(merchant)) {
        const rateData = merchantFraudRates.find(
          r => r.merchantName === merchant && r.month === month
        );
        if (rateData) {
          dataPoint[rateData.merchantName] = rateData.fraudRate;
        }
      }
    });
    return dataPoint;
  });
  
  const handleMerchantToggle = (merchant: string) => {
    if (selectedMerchants.includes(merchant)) {
      setSelectedMerchants(selectedMerchants.filter(m => m !== merchant));
    } else {
      setSelectedMerchants([...selectedMerchants, merchant]);
    }
  };
  
  return (
    <Card className="shadow-md">
      <CardHeader className="pb-2">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <CardTitle>Fraud Rate by Merchant (Month over Month)</CardTitle>
          <div className="flex flex-wrap gap-2">
            {merchants.map((merchant, index) => (
              <button
                key={merchant}
                className={`px-2 py-1 text-xs rounded-full border transition-colors ${
                  selectedMerchants.includes(merchant)
                    ? `bg-${COLORS[index % COLORS.length].replace('#', '')} text-white`
                    : 'bg-transparent text-gray-500'
                }`}
                style={selectedMerchants.includes(merchant) ? { backgroundColor: COLORS[index % COLORS.length] } : {}}
                onClick={() => handleMerchantToggle(merchant)}
              >
                {merchant}
              </button>
            ))}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
              <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
              <XAxis dataKey="month" />
              <YAxis tickFormatter={value => `${value}%`} />
              <Tooltip formatter={(value) => [`${value}%`, 'Fraud Rate']} />
              <Legend />
              {merchants.filter(merchant => selectedMerchants.includes(merchant)).map((merchant, index) => (
                <Line
                  key={merchant}
                  type="monotone"
                  dataKey={merchant}
                  stroke={COLORS[index % COLORS.length]}
                  activeDot={{ r: 8 }}
                  strokeWidth={2}
                />
              ))}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default FraudRateChart;
