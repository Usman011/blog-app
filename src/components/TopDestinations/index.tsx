import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { Button, Divider, Typography } from "@mui/material";
import { useViewports } from "helpers/viewports";
import { useState } from "react";
import articlesData from "data/articles.json";

export const TopDestinations = () => {
  const { isDesktop } = useViewports();
  return (
    <Box>
      <Typography variant={isDesktop ? "h4" : "body1"} color="secondary" mt={4}>
        Top Destinations
      </Typography>
      <Divider variant="inset" sx={{ margin: "2rem 0rem" }} />

      <Box display="flex" gap={3} overflow="hidden">
        {articlesData.map((item) => {
          return (
            <Box position="relative">
              <StyledImg src={item.img} />
              <Overlay />
              <StyledText variant={"h4"} color="secondary">
                {item.location}
              </StyledText>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export const Destinations = styled(Button)(() => ({
  padding: "10px 20px",
  borderRadius: "30px",
  maxWidth: "15rem",
}));

export const StyledText = styled(Typography)(() => ({
  position: "absolute",
  top: "0",
  left: "0",
  color: "#fff",
  fontWeight: "500",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 999,
  width: "15rem",
  height: "15rem",
}));

const StyledImg = styled("img")(({ theme }) => ({
  width: "15rem",
  height: "15rem",
  objectFit: "cover",
  borderRadius: ".5rem",
}));

const Overlay = styled(Box)(({ theme }) => ({
  position: "absolute",
  bottom: 0,
  top: 0,
  width: "15rem",
  height: "15rem",
  background: "rgba(0, 0, 0, 0.5)",
  zIndex: "10",
  borderRadius: ".5rem",
}));
