import {createStackNavigator, createAppContainer} from "react-navigation";
import Quiz from "./screen/Quiz";

const MainStack = createStackNavigator({
   Quiz:{
     screen: Quiz,
     navigationOptions: {
       headerTitle: "Quizzes"
     }
   }
});
const Navigation = createAppContainer(MainStack);
export default Navigation;
