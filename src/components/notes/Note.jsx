import { useContext } from "react";

import { Card, CardContent, CardActions, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import {
  ArchiveOutlined as Archive,
  DeleteOutlineOutlined as Delete,
} from "@mui/icons-material";

import { DataContext } from "../../context/DataProvider";
import { useDispatch } from "react-redux";
import { handleArchive, handleDelete } from "../../ActionReducer/keep";

const StyledCard = styled(Card)`
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  width: 240px;
  margin: 8px;
  box-shadow: none;
`;

const Note = ({ note }) => {
  const dispatch = useDispatch();


  const archiveNote = (note) => {
    dispatch(handleArchive(note.id));
  };

  const deleteNote = (note) => {
    dispatch(handleDelete(note.id));
  };

  return (
    <StyledCard>
      <CardContent>
        <Typography>{note.title}</Typography>
        <Typography>{note.description}</Typography>
      </CardContent>
      <CardActions>
        <Archive
          fontSize="small"
          style={{ marginLeft: "auto" }}
          onClick={() => archiveNote(note)}
        />
        <Delete fontSize="small" onClick={() => deleteNote(note)} />
      </CardActions>
    </StyledCard>
  );
};

export default Note;
