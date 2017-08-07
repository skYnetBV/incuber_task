import React, {Component} from 'react';
import StyledWrap from './styled';

import {Avatar, Info, Navigation} from '../../components';

import { parseData } from '../../utils';

class Wrap extends Component {
    state = {
        displayTooltip: false,
        avatarUri: '',
        info: {
            name: '',
            email: '',
            birthday: '',
            location: '',
            phone: '',
            pass: ''
        },
        activeIcon: 'name'
    };

    componentDidMount() {
        this.fetchData();
    }

    avatarMouseEnter = () => {
        this.setState({
            displayTooltip: true
        });
    };

    avatarMouseOut = () => {
        this.setState({
            displayTooltip: false
        });
    };

    navigationMouseEnter = e => this.setState({
        activeIcon: e.target.classList[0]
    });

    fetchData = () => {
        fetch('https://randomuser.me/api/')
            .then(res => res.json())
            .then(data => data.results[0])
            .then(result => {
                this.setState({
                    avatarUri: result.picture.large,
                    info: {
                        name: `${result.name.first} ${result.name.last}`,
                        email: result.email,
                        birthday: parseData(result.dob),
                        location: result.location.street,
                        phone: result.phone,
                        pass: result.login.password
                    }
                });
            });
    };

    render() {
        return (
            <StyledWrap>
                {Avatar({
                    text: "New",
                    altText: "Avatar",
                    newUser: this.fetchData,
                    out: this.avatarMouseOut,
                    enter: this.avatarMouseEnter,
                    avatarUri: this.state.avatarUri,
                    displayTooltip: this.state.displayTooltip
                })}

                {Info({
                    info: this.state.info,
                    display: this.state.activeIcon
                })}

                {Navigation({
                    active: this.state.activeIcon,
                    enter: this.navigationMouseEnter,
                    iconClassNames: Object.keys(this.state.info)
                })}
            </StyledWrap>
        )
    }
}

export default Wrap;