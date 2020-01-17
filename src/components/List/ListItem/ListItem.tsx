import React, { Component } from 'react';

interface ListItemProps {
    name: string;
    id: number;
    del: (id: number) => void;
    change: (event: React.ChangeEvent<HTMLInputElement>, id: number) => void;
}

class ListItem extends Component<ListItemProps, {}>  {
    render() {
        return (
            <div>
                <li>
                    {this.props.name}
                    <button onClick={() => this.props.del(this.props.id)} >del</button>
                    <input onChange={(e) => this.props.change(e, this.props.id)} type="text" value={this.props.name} />
                </li>
            </div>
        );
    }
}

export default ListItem;
