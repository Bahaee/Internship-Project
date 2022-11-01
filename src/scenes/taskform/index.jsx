import * as React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { Box, Button } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";


const TaskForm = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");


  const handleFormSubmit = (values) => {
    console.log(values);
  };

  return (
    <Box m="20px">
      <Header title="NEXT TASK TO DO" subtitle="New task has to be done !" />

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Task's Id"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.taskId}
                name="taskId"
                error={!!touched.taskId && !!errors.taskId}
                helperText={touched.taskId && errors.taskId}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Task"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.taskName}
                name="taskName"
                error={!!touched.taskName && !!errors.taskName}
                helperText={touched.taskName && errors.taskName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Project"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.project}
                name="project"
                error={!!touched.project && !!errors.project}
                helperText={touched.project && errors.project}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Team"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.team}
                name="team"
                error={!!touched.team && !!errors.team}
                helperText={touched.team && errors.team}
                sx={{ gridColumn: "span 4" }}
              />
              {/* <Box sx={{ minWidth: 120 }}>
                <FormControl
                  variant="filled"
                  fullWidth
                  sx={{ gridColumn: "span 2" }}
                >
                  <InputLabel id="demo-simple-select-label" >Status</InputLabel>
                  <Select
                    variant="filled"
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={values.status}
                    label="Status"
                    name="status"
                    onChange={handleChange}
                    error={!!touched.status && !!errors.status}
                    helperText={touched.status && errors.status}
                  >
                    <MenuItem value={"Started"}>Started</MenuItem>
                    <MenuItem value={"Ongoing"}>Ongoing</MenuItem>
                    <MenuItem value={"Done"}>Done</MenuItem>
                  </Select>
                </FormControl>
              </Box> */}
              <Stack component="form" noValidate spacing={3}>
                <TextField
                  variant="filled"
                  id="dateDebut"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  name="debut"
                  label="Debut"
                  type="date"
                  defaultValue="2022-08-1"
                  sx={{ width: 576 }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Stack>
              <Stack component="form" noValidate spacing={3}>
                <TextField
                  variant="filled"
                  id="dateEnd"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  name="end"
                  label="End"
                  type="date"
                  defaultValue="2022-08-1"
                  sx={{ width: 576, ml: 38}}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Stack>
              <FormControl
                  variant="filled"
                  fullWidth
                  sx={{ gridColumn: "span 4" }}
                >
                  <InputLabel id="demo-simple-select-label" >Priority</InputLabel>
                  <Select
                    variant="filled"
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={values.priority}
                    label="Priority"
                    name="priority"
                    onChange={handleChange}
                    error={!!touched.priority && !!errors.priority}
                    helperText={touched.priority && errors.priority}
                  >
                    <MenuItem value={"Started"}>High</MenuItem>
                    <MenuItem value={"Ongoing"}>Medium</MenuItem>
                    <MenuItem value={"Done"}>Low</MenuItem>
                  </Select>
                </FormControl>
                <FormControl
                  variant="filled"
                  fullWidth
                  sx={{ gridColumn: "span 4" }}
                >
                  <InputLabel id="demo-simple-select-label" >Status</InputLabel>
                  <Select
                    variant="filled"
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={values.status}
                    label="Status"
                    name="status"
                    onChange={handleChange}
                    error={!!touched.status && !!errors.status}
                    helperText={touched.status && errors.status}
                  >
                    <MenuItem value={"Started"}>Started</MenuItem>
                    <MenuItem value={"Ongoing"}>Ongoing</MenuItem>
                    <MenuItem value={"Done"}>Done</MenuItem>
                  </Select>
                </FormControl>
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                New Task TO DO
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

const checkoutSchema = yup.object().shape({
  taskId: yup.string().required("required"),
  taskName: yup.string().required("required"),
  project: yup.string().required("required"),
  team: yup.string().required("required"),
  priority: yup.string().required("required"),
});
const initialValues = {
  taskId: "",
  taskName: "",
  project: "",
  team: "",
  priority: "",
};

export default TaskForm;


