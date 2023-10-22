import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {
  Group,
  Settings,
  Person,
  Directions,
  Message,
  SpeakerGroup,
  Tab,
  RestorePage,
  QuestionAnswer,
  AlarmOnSharp,
  TableChart,
} from '@material-ui/icons';
import { useRouter } from 'next/router';

export const MainListItems: React.FC = () => {
  const router = useRouter();
  return (
    <div>
      <ListItem button onClick={() => router.push('/admin')}>
        <ListItemIcon>
          <Settings />
        </ListItemIcon>
        <ListItemText primary="Settings" />
      </ListItem>
      <ListItem button onClick={() => router.push('/admin/models/User')}>
        <ListItemIcon>
          <Person />
        </ListItemIcon>
        <ListItemText primary="Users" />
      </ListItem>
      <ListItem button onClick={() => router.push('/admin/models/Specialization')}>
        <ListItemIcon>
          <SpeakerGroup />
        </ListItemIcon>
        <ListItemText primary="Specializations" />
      </ListItem>
      <ListItem button onClick={() => router.push('/admin/models/Direction')}>
        <ListItemIcon>
          <Directions />
        </ListItemIcon>
        <ListItemText primary="Directions" />
      </ListItem>
      <ListItem button onClick={() => router.push('/admin/models/Response')}>
        <ListItemIcon>
          <RestorePage />
        </ListItemIcon>
        <ListItemText primary="Responses" />
      </ListItem>
      <ListItem button onClick={() => router.push('/admin/models/Test')}>
        <ListItemIcon>
          <QuestionAnswer />
        </ListItemIcon>
        <ListItemText primary="Tests" />
      </ListItem>
      <ListItem button onClick={() => router.push('/admin/models/Task')}>
        <ListItemIcon>
          <Tab />
        </ListItemIcon>
        <ListItemText primary="Tasks" />
      </ListItem>
      <ListItem button onClick={() => router.push('/admin/models/Answer')}>
        <ListItemIcon>
          <AlarmOnSharp />
        </ListItemIcon>
        <ListItemText primary="Answers" />
      </ListItem>
      <ListItem button onClick={() => router.push('/admin/models/TaskAnswer')}>
        <ListItemIcon>
          <TableChart />
        </ListItemIcon>
        <ListItemText primary="TaskAnswers" />
      </ListItem>
      <ListItem button onClick={() => router.push('/admin/models/MessagerGroup')}>
        <ListItemIcon>
          <Group />
        </ListItemIcon>
        <ListItemText primary="MessagerGroups" />
      </ListItem>
      <ListItem button onClick={() => router.push('/admin/models/Message')}>
        <ListItemIcon>
          <Message />
        </ListItemIcon>
        <ListItemText primary="Messages" />
      </ListItem>
    </div>
  );
};
