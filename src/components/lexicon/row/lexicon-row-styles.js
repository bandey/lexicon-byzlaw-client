import styled from 'styled-components';

const Row = styled.div`
  display: flex;
  padding-left: 1.25rem;
  justify-content: space-between;
  align-items: center;
  ${props => (props.noHover ? null : `
    :hover { background-color: #e9ecef; }
  `)}
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

const ColChapter = styled.div`
  width: 78%;
  flex-grow: 1;
  text-align: left;
`;

export {Row, ColWord, ColCount, ColChapter};
