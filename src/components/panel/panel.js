import React from 'react';
import styled from 'styled-components';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';

function CardWrapper({squareCorner, className, children, ...props}) {
  return (
    <Card className={className} {...props}>{children}</Card>
  );
};

const Panel = styled(CardWrapper)`
  margin-bottom: 1rem;
  ${props => (props.squareCorner ? 'border-bottom-right-radius: 0;' : null)}
`;

function PanelHeader({bg, children, className, ...props}) {
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
    <Card.Header className={`${bgClass} ${className}`} {...props}>
      {children}
    </Card.Header>
  );
};

const PanelBody = Card.Body;

function BriefPanel({children, className, ...props}) {
  return (
    <Alert variant="primary" className={className} {...props}>
      {children}
    </Alert>
  );
};

export {Panel, PanelHeader, PanelBody, BriefPanel};
