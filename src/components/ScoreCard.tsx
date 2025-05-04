
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { AlertCircle } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

interface ScoreCardProps {
  title: string;
  score: number;
  threshold: number;
  description: string;
  reasons?: string[];
}

const ScoreCard: React.FC<ScoreCardProps> = ({ title, score, threshold, description, reasons }) => {
  const isHighRisk = score > threshold;
  
  return (
    <Card className="shadow-md">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center justify-between">
          <span>{title}</span>
          <div 
            className={cn(
              "flex items-center px-2 py-1 rounded-md text-xs font-medium",
              isHighRisk 
                ? "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400" 
                : "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
            )}
          >
            {isHighRisk ? 'High Risk' : 'Normal'}
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col space-y-2">
          <div className="flex items-end justify-between">
            <span className="text-3xl font-bold">{score}</span>
            <span className="text-sm text-muted-foreground">Threshold: {threshold}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div 
              className={cn(
                "h-2.5 rounded-full",
                isHighRisk ? "bg-red-500" : "bg-green-500"
              )} 
              style={{ width: `${Math.min(score / 1000 * 100, 100)}%` }}
            />
          </div>
          <p className="text-sm text-muted-foreground mt-2">{description}</p>
          
          {isHighRisk && reasons && reasons.length > 0 && (
            <Alert variant="destructive" className="mt-2">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                <div className="mt-1">
                  <strong>Potential Fraud Indicators:</strong>
                  <ul className="list-disc pl-5 mt-1 text-sm">
                    {reasons.map((reason, index) => (
                      <li key={index}>{reason}</li>
                    ))}
                  </ul>
                </div>
              </AlertDescription>
            </Alert>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ScoreCard;
