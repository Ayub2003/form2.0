import { Form, Input } from "antd";
import { FC } from "react";

export const AgeInput: FC = () => {
  return (
    <Form.Item
      name={["age"]}
      rules={[
        {
          required: true,
          message: "Missing age",
        },
      ]}
    >
      <Input type="number" placeholder="Age" />
    </Form.Item>
  );
};
