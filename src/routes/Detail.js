import { useParams } from "react-router-dom";

function Detail(props) {

    let { id } = useParams();
    
    if (id > props.members.length){
        id = 0;
    }

    let member = props.members.find(member => member['id'] == id);

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img src={process.env.PUBLIC_URL + `/myImg/prod${member['id'] + 1}.png`} width='100%' alt={member.title} />
                </div>
                <div className="col-md-6">
                    <h4 className="pt-5">{member.title}</h4>
                    <p>{member.content}</p>
                    <p>{member.price}</p>
                    <button className="btn btn-danger">주문하기</button>
                </div>
            </div>
        </div>
    )
}

export default Detail;