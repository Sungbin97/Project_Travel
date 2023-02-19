import { useNavigate } from "react-router-dom";

const Main = () => {
    const navigate = useNavigate();
    const goNewTravel = (e) => {
        console.log('여행계획 세우기');
        
        navigate("/travuler/travlePlans");
        
    };

    return (
        <div>
            <h1 className="main">메인</h1>
            <button onClick="#">로그인</button>
            <button onClick={goNewTravel}>여행계획 세우기</button>
        </div>
    );
}
export default Main;