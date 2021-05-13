import React, { Fragment, useState, useEffect } from 'react';
import { Input } from 'antd';
import { Link } from 'react-router-dom'

import SearchCard from '../components/SearchCard';
import CardData from '../datas/CardData.json';

import {useLocation, useHistory} from "react-router";
import logo from '../logo.png';

import './SearchContainer.css';


const { Search } = Input;

const Data = CardData.body.items;

const SearchContainer = () => {
    const history = useHistory();
    const location = useLocation();

    const Search_Query = location.state.Query;

    const [Items, setItems] = useState([]);

    const [Query, setQuery] = useState('');

    const handleQuery = (e) => {
        setQuery(e.target.value);
    };


    useEffect(() => {
        console.log(Search_Query);

        let items = [];

        for (var i = 0; i < Data.length; i++) {
            if (Data[i].PRDUCT.indexOf(Search_Query) !== -1 || Data[i].ENTRPS.indexOf(Search_Query) !== -1) items.push(Data[i]);
        }

        setItems(items);
    }, [Search_Query]);


    return (
        <Fragment>
            <div className="SearchApp">
                <div className="LeftSide">
                    <Link to='/'>
                        <img
                            src={ logo }
                            className="SubLogo"
                            alt='AdSearch'
                        />
                    </Link>
                </div>
                <div className="MiddleSide">
                    <div className="SubSearchBar">
                        <Search
                            size='large'
                            placeholder={Search_Query}
                            onSearch={() => {history.push({
                                pathname: "/search",
                                state: {Query: Query}
                            })}}
                            onChange={handleQuery}
                            style={{ width: 500 }}
                        />
                    </div>
                    <div className="ResultBox">
                        <div>
                            <h1>검색 결과</h1>
                        </div>
                        <div style={{ alignItems: 'center', justifyContent: 'center', width: 1200 }}>
                            {Items.length > 0 ? 
                            Items.map((data) => {
                                return <SearchCard data={data} />
                            })
                            : <h2>해당하는 제품이 없습니다...</h2>}
                        
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default SearchContainer;