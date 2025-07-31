import {
  Typography,
  Paper,
  InputBase,
  Divider,
  IconButton,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const Form = () => (
  <>
    <Typography component="h2" variant="h4" sx={{ mb: "10px" }}>
      Todo List
    </Typography>

    <Paper
      component="form"
      sx={{
        display: "flex",
        alignItems: "center",
        mb: "20px",
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Type your task"
      ></InputBase>
      <Divider orientation="vertical" sx={{ height: 34, m: 0.5 }} />
      <IconButton color="secondary" sx={{ p: 2 }}>
        <AddIcon />
      </IconButton>
    </Paper>
  </>
);

export default Form;
