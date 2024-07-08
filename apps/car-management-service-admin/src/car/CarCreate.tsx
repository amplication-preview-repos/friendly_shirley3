import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const CarCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="specifications" multiline source="specifications" />
        <TextInput label="make" source="make" />
        <TextInput label="model" source="model" />
        <NumberInput step={1} label="year" source="year" />
      </SimpleForm>
    </Create>
  );
};
