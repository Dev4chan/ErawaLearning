import { Datagrid, List, TextField } from "react-admin";

export const UserProgressList = () => {
  return (
  <List>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="userName" />
        {/* <TextField source="userImageSrc" /> */}
        <TextField source="activeCourseId" />
        <TextField source="hearts" />
        <TextField source="points" />
      </Datagrid>
    </List>
  );
};
