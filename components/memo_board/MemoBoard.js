import { Box } from '@material-ui/system'
import React from 'react'
const useStyle = {
  data: {
    typography: 'h5',
    color: 'text.secondary',
    fontWeight: 'bold'
  },
  title: {
    typography: 'caption',
    fontWeight: 'bold',
    color: 'text.secondary'
  }
}

export default function MemoBoard() {
  const classes = useStyle
  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box display='flex' flexDirection="column" justifyContent="space-between" >
          <Box sx={classes.data}>
            23
          </Box>
          <Box sx={classes.title}>
            MEMO
          </Box>
        </Box>
        <Box display='flex' flexDirection="column" justifyContent="space-between" >
          <Box sx={classes.data}>
            18
          </Box>
          <Box sx={classes.title}>
            TAG
          </Box>
        </Box>
        <Box display='flex' flexDirection="column" justifyContent="space-between" >
          <Box sx={classes.data}>
            177
          </Box>
          <Box sx={classes.title}>
            DAY
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
