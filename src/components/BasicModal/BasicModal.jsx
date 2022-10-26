import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import "./BasicModal.css"
import axios from 'axios'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const deleteTodo=(id)=>{
    axios.delete(`${process.env.REACT_APP_SECRET_NAME_backendURL}/api/animals/${id}`).then()
   } 
   const save=()=>{  
    alert("תודה שטיפלת בדיווח הציבור מודה לך")
    deleteTodo(props.id)
    
   }
  return (
    <div>
      <Button onClick={handleOpen}>הצגה</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className='allCon'>
          <div className='photoandC'>
          <Box sx={{ display: "flex", justifyContent: "space-between",  }}>
            <img
            alt='img'
              src={props.image}
              width={"40%"}
            />
          <div>
          <Typography dir="rtl" >
            פרטי המדווח
          </Typography>
          <Typography dir="rtl" >
            {`${props.name}`}
          </Typography>
          <Typography >
          <a href={`tel:${props.phone}`}>{props.phone}</a>
            
          </Typography>
          </div>
          </Box>
          </div>
          <div className='animalD'>
          <div>
          <Typography dir="rtl" >
            {`פרטי הדיווח`}
          </Typography>
          <Typography dir="rtl" >
            {`${props.type}`}
          </Typography>
          <Typography dir="rtl" >
            {`${props.size}`}
          </Typography>
          <Typography dir="rtl" >
            <Button onClick={()=>window.open("https://maps.google.com?q="+props.place)}>
              {`${props.place}`}
              </Button>
          </Typography>
          <Typography dir="rtl" >
            {`${props.vailent}`}
          </Typography>
          <Typography dir="rtl" >
            {`${props.time}`}
          </Typography>
          
          </div>
            <div>
            <Typography dir="rtl" >
            {`${props.problem}`}
          </Typography>
          <Typography dir="rtl" >
            {`${props.exstraD}`}
          </Typography>
            </div>
          </div>

          </div>

          
          <Button dir='rtl' size="midume" onClick={()=>save()}>שמירה</Button>
        </Box>
      </Modal>
    </div>
  );
}

