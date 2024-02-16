import { useEffect, useState } from "react";
import { useAsyncError, useParams } from "react-router-dom";
import { Nav } from "react-bootstrap";

function Detail(props) {

    let [tab, setTab] = useState(0);
    let { id } = useParams();
    if (id > props.members.length || isNaN(id)) {
        id = 0;
    }
    let member = props.members.find(member => member['id'] == id);
    let [fade, setFade] = useState('')

    useEffect(() => {
        let timer = setTimeout(() =>{
            setFade('end')
        }, 100);
        return() => {
            clearTimeout(timer);
            setFade('');
        };
    }, [member]); 

// Q. setTimeout 왜 씁니까
// 리액트 18버전 이상부터는 automatic batch 라는 기능이 생겼습니다.
// state 변경함수들이 연달아서 여러개 처리되어야한다면 state 변경함수를 다 처리하고 마지막에 한 번만 재렌더링됩니다. 
// 그래서 'end' 로 변경하는거랑 ' ' 이걸로 변경하는거랑 약간 시간차를 뒀습니다.
// 찾아보면 setTimeout 말고 flushSync() 이런거 써도 될 것 같기도 합니다. automatic batching을 막아줍니다.


    return (
        <div className={`container start ${fade}`}>
            <div className="row">
                <div className="col-md-6">
                    <img src={process.env.PUBLIC_URL + `/myImg/prod${member['id']}.png`} width='100%' alt={member.title} />
                </div>
                <div className="col-md-6">
                    <h4 className="pt-5">{member.title}</h4>
                    <p>{member.content}</p>
                    <p>{member.price}</p>
                    <button className="btn btn-danger">주문하기</button>
                </div>
            </div>
            <Nav variant="tabs" defaultActiveKey="link0">
                <Nav.Item>
                    <Nav.Link eventKey="link0" onClick={() => {
                        setTab(0);
                    }}>상세정보</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link1" onClick={() => {
                        setTab(1);
                    }}>리뷰</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link2" onClick={() => {
                        setTab(2);
                    }}>반품/교환정보</Nav.Link>
                </Nav.Item>
            </Nav>
            <TabContent tab={tab} />
        </div>
    )
}

function TabContent({ tab }) {

    // if (tab == 0){
    //     return <div>상세정보</div>
    // }
    // if (tab == 1){
    //     return <div>리뷰</div>
    // }
    // if (tab == 2){
    //     return <div>반품/교환정보</div>
    // }
    return (
        [<div>상세정보</div>, <div>리뷰</div>, <div>반품/교환정보</div>][tab]
    )
}

export default Detail;