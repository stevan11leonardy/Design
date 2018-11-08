import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';

const styles = {
  root: {
    flexGrow: 1,
  },
  card: {
    display: 'flex',
    maxWidth: 345,
  },
  media: {
    width: '50%',
    objectFit: 'cover',
  },
  cardActionArea: {
    display: 'flex',
  }
};

const ListItem = (props) => (
  <Card className={props.classes.card}>
    <CardActionArea className={props.classes.cardActionArea}>
      <CardMedia
        component="img"
        alt={props.alt}
        className={props.classes.media}
        height="140"
        image={props.image}
        title={props.title}
      />
      <CardContent className={props.classes.cardContent}>
        <Typography gutterBottom variant="h4" component="h2" >
          {props.text}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
);

const data = [
  {
    image: 'https://a0.muscache.com/4ea/air/v2/pictures/c886d45a-57be-4a72-912b-bbae26b4c0ed.jpg?',
    text: 'Homes',
    alt: 'Hotel',
    title: 'Homes'
  },
  {
    image: 'https://a0.muscache.com/4ea/air/v2/pictures/c886d45a-57be-4a72-912b-bbae26b4c0ed.jpg?',
    text: 'Restaurants',
    alt: 'Chair',
    title: 'Retaurants'
  },
  {
    image: 'https://a0.muscache.com/4ea/air/v2/pictures/c886d45a-57be-4a72-912b-bbae26b4c0ed.jpg?',
    text: 'Experiences',
    alt: 'Mountain',
    title: 'Experiences'
  },
]

const ImgMediaCard = (props) => {
  const {classes} = props;
  return (
      <div className={classes.root}>
        <Grid container spacing={24}>
        {data.map((element) => (
          <Grid item md={4}>
            <ListItem
              classes={classes}
              image={element.image}
              text={element.text}
              alt={element.alt}
              title={element.title}
            />
          </Grid>
        ))}
        </Grid>
      </div>
  );
}

ImgMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImgMediaCard);