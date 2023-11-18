import { Box, styled, Theme } from "@mui/material";
import { useViewports } from "helpers/viewports";
import React from "react";

interface BadgeProps {
  title: string;
  dark?: boolean;
}

export const Badge: React.FC<BadgeProps> = ({ title, dark }) => {
  const { isDesktop } = useViewports();
  return (
    <CustomBadge dark={dark} isDesktop={isDesktop}>
      {title}
    </CustomBadge>
  );
};

interface CustomBadgeProps {
  dark?: boolean;
  theme?: Theme;
  isDesktop: boolean;
}
const CustomBadge = styled(Box)<CustomBadgeProps>(
  ({ theme, dark, isDesktop }) => ({
    display: "inline-block",
    padding: isDesktop ? `${theme.spacing(1)} ${theme.spacing(2)}` : '3px 6px',
    background: dark ? theme.palette.neutral.dark : theme.palette.neutral.light,
    color: dark ? theme.palette.neutral.light : theme.palette.neutral.dark,
    border:` 1px solid ${ theme.palette.neutral.dark}`,
    borderRadius: theme.shape.borderRadius,
    fontWeight: 400,
    fontSize: isDesktop ? "1rem" : ".6rem",
    marginBottom: '.5rem',
    boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
    zIndex: 20
  })
);
