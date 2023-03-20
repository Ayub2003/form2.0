import { FC } from "react";
import { Button, Form } from "antd";
import "./SubmitButton.scss";

export const SubmitButton: FC = () => {
  return (
    <Form.Item className="submit-button">
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  );
};
