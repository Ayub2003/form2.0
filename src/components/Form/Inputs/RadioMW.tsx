import { Form, Input, Radio } from "antd";
import { FC, useState } from "react";

export const RadioMW: FC = () => {
  const [value, setValue] = useState<string>("male");
  const onChange = (e: any) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  return (
    <>
      <p>Youre gender: </p>
      <Form.Item
        name={["sex"]}
        rules={[
          {
            required: true,
            message: "Choose youre sex",
          },
        ]}
      >
        <Radio.Group onChange={onChange} value={value}>
          <Radio value="male">male</Radio>
          <Radio value="female">female</Radio>
        </Radio.Group>
      </Form.Item>
    </>
  );
};
