import React, { Fragment, useState } from 'react';
import { Input } from 'antd';

import SearchCard from '../components/SearchCard';
import CardData from '../datas/CardData.json';

const { Search } = Input;


const SearchContainer = () => {
    const Data = CardData.body.items;
    const [Query, setQuery] = useState('');

    const [Items, setItems] = useState();

    const handleQuery = (e) => {
        setQuery(e.target.value);
    };

    const handleSearchButton = () => {
        console.log(Query);
        let items = [];
        for (var i = 0; i < Data.length; i++) {
            if (Data[i].PRDUCT.indexOf(Query) != -1) {
                items.push(Data[i]);
            }
        }
        setItems(items);
    };

    return (
        <Fragment>
            <div>
                <Search
                    placeholder="검색"
                    onSearch={handleSearchButton}
                    onChange={handleQuery}
                    style={{ width: 300 }}
                />
            </div>
            <div>
                {Items && Items.map((data) => {
                    return <SearchCard data={data} />
                })}
            </div>
        </Fragment>
    );
}

export default SearchContainer;