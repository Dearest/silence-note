import { Container } from '@material-ui/core'
import { Box } from '@material-ui/system'
import React from 'react'
import { MemoBoard } from '../memo_board'
import UserNameHeader from '../user_name_header'

export default function Home() {
  return (
    <Container maxWidth={'md'} disableGutters={true} sx={{ display: 'flex' }}>
      <aside>
        <Box width={240} pl={4} pr={4} height={65} sx={{ display: 'flex', alignItems: 'center' }}>
          <UserNameHeader />
        </Box>
        <Box width={240} pl={4} pr={4}>
          <MemoBoard />
        </Box>
      </aside>
      <main>
        <Box width={640} height={500}>
          1241
        </Box>
      </main>
    </Container >
  )
}
