import React, { Fragment, useState, useEffect } from 'react';
import { Input } from 'antd';
import { Link } from 'react-router-dom'

import SearchCard from '../components/SearchCard';
import CardData from '../datas/CardData.json';

import {useLocation, useHistory} from "react-router";

const { Search } = Input;

const Data = CardData.body.items;

const SearchContainer = () => {
    const history = useHistory();
    const location = useLocation();

    const Search_Query = location.state.Query;

    const [Items_1, setItems_1] = useState([]);
    const [Items_2, setItems_2] = useState([]);

    const [Query, setQuery] = useState('');

    const handleQuery = (e) => {
        setQuery(e.target.value);
    };


    useEffect(() => {
        console.log(Search_Query);

        let items1 = [];
        let items2 = [];

        for (var i = 0; i < Data.length; i++) {
            if (Data[i].PRDUCT.indexOf(Search_Query) !== -1) items1.push(Data[i]);
            if (Data[i].ENTRPS.indexOf(Search_Query) !== -1) items2.push(Data[i]);
        }

        setItems_1(items1);
        setItems_2(items2);
    }, [Search_Query]);


    return (
        <Fragment>
            <div>
            <Search
                size='large'
                placeholder="검색"
                onSearch={() => {history.push({
                    pathname: "/search",
                    state: {Query: Query}
                })}}
                onChange={handleQuery}
                style={{ width: 500 }}
            />
            </div>
            <div>
                <h1>해당하는 제품명</h1>
            </div>
            <div style={{ alignItems: 'center', justifyContent: 'center', width: 700 }}>
                {Items_1.length > 0 ? 
                Items_1.map((data) => {
                    return <SearchCard data={data} />
                })
                : <h2>해당하는 제품이 없습니다...</h2>}
            </div>
            <div>
                <h1>해당하는 기업명</h1>
            </div>
            <div style={{ alignItems: 'center', justifyContent: 'center', width: 700 }}>
                {Items_2.length > 0 ? 
                Items_2.map((data) => {
                    return <SearchCard data={data} />
                })
                : <h2>해당하는 기업이 없습니다...</h2>}
            </div>
        </Fragment>
    );
}

export default SearchContainer;