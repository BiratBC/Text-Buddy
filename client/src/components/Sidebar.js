import React, { useState } from "react";
import { Accordion, Card, ListGroup, Badge } from "react-bootstrap";
import { 
  ChevronRight, 
  ChevronDown, 
  BarChart, 
  Cart, 
  Inbox, 
  PersonCircle, 
  Gear, 
  Power 
} from "react-bootstrap-icons";

export default function Sidebar() {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <Card className="sidebar vh-100 position-fixed bg-light shadow" id="sidebar">
      <Card.Body>
        <Card.Title className="mb-4">Sidebar</Card.Title>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="1">
            <Accordion.Header onClick={() => handleOpen(1)}>
              <BarChart className="me-2" />
              Dashboard
              <span className="ms-auto">
                {open === 1 ? <ChevronDown /> : <ChevronRight />}
              </span>
            </Accordion.Header>
            <Accordion.Body>
              <ListGroup variant="flush">
                <ListGroup.Item className="d-flex align-items-center">
                  <ChevronRight className="me-2" />
                  Analytics
                </ListGroup.Item>
                <ListGroup.Item className="d-flex align-items-center">
                  <ChevronRight className="me-2" />
                  Reporting
                </ListGroup.Item>
                <ListGroup.Item className="d-flex align-items-center">
                  <ChevronRight className="me-2" />
                  Projects
                </ListGroup.Item>
              </ListGroup>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header onClick={() => handleOpen(2)}>
              <Cart className="me-2" />
              E-Commerce
              <span className="ms-auto">
                {open === 2 ? <ChevronDown /> : <ChevronRight />}
              </span>
            </Accordion.Header>
            <Accordion.Body>
              <ListGroup variant="flush">
                <ListGroup.Item className="d-flex align-items-center">
                  <ChevronRight className="me-2" />
                  Orders
                </ListGroup.Item>
                <ListGroup.Item className="d-flex align-items-center">
                  <ChevronRight className="me-2" />
                  Products
                </ListGroup.Item>
              </ListGroup>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        <ListGroup variant="flush" className="mt-3">
          <ListGroup.Item className="d-flex align-items-center">
            <Inbox className="me-2" />
            Inbox
            <Badge bg="secondary" className="ms-auto">14</Badge>
          </ListGroup.Item>
          <ListGroup.Item className="d-flex align-items-center">
            <PersonCircle className="me-2" />
            Profile
          </ListGroup.Item>
          <ListGroup.Item className="d-flex align-items-center">
            <Gear className="me-2" />
            Settings
          </ListGroup.Item>
          <ListGroup.Item className="d-flex align-items-center">
            <Power className="me-2" />
            Log Out
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
}
