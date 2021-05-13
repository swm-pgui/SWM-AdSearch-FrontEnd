import React, { useEffect } from 'react';
import './SearchCard.css';



const SearchCard = ({ data, query }) => {
    const { json_data } = data;
    const PRDUCT = data["name"];
    const ENTRPS = data["company"];
    const ADRES1 = data["address"];
    const FOUND_CN = data["violationDetail"];
    const DSPS_DT = data["disposalDate"];
    const DSPS_CMMND = data["disposalCommand"];
    const VIOLT = data["violationStatue"];
    
    var regex = new RegExp(query, "g");

    const pre_PRDUCT = PRDUCT.indexOf(query) !== -1 ? (PRDUCT === query ? "<span class='highlight'>" + query + "</span>" : PRDUCT.replace(regex, "<span class='highlight'>" + query + "</span>")) : PRDUCT;
    const pre_ENTRPS = ENTRPS.indexOf(query) !== -1 ? (ENTRPS === query ? "<span class='highlight'>" + query + "</span>" : ENTRPS.replace(regex, "<span class='highlight'>" + query + "</span>")) : ENTRPS;

    return (
        <div className="CardBox">
        <div className="card-image"></div>
        <div className="card-text">
            <h2>제품명 : <span dangerouslySetInnerHTML={ {__html: pre_PRDUCT} } /></h2>
            <h2>업체명 : <span dangerouslySetInnerHTML={ {__html: pre_ENTRPS} } /></h2>
            {ADRES1 != "null" ? <h3>주소 : {ADRES1}</h3> : ""}
            {FOUND_CN != "null" ? <h3>허위광고 적발 내용 : {FOUND_CN}</h3> : ""}
            {DSPS_DT != "null" ? <h3>행정처분일자 : {DSPS_DT}</h3> : ""}
            {DSPS_CMMND != "null" ? <h3>처분명 : {DSPS_CMMND}</h3> : ""}
            {VIOLT != "null" ? <h3>위반법령 : {VIOLT}</h3> : ""}
        </div>
        </div>
    );
};
export default SearchCard;