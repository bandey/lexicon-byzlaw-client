import styled from 'styled-components';

const fontPolyglotSmall = `
  font-family: PolyglotUnited, "Times New Roman", Times, serif;
`;

const fontPolyglot = `
  ${fontPolyglotSmall}
  font-size: larger;
`;

const SpanPolyglotSmall = styled.span`
  ${fontPolyglotSmall}
`;

const SpanPolyglot = styled.span`
  ${fontPolyglot}
  ${props => (props.wordWrap ? 'word-wrap: anywhere;': '')}
  ${props => (props.whiteSpace ? 'white-space: pre-wrap;': '')}
  ${props => (props.marked ? 'color: #E00000;': '')}
`;

export {fontPolyglot, SpanPolyglot, SpanPolyglotSmall};
