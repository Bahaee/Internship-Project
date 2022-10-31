import { Box, Typography } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataProjects } from "../../data/mockData";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import { date } from "yup";
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';

const Projects = () => 
{
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "project",
     headerName: "Projects",
     cellClassName: "name-column--cell"
     },
    {
      field: "description",
      headerName: "Description",
      flex: 1,
    },
    {
      field: "team",
      headerName: "Team",
      flex: 1
    },
    {
      field: "start",
      headerName: "Start",
      flex: 1,
    },
    {
      field: "end",
      headerName: "End",
      type: date,
      flex: 1,
      
    },
    {
      field: "status",
      headerName: "Status",
      flex: 1,
      renderCell: ({ row: { status } }) => {
        return (
          <Box
            width="60%"
            m="0"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={
              status === "Done"
                ? colors.greenAccent[600]
                : status === "Ongoing"
                ? colors.blueAccent[500]
                : colors.redAccent[600]
            }
            borderRadius="4px"
          >
            <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
              {status}
            </Typography>
          </Box>
        );
      },
    },
    {
      field: "action",
      headerName: "Action",
      flex: 1,
      renderCell: ({ row: { action } }) => {
        return (
          <Box display = "flex" justifyContent="space-between">
              <Box
                width="40%"
                m="0 auto"
                p="5px"
                display="flex"
                justifyContent="center"
                backgroundColor={colors.blueAccent[500]}
                borderRadius="4px"
                sx={{ mt: 1, mb: 1 }}
              >
                <VisibilityOutlinedIcon />
              </Box>
              <Box
                width="40%"
                m="0 auto"
                p="5px"
                display="flex"
                justifyContent="center"
                backgroundColor={colors.greenAccent[600]}
                borderRadius="4px"
                sx={{ m: 1 }}
              >
                <EditOutlinedIcon />
              </Box>
              <Box
                width="40%"
                m="0 auto"
                p="5px"
                display="flex"
                justifyContent="center"
                backgroundColor={colors.redAccent[500]}
                borderRadius="4px"
                sx={{ mt: 1, mb: 1 }}
              >
                <DeleteOutlinedIcon />
              </Box>
            </Box>
          );
        },
      },
    ]

  return (
    <Box m="20px">
      <Header
        title="Projects"
        subtitle="Projects on work"
      />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={mockDataProjects}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Projects;