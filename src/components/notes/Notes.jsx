// import { useContext } from "react";

// import { Box, Grid } from "@mui/material";
// import { styled } from "@mui/material/styles";
// import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

// import { DataContext } from "../../context/DataProvider";
// import { reorder } from "../../utils/common-utils";

// //components
// import Form from "./Form";
// import Note from "./Note";
// import EmptyNotes from "./EmptyNotes";
// import { useSelector } from "react-redux";

// const DrawerHeader = styled("div")(({ theme }) => ({
//   ...theme.mixins.toolbar,
// }));

// const Notes = () => {
//   const { notes, setNotes } = useContext(DataContext);
//   const { todos } = useSelector((state) => state.keep);
// //   console.log("The Todos from Notes.jsx", todos);

//   const onDragEnd = (result) => {
//     if (!result.destination) return;

//     const items = reorder(notes, result.source.index, result.destination.index);
//     setNotes(items);
//   };

//   return (
//     <Box sx={{ display: "flex", width: "100%" }}>
//       <Box sx={{ p: 3, width: "100%" }}>
//         <DrawerHeader />
//         <Form />
//         {notes.length > 0 ? (
//           <DragDropContext onDragEnd={onDragEnd}>
//             <Droppable droppableId="droppable">
//               {(provided, snapshot) => (
//                 <Grid
//                   container
//                   style={{ marginTop: 16 }}
//                   {...provided.droppableProps}
//                   ref={provided.innerRef}
//                 >
//                   {notes.map((note, index) => (
//                     <Draggable
//                       key={note.id}
//                       draggableId={note.id}
//                       index={index}
//                     >
//                       {(provided, snapshot) => (
//                         <Grid
//                           ref={provided.innerRef}
//                           {...provided.draggableProps}
//                           {...provided.dragHandleProps}
//                           item
//                         >
//                           <Note note={note} />
//                         </Grid>
//                       )}
//                     </Draggable>
//                   ))}
//                 </Grid>
//               )}
//             </Droppable>
//           </DragDropContext>
//         ) : (
//           <EmptyNotes />
//         )}
//       </Box>
//     </Box>
//   );
// };

// export default Notes;

import { useContext } from "react";

import { Box, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

import { DataContext } from "../../context/DataProvider";
import { reorder } from "../../utils/common-utils";
import { useDispatch } from "react-redux";

//components
import Form from "./Form";
import Note from "./Note";
import EmptyNotes from "./EmptyNotes";
import { useSelector } from "react-redux";
import { changeTodos } from "../../ActionReducer/keep";

const DrawerHeader = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
}));

const Notes = () => {
  const dispatch = useDispatch();

  const { todos, archives, trash } = useSelector((state) => state.keep);
  // console.log("The Todos from Notes.jsx", todos);
  // console.log("The Archives from Notes.jsx", archives);
  // console.log("The Delete from Notes.jsx", trash);

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const items = reorder(todos, result.source.index, result.destination.index);
    dispatch(changeTodos(items));
    
  };

  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <Box sx={{ p: 3, width: "100%" }}>
        <DrawerHeader />
        <Form />
        {todos.length > 0 ? (
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="droppable">
              {(provided, snapshot) => (
                <Grid
                  container
                  style={{ marginTop: 16 }}
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {todos.map((note, index) => (
                    <Draggable
                      key={note.id}
                      draggableId={note.id}
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <Grid
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          item
                        >
                          <Note note={note} />
                        </Grid>
                      )}
                    </Draggable>
                  ))}
                </Grid>
              )}
            </Droppable>
          </DragDropContext>
        ) : (
          <EmptyNotes />
        )}
      </Box>
    </Box>
  );
};

export default Notes;
