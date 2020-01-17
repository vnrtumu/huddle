import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import AllTasksScreen from '../screens/AllTasksScreen';
import NewTaskScreen from '../screens/NewTaskScreen';
import CountinuedTaskScreen from '../screens/CountinuedTaskScreen';
import CompletedTaskScreen from '../screens/CompletedTaskScreen';
import PendingTaskScreen from '../screens/PendingTaskScreen';
import OnHoldTaskScreen from '../screens/OnHoldTaskScreen';
import CreateNewTaskScreen from '../screens/CreateNewTaskScreen';
import EditTaskScreen from '../screens/EditTaskScreen';

const TaskNavigator = createStackNavigator({
  AllTasks: {
    screen: AllTasksScreen,
  },
  NewTask: {
    screen: NewTaskScreen,
  },
  Countinued: {
    screen: CountinuedTaskScreen,
  },
  Pending: {
    screen: PendingTaskScreen,
  },
  OnHold: {
    screen: OnHoldTaskScreen,
  },
  Completed: {
    screen: CompletedTaskScreen,
  },
  CreateNew: {
    screen: CreateNewTaskScreen,
  },
  EditTask: {
    screen: EditTaskScreen,
  },
});

export default createAppContainer(TaskNavigator);
