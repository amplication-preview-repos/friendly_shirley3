import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type CarWhereInput = {
  id?: StringFilter;
  specifications?: StringNullableFilter;
  make?: StringNullableFilter;
  model?: StringNullableFilter;
  year?: IntNullableFilter;
};
