import React from 'react';
import styled from 'styled-components';
import Card from 'react-bootstrap/Card';

function CardWrapper({squareCorner, className, children, ...props}) {
  return (
    <Card className={className} {...props}>{children}</Card>
  );
};

const Panel = styled(CardWrapper)`
  margin-bottom: 1rem;
  ${props => (props.squareCorner ? 'border-bottom-right-radius: 0;' : null)}
`;

function PanelHeader({bg, children, ...props}) {
  let bgClass = '';
  switch (bg) {
    case 'primary':
      bgClass = 'bg-primary text-white';
      break;
    case 'info':
      bgClass = 'bg-info text-white';
      break;
  }
  return (
    <Card.Header className={bgClass} {...props}>{children}</Card.Header>
  );
};

const PanelBody = Card.Body;

export {Panel, PanelHeader, PanelBody};
