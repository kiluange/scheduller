import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { Card, CardTitle, CardText } from "reactstrap";

class Quantum extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col sm="6">
            <br />
            <Card body>
              <Form>
                <FormGroup>
                  <Input
                    type="number"
                    name="email"
                    id="exampleEmail"
                    placeholder="Quantum"
                  />
                  <br />
                  <Input
                    type="number"
                    name="email"
                    id="exampleEmail"
                    placeholder="Over head"
                  />
                </FormGroup>
              </Form>
            </Card>
            <br />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Quantum;
