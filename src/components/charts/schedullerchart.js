import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { Card, CardTitle, CardText } from "reactstrap";

import Fifo from '../../schedullers/fifo';

class SchedullerChart extends Component {
    x = [1,2,3];
    calc = (e) =>{
        e.preventDefault();
        const f = new Fifo(this.x);
        f.showProcess();
    }
  render() {
    return (
      <Container>
        <Row>
          <Col sm="6">
          <br/>
            <Card body>
              <CardTitle>Selecione o escalonador</CardTitle>
              <Form>
                  <FormGroup>
                    <Input type="select" name="select" id="exampleSelect">
                      <option>FSCS</option>
                      <option>SJF</option>
                      <option>RR</option>
                      <option>EDF</option>
                    </Input>
                  </FormGroup>
                </Form>
              <Button onClick={this.calc} outline color="success">Calcular</Button>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SchedullerChart;
