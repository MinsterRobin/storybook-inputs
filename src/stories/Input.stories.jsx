import React from "react";
import Input from "../components/atoms/Input";
import {THEMES} from "../utils/themes";
import {ThemeProvider} from "styled-components";
import {ReactComponent as CheckIcon} from "./assets/check_icon.svg";
import {ReactComponent as CodeIcon} from "./assets/code_icon.svg";
import {ReactComponent as ImportantIcon} from "./assets/important_icon.svg";
import {ReactComponent as SearchIcon} from "./assets/search_icon.svg";
import {ReactComponent as TrashIcon} from "./assets/trash_icon.svg";

const iconMap = {CodeIcon, CheckIcon, ImportantIcon, SearchIcon, TrashIcon};

export default {
    title:'Example/Button',
    component: Input,
    argTypes: {
        size: {
            control: {
                type: "select",
                options: ["small", "medium"],
            }
        },
        StartIcon: {
            control: {
                type: "select",
                options: {
                    None: '',
                    CheckIcon: 'CheckIcon',
                    TrashIcon: 'TrashIcon',
                    ImportantIcon: 'ImportantIcon',
                    CodeIcon: 'CodeIcon',
                    SearchIcon: 'SearchIcon'
                }
            }
        },
        EndIcon: {
            control: {
                type: "select",
                options: {
                    None: '',
                    CheckIcon: 'CheckIcon',
                    TrashIcon: 'TrashIcon',
                    ImportantIcon: 'ImportantIcon',
                    CodeIcon: 'CodeIcon',
                    SearchIcon: 'SearchIcon'
                }
            }
        }
    }
};

const Template = (args) => {
    const startIcon = iconMap[args.StartIcon];
    const endIcon = iconMap[args.EndIcon];

    return(
        <ThemeProvider theme={THEMES[0]}>
            <Input
                {...args}
                StartIcon={startIcon}
                EndIcon={endIcon}
            />
        </ThemeProvider>
    );
};

export const Default = Template.bind({});
Default.args = {
    size: "medium"
};