import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function NotFound() {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate('/');
        }, 2000);
    })
    return(<>
        <h1>找不到頁面</h1>
        <Link to={'/'}>回首頁</Link>
    </>)
}

export default NotFound