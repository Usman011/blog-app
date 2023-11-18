import React from "react";
import {
  Box,
  useTheme,
  Container as MuiContainer,
  ContainerProps,
} from "@mui/material";

interface ContainerBoxProps {
  children: React.ReactNode;
}

export const Container: React.FC<ContainerBoxProps & ContainerProps> = ({
  children,
}) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        background: theme.palette.primary.main,
        width: "100%",
        height: "100%",
        padding: '4rem 0rem'
      }}
    >
      <MuiContainer maxWidth="lg">
        {children}
      </MuiContainer>
    </Box>
  );
};
