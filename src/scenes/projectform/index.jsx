import * as React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { Box, Button } from "@mui/material";
// import {TextField} from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
// import dayjs from "dayjs";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

const ProjectForm = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");


  const handleFormSubmit = (values) => {
    console.log(values);
  };

  return (
    <Box m="20px">
      <Header title="ADD NEW PROJECT" subtitle="New Project To Add !" />

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
                label="Project's Code"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.projectCode}
                name="projectCode"
                error={!!touched.projectCode && !!errors.projectCode}
                helperText={touched.projectCode && errors.projectCode}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Project's Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.projectName}
                name="projectName"
                error={!!touched.projectName && !!errors.projectName}
                helperText={touched.projectName && errors.projectName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Description"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.description}
                name="description"
                error={!!touched.description && !!errors.description}
                helperText={touched.description && errors.description}
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
              <Box sx={{ minWidth: 120 }}>
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
                              {/* <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Address 2"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address2}
                name="address2"
                error={!!touched.address2 && !!errors.address2}
                helperText={touched.address2 && errors.address2}
                sx={{ gridColumn: "span 4" }}
              /> */}
              </Box>
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
                  sx={{ width: 360 }}
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
                  sx={{ width: 360, ml: 11}}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Stack>
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Add New Project
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

const checkoutSchema = yup.object().shape({
  projectCode: yup.string().required("required"),
  projectName: yup.string().required("required"),
  description: yup.string().required("required"),
  team: yup.string().required("required"),
  status: yup.string().required("required"),
});
const initialValues = {
  projectCode: "",
  projectName: "",
  description: "",
  team: "",
  status: "",
};

export default ProjectForm;


