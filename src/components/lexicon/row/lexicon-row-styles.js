import styled from 'styled-components';

const Row = styled.div`
  display: flex;
  padding-left: .25rem;
  justify-content: space-between;
  align-items: center;
  white-space: nowrap;
  overflow: hidden;
  ${props => (props.noHover ? null : `
    :hover { background-color: #e9ecef; }
  `)}
`;

const ColWord = styled.div`
  width: 20%;
  flex-grow: 1;
  padding-left: 1rem;
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ColCount = styled.div`
  width: 20%;
  text-align: center;
`;

const ColChapter = styled.div`
  width: 80%;
  flex-grow: 1;
  padding-left: 1rem;
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export {Row, ColWord, ColCount, ColChapter};
