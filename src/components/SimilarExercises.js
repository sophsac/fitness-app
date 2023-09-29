// reuse components

import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import HorizontalScrollbar from './HorizontalScrollbar';
import Loader from './Loader';

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <Box sx={{ mt: { lg: '100px', cs: '0' } }}>
      <Typography variant='h3' mb={4}>Exercises that target the same muscle group</Typography>
      {/* loop over muscle exercise cards */}
      <Stack direction='row' sx={{ p: '2', position: 'relative' }}>
        {/* if there are exercises, show HorizontalScrollbar */}
        {targetMuscleExercises.length 
          ? <HorizontalScrollbar data={targetMuscleExercises} />
          : <Loader /> }
      </Stack>

      <Typography variant='h3' mb={4}>Exercises that use the same equipment</Typography>
      {/* loop over equipment exercises */}
      <Stack direction='row' sx={{ p: '2', position: 'relative' }}>
        {/* if there are exercises, show HorizontalScrollbar */}
        {equipmentExercises.length 
          ? <HorizontalScrollbar data={equipmentExercises} />
          : <Loader /> }
      </Stack>

    </Box>
  )
}

export default SimilarExercises