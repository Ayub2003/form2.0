import { Form, Input } from "antd";
import { FC } from "react";

export const RangeAgeInput: FC = () => {
  return (
    <>
      <p>Choose age:</p>
      <Form.Item
        name={["age2"]}
        rules={[
          {
            required: true,
            message: "Missing age",
          },
        ]}
        style={{ textAlign: "left" }}
      >
        <Input type="range" max="100" min="16" placeholder="Age" />
      </Form.Item>
    </>
  );
};
