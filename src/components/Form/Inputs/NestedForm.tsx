import { FC } from "react";
import { Button, Form, Input, Space } from "antd";

export const NestedForm: FC = () => {
  return (
    <Form.List name="useraddress">
      {(fields, { add, remove }) => (
        <>
          {fields.map(({ key, name, ...restField }) => (
            <Space
              key={key}
              style={{
                display: "flex",
                marginBottom: 8,
              }}
              align="baseline"
            >
              <Form.Item
                {...restField}
                name={[name, "address"]}
                rules={[
                  {
                    required: true,
                    message: "Missing address",
                  },
                ]}
              >
                <Input placeholder="Address" />
              </Form.Item>
              <Form.Item
                {...restField}
                name={[name, "city"]}
                rules={[
                  {
                    required: true,
                    message: "Missing city",
                  },
                ]}
              >
                <Input placeholder="City" />
              </Form.Item>
              <button onClick={() => remove(name)} />
            </Space>
          ))}
          <Form.Item>
            <Button type="dashed" onClick={() => add()} block icon={<></>}>
              Add field
            </Button>
          </Form.Item>
        </>
      )}
    </Form.List>
  );
};
