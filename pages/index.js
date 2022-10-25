import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import { useRouter } from "next/router";
import { loadItems } from "../lib/products";

export default function Home({ items }) {
  const { push } = useRouter();
  const handleClick = (id) => {
    push(`/${id}`);
  };
  return (
    <Container>
      <Grid container>
        <Grid item display="flex" flexWrap="wrap" py={4}>
          {items.map((item) => (
            <Card sx={{ maxWidth: 345, margin: 2 }} key={item.id}>
              <CardMedia
                component="img"
                alt={item.name}
                height="240"
                image={item.image}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  variant="outlined"
                  onClick={() => handleClick(item.id)}
                >
                  Buy Now
                </Button>
              </CardActions>
            </Card>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
}
export async function getStaticProps() {
  const items = await loadItems();
  return {
    props: {
      items,
    },
  };
}
