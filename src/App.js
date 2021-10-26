import React from "react";
import styled, {ThemeProvider} from "styled-components";
import {THEMES} from "./utils/themes";
import Input from "./components/atoms/Input";
import GlobalStyles from "./utils/GlobalStyles";
import {ReactComponent as CheckIcon} from "./assets/check_icon.svg";
import {ReactComponent as CodeIcon} from "./assets/code_icon.svg";
import {ReactComponent as ImportantIcon} from "./assets/important_icon.svg";
import {ReactComponent as SearchIcon} from "./assets/search_icon.svg";
import {ReactComponent as TrashIcon} from "./assets/trash_icon.svg";

const Layout = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 40px;
    min-width: 320px;
`;

function App() {
    return (
        <ThemeProvider theme={THEMES[0]}>
            <GlobalStyles theme={THEMES[0]}/>
            <Layout>
                <Input placeholder={"Placeholder"} size={"small"}/>
                <Input placeholder={"Placeholder"} error size={"medium"}/>
                <Input placeholder={"Placeholder"} fullWidth size={"medium"}/>
                <Input StartIcon={CheckIcon} disabled placeholder={"Placeholder"}/>
                <Input helperText={"small thing"} EndIcon={CodeIcon} size={"small"}/>
                <Input multiline />
                <Input multiline error rows={5}/>
                <Input multiline size={"small"} rows={3}/>
            </Layout>
        </ThemeProvider>
    );
}

export default App;
