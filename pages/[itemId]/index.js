import { Button, Grid, Rating, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import { Person, ShoppingCart } from "@mui/icons-material";
import { loadItem } from "../../lib/productDetail";

export default function Item({ item }) {
  return (
    <Container>
      <Grid
        container
        sx={{
          borderRadius: "15px",
          backgroundColor: "#fff",
          minHeight: "650px",
        }}
        mt={5}
        px={4}
        py={6}
      >
        <Grid
          item
          xs={12}
          md={4}
          display="flex"
          alignItems="center"
          justifyContent="center"
          my={{ xs: 4, md: 0 }}
        >
          <img src={item.image} alt={item.name} style={{ width: "60%" }} />
        </Grid>
        <Grid item xs={12} md={8} my="auto">
          <Box display="flex" justifyContent="space-between">
            <Box>
              <Typography component="h1" fontSize={28}>
                {item.title}
              </Typography>
              <Typography color="GrayText">{item.category}</Typography>
              <Typography color="secondary" fontSize={20}>
                $ {item.price}
              </Typography>
            </Box>
            <Box>
              <Rating
                name="rating"
                defaultValue={item.rating.rate}
                sx={{ color: "secondary.main" }}
                precision={0.5}
                readOnly
              />
              <Box display="flex" alignItems="center" justifyContent="end">
                <Person fontSize="small" />
                <Typography color="GrayText">{item.rating.count}</Typography>
              </Box>
            </Box>
          </Box>
          <Box my={8}>
            <Typography component="h2" fontSize={20} mb={1}>
              Description
            </Typography>
            <Typography component="p" color="GrayText">
              {item.description}
            </Typography>
          </Box>
          <Button color="secondary" variant="contained" size="large">
            <ShoppingCart /> Add to Cart
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { itemId: "1" } }, { params: { itemId: "2" } }],
    fallback: true,
  };
}
export async function getStaticProps(context) {
  const item = await loadItem(context.params.itemId);
  return {
    props: {
      item,
    },
  };
}
