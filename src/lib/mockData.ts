
import { Transaction, MerchantFraudRate } from './types';

export const transactions: Transaction[] = [
  {
    id: "t1",
    userId: "u1",
    userName: "John Smith",
    merchantId: "m1",
    merchantName: "Amazon",
    amount: 129.99,
    date: "2024-05-01",
    elderFraudScore: 580,
    accountTakeoverScore: 320
  },
  {
    id: "t2",
    userId: "u2",
    userName: "Maria Garcia",
    merchantId: "m2",
    merchantName: "PayPal",
    amount: 499.99,
    date: "2024-05-02",
    elderFraudScore: 720,
    accountTakeoverScore: 840
  },
  {
    id: "t3",
    userId: "u3",
    userName: "Robert Chen",
    merchantId: "m1",
    merchantName: "Amazon",
    amount: 59.99,
    date: "2024-05-02",
    elderFraudScore: 320,
    accountTakeoverScore: 290
  },
  {
    id: "t4",
    userId: "u4",
    userName: "Sarah Johnson",
    merchantId: "m3",
    merchantName: "Apple",
    amount: 1299.99,
    date: "2024-05-03",
    elderFraudScore: 650,
    accountTakeoverScore: 780
  },
  {
    id: "t5",
    userId: "u5",
    userName: "David Wilson",
    merchantId: "m4",
    merchantName: "Walmart",
    amount: 87.50,
    date: "2024-05-03",
    elderFraudScore: 520,
    accountTakeoverScore: 610
  },
  {
    id: "t6",
    userId: "u6",
    userName: "Emily Davis",
    merchantId: "m2",
    merchantName: "PayPal",
    amount: 249.99,
    date: "2024-05-04",
    elderFraudScore: 640,
    accountTakeoverScore: 490
  },
  {
    id: "t7",
    userId: "u7",
    userName: "Michael Brown",
    merchantId: "m5",
    merchantName: "Target",
    amount: 175.45,
    date: "2024-05-04",
    elderFraudScore: 380,
    accountTakeoverScore: 420
  },
  {
    id: "t8",
    userId: "u8",
    userName: "Lisa Martinez",
    merchantId: "m3",
    merchantName: "Apple",
    amount: 2499.99,
    date: "2024-05-05",
    elderFraudScore: 750,
    accountTakeoverScore: 820
  },
];

export const merchantFraudRates: MerchantFraudRate[] = [
  { merchantName: "Amazon", month: "Jan", fraudRate: 2.4 },
  { merchantName: "Amazon", month: "Feb", fraudRate: 2.1 },
  { merchantName: "Amazon", month: "Mar", fraudRate: 3.2 },
  { merchantName: "Amazon", month: "Apr", fraudRate: 3.7 },
  { merchantName: "Amazon", month: "May", fraudRate: 2.8 },
  
  { merchantName: "PayPal", month: "Jan", fraudRate: 1.2 },
  { merchantName: "PayPal", month: "Feb", fraudRate: 1.8 },
  { merchantName: "PayPal", month: "Mar", fraudRate: 4.1 },
  { merchantName: "PayPal", month: "Apr", fraudRate: 3.9 },
  { merchantName: "PayPal", month: "May", fraudRate: 3.2 },
  
  { merchantName: "Apple", month: "Jan", fraudRate: 0.8 },
  { merchantName: "Apple", month: "Feb", fraudRate: 1.0 },
  { merchantName: "Apple", month: "Mar", fraudRate: 1.2 },
  { merchantName: "Apple", month: "Apr", fraudRate: 1.9 },
  { merchantName: "Apple", month: "May", fraudRate: 2.3 },
  
  { merchantName: "Walmart", month: "Jan", fraudRate: 3.1 },
  { merchantName: "Walmart", month: "Feb", fraudRate: 2.7 },
  { merchantName: "Walmart", month: "Mar", fraudRate: 2.4 },
  { merchantName: "Walmart", month: "Apr", fraudRate: 2.9 },
  { merchantName: "Walmart", month: "May", fraudRate: 3.5 },
  
  { merchantName: "Target", month: "Jan", fraudRate: 2.5 },
  { merchantName: "Target", month: "Feb", fraudRate: 2.2 },
  { merchantName: "Target", month: "Mar", fraudRate: 2.0 },
  { merchantName: "Target", month: "Apr", fraudRate: 2.4 },
  { merchantName: "Target", month: "May", fraudRate: 2.7 },
];
