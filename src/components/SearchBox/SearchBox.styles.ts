import { createUseStyles } from 'react-jss';

import { COLOR_RED, COLOR_WHITE, COLOR_BLACK, COLOR_GREY_100, COLOR_GREY_400 } from './../../theme/colors/colors.constant';

export interface StyleProps {
  error?: boolean;
  hasAdditionValue?: boolean;
}

export default createUseStyles({
  root: {
    marginBottom: '20px'
  },
  labelText: {
    fontSize: '16px'
  },
  autocompleteWrapper: {
    position: 'relative',
    width: '430px',
    margin: '10px 0px'
  },
  inputWrapper: (props: StyleProps) => ({
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: '55px',
    padding: '0px 16px',
    border: `1px solid ${ props.error ? COLOR_RED : COLOR_BLACK }`,
    cursor: 'text'
  }),
  input: {
    flex: 1,
    border: '0',
    outline: 'none',
    fontSize: '16px',
    fontWeight: 'bold',
    fontStyle: 'oblique'
  },
  adornmentBlock: {
    marginLeft: '16px',
    width: '24px',
    height: '24px'
  },
  autocompleteList: {
    zIndex: '1000',
    position: 'absolute',
    width: '100%',
    maxHeight: '390px',
    overflowY: 'scroll',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
  },
  notFoundListItem: {
    height: '60px',
    backgroundColor: COLOR_WHITE,
    color: COLOR_GREY_400,
    display: 'flex',
    alignItems: 'center',
    padding: '0px 15px',
    fontSize: '14px'
  },
  helperText: (props: StyleProps) => ({
    color: props.error ? COLOR_RED : COLOR_GREY_400,
    fontSize: '14px'
  }),
  listItem: (props: StyleProps) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: props.hasAdditionValue ? 'space-between' : 'center',
    width: '100%',
    height: '65px',
    padding: '15px 15px',
    backgroundColor: COLOR_WHITE,
    transition: 'background .1s',
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: COLOR_GREY_100
    },
    '& > p': {
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }),
  mainAddress: {
    fontSize: '14px',
    color: COLOR_BLACK

  },
  additionAddress: {
    fontSize: '14px',
    color: COLOR_GREY_400
  },

  '@media (max-width: 600px)': {
    autocompleteWrapper: {
      width: '100% !important'
    }
  }
});