import React, { useRef } from 'react';
import ListItem from "./ListItem/ListItem";

interface ListProps {
    date: { name: string; id: number }[];
    add: (txt: string) => void;
    del: (id: number) => void;
    change: (event: React.ChangeEvent<HTMLInputElement>, id: number) => void;
}

const List: React.FC<ListProps> = ({ date, add, del, change }: ListProps) => {
    const textInput = useRef<HTMLInputElement>(null);
    const adaug = (e: React.KeyboardEvent<HTMLButtonElement> | React.MouseEvent<HTMLButtonElement, MouseEvent>) => {

        const tx = textInput.current as HTMLInputElement;
        add(tx.value);
        tx.value = "";
    }
    const compuneLista = date.map(item => {
        const { name, id } = item;
        return (
            <ListItem
                name={name}
                id={id}
                key={id}
                del={del}
                change={change}
            />
        );
    });

    return (
        <ul>
            {compuneLista}
            <input ref={textInput} type="text" />
            <button onClick={adaug} >Add</button>
        </ul>
    );
};

export default List;
