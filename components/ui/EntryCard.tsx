import React, { FC, DragEvent, useContext } from 'react';
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  CardActions,
} from '@mui/material';
import { Entry } from '../../interfaces';
import { UIContext } from '../../context/ui';

interface Props {
  entry: Entry;
}

export const EntryCard: FC<Props> = ({ entry }) => {

  const { startDragging, stopDragging } = useContext(UIContext);


  const onDragStart = (event: DragEvent) => {
    event.dataTransfer.setData('text', entry._id);

    // Todo: modificar el estado, para indicar que estoy haciendo drag
    startDragging();
  };

  const onDragEnd = () => {
    // Todo: Cancer on drag
    stopDragging();
  };

  return (
    <Card
      sx={{ marginBottom: 1 }}
      // eventos de drag
      draggable
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
    >
      <CardActionArea>
        <CardContent>
          <Typography sx={{ whiteSpace: 'pre-line' }}>
            {entry.description}
          </Typography>
        </CardContent>

        <CardActions
          sx={{ display: 'flex', justifyContent: 'end', paddingRight: 2 }}
        >
          <Typography variant='body2'>Hace 30 min</Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};
