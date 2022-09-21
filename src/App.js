import {RecoilRoot} from "recoil";
import FontButton from "./components/FontButton";
import Text from "./components/Text";
import CharacterCounter from "./components/CharacterCounter";

function App() {
    return (
        <RecoilRoot>
            <FontButton/>
            <Text/>
            <CharacterCounter/>
        </RecoilRoot>
    );
}

export default App;
