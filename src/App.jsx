import {useState, useEffect} from 'react'
import moneyIcon from './assets/money-bill-wave-solid.svg'
import './App.css'
import {collection, getDocs} from "firebase/firestore";
import {db} from './firebase.js'

// import {auth} from './firebase.js'
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


// createUserWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//         // Signed in
//         const user = userCredential.user;
//         // ...
//     })
//     .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         // ..
//     });



function App() {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        getDocs(collection(db, 'Categories')).then(querySnapshot => {
            const tempCategories = [];

            querySnapshot.forEach((doc) => {
                tempCategories.push(doc.data());
            })

            setCategories(tempCategories);
        });
    },[]);


    return (
        <div className="App">
            {/*{categories.map(({category}) => (*/}
            {/*    <div>*/}
            {/*    <h2>{category}</h2>*/}
            {/*    </div>*/}
            {/*    ))}*/}
            <h1>Savey</h1>
            <img src={moneyIcon}  style={{fontSize: "20px"}} className="logoMoney" alt="Money logo"/>

            <div className="card">

                <p>
                    Welcome user!
                </p>
            </div>
            <div>
                <p className="login-facebook">Login via Facebook</p>
                <p className="login-google">Login via Google</p>
                <p className="login-mail">Login via Mail</p>
            </div>
        </div>
    )
}

export default App
