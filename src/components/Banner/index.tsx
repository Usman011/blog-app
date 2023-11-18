import {
  Typography,
  Box,
  styled,
  Theme,
} from "@mui/material";
import { useViewports } from "helpers/viewports";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Flex } from "components/layout";
import { Badge } from "components/Badge";

export const Banner = () => {
  const { isDesktop } = useViewports();
  return (
    <>
      <Box position="relative">
        <StyledImg
          src="https://source.unsplash.com/random/600x600?sig=1"
          isDesktop={isDesktop}
        />

        <Content>
          <Badge title="Technology" dark />
          <Typography
            variant={isDesktop ? "h2" : "body1"}
            color="white"
            pb={1}
            fontWeight="bold"
          >
            The Impact of Technology on the WorkPlace: Technology is changing
          </Typography>
          <Flex gap="1rem" alignItems="center">
            <AccountCircleIcon
              sx={{
                width: "2rem",
                height: "2rem",
                color: "#d3d3d3",
              }}
            />
            <Typography
              variant={isDesktop ? "subtitle1" : "caption"}
              color="white"
            >
              Tracey Wilson
            </Typography>
            <Typography
              variant={isDesktop ? "subtitle1" : "caption"}
              color="white"
            >
              August 20, 2022
            </Typography>
          </Flex>
        </Content>
        <Overlay />
      </Box>
    </>
  );
};

interface StyledImgProps {
  src: string;
  theme?: Theme;
  isDesktop: boolean;
}
const StyledImg = styled(Box)<StyledImgProps>(({ theme, isDesktop, src }) => ({
  position: "relative",
  width: "100%",
  height: "auto",
  margin: `${theme.spacing(3)} 0rem`,
  backgroundSize: "cover",
  maxHeight: "30rem",
  minHeight: isDesktop ? "30rem" : "20rem",
  borderRadius: ".5rem",
  backgroundImage: `url(${src})`,
  backgroundRepeat: "no-repeat",
}));

const Overlay = styled(Box)(() => ({
  position: "absolute",
  bottom: 0,
  top: 0,
  width: "100%",
  height: "auto",
  maxHeight: "30rem",
  background: "rgba(0, 0, 0, 0.5)",
  zIndex: "10",
  borderRadius: ".5rem",
}));

const Content = styled(Box)(({ theme }) => ({
  position: "absolute",
  bottom: theme.spacing(4),
  padding: "1rem",
  zIndex: 20,
}));
