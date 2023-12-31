import React, { useEffect, useState } from "react";
// import { Pagination } from "@mui/material/Pagination";
import { Box, Stack, Typography, Pagination} from "@mui/material/";

import { exerciseOptions, fetchData } from "../utils/fetchData";
import ExerciseCard from "./ExerciseCard";
// import Loader from './Loader';

const Exercises = ({ exercises, setExercises, bodyPart }) => {

    const [currentPage, setCurrentPage] = useState(1);
    const exercisesPerPage = 9;
    console.log(exercises);

    // to show consecutive exercises to paginate
    const indexOfLastExercise = currentPage * exercisesPerPage;
    const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
    if (!Array.isArray(exercises)) {
      console.error('exercises is not an array:', exercises);
      // Handle the non-array case if needed
    } else {
      const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);
    }
    // const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);


    const paginate = (e, value) => {
        setCurrentPage(value);
        window.scrollTo({ top: 1800, behavior: 'smooth' })
    }

    useEffect(() => {
      const fetchExercisesData = async () => {
        let exercisesData =[];

        if (bodyPart === 'all') {
          exercisesData = await fetchData("https://exercisedb.p.rapidapi.com/exercises", exerciseOptions);
        } else {
          exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
        }
        setExercises(exercisesData);
      }
      fetchExercisesData();
    }, [[bodyPart]])

  return (
    <Box id="exercises" sx={{ mt: { lg: "110px" } }} mt="50px" p="20px">
      <Typography variant="h3" mb="46px">
        Showing Results
      </Typography>

      <Stack
        direction="row"
        sx={{ gap: { lg: "110px", cs: "50px" } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {currentExercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </Stack>
      <Stack mt="100px" alignItems="center">
        {exercises.length > 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exercises;
