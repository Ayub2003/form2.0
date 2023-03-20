import { Form, Input, Radio } from "antd";
import { FC, useState } from "react";

export const RadioYN: FC = () => {
  const [value, setValue] = useState<string>("no");
  const onChange = (e: any) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  return (
    <>
      <p>Are you coder?</p>
      <Form.Item
        name={["isCoder"]}
        rules={[
          {
            required: true,
            message: "Choose answer",
          },
        ]}
      >
        <Radio.Group onChange={onChange} value={value}>
          <Radio value="yes">Yes</Radio>
          <Radio value="no">No</Radio>
        </Radio.Group>
      </Form.Item>
    </>
  );
};
