import {useEffect, useState} from "react";
import {collection, getDocs} from "firebase/firestore";
import {db} from "../firebase.js";


const IncomesOutcomes = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        getDocs(collection(db, 'Categories')).then(querySnapshot => {
            const tempCategories = [];

            querySnapshot.forEach((doc) => {
                tempCategories.push(doc.data());
            })

            setCategories(tempCategories);
        });
    }, []);


    return (
        <div className="incomesOutcomes">
            {categories.map(({category}) => (
                <div>
                    <h2>{category}
                        <label> | Czas: <input type="time"/></label>
                        <label> <input type="date"/></label>
                        <label> Kwota: <input type="text"/></label>
                    </h2>
                </div>))}

            <form>
                <label>Kategoria: <input type="text"/></label>
                <label> | Czas: <input type="time"/></label>
                <label> | : <input type="date"/></label>
                <label> | Kwota: <input type="text"/></label>
                <label> <input type="submit"/></label>
            </form>


        </div>

    )
}
export default IncomesOutcomes
