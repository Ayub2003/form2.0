import { Form, Input } from "antd";
import { FC } from "react";

export const FirstNameInput: FC = () => {
  return (
    <>
      <Form.Item
        name={["firstname"]}
        rules={[
          {
            required: true,
            message: "Missing first name",
          },
        ]}
      >
        <Input placeholder="First Name" />
      </Form.Item>
    </>
  );
};
