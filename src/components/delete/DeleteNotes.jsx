
import { Box, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";


//components
import DeleteNote from "./DeleteNote";
import { useSelector } from "react-redux";

const DrawerHeader = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
}));

const DeleteNotes = () => {
  const { todos, archives, trash } = useSelector((state) => state.keep);
  //   console.log("The Todos from Notes.jsx", todos);
  //   console.log("The Archives from Notes.jsx", archives);
  //   console.log("The Delete from Notes.jsx", trash);

  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <Box sx={{ p: 3, width: "100%" }}>
        <DrawerHeader />
        <Grid container>
          {trash.map((deleteNote) => (
            <Grid item key={deleteNote.id}>
              <DeleteNote deleteNote={deleteNote} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default DeleteNotes;
