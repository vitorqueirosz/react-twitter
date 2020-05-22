import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }
    body{
        font-family: 'Helvetica Neue', 'Helvetica', Arial, sans-serif;
        text-rendering: optimizeLegibility !important;
        -webkit-font-smoothing: antialiased !important;
        background: ${(props) => props.theme.background};
    }
    button{
        outline: none;
    }
`;

export const Container = styled.div`
    display: flex;
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 30px;
    background: ${(props) => props.theme.background};
`;
export const SideBar = styled.aside`
    background: ${(props) => props.theme.background};
    width: 360px;
    display: flex;
    flex-direction: column;
    padding-left: 80px;
    /* height: 700px; */

    aside {
        display: flex;
        flex-direction: column;
    }
    svg {
        color: ${(props) => props.theme.colorSide};
        margin-right: 15px;
    }

    span {
        /* margin: 10px 0 15px 15px; */
        padding: 15px 0 10px 10px;
        display: flex;
        align-items: center;
        color: ${(props) => props.theme.colorSide};
        font-weight: bold;
        font-size: 18px;
        cursor: pointer;

        &:hover {
            background: ${(props) => props.theme.colorHover2};
            width: 80%;
            border-radius: 16px;
            color: rgb(29, 161, 242);
            svg {
                color: rgb(29, 161, 242);
            }
        }

        &:nth-child(7) {
            color: rgb(29, 161, 242);
            svg {
                color: rgb(29, 161, 242);
            }
        }
        &:nth-child(1) {
            svg {
                color: ${(props) => props.theme.logoColor};
            }
        }
    }
    button {
        margin: 10px 0 10px 0;
        border: 0;
        width: 80%;
        height: 40px;
        border-radius: 20px;
        padding-left: 30px;
        padding-right: 30px;
        background: rgb(29, 161, 242);
        color: ${(props) => props.theme.background2};
        font-weight: bold;
        cursor: pointer;

        &:hover {
            background: rgb(35, 131, 200);
            transition: 0.2s;
        }
    }
    a {
        width: 93%;
        text-decoration: none;
        display: flex;
        justify-content: space-between;
        margin: 180px 0 20px 0;
        padding: 5px;
        border-radius: 25px;
        svg {
            color: ${(props) => props.theme.colorSide2};
        }
        article {
            display: flex;
            /* width: 50%; */
            align-items: center;
            /* justify-content: space-between; */
        }
        div {
            display: flex;
            justify-content: space-between;
        }
        img {
            border-radius: 50%;
            width: 45px;
            height: 100%;
        }
        strong {
            display: flex;
            flex-direction: column;
            color: ${(props) => props.theme.colorSide};
            padding-left: 20px;
            font-size: 15px;

            span {
                margin: 0;
                color: ${(props) => props.theme.colorSide2};
                font-size: 13px;
                font-weight: 300;
                padding: 0;
            }
        }
        &:hover {
            background: ${(props) => props.theme.colorHover2};
            opacity: 0.9;
            transition: 0.2s;
        }
    }
`;

export const Timeline = styled.div`
    background: ${(props) => props.theme.background};
    flex: 1;
    border: 1px solid ${(props) => props.theme.borderColor};
    border-top: none;

    header {
        display: flex;
        padding: 5px 0;
        border-bottom: 1px solid ${(props) => props.theme.borderColor};
    }
    svg {
        margin: 10px 30px 0 20px;
    }
    strong {
        font-size: 18px;
        display: flex;
        flex-direction: column;
        color: ${(props) => props.theme.colorSide};
        font-weight: 800;
        margin-bottom: 2px;
        span {
            color: ${(props) => props.theme.colorSide2};
            font-weight: 300;
            font-size: 12px;
        }
    }
    img {
        width: 99.8%;
        margin-left: 1px;
        height: 220px;
    }
