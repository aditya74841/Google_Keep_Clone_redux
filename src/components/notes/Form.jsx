import { useState, useRef } from "react";

import { Box, TextField, ClickAwayListener } from "@mui/material";
import { styled } from "@mui/material/styles";
import { v4 as uuid } from "uuid";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addKeep } from "../../ActionReducer/keep";

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  margin: auto;
  box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%), 0 2px 6px 2px rgb(60 64 67 / 15%);
  border-color: #e0e0e0;
  width: 600px;
  border-radius: 8px;
  min-height: 30px;
  padding: 10px 15px;
`;

const note = {
  id: "",
  heading: "",
  text: "",
};

const Form = () => {
  const dispatch = useDispatch();
  const [showTextField, setShowTextField] = useState(false);
  const [addNote, setAddNote] = useState({ ...note, id: uuid() });

  //   console.log("The Todos is ", todos);

  const containerRef = useRef();

  const handleClickAway = () => {
    setShowTextField(false);
    containerRef.current.style.minheight = "30px";
    setAddNote({ ...note, id: uuid() });
    // console.log("This is the heading", addNote.heading);
    // console.log("This is the Title", addNote.text);

    if (addNote.heading || addNote.text) {
      dispatch(addKeep({ title: addNote.heading, description: addNote.text }));
    }
  };

  const onTextAreaClick = () => {
    setShowTextField(true);
    containerRef.current.style.minheight = "70px";
  };

  const onTextChange = (e) => {
    let changedNote = { ...addNote, [e.target.name]: e.target.value };
    setAddNote(changedNote);
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Container ref={containerRef}>
        {showTextField && (
          <TextField
            placeholder="Title"
            variant="standard"
            InputProps={{ disableUnderline: true }}
            style={{ marginBottom: 10 }}
            onChange={(e) => onTextChange(e)}
            name="heading"
            value={addNote.heading}
          />
        )}
        <TextField
          placeholder="Take a note..."
          multiline
          maxRows={Infinity}
          variant="standard"
          InputProps={{ disableUnderline: true }}
          onClick={onTextAreaClick}
          onChange={(e) => onTextChange(e)}
          name="text"
          value={addNote.text}
        />
      </Container>
    </ClickAwayListener>
  );
};

export default Form;

// import { useState, useRef, useContext } from 'react';
// import { Box, TextField, ClickAwayListener, Button } from '@mui/material';
// import { styled } from '@mui/material/styles';
// import { v4 as uuid } from 'uuid';
// import { DataContext } from '../../context/DataProvider';

// const Container = styled(Box)`
//     display: flex;
//     flex-direction: column;
//     margin: auto;
//     box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%), 0 2px 6px 2px rgb(60 64 67 / 15%);
//     border-color: #e0e0e0;
//     width: 600px;
//     border-radius: 8px;
//     min-height: 30px;
//     padding: 10px 15px;
// `;

// const note = {
//     id: '',
//     heading: '',
//     text: ''
// };

// const Form = () => {
//     const [showTextField, setShowTextField] = useState(false);
//     const [addNote, setAddNote] = useState({ ...note, id: uuid() });

//     const { notes, setNotes } = useContext(DataContext);
//     const containerRef = useRef();

//     const handleClickAway = () => {
//         setShowTextField(false);
//         containerRef.current.style.minHeight = '30px';
//         setAddNote({ ...note, id: uuid() });

//         if (addNote.heading || addNote.text) {
//             // Update the local state with the new note
//             setNotes(prevArr => [addNote, ...prevArr]);

//             // Send the new note data to your API
//             fetch('http://localhost:4000/api/v1/createNotes', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(addNote),
//             })
//                 .then(response => response.json())
//                 .then(data => {
//                     // Handle the API response if needed
//                     console.log('API response:', data);
//                 })
//                 .catch(error => {
//                     // Handle any errors that occurred during the API request
//                     console.error('API request error:', error);
//                 });
//         }
//     };

//     const onTextAreaClick = () => {
//         setShowTextField(true);
//         containerRef.current.style.minHeight = '70px';
//     };

//     const onTextChange = (e) => {
//         let changedNote = { ...addNote, [e.target.name]: e.target.value };
//         setAddNote(changedNote);
//     };

//     return (
//         <ClickAwayListener onClickAway={handleClickAway}>
//             <Container ref={containerRef}>
//                 {showTextField && (
//                     <TextField
//                         placeholder="Title"
//                         variant="standard"
//                         InputProps={{ disableUnderline: true }}
//                         style={{ marginBottom: 10 }}
//                         onChange={(e) => onTextChange(e)}
//                         name="heading"
//                         value={addNote.heading}
//                     />
//                 )}
//                 <TextField
//                     placeholder="Take a note..."
//                     multiline
//                     maxRows={Infinity}
//                     variant="standard"
//                     InputProps={{ disableUnderline: true }}
//                     onClick={onTextAreaClick}
//                     onChange={(e) => onTextChange(e)}
//                     name="text"
//                     value={addNote.text}
//                 />
//                 <Button variant="contained" color="primary" onClick={handleClickAway}>
//                     Save Note
//                 </Button>
//             </Container>
//         </ClickAwayListener>
//     );
// };

// export default Form;
