import SearchIcon from "@mui/icons-material/Search";
import { Box, styled } from "@mui/material";

const SearchBar = () => {
  return (
    <SearchBox>
      <SearchIcon />
      <StyledInput type="text" placeholder="Search Articles" />
    </SearchBox>
  );
};

export default SearchBar;

export const SearchBox = styled(Box)(({ theme }) => ({
  border: `1px solid ${theme.palette.secondary.main}`,
  display: "flex",
  alignItems: "center",
  padding: ".2rem 1rem",
  borderRadius: "1rem",
}));

const StyledInput = styled("input")(({ theme }) => ({
  background: theme.palette.primary.main,
  color: "inherit",
  padding: theme.spacing(1),
  borderWidth: "0px", 
  outline: "none",
  "&:focus": {
    borderColor: theme.palette.primary.main,
  },
}));
