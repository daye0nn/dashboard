import { useQuery } from "@tanstack/react-query";
import { api } from "../client";
import type { Payment } from "../../types/payment";

interface Response {
  status: number;
  message: string;
  data: Payment[];
}

async function fetchPayments(): Promise<Payment[]> {
  const res = await api.get<Response>("/payments/list");
  return res.data.data;
}

export function usePayments() {
  return useQuery({
    queryKey: ["payments"],
    queryFn: fetchPayments,
  });
}
