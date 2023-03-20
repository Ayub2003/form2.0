import { DatePicker, Form, Space } from "antd";
import { FC } from "react";

const { RangePicker } = DatePicker;

export const DateInput: FC = () => (
  <>
    <p>Choose range of date</p>
    <Form.Item
      name={["date"]}
      rules={[
        {
          required: true,
          message: "Missing date",
        },
      ]}
    >
      <RangePicker />
    </Form.Item>
  </>
);
