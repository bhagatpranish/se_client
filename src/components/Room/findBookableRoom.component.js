import React, { useEffect, useState } from "react";

import UserService from "../../services/user.service";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ReserveRoom from "../Reserve/ReserveRoom/reserve";
import { ToastContainer, toast } from "react-toastify";
import CloseIcon from '@mui/icons-material/Close';
import 'react-datepicker/dist/react-datepicker.css';
import giphy from "../../resource/images/transparent.gif";
// Import toastify css file
import "react-toastify/dist/ReactToastify.css";
import { Comment } from "react-loader-spinner";
import {
  AppBar,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle, Divider, List, ListItem, ListItemText, Slide,
  Toolbar, Typography
} from "@mui/material";
import TextField from "@mui/material/TextField";
import DatePicker from "react-datepicker";
import {IconButton} from "@chakra-ui/react";
import userService from "../../services/user.service";
const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
      children: React.ReactElement;
    },
    ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});
export default function FindBookableRoom(props) {
  const [open, setOpen] =useState(false);
  const [open1, setOpen1] =useState(false);

  const[selectedFromTime,setSelectedFromTime] = useState(new Date())
  const[selectedToTime,setSelectedToTime] = useState(new Date())
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (filter) => {
    setOpen(false);
  };

  const handleClickOpen1 = () => {
    setOpen1(true);
  };

  const handleClose1 = (filter) => {
    setOpen1(false);
  };
  const [room, setRoom] = useState([]);
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showChild, setShowChild] = useState(false);
  const [roomNumber, setRoomNumber] = useState(0);
  function createData(name: string, roomNumber: number, roomReservation: any) {
    return { name, roomNumber, roomReservation };
  }
  const notify1 = (childData) => {
    toast(childData);
  };
  const style = {
    marginRight: "auto",
    marginLeft: "auto",
    width: "800px",
  };
  const showChild1 = (childData) => {
    console.log("childData called");
    setShowChild(childData);
  };
  const refreshIt = (date)=>{
    setSelectedFromTime(date)
    setSelectedToTime(date)

  }

  const refreshIt1 = (date)=>{
    setSelectedToTime(date)

  }

  const getRoomByDate=()=>{
    setLoading(false)
   setOpen(false)
userService.getRoomBySchedule(selectedFromTime,selectedToTime).then(res=>{
  setRows(res.data);
  setLoading(true)
})
  }
  useEffect(() => {
    UserService.getAllBookableRoom().then((res) => {
      console.log("<<<<", res.data);
      setRows(res.data);
      setLoading(true);
    });
    console.log(">> ", rows);
  }, []);
  if (loading) {
    return (
      <div>
        <ToastContainer />

        <div>
          <Button variant="outlined" onClick={handleClickOpen}>
            Filter by Time
          </Button>
          <Dialog
              fullScreen
              open={open}
              onClose={handleClose}
              TransitionComponent={Transition}
          >
            <AppBar sx={{ position: 'relative' }}>
              <Toolbar>
                <IconButton
                    edge="start"
                    color="inherit"
                    onClick={handleClose}
                    aria-label="close"
                >
                  <CloseIcon />
                </IconButton>
                <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                  Select Date
                </Typography>
                <Button autoFocus color="inherit" onClick={handleClose}>
                  save
                </Button>
              </Toolbar>
            </AppBar>
            From date:
            <DatePicker
                onChange={(date) => refreshIt(date)}
                selected = {selectedFromTime}
                showTimeSelect
                // excludeDateIntervals={filterPassedTime()}
                dateFormat="MMMM d, yyyy h:mm aa"
            />
            To Date:
            <DatePicker
                onChange={(date) => refreshIt1(date)}
                selected = {selectedToTime}
                minDate={new Date()}
                placeholderText="Select a day"

                showTimeSelect
                // excludeDateIntervals={filterPassedTime()}
                dateFormat="MMMM d, yyyy h:mm aa"
            />
            <button onClick={()=>getRoomByDate()} >Submit</button>

          </Dialog>
        </div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="left">id</TableCell>
                <TableCell align="left">Reserve</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="left">{row.id}</TableCell>
                  <TableCell align="left">
                    <Button variant="outlined"
                      onClick={() => {
                        setShowChild(true);
                        setRoom(row);
                        handleClickOpen1();
                      }}
                    >
                      Reserve
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        {showChild && (
            <div>
              <Dialog
                  fullScreen
                  open={open1}
                  onClose={handleClose1}
                  TransitionComponent={Transition}
              >
                <AppBar sx={{ position: 'relative' }}>
                  <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        onClick={handleClose1}
                        aria-label="close"
                    >
                      <CloseIcon />
                    </IconButton>
                    <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                      Select Date
                    </Typography>
                  </Toolbar>

                </AppBar>
                <ReserveRoom notify1={notify1} showChild1={showChild1} room={room} />
              </Dialog>
            </div>

        )}
      </div>
    );
  } else {
    return (
      <div style={style}>
        <Comment
          visible={true}
          height="80"
          width="80"
          ariaLabel="comment-loading"
          wrapperStyle={{}}
          wrapperClass="comment-wrapper"
          color="#FFB81C"
          backgroundColor="#154734"
        />
      </div>
    );
  }
}
