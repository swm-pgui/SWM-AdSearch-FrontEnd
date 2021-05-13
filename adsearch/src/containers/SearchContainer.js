import React, { Fragment } from 'react';
import { Input } from 'antd';

import SearchCard from '../components/SearchCard';
import CardData from '../datas/CardData.json'

const { Search } = Input;


const SearchContainer = () => {
    return (
        <Fragment>
            <div>
                <Search
                    placeholder="검색"
                    onSearch={(value) => console.log(value)}
                    style={{ width: 300 }} 
                />
            </div>
            <div>
                {CardData.body.items.map((data) => {
                    return <SearchCard data={data} />
                })}
            </div>
        </Fragment>
    );
}

export default SearchContainer;