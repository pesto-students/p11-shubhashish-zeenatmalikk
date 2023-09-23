import React, { useEffect, useState } from "react";
import styles from "./Workout.module.less";
import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
} from "@mui/material";
import { HfInference } from "@huggingface/inference";
import AnswerDisplay from "../AnswerDisplay/AnswerDisplay";

const WorkoutPlanner = () => {
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [question, setQuestion] = useState(
    "I want a gift suggestion for 2 year old kid"
  );
  const [answer, setAnswer] = useState("");

  const [fitnessLevel, setFitnessLevel] = useState("");
  const [muscleGroups, setMuscleGroups] = useState([]);
  const [workoutDuration, setWorkoutDuration] = useState("");
  const [selectedExercises, setSelectedExercises] = useState([]);
  const [buttonClicked, setButtonClicked] = useState(false);

  const hf = new HfInference(import.meta.env.VITE_ACCESS_KEY);
  const handleMuscleGroupChange = (event) => {
    setMuscleGroups(event.target.value);
  };

  const handleExerciseChange = (event) => {
    const selectedExercisesArray = event.target.value;
    setSelectedExercises(selectedExercisesArray);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("submit");
    setButtonClicked(true);
    if (
      age === "" ||
      gender === "" ||
      fitnessLevel === "" ||
      muscleGroups.length === 0 ||
      workoutDuration === ""
    ) {
      // Handle the error state (e.g., display a message to the user)
      console.error("Please fill in all required fields.");
      return;
    }

    try {
      const response = await hf.textGeneration({
        model: "tiiuae/falcon-7b-instruct",
        inputs: `I am a ${age}-year-old ${gender} ${fitnessLevel} in fitness training. I want to gain ${muscleGroups} muscles by doing exercises for ${workoutDuration} minutes daily, and my workout should include ${selectedExercises}`,
        // inputs: question,
        parameters: {
          max_new_tokens: 120,
          temperature: 1,
        },
      });
      console.log("resp", response);
      setAnswer(response.generated_text);
    } catch (error) {
      console.error("Error fetching answer:", error);
    }
  };

  return (
    <Grid container justifyContent="center" className={styles.formContainer}>
    <Grid item md={6}>
    <form onSubmit={handleSubmit}>
        <TextField
          label="Age"
          sx={{ marginBottom: "1rem" }}
          variant="outlined"
          fullWidth
          value={age}
          onChange={(e) => setAge(e.target.value)}
          error={buttonClicked && age === ""}
          helperText={buttonClicked && age === "" && "Age is required"}
        />
        <FormControl variant="outlined" fullWidth>
          <InputLabel>Gender</InputLabel>
          <Select
            sx={{ marginBottom: "1rem" }}
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            label="Gender"
            error={buttonClicked && gender === ""}
          >
            <MenuItem value="male">Male</MenuItem>
            <MenuItem value="female">Female</MenuItem>
          </Select>
        </FormControl>
        <FormControl variant="outlined" fullWidth>
          <InputLabel>Fitness Level</InputLabel>
          <Select
            sx={{ marginBottom: "1rem" }}
            value={fitnessLevel}
            onChange={(e) => setFitnessLevel(e.target.value)}
            label="Fitness Level"
            error={buttonClicked && fitnessLevel === ""}
          >
            <MenuItem value="beginner">Beginner</MenuItem>
            <MenuItem value="intermediate">Intermediate</MenuItem>
            <MenuItem value="advanced">Advanced</MenuItem>
          </Select>
        </FormControl>
        <FormControl variant="outlined" fullWidth>
          <InputLabel>Target Muscle Groups</InputLabel>
          <Select
            sx={{ marginBottom: "1rem" }}
            multiple
            value={muscleGroups}
            onChange={handleMuscleGroupChange}
            label="Target Muscle Groups"
            error={buttonClicked && muscleGroups.length === 0}
          >
            <MenuItem value="chest">Chest</MenuItem>
            <MenuItem value="back">Back</MenuItem>
            <MenuItem value="legs">Legs</MenuItem>
            {/* Add more muscle group options */}
          </Select>
        </FormControl>
        <TextField
          label="Desired Workout Duration (minutes)"
          variant="outlined"
          fullWidth
          sx={{ marginBottom: "1rem" }}
          type="number"
          value={workoutDuration}
          onChange={(e) => setWorkoutDuration(e.target.value)}
          error={buttonClicked && workoutDuration === ""}
          helperText={
            buttonClicked && workoutDuration === "" && "Duration is required"
          }
        />
        <Button type="submit" variant="contained" color="primary">
          Generate Workout Plan
        </Button>
      </form>
    </Grid><Grid item md={1}/>
      <Grid item xs={12} md={5} sx={{textAlign:'justify'}}>
        <AnswerDisplay answer={answer} />
      </Grid>
    </Grid>
  );
};

export default WorkoutPlanner;
