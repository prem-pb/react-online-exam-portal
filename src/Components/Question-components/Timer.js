import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  timer: {
    width: "80%",
    padding: "20px",
    margin: "auto",
    backgroundColor: "blue",
    borderRadius: "4px",
  },
}));
const Timer = () => {
  const classes = useStyles();
  return (
    <div>
      <Box color="text.primary" className={classes.timer}>
        abcd
      </Box>
    </div>
  );
};

export default Timer;
