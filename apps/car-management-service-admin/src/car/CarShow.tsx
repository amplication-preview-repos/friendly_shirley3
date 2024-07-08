import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const CarShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="specifications" source="specifications" />
        <TextField label="make" source="make" />
        <TextField label="model" source="model" />
        <TextField label="year" source="year" />
      </SimpleShowLayout>
    </Show>
  );
};
