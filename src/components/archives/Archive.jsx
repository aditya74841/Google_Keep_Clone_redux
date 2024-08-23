import { useContext } from "react";

import { Card, CardContent, CardActions, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import {
  UnarchiveOutlined as Unarchive,
  DeleteOutlineOutlined as Delete,
} from "@mui/icons-material";

import { DataContext } from "../../context/DataProvider";
import { useDispatch } from "react-redux";
import {
  handleArchivesTrash,
  handleUnArchives,
} from "../../ActionReducer/keep";

const StyledCard = styled(Card)`
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  width: 240px;
  margin: 8px;
  box-shadow: none;
`;

const Archive = ({ archive }) => {
  const dispatch = useDispatch();

  const unArchiveNote = (archive) => {
    dispatch(handleUnArchives(archive.id));
  };

  const deleteNote = (archive) => {
    dispatch(handleArchivesTrash(archive.id));
  };

  return (
    <StyledCard>
      <CardContent>
        <Typography>{archive.title}</Typography>
        <Typography>{archive.description}</Typography>
      </CardContent>
      <CardActions>
        <Unarchive
          fontSize="small"
          style={{ marginLeft: "auto" }}
          onClick={() => unArchiveNote(archive)}
        />
        <Delete fontSize="small" onClick={() => deleteNote(archive)} />
      </CardActions>
    </StyledCard>
  );
};

export default Archive;
