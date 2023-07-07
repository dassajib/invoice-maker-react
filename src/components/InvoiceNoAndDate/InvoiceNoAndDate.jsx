import React, { useState } from "react";
import { Form, Row, Col } from "react-bootstrap";

const InvoiceNoAndDate = () => {
  const [date, setDate] = useState("");

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  return (
    <div>
      <h1>INVOICE</h1>
      <Form className="mb-4">
        <Form.Group as={Row} controlId="numberField" className="mb-4">
          <Form.Label column sm={3}>
            Invoice No :
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              className="border-0"
              placeholder="Put Your Invoice No"
              type="text"
              min={0}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="datepicker">
          <Form.Label column sm={3}>
            Date :
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              className="border-0"
              type="date"
              value={date}
              onChange={handleDateChange}
            />
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
};

export default InvoiceNoAndDate;