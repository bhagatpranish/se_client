// import { TextField } from "@mui/material";
import TextField from '@mui/material/TextField';
import { Box, Stack } from '@mui/system';

export default function AddBuildingForm(props) {
  return (
    <Box component="form"
    sx={{
      '& .MuiTextField-root': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="off">

    <div>
      <h3>Add Building</h3>
      <form onSubmit={props.onSubmit}>
        <TextField   
          required
          id="name"
          label="Building Name"> 
        <input ref={props.nameRef} type="name" id="name"  />
        /</TextField>

        <TextField   
          id="floors"
          label="Number of Floors" >
        <input 
        type="number"
        ref={props.floorsRef} 
        variant="filled"
        id="floors"l
        InputLabelProps={{
          shrink: true,
        }}
        />
        /</TextField>

        <br/>
        <br />
        <label htmlFor="address"> Please add the building address below:</label>
        <br />

        <TextField 
                label="Street">
                <input 
                ref={props.streetRef} 
                type="street" 
                id="street" 
                />
        /</TextField>

        <br />
        <TextField
        id="city"
        type="city"
        label="City"
        ref={props.cityRef}
        />


        <br />

        <TextField 
                label="State">
                <input 
                ref={props.stateRef} 
                type="state" 
                id="state" 
                />
        /</TextField>

        <br />
        
        <TextField 
                label="Zip">
                <input 
                ref={props.zipRef} 
                type="zip" 
                id="zip" 
                />
        /</TextField>

        <br />

        <button type="submit">Add Building</button>

        
      </form>
    </div>
    </Box>
  );
}
