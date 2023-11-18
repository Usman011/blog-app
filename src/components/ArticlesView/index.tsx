import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Button, Divider, Typography } from "@mui/material";
import { Banner } from "components/Banner";
import { useViewports } from "helpers/viewports";
import { Centered } from "components/layout";
import Article from "./Article";
import articlesData from "data/articles.json";

export interface ArticlesViewProps {
  listView?: boolean | undefined;
}

export const ArticlesView: React.FC<ArticlesViewProps> = ({ listView }) => {
  const { isDesktop } = useViewports();
  return (
    <Box>
      <Typography variant={isDesktop ? "h2" : "body1"} color="secondary" mt={4}>
        Top Stories
      </Typography>
      {!listView && <Banner />}
      <Divider variant="inset" sx={{ margin: "2rem 0rem" }} />

      <Grid container spacing={4}>
        {articlesData.map((blog, i) => {
          return (
            <Grid key={i} item sm={listView ? 12 : 6} md={listView ? 6 : 4}>
              <Article
                name={blog.name}
                publishedDate={blog.publishedDate}
                title={blog.title}
                img={blog.img}
                listView={listView}
              />
            </Grid>
          );
        })}
      </Grid>
      {!listView && (
        <Centered mt={5}>
          <LoadMoreArticles variant="outlined" color="secondary">
            View More Articles
          </LoadMoreArticles>
        </Centered>
      )}
    </Box>
  );
};

export const LoadMoreArticles = styled(Button)(() => ({
  padding: "10px 20px",
  borderRadius: "30px",
  maxWidth: "15rem",
}));
