import {RecoilRoot} from "recoil";
import FontButton from "./components/FontButton";
import Text from "./components/Text";
import CharacterCounter from "./components/CharacterCounter";
import TodoList from "./components/Todo/TodoList";

function App() {
    return (
        <RecoilRoot>
            <FontButton/>
            <Text/>
            <CharacterCounter/>
            <TodoList/>
        </RecoilRoot>
    );
}

export default App;
