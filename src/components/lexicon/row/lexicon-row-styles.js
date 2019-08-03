import styled from 'styled-components';

const Row = styled.div`
  display: flex;
  padding-left: 1.25rem;
  justify-content: space-between;
  align-items: center;

  :hover {
    background-color: #e9ecef;
  }
`;

const ColWord = styled.div`
  width: 22%;
  flex-grow: 1;
  text-align: left;
`;

const ColCount = styled.div`
  width: 22%;
  text-align: center;
`;

export {Row, ColWord, ColCount};
