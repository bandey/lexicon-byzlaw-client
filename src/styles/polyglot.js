import styled from 'styled-components';

const fontPolyglot = `
  font-family: PolyglotUnited, "Times New Roman", Times, serif;
  font-size: larger;
`;

const SpanPolyglot = styled.span`
  ${fontPolyglot}
  ${props => (props.wordWrap ? 'word-wrap: anywhere;': '')}
  ${props => (props.whiteSpace ? 'white-space: pre-wrap;': '')}
`;

export {fontPolyglot, SpanPolyglot};
