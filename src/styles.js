import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    width: '10px',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));