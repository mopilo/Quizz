import React from 'react';
import {createStackNavigator, createAppContainer} from "react-navigation";
import Quiz from "./src/screen/Quiz";
import QuizIndex from "./src/screen/QuizIndex"

const MainStack = createStackNavigator({
   QuizIndex:{
     screen: QuizIndex,
     navigationOptions: {
       headerTitle: "Quizzes"
     }
   },
   Quiz:{
    screen: Quiz,
    navigationOptions: ({navigation}) => ({
      headerTitle: navigation.getParam("title"),
      headerTintColor: "#fff",
      headerStyle: {
        backgroundColor: navigation.getParam("color"),
        borderBottomColor: navigation.getParam("color")
      }
    })
  }
});
const App = createAppContainer(MainStack);
export default App;
