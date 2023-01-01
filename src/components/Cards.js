import React,{useState} from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import YouTubeIcon from '@mui/icons-material/YouTube';
import ArticleIcon from '@mui/icons-material/Article';
import LaunchIcon from '@mui/icons-material/Launch';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));


const Cards = ({data}) => {
  const {
    details,
    flight_number,
    launch_year,
    links,
    mission_name,
    rocket,
    launch_site,
    launch_success,
    upcoming
  } = data;

  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

 
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        {links.mission_patch_small && <CardMedia
          component="img"
          height="100%"
          image={links.mission_patch_small}
          alt="img not available"

        />}
         <Divider variant="middle" />
        <CardContent>
          <Box display='flex'  justifyContent='space-between'>
            <Typography variant="body2" gutterBottom >
              Flight {flight_number} 
            </Typography>
            <Typography variant="body2" gutterBottom >
              {launch_year}
            </Typography>
          </Box>
         
          <Typography fontWeight='bold' gutterBottom variant="body2" component="div">
           Mission: {mission_name} 
          </Typography>

          <Typography fontWeight='bold' gutterBottom variant="body2" component="div">
           Rocket: {rocket.rocket_name || rocket.rocket_type} 
          </Typography>

          <Typography gutterBottom variant="body2" component="div">
           Launch Site: {launch_site.site_name || "NA"} 
          </Typography>

          <Typography gutterBottom variant="body2" component="div">
           Launch Success: {launch_success===true ? "Success" : "Failure"} 
          </Typography>

          <Typography gutterBottom variant="body2" component="div">
           Upcoming: {upcoming===true ? "YES" : "No"} 
          </Typography>
        </CardContent>
        <Divider variant="middle" />
        <CardActions disableSpacing>

          {links.video_link && <IconButton aria-label="youtube">
            <a href={links.video_link} target="_blank"  rel="noreferrer">
              <YouTubeIcon color='action' fontSize='small'/>
            </a>
          </IconButton>}

          {links.wikipedia && <IconButton aria-label="wiki">
            <a href={links.wikipedia} target="_blank"  rel="noreferrer">
              <ArticleIcon color='action' fontSize='small' />
            </a>
          </IconButton>}

          {links.article_link && <IconButton aria-label="article">
            <a href={links.article_link} target="_blank"  rel="noreferrer">
              <LaunchIcon color='action' fontSize='small' />
            </a>
          </IconButton>}
          {details && <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>}
        </CardActions>

        <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="body2">{details}</Typography>
          
        </CardContent>
      </Collapse>
      </CardActionArea>
    </Card>
  )
}

export default Cards