import { Form, Input } from "antd";
import { FC } from "react";

export const LastNameInput: FC = () => {
  return (
    <Form.Item
      name={["lastname"]}
      rules={[
        {
          required: true,
          message: "Missing last name",
        },
      ]}
    >
      <Input placeholder="Last Name" />
    </Form.Item>
  );
};
