import { Table } from 'react-bootstrap'
import { addCount } from '../store';
import { useDispatch, useSelector } from 'react-redux';

function Cart() {

    let state = useSelector((state) => state);
    let dispatch = useDispatch();

    return (
        <Table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>상품명</th>
                    <th>수량</th>
                    <th>변경하기</th>
                </tr>
            </thead>
            <tbody>
                {
                    state.cart.map((elem, i) => {
                        return (
                            <tr key = {i}>
                                <td>{elem['id']}</td>
                                <td>{elem['title']}</td>
                                <td>{elem['count']}</td>
                                <td><button onClick={() =>{
                                    dispatch(addCount(elem['id']))
                                }}>+1</button></td>
                            </tr>
                        )
                    })
                }

            </tbody>
        </Table>
    )
}

export default Cart;