import React, { Component } from 'react';
import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row,
  Table,Form,FormGroup,Label,Input,CardFooter,Button} from 'reactstrap';
import {PostData} from '../../service/PostData';
  const BaseURL = 'http://localhost:5000/api/';

class Category extends Component {

  constructor(props) {
    super(props);
    this.state = {
        category_name:'',
        data:[]
    };

  }
  componentDidMount() {
    fetch(BaseURL+'categorylist', {
   method: 'POST'
   })
   .then((response) => response.json())
   .then((res) => {
        if(res.code==200){

            this.setState({data:res.data});

        }
        else {
          console.log('something went wrong ');
          return false;
        }
   })
   .catch((error) => {

   });

}
onChange(e){
}
SubmitForm() {
//API Action Here
   if(this.state.category_name){
  PostData('addcategory',this.state).then((result) => {
  let responseJson = result;
  //console.log(responseJson);
  if(responseJson.code==200){
     console.log('cATEGORY sAVE');
      //window.location.reload();
  }
  else {
    alert('Invlid Login Detail');
  }
  });
}

}
  render() {

 var category_model=JSON.stringify(this.state.data);
 console.log(category_model);
    return (
      <div className="animated fadeIn">


        <Row>
        <Col>
        <Card>
          <CardHeader>
            <strong>Category</strong> Add
          </CardHeader>
          <CardBody>
            <Form action="" method="post" inline>
              <FormGroup className="pr-1">
                <Label htmlFor="exampleInputName2" className="pr-1">Name</Label>
                <Input type="text" id="exampleInputName2"  required onChange={this.onChange} name="category_name"  placeholder="Category Name" required />
              </FormGroup>

            </Form>
          </CardBody>
          <CardFooter>
            <Button type="submit" onClick={this.SubmitForm} size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Submit</Button>
            <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Reset</Button>
          </CardFooter>
        </Card>
         </Col>
         </Row>
         <Row>
          <Col>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Category List
              </CardHeader>
              <CardBody>
              { category_model ?   <Table hover bordered striped responsive size="sm">
                  <thead>
                  <tr>
                    <th>Sr No </th>
                    <th>Category Name</th>

                  </tr>
                  </thead>
                  <tbody>
                  {this.state.data.map(cat =>
                    <tr key={cat._id}>
                    <td  >{cat._id}</td>
                      <td>{cat.category_name}</td>

                    </tr>
                    )}

                  </tbody>
                </Table>: "No Category Added yet" }

                <nav>
                  <Pagination>
                    <PaginationItem><PaginationLink previous tag="button">Prev</PaginationLink></PaginationItem>
                    <PaginationItem active>
                      <PaginationLink tag="button">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem><PaginationLink tag="button">2</PaginationLink></PaginationItem>
                    <PaginationItem><PaginationLink tag="button">3</PaginationLink></PaginationItem>
                    <PaginationItem><PaginationLink tag="button">4</PaginationLink></PaginationItem>
                    <PaginationItem><PaginationLink next tag="button">Next</PaginationLink></PaginationItem>
                  </Pagination>
                </nav>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>

    );
  }
}

export default Category;
