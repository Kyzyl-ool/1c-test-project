export type RecordStateType = {
  newRecord: {
    name: string;
    amount: string;
    categoryId: string;
    type: string;
  };
  isCreatingNew: boolean;
};
