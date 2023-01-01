import React from 'react'
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';


const Loading = () => {
  return (
    <Box >
   
    <Stack spacing={2} style={{width:'5rem'}} className='mb-4'>
        <Skeleton variant="rectangular" animation="wave" width={"10rem"} height={250} />
        <div className='d-flex justify-content-between'>
            <Skeleton variant="text" animation="wave" width={"5rem"} />
            <Skeleton variant="text" animation="wave" width={"2rem"} />
        </div>
     
    </Stack>
    
    </Box>
   
  )
}

export default Loading