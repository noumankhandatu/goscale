/* eslint-disable react/prop-types */
import { Button } from "@mui/material";

const AppButton = ({ fontSize }) => {
  return (
    <Button
      size="large"
      color="primary"
      variant="contained"
      sx={{ borderRadius: 8, fontWeight: "bold", textTransform: "capitalize", fontSize: fontSize }}
    >
      View Plans
    </Button>
  );
};

export default AppButton;
