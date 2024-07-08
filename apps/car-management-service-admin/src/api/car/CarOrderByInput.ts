import { SortOrder } from "../../util/SortOrder";

export type CarOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  specifications?: SortOrder;
  make?: SortOrder;
  model?: SortOrder;
  year?: SortOrder;
};
