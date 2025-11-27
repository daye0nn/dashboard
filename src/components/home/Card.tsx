import styled from "styled-components";
import { usePayments } from "../../api/hooks/usePayments";

const Container = styled.div`
  width: 100%;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
`;

const Section = styled.div`
  width: 100%;
  height: 200px;
  border-radius: 10px;
  background: var(--light);
  border: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const Tag = styled.p`
  color: var(--grey);
`;

const Value = styled.p`
  font-size: 2rem;
  font-weight: 500;
`;

const Card = () => {
  const { data: payments, isLoading, error } = usePayments();

  if (isLoading) return <div>로딩중...</div>;
  if (error) return <div>에러 발생!</div>;

  // Amount 합산
  const totalAmount =
    payments?.reduce((acc, cur) => acc + Number(cur.amount), 0) ?? 0;

  // 결제 건수
  const totalCount = payments?.length ?? 0;
  // 실패/취소
  const failedCount =
    payments?.filter((p) => p.status !== "SUCCESS").length ?? 0;
  // 성공률
  const successRate =
    totalCount > 0
      ? Math.round(((totalCount - failedCount) / totalCount) * 100)
      : 0;

  return (
    <Container>
      <Wrapper>
        <Section>
          <Tag>총 결제금액</Tag>
          <Value>{totalAmount.toLocaleString()}원</Value>
        </Section>
        <Section>
          <Tag>총 거래건수</Tag>
          <Value>{totalCount}건</Value>
        </Section>
        <Section>
          <Tag>결제 성공률</Tag>
          <Value>{successRate}%</Value>
        </Section>
        <Section>
          <Tag>실패/취소 건수</Tag>
          <Value>{failedCount}건</Value>
        </Section>
      </Wrapper>
    </Container>
  );
};

export default Card;
