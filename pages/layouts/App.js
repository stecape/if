import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
import InputLabel from '@material-ui/core/InputLabel' 
import FormControl from '@material-ui/core/FormControl'


export default function App () {
  const [values, setValues] = React.useState({
    Temperature: '',
  })

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };
  return (
    <Container>
      <AppBar position="static" color="primary" root>
        <Toolbar>
          <Typography variant="h6" color="inherit">
            IF
          </Typography>
        </Toolbar>
      </AppBar>
      <FormControl>
        <TextField
          id="Temperature"
          label="Temperature"
          value={values.Temperature}
          onChange={handleChange('Temperature')}
          type="number"
          InputProps={{
            startAdornment: <InputAdornment position="start">°F</InputAdornment>,
          }}
          margin="normal"
          variant="outlined"
        />
      </FormControl>
    </Container>
  )
}