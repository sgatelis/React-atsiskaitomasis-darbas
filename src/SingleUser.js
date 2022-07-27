import {useState} from "react";

const SingleUser = ({user}) => {

    const [getShow, setShow] =useState(false)

    function showName() {
        // setShow(!getShow)tiesiog apverciam getShow,t.y.false reiksme arba kitas variantas, tiesiog nusiunciam true reiksme
        
        setShow(true)
    }

    return (
        <div>
            <img src={user.photo} alt=""/>

            {getShow ? <div>{user.username}</div> : <button onClick={showName}>Show Name</button>}
            
        </div>
    );
};

export default SingleUser