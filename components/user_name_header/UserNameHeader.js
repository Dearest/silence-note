import React from 'react'
import { makeStyles } from '@material-ui/styles';
import { Box } from '@material-ui/system'
import { Typography } from '@material-ui/core';
const useStyle = makeStyles(({ spacing }) => ({
  chip: {
    color: 'white',
    display: 'inline',
    backgroundColor: '#212f4b',
    borderRadius: spacing(1),
    cursor: 'pointer',
    fontSize: '12px',
    marginLeft: spacing(1),
    paddingTop: spacing(0.5),
    paddingBottom: spacing(0.5),
    paddingLeft: spacing(1),
    paddingRight: spacing(1)
  }
}))

export default function UserName() {
  const classes = useStyle()
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Typography variant="body1" display={'inline'} sx={{ fontSize: '20px', color: 'text.secondary' }}>
        <b>{'Dearest'}</b>
      </Typography>
      <div className={classes.chip}><b>PRO</b></div>
    </Box>
  )
}
