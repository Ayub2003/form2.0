import { Form, Input } from "antd";
import { FC } from "react";

export const ColorInput: FC = () => {
  return (
    <Form.Item
      name={["color"]}
      rules={[
        {
          required: true,
          message: "Missing color",
        },
      ]}
    >
      <Input type="color" placeholder="First Name" />
    </Form.Item>
  );
};
