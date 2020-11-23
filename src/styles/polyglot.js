import styled from 'styled-components';

const fontPolyglot = `
  font-family: PolyglotUnited, "Times New Roman", Times, serif;
  font-size: larger;
`;

const SpanPolyglot = styled.span`
  ${fontPolyglot}
  ${props => (props.wordWrap ? 'word-wrap: anywhere;': '')}
`;

export {fontPolyglot, SpanPolyglot};
