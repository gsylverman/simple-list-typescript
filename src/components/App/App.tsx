import React, { useState } from 'react';
import List from "../List/List";

interface ListaProps {
    name: string;
    id: number;
}

const App: React.FC = () => {
    const [date, setDate] = useState<ListaProps[]>([]);
    const add = (txt: string) => {
        setDate((old) => ([...old, { name: txt, id: date.length > 0 ? date[date.length - 1].id + 1 : 1 }]))
    };
    const del = (id: number) => {
        setDate(old => {
            return old.filter(item => item.id !== id)
        });
        // let index = -1;
        // date.forEach(item => {
        //     if (item.id === id) {
        //         index = date.indexOf(item);
        //     }
        // });
        // const newArr = [...date]
        // newArr.splice(index, 1);
        // setDate(newArr);
    };

    const change = (event: React.ChangeEvent<HTMLInputElement>, id: number) => {
        const evT = event.target as HTMLInputElement;
        setDate(old => {
            const newA = old.map(item => {
                if (item.id === id) {
                    item.name = evT.value
                }
                return item;
            })
            return newA;
        })
    };
    return (
        <div>
            <List date={date} add={add} del={del} change={change} />
        </div>
    );
};

export default App;
