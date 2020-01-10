import React from "react";
import { Form, Input, Button } from "antd";
import axios from "axios";
const FormItem = Form.Item;

class CustomForm extends React.Component {
  handleFormSubmit = (event, requestType, articleId) => {
    const title = event.target.elements.title.value;
    const content = event.target.elements.content.value;
    switch (requestType) {
      case "post":
        return axios
          .post("http://127.0.0.1:8000/api/", {
            title: title,
            content: content
          })
          .then(res => {
            console.log(res);
          })
          .catch(err => {
            console.error(err);
          });
      case "put":
        return axios
          .put(`http://127.0.0.1:8000/api/${articleId}/`, {
            title: title,
            content: content
          })
          .then(res => {
            console.log(res);
          })
          .catch(err => {
            console.error(err);
          });
    }
  };
  render() {
    return (
      <div>
        <Form
          onSubmit={event =>
            this.handleFormSubmit(
              event,
              this.props.requestType,
              this.props.articleId
            )
          }
        >
          <FormItem label="Title">
            <Input name="title" placeholder="Enter a title" />
          </FormItem>
          <FormItem label="Content">
            <Input name="content" placeholder="Write Content ..." />
          </FormItem>
          <FormItem>
            <Button type="primary" htmlType="submit">
              {this.props.btnText}
            </Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}

export default CustomForm;
