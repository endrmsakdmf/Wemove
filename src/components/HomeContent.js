import React, {Component} from 'react';

class HomeContent extends Component{
    render(){
        return(
            <div className="homeContent">
                <h1>WEMOVE</h1>
                <h2>방학 때 기숙사 짐<br></br>
                들고가지말고<br></br>
                이제부터 1층에<br></br>
                두고가세요
                </h2>

                <ol>
                    <li>픽업</li>
                        기숙사 1층에 짐을 내려놓으세요
                    <li>보관</li>
                        보안, 위생시스템이 갖춰진 부경대 근처 창고에서 안전하게 보관합니다
                    <li>찾기</li>
                        개학날에 기숙사 1층에서 짐을 찾으세요
                </ol>
                <a href="/" onClick={
                    function(e){
                        e.preventDefault();
                        this.props.onChangeMode('information');//information 모드로 상태 설정되면 이용안내 문구 표시
                    }.bind(this)}
                >
                더 알아보기
                </a>

                <h1>
                궁금한점 있으시면 <br></br>
                언제든지 문의주세요
                </h1>
                <h2>카카오톡 플러스친구 '위무브'를 검색해주세요</h2>
                <h2>문의전화 010-3525-0647</h2>
            </div>
        )
    }
}

export default HomeContent;
