import React from "react";
import { Box, Theme, useTheme } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Badge } from "components/Badge";
import { useViewports } from "helpers/viewports";
import { Flex } from "components/layout";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";


export interface ArticleProps {
  name: string;
  publishedDate: string;
  title: string;
  img: string;
  listView?: boolean;
}

const Article: React.FC<ArticleProps> = ({
  name,
  img,
  publishedDate,
  title,
  listView
}) => {
  const { isDesktop } = useViewports();
  const theme = useTheme<Theme>();
  const isDarkMode: boolean = theme.palette.mode === "dark";

  return (
    <Card>
      <CardActionArea sx={{display: listView ? 'flex' : 'block'}}>
        <Box padding="1rem" width='100%'>
          <CardMedia
            component="img"
            height="220"
            image={img}
            alt="green iguana"
            sx={{borderRadius: '.25rem', width: '100%'}}
          />
        </Box>

        <CardContent>
          <Badge title="Technology" dark={isDarkMode} />
          <Typography
            variant={isDesktop ? "h4" : "body2"}
            color="secondary"
            pb={2}
            fontWeight="500"
          >
            {title}
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
              color="secondary"
            >
              {name}
            </Typography>
            <Typography
              variant={isDesktop ? "subtitle1" : "caption"}
              color="secondary"
            >
            {publishedDate}
            </Typography>
          </Flex>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Article;
