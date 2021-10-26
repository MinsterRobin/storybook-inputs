import React from "react";
import styled, {useTheme} from "styled-components";
import PropTypes from 'prop-types';

const Layout = styled.div`
    display: flex;
    flex-direction: column;
`;

const InputContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${props => (props.fullWidth && "100%") || "min-content"};
    
    input,textarea {
        font-family: ${props => props.theme.font.family};
        padding:
            ${props =>
                (props.size === "small" && "10px") ||
                (props.size === "medium" && "18px") ||
                "18px"
            }
            ${props => props.endIcon ? "36px" : "12px"}
            ${props =>
                (props.size === "small" && "10px") ||
                (props.size === "medium" && "18px") ||
                "18px"
            }
            ${props => props.startIcon ? "36px" : "12px"}
        ; 
        border: 1px solid
            ${props =>
                (props.error && props.theme.danger) ||
                props.theme.default
            }
        ;
        border-radius: 8px;
        width: ${props => (props.fullWidth && "100%") || "min-content"};
        
        &:focus {
            outline: none;
            border: 1px solid ${props => props.error ? props.theme.danger : props.theme.primary};
        }
        
        &::placeholder {
            color: ${props => props.theme.default};
        }
    }
    
    .icon-start {
        position: absolute;
        left: 12px;
    }
    
    .icon-end {
        position: absolute;
        right: 12px;
    }
`;

const HelperText = styled.p`
    padding-left: 12px;
    font-family: ${props => props.theme.font.family};
    font-weight: 400;
    color: ${props => props.error ? props.theme.danger : props.theme.default};
`;

const Input = ({error, disabled, fullWidth, placeholder, helperText, StartIcon, EndIcon, value, size, multiline, rows}) => {
    const theme = useTheme();
    return (
        <Layout>
            <InputContainer
                error={error}
                disabled={disabled}
                fullWidth={fullWidth}
                size={size}
                multiline={multiline}
                startIcon={StartIcon}
                endIcon={EndIcon}
            >
                {(StartIcon && !multiline) && <StartIcon className={"icon-start"} fill={theme.default}/>}
                {multiline ?
                    <textarea value={value} rows={rows ? rows : "2"} placeholder={placeholder} disabled={disabled && true}/> :
                    <input value={value} placeholder={placeholder} disabled={disabled && true}/>}
                {(EndIcon && !multiline) && <EndIcon className={"icon-end"} fill={theme.default}/>}
            </InputContainer>
            {helperText && <HelperText error={error}>{helperText}</HelperText>}
        </Layout>
    );
};

Input.propTypes = {
    error: PropTypes.bool,
    disabled: PropTypes.bool,
    fullWidth: PropTypes.bool,
    placeholder: PropTypes.string,
    helperText: PropTypes.string,
    StartIcon: PropTypes.object,
    EndIcon: PropTypes.object,
    value: PropTypes.string,
    size: PropTypes.oneOf(["small", "medium"]),
    multiline: PropTypes.bool,
    rows: PropTypes.number
};

export default Input;