import React, { Component } from 'react';
import { Container, Item, Input, Button } from './Style';

class Search extends Component {
    render() {
        return (
            <Container>
                <Item>
                    <Input  type="text" placeholder={this.props.placeholder} />
                </Item>
                <Item>
                    <Button>{this.props.buttonName}</Button>
                </Item>
            </Container>
        );
    }
}


export default Search;