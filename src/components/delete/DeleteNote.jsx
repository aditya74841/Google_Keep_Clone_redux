import { useContext } from "react";

import { Card, CardContent, CardActions, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import {
  RestoreFromTrashOutlined as Restore,
  DeleteForeverOutlined as Delete,
} from "@mui/icons-material";
import { DataContext } from "../../context/DataProvider";
import { useDispatch } from "react-redux";
import { handleDeleteNote, handleRestoreNote } from "../../ActionReducer/keep";
const StyledCard = styled(Card)`
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  width: 240px;
  margin: 8px;
  box-shadow: none;
`;

const DeleteNote = ({ deleteNote }) => {
  const dispatch = useDispatch();

  const restoreNote = (deleteNote) => {
    dispatch(handleRestoreNote(deleteNote.id));
  };

  const removeNote = (deleteNote) => {
    dispatch(handleDeleteNote(deleteNote.id));
  };

  return (
    <StyledCard>
      <CardContent>
        <Typography>{deleteNote.title}</Typography>
        <Typography>{deleteNote.description}</Typography>
      </CardContent>
      <CardActions>
        <Delete
          fontSize="small"
          style={{ marginLeft: "auto" }}
          onClick={() => removeNote(deleteNote)}
        />
        <Restore fontSize="small" onClick={() => restoreNote(deleteNote)} />
      </CardActions>
    </StyledCard>
  );
};

export default DeleteNote;
