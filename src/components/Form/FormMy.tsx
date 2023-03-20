import { FC, useState } from "react";
import { Checkbox, Form } from "antd";
import { NestedForm } from "./Inputs/NestedForm";
import { SubmitButton } from "./SubmitButton";
import { FirstNameInput } from "./Inputs/FirstNameInput";
import { LastNameInput } from "./Inputs/LastNameInput";
import { AgeInput } from "./Inputs/AgeInput";
import { RadioYN } from "./Inputs/RadioYN";
import { RangeAgeInput } from "./Inputs/RangeAgeInput";
import { RadioMW } from "./Inputs/RadioMW";
import { ColorInput } from "./Inputs/ColorInput";
import { DateInput } from "./Inputs/DateInput";
import { store } from "../../redux/store/store";
import { setForm } from "../../redux/slices/Form/Form.Slice";
import { IAddress, IForm } from "redux/slices/Form/Form.Model";
import "./FormMy.scss";

const onFinish = (values: IForm<IAddress>) => {
  console.log(values);
  store.dispatch(setForm(values));
};

export const FormMy: FC = () => {
  const [checked, setChecked] = useState<boolean>(false);
  const onChange = () => {
    setChecked(!checked);
  };
  return (
    <Form
      className="form"
      name="form-with-nest"
      onFinish={onFinish}
      autoComplete="off"
    >
      <FirstNameInput />
      <LastNameInput />
      <AgeInput />
      <RangeAgeInput />
      <RadioYN />
      <RadioMW />
      <ColorInput />
      <DateInput />
      <Checkbox className="checkbox" onChange={onChange}>
        Добавить адрес
      </Checkbox>
      {checked && <NestedForm />}
      <SubmitButton />
    </Form>
  );
};
