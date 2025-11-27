import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import styled from "styled-components";

const Container = styled.div`
  .table {
    width: 100%;
    .header {
      background: var(--sub);
    }
    tbody tr:nth-child(odd) {
      background: var(--light);
    }
    .cell {
      text-align: center;
      padding: 10px;
      border: 1px solid var(--border);
    }
  }
`;

interface Props<T> {
  data: T[];
  columns: any[];
}

const PaymentTable = <T extends object>({ data, columns }: Props<T>) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <Container>
      <table className="table">
        <thead>
          {table.getHeaderGroups().map((group) => (
            <tr key={group.id} className="header">
              {group.headers.map((header) => (
                <th key={header.id}>
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="cell">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
};

export default PaymentTable;
