import React, { Fragment, useState } from 'react';
import { Input } from 'antd';

import SearchCard from '../components/SearchCard';
import CardData from '../datas/CardData.json';

const { Search } = Input;


const SearchContainer = () => {
    const Data = CardData.body.items;
    const [Query, setQuery] = useState('');

    const [Items_1, setItems_1] = useState();
    const [Items_2, setItems_2] = useState();

    const handleQuery = (e) => {
        setQuery(e.target.value);
    };

    const handleSearchButton = () => {
        console.log(Query);
        let items1 = [];
        let items2 = [];
        for (var i = 0; i < Data.length; i++) {
            if (Data[i].PRDUCT.indexOf(Query) != -1) items1.push(Data[i]);
            if (Data[i].ENTRPS.indexOf(Query) != -1) items2.push(Data[i]);
        }
        setItems_1(items1);
        setItems_2(items2);
    };

    return (
        <Fragment>
            <div>
                <Search
                    size='large'
                    placeholder="검색"
                    onSearch={handleSearchButton}
                    onChange={handleQuery}
                    style={{ width: 500 }}
                />
            </div>
            <div>
                <h1>해당하는 제품명</h1>
            </div>
            <div>
                {Items_1 && Items_1.map((data) => {
                    return <SearchCard data={data} />
                })}
            </div>
            <div>
                <h1>해당하는 기업명</h1>
            </div>
            <div>
                {Items_2 && Items_2.map((data) => {
                    return <SearchCard data={data} />
                })}
            </div>
        </Fragment>
    );
}

export default SearchContainer;