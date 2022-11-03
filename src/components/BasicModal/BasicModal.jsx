import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 280,
  bgcolor: 'primary.main',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const save=()=>{
        alert("תודה שטיפלת בדיווח הציבור מודה לך")
        
        
       }
  return (
    <div>
      <Button dir='rtl' sx={{bgcolor:'primary.plain'}} onClick={handleOpen}>פרטים נוספים</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <img
              src={props.image}
              width={200}
              alt="anumalIMG"
            />
          <Typography dir='rtl' id="modal-modal-title" variant="h6" component="h2">
            פרטים נוספים:
          </Typography>
          <Typography dir="rtl" id="modal-modal-description" sx={{ mt: 2 }}>
         {`${props.name}`}, <a href={`tel:${props.phone}`}>{props.phone}</a>, 
          </Typography>
          <Button onClick={()=>window.open("https://maps.google.com?q="+props.place)}>
            {`${props.place}`}
         </Button>
          <Typography dir="rtl" id="modal-modal-description" sx={{ mt: 2 }}>
          </Typography>
          <Button dir='rtl' size="midume" onClick={()=>save()}>שמירה</Button>
        </Box>

        
      </Modal>
    </div>
  );
}


