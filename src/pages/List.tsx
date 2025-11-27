import { usePayments } from "../api/hooks/usePayments";
import styled from "styled-components";
import PaymentTable from "../components/list/PaymentTable";
import { paymentColumns } from "../types/paymentColumns";

const Container = styled.div`
  width: 100%;
  padding: 2% 4%;
`;

const Title = styled.h2`
  font-size: 2.2rem;
  margin-bottom: 20px;
`;

const List = () => {
  const { data: payments, isLoading, error } = usePayments();

  if (isLoading) return <div>로딩중...</div>;
  if (error) return <div>에러 발생!</div>;

  return (
    <Container>
      <Title>거래 내역</Title>
      {/* <table className="table">
        <thead>
          <tr className="header">
            <th>가맹점코드</th>
            <th>결제코드</th>
            <th>결제일시</th>
            <th>결제상태</th>
            <th>결제액</th>
            <th>결제수단</th>
          </tr>
        </thead>
        <tbody>
          {payments?.map((p) => (
            <tr>
              <td className="cell">{p.mchtCode}</td>
              <td className="cell">{p.paymentCode}</td>
              <td className="cell">{p.paymentAt}</td>
              <td className="cell">{p.status}</td>
              <td className="cell">{`${Number(p.amount).toLocaleString()} ${
                p.currency
              }`}</td>
              <td className="cell">{p.payType}</td>
            </tr>
          ))}
        </tbody>
      </table> */}
      <PaymentTable data={payments ?? []} columns={paymentColumns} />
    </Container>
  );
};

export default List;
