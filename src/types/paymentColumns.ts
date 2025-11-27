import { createColumnHelper } from "@tanstack/react-table";
import type { Payment } from "../types/payment";

const columnHelper = createColumnHelper<Payment>();

export const paymentColumns = [
  columnHelper.accessor("mchtCode", {
    header: "가맹점코드",
  }),
  columnHelper.accessor("paymentCode", {
    header: "결제코드",
  }),
  columnHelper.accessor("paymentAt", {
    header: "결제일시",
    cell: (info) => new Date(info.getValue()).toLocaleString("ko-KR"),
  }),
  columnHelper.accessor("status", {
    header: "결제상태",
  }),
  columnHelper.accessor("amount", {
    header: "결제액",
    cell: (info) => `${Number(info.getValue()).toLocaleString()} `,
  }),
  columnHelper.accessor("payType", {
    header: "결제수단",
  }),
];
