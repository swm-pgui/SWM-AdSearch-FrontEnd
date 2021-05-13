import React, { Fragment, useState } from 'react';
import { Input } from 'antd';
import { Link } from 'react-router-dom'

import SearchCard from '../components/SearchCard';
import CardData from '../datas/CardData.json';
import {useHistory} from "react-router";

const { Search } = Input;


const MainContainer = () => {
    const history = useHistory();
    const [Query, setQuery] = useState('');

    const handleQuery = (e) => {
        setQuery(e.target.value);
    };

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
        </Fragment>
    );
}

export default MainContainer;