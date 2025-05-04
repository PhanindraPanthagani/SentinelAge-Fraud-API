
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import ScoreCard from '@/components/ScoreCard';

const Index = () => {
  const [userName, setUserName] = useState('');
  const [merchantName, setMerchantName] = useState('');
  const [amount, setAmount] = useState('');
  const [deviceLocation, setDeviceLocation] = useState('');
  const [deviceIp, setDeviceIp] = useState('');
  const [customerAge, setCustomerAge] = useState('');
  const [paymentMode, setPaymentMode] = useState('');
  const [merchantCategoryCode, setMerchantCategoryCode] = useState('');

  const [elderFraudScore, setElderFraudScore] = useState<number | null>(null);
  const [accountTakeoverScore, setAccountTakeoverScore] = useState<number | null>(null);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mock API response - in a real app, this would call an API
    const mockElderScore = Math.floor(Math.random() * 401) + 400; // 400-800 range
    const mockAccountScore = Math.floor(Math.random() * 401) + 500; // 500-900 range

    setElderFraudScore(mockElderScore);
    setAccountTakeoverScore(mockAccountScore);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-col gap-2 mb-8">
          <h1 className="text-3xl font-bold tracking-tight">SentinelAge Fraud API</h1>
          <p className="text-muted-foreground">
            Detect potential fraud with our advanced risk scoring system.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Input Section */}
          <Card>
            <CardHeader>
              <CardTitle>Input Transaction Details</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Required fields */}
                <div className="space-y-4">
                  <h3 className="font-medium">Required Fields</h3>
                  
                  <div className="space-y-2">
                    <Label htmlFor="userName">User Name</Label>
                    <Input
                      id="userName"
                      placeholder="Enter user name"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="merchantName">Merchant Name</Label>
                    <Input
                      id="merchantName"
                      placeholder="Enter merchant name"
                      value={merchantName}
                      onChange={(e) => setMerchantName(e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="amount">Transaction Amount ($)</Label>
                    <Input
                      id="amount"
                      type="number"
                      min="0.01"
                      step="0.01"
                      placeholder="0.00"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="deviceLocation">Device Location (GPS coordinates)</Label>
                    <Input
                      id="deviceLocation"
                      placeholder="e.g. 37.7749,-122.4194"
                      value={deviceLocation}
                      onChange={(e) => setDeviceLocation(e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="deviceIp">Device IP</Label>
                    <Input
                      id="deviceIp"
                      placeholder="e.g. 192.168.1.1"
                      value={deviceIp}
                      onChange={(e) => setDeviceIp(e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="customerAge">Age of Customer</Label>
                    <Input
                      id="customerAge"
                      type="number"
                      min="0"
                      placeholder="Enter age"
                      value={customerAge}
                      onChange={(e) => setCustomerAge(e.target.value)}
                      required
                    />
                  </div>
                </div>

                {/* Optional fields */}
                <div className="space-y-4 pt-2 border-t">
                  <h3 className="font-medium">Optional Fields</h3>
                  
                  <div className="space-y-2">
                    <Label htmlFor="paymentMode">Payment Mode</Label>
                    <Select value={paymentMode} onValueChange={setPaymentMode}>
                      <SelectTrigger id="paymentMode">
                        <SelectValue placeholder="Select payment mode" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="virtual">Virtual</SelectItem>
                        <SelectItem value="physical">Physical</SelectItem>
                        <SelectItem value="digital">Digital</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="merchantCategoryCode">Merchant Category Code</Label>
                    <Input
                      id="merchantCategoryCode"
                      placeholder="e.g. 5411"
                      value={merchantCategoryCode}
                      onChange={(e) => setMerchantCategoryCode(e.target.value)}
                    />
                  </div>
                </div>

                <Button type="submit" className="w-full mt-6">Analyze Transaction</Button>
              </form>
            </CardContent>
          </Card>

          {/* Output Section */}
          <div className="space-y-6 flex flex-col justify-center">
            {elderFraudScore !== null && accountTakeoverScore !== null ? (
              <>
                <div className="flex items-center justify-center mb-4">
                  <ArrowDown className="h-8 w-8 text-muted-foreground" />
                </div>
                
                <ScoreCard 
                  title="Elder Fraud Score" 
                  score={elderFraudScore}
                  threshold={600}
                  description="Evaluates the risk of financial exploitation targeting elderly customers. Scores above 600 indicate high risk."
                />
                
                <ScoreCard 
                  title="Account Takeover Score" 
                  score={accountTakeoverScore}
                  threshold={750}
                  description="Measures the risk of unauthorized access to customer accounts. Scores above 750 indicate high risk."
                />
              </>
            ) : (
              <div className="flex items-center justify-center h-full">
                <p className="text-muted-foreground text-center">
                  Enter transaction details and click "Analyze Transaction" to see fraud risk scores.
                </p>
              </div>
            )}
          </div>
        </div>
        
        <div className="text-center text-sm text-muted-foreground mt-10">
          Fraud Insight Guardian © {new Date().getFullYear()} | Protecting your transactions with advanced AI detection
        </div>
      </div>
    </div>
  );
};

export default Index;
