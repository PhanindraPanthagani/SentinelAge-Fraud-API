
export interface Transaction {
  id: string;
  userId: string;
  userName: string;
  merchantId: string;
  merchantName: string;
  amount: number;
  date: string;
  elderFraudScore: number;
  accountTakeoverScore: number;
}

export interface MerchantFraudRate {
  merchantName: string;
  month: string;
  fraudRate: number;
}
