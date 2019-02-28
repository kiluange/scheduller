import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { Card, CardTitle, CardText } from "reactstrap";

class Process extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  addProcess = e => {
    e.preventDefault();
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    const x = 1;
    return (
      <Container>
        <Row>
          <Col sm="6">
            <Card body>
              <CardTitle>Processo {this.state.count}</CardTitle>
              <Form>
                <FormGroup>
                  <Input
                    type="number"
                    name="incoming"
                    id="exampleEmail"
                    placeholder="T. chegada"
                  />
                  <br />
                  <Input
                    type="number"
                    name="priority"
                    id="exampleEmail"
                    placeholder="Prioridade"
                  />
                  <br />
                  <Input
                    type="number"
                    name="dl"
                    id="exampleEmail"
                    placeholder="Dead line"
                  />
                  <br />
                  <Input
                    type="number"
                    name="size"
                    id="exampleEmail"
                    placeholder="Tamanho"
                  />
                </FormGroup>
              </Form>
              <Button onClick={this.addProcess} outline color="primary">
                Adicionar
              </Button>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Process;