`;
export const Profile = styled.div`
    img {
        width: 130px;
        height: 130px;
        border-radius: 50%;
        margin-top: -75px;
        margin-left: 10px;
        border: 5px solid ${(props) => props.theme.background};
    }
    button {
        border: 1px solid #3bb9e3;
        padding: 10px 20px;
        color: #3bb9e3;
        border-radius: 16px;
        font-weight: bold;
        background: ${(props) => props.theme.background};
        margin: 0px 15px 0 0;
        cursor: pointer;

        &:hover {
            background: rgba(29, 161, 242, 0.1);
        }
    }
    div {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;
export const Infos = styled.aside`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 15px;
    header {
        /* margin-left: 30px; */
        border: 0;
        strong {
            flex-direction: column;
        }
        p {
            color: ${(props) => props.theme.colorSide2};
            font-size: 12px;
            font-weight: 300;
        }
    }
    span {
        font-size: 14px;
        color: ${(props) => props.theme.colorSide};
    }
    svg {
        margin: 0 5px 0 0;
    }
    div {
        flex-direction: column;
        display: flex;
        padding: 10px 0 10px 0;
        p {
            color: ${(props) => props.theme.colorSide2};
            width: 100%;
            display: flex;
            align-items: center;
            font-size: 14px;
        }
    }
    aside {
        display: flex;
        p {
            font-size: 14px;
            font-weight: 300;
            color: ${(props) => props.theme.colorSide2};
            margin-right: 7px;
        }
        strong {
            margin-right: 15px;
            color: ${(props) => props.theme.colorSide};
            font-size: 14px;
        }
    }

    strong {
        /* color: #999; */
        display: flex;
        flex-direction: row;
    }
    svg {
        display: flex;
    }
    p {
        display: flex;
        align-items: center;

        color: ${(props) => props.theme.colorSide2};
    }
`;
export const NavBar = styled.div`
    border-bottom: 1px solid ${(props) => props.theme.borderColor};
    position: relative;
    ul {
        display: flex;
        width: 100%;
        padding-top: 5px;
    }
    li {
        display: flex;
        justify-content: center;
        align-items: center;
        /* line-height: */
        cursor: pointer;
        width: 130px;
        height: 50px;
        list-style: none;
        color: ${(props) => props.theme.colorSide2};
        font-weight: bold;
        font-size: 13px;

        &:nth-child(2) {
            width: 180px;
        }
        &:nth-child(1) {
            border-bottom: 2px solid rgb(1, 161, 242);
            color: rgb(1, 161, 242);
            height: 52px;
        }
        &:hover {
            background: rgba(29, 161, 242, 0.1);
            color: rgb(1, 161, 242);
        }
    }
`;
export const FeedContainer = styled.div`
    ul {
        display: flex;
        flex-direction: column;
        li {
            display: flex;
            padding: 10px 13px 8px 15px;
            border-bottom: 1px solid ${(props) => props.theme.borderColor};

            cursor: pointer;

            &:hover {
                background: ${(props) => props.theme.backgroundSide};
            }
            &:nth-last-child(1) {
                border-bottom: 0;
            }
        }
    }
    aside {
        padding-left: 10px;
    }
    p {
        color: ${(props) => props.theme.colorSide};
        font-size: 13px;
        line-height: 18px;
        /* padding: 0px 0 px 0; */
        /* width: 100%; */
    }
    strong {
        font-size: 13px;
        display: flex;
        flex-direction: row;
        align-items: center;
        p {
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 12px;
            color: ${(props) => props.theme.colorSide2};
            font-weight: 300;
            padding-left: 20px;
        }
        span {
            display: flex;
            align-items: center;
            margin-left: 5px;
        }
    }

    img {
        border-radius: 50%;
        width: 50px;
        height: 55px;
    }
`;
export const Icons = styled.div`
    display: flex;
    align-items: center;

    span {
        display: flex;
        align-items: center;

        color: rgb(110, 118, 125);
        font-size: 13px;
        padding: 10px 60px 0 0;
    }
    svg {
        margin: 0;
        margin-right: 8px;
        color: rgb(110, 118, 125);

        &:nth-child(4) {
            margin-right: 50px;
        }
    }
`;
export const SideWidgets = styled.div`
    width: 480px;
    height: 100%;

    header {
        background: ${(props) => props.theme.backgroundSide};
        width: 300px;
        border-radius: 15px;
        margin: 5px 0 15px 30px;
        display: flex;
        align-items: center;
    }
    input {
        outline: none;
        padding: 13px 20px;
        border: 0;
        color: #eee;
        background: ${(props) => props.theme.backgroundSide};
        /* margin: 5px 0 15px 30px; */
    }
    svg {
        margin-left: 10px;
        color: #d3d3d3;
        cursor: pointer;
    }
    div {
        max-width: 339px;
        border-radius: 50px;
        padding-left: 30px;
        padding-bottom: 10px;

        ul {
            border-radius: 6px;
            background: ${(props) => props.theme.backgroundSide};
            display: flex;
            height: 100%;
            flex-wrap: wrap;
            align-content: flex-start;
            align-items: flex-start;

            li {
                display: flex;
                list-style: none;
                cursor: pointer;

                img {
                    width: 103px;
                    height: 100px;
                    border-radius: 6px 6px 6px 6px;
                    border: 2px solid ${(props) => props.theme.background};
                    &:hover {
                        opacity: 0.8;
                    }
                }
            }
        }
    }
`;

export const SideContents = styled.article`
    background: ${(props) => props.theme.backgroundSide};
    margin-left: 30px;
    max-width: 310px;
    border-radius: 10px;
    /* padding-bottom: 20px; */

    h3 {
        font-weight: 800;
        color: ${(props) => props.theme.colorSide};
        font-size: 17px;
        border-bottom: 1px solid ${(props) => props.theme.borderColor};
        width: 100%;
        padding: 10px 0 7px 10px;
    }
    a {
        text-decoration: none;
        display: flex;
        justify-content: flex-start;
        padding: 18px 0 18px 15px;
        color: rgb(1, 161, 242);
        font-size: 14px;

        &:hover {
            background: ${(props) => props.theme.colorHover};
        }
    }
    div {
        padding: 13px 10px 13px 10px;
        border-radius: 0;
        display: flex;
        align-items: center;
        cursor: pointer;
        border-bottom: 1px solid ${(props) => props.theme.borderColor};
        justify-content: space-between;

        &:hover {
            background: ${(props) => props.theme.colorHover};
        }
        button {
            border: 1px solid #3bb9ea;
            background: none;
            font-weight: bold;
            color: #3bb9ea;
            padding: 0px 10px;
            height: 30px;
            border-radius: 8px;
        }
    }
    article {
        display: flex;
        align-items: center;
        width: 100%;
        strong {
            padding-left: 10px;
            font-weight: bold;
            /* flex-direction: column; */
            color: ${(props) => props.theme.colorSide};
            font-size: 15px;
        }
        span {
            padding-top: 3px;
            color: ${(props) => props.theme.colorSide2};
            font-weight: normal;
            font-size: 12px;
            display: flex;

            flex-direction: column;
        }

        img {
            width: 45px;
            height: 100%;
            border-radius: 50%;
        }
    }
`;

export const SideNews = styled.aside`
    background: ${(props) => props.theme.backgroundSide};

    border-radius: 10px;
    max-width: 310px;
    margin: 10px 0 0 30px;
    width: 100%;
    h3 {
        font-weight: 800;
        color: ${(props) => props.theme.colorSide};
        font-size: 17px;
        width: 100%;
        border-bottom: 1px solid ${(props) => props.theme.borderColor};
        padding: 10px 15px;
    }
    a {
        text-decoration: none;
        color: rgb(1, 161, 242);
        padding: 20px 0 10px 15px;
        display: flex;
        align-items: center;
        font-size: 14px;

        &:hover {
            background: ${(props) => props.theme.colorHover};
        }
    }
    div {
        padding: 8px 10px 10px 15px;
        border-radius: 0;
        width: 100%;
        border-bottom: 1px solid ${(props) => props.theme.borderColor};
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;

        &:hover {
            background: ${(props) => props.theme.colorHover};
        }
        strong {
            color: ${(props) => props.theme.colorSide};
            font-size: 14px;
            display: flex;
            flex-direction: column;
            line-height: 18px;

            span {
                color: ${(props) => props.theme.colorSide2};
                font-weight: normal;
                font-size: 11px;
                padding-bottom: 3px;
            }
        }

        p {
            color: ${(props) => props.theme.colorSide2};
            font-weight: 300;
            font-size: 13px;
            padding-top: 3px;
        }
    }
    img {
        width: 65px;
        height: 100%;
        border-radius: 10px;
    }
`;
