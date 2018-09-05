import React, { Component } from 'react';
import {
  Badge,
  Button,
  ButtonDropdown,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Fade,
  Form,
  FormGroup,
  FormText,
  FormFeedback,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Label,
  Row,
} from 'reactstrap';
class Addmodel extends Component {
  render() {
    return (
      <div className="animated fadeIn">
      <Row>
        <Col>
           <Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> List all  Model</Button>
		   <br/>
		   <br/>
         </Col>
         </Row>
          <Row>
          <Col xs="12" md="12">
            <Card>
              <CardHeader>
                <strong>Add Model Form</strong>
              </CardHeader>
              <CardBody>
                <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
                  
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Model Name</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="text-input" name="text-input" placeholder="model name" />
                      
                    </Col>
                  </FormGroup>
                 <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="multiple-select">Category</Label>
                    </Col>
                    <Col md="9">
                      <Input type="select" name="multiple-select" id="multiple-select" multiple>
                        <option value="1">Option #1</option>
                        <option value="2">Option #2</option>
                        <option value="3">Option #3</option>
                        <option value="4">Option #4</option>
                        <option value="5">Option #5</option>
                        <option value="6">Option #6</option>
                        <option value="7">Option #7</option>
                        <option value="8">Option #8</option>
                        <option value="9">Option #9</option>
                        <option value="10">Option #10</option>
                      </Input>
                    </Col>
                  </FormGroup>
				  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="multiple-select">Willingness</Label>
                    </Col>
                    <Col md="9">
                      <Input type="select" name="multiple-select" id="multiple-select" multiple>
                        <option value="1">Option #1</option>
                        <option value="2">Option #2</option>
                        <option value="3">Option #3</option>
                        <option value="4">Option #4</option>
                        <option value="5">Option #5</option>
                        <option value="6">Option #6</option>
                        <option value="7">Option #7</option>
                        <option value="8">Option #8</option>
                        <option value="9">Option #9</option>
                        <option value="10">Option #10</option>
                      </Input>
                    </Col>
                  </FormGroup>
				  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="multiple-select">Apperences</Label>
                    </Col>
                    <Col md="9">
                      <Input type="select" name="multiple-select" id="multiple-select" multiple>
                        <option value="1">Option #1</option>
                        <option value="2">Option #2</option>
                        <option value="3">Option #3</option>
                        <option value="4">Option #4</option>
                        <option value="5">Option #5</option>
                        <option value="6">Option #6</option>
                        <option value="7">Option #7</option>
                        <option value="8">Option #8</option>
                        <option value="9">Option #9</option>
                        <option value="10">Option #10</option>
                      </Input>
                    </Col>
                  </FormGroup>
				    <FormGroup row>
				  
                    <Col md="3">
                      <Label htmlFor="password-input">UserName/email</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="password-input" name="password-input" placeholder="Username" autoComplete="new-password" />
                     
                    </Col>
                  </FormGroup>
                  <FormGroup row>
				  
                    <Col md="3">
                      <Label htmlFor="password-input">Password</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="password" id="password-input" name="password-input" placeholder="Password" autoComplete="new-password" />
                      <FormText className="help-block">Please enter a complex password</FormText>
                    </Col>
                  </FormGroup>
                 
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="textarea-input">About</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="textarea" name="textarea-input" id="textarea-input" rows="9"
                             placeholder="About Model..." />
                    </Col>
                  </FormGroup>
                
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="file-input">Model pic</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="file" id="file-input" name="file-input" />
                    </Col>
                  </FormGroup>
                  
                   
                </Form>    
              </CardBody>
              <CardFooter>
                <Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Submit</Button>
                <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Reset</Button>
              </CardFooter>
            </Card>
           
          </Col>   
          
        </Row>
      </div>

    );
  }
}

export default Addmodel;
