import React from 'react';
import seoul from './seoul.jpg'

const HomeContent = () => {

    const imageUrl = window.innerWidth >= 650 ? seoul : seoul;

    return (
        <div className="homeContent" >
            <div className="Home-content1" style={{backgroundImage: `url(${imageUrl})` }} >
              <h1>WEMOVE</h1>
              <h2>방학 때 기숙사 짐<br></br>
               들고가지말고<br></br>
               이제부터 1층에<br></br>
               두고가세요
               </h2>
            </div>
            <div className="Home-content2">
              <video autoplay ></video>
                <h2>
                <div className="Home-content2-card">
                  1. 기숙사 1층에 짐을 내려놓으세요<br></br><br></br>
                  2. 보안, 위생시스템이 갖춰진 부경대 근처 창고에서 안전하게 보관합니다<br></br><br></br>
                  3. 개강 날에 기숙사 1층에서 짐을 찾으세요<br></br>
                </div>
                </h2>
               <br></br>
               <a href='/' onClick={
                   function(e){
                   e.preventDefault();
                   this.props.onChangeMode('information');
                   }.bind(this)}
               >
               더 알아보기
               </a>
            </div>
            <div className="Home-content3">
               <h2>카카오톡 플러스친구 ‘위무브’를 검색해주세요</h2>
               <h2>문의전화 010-3525-0647</h2>
            </div>
        </div>
    );
};


export default HomeContent;
