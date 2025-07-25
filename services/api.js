import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://gowothcbfczxxglaalqi.supabase.co/rest/v1/',
  headers: {
    apikey:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdvd290aGNiZmN6eHhnbGFhbHFpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEyODk2NzQsImV4cCI6MjA2Njg2NTY3NH0.ugjRxFr2z6bAFR-kLf0ek9aAUYPpZHLgL0xColsow6E',
    authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdvd290aGNiZmN6eHhnbGFhbHFpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEyODk2NzQsImV4cCI6MjA2Njg2NTY3NH0.ugjRxFr2z6bAFR-kLf0ek9aAUYPpZHLgL0xColsow6E',
  },
});
