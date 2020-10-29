import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Box, Divider, Typography } from '@material-ui/core'
import LinksBar from '../components/LinksBar'
import BottomMenu from '../components/BottomMenu'

function Cover() {
  const [myInfo, setMyInfo] = useState({})

  useEffect(() => {
    axios.get('/api/v1/myInfo').then((res) => setMyInfo(res.data.body))
  }, [])

  return (
    <Box className="cover-img">
      <Box className="cover" pl={5}>
        <Typography className="font_alt" variant={'h2'}>
          {myInfo.name} {myInfo.lastName}
          <span className="nickname"> ImfanJs</span>
        </Typography>
        <Typography variant={'h4'}>{myInfo.title}</Typography>
        <Divider className="bar my-2" />
        <Typography className="w-50" variant={'h6'}>
          {myInfo.bio}
        </Typography>
      </Box>
      <LinksBar />
      <BottomMenu />
    </Box>
  )
}

export default Cover
