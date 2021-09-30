import React, { useState, useEffect } from 'react'
import { getInfo } from '../services/personalInfo'
import { Box, Divider, Typography } from '@material-ui/core'
import LinksBar from '../components/LinksBar'
// import BottomMenu from '../components/BottomMenu'

function Cover() {
  const [myInfo, setMyInfo] = useState({})

  useEffect(() => {
    getInfo()
      .then((res) => setMyInfo(res.data.body))
      .catch((error) => console.log(error))
  }, [])

  const { name, lastName, title, bio } = myInfo

  return (
    <Box className="cover-img">
      {title && (
        <Box className="cover" pl={5}>
          <Typography className="font_alt" variant={'h2'}>
            {name} {lastName}
            <span className="nickname"> ImfanJs</span>
          </Typography>
          <Typography variant={'h4'}>{title}</Typography>
          <Divider className="bar my-2" />
          <Typography className="w-50" variant={'h6'}>
            {bio}
          </Typography>
        </Box>
      )}
      <LinksBar />
      {/* <BottomMenu /> */}
    </Box>
  )
}

export default Cover
