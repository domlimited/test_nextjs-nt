import {useState,useEffect} from 'react'

const PromotionPage = () => {
    const [fullname, setFullname] = useState(0)
    
    const MouseOver = () => {
        setFullname(fullname + 1)
    }

    useEffect(() => {
        return () => {
            console.log("useEffect_run")
        }
    },)

    return (
        <div>
            <h1 onMouseOver={MouseOver}>{fullname}</h1>
        </div>
    );
    
}
export default PromotionPage;
