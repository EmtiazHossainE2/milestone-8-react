import './App.css';
// import { useEffect, useState } from 'react';

// const firstFrnd = {
//   name: 'Rion',
//   age: 22,
//   home: 'Pirjong'
// }
// const { name, age, home } = firstFrnd

// const nameStyle = {
//   backgroundColor: 'red',
//   color: 'green',
//   padding: '15px',
//   borderRadius: '10px'
// }

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <h2 className='container'>React Core Concept</h2>
//         <div className="friends-details">
//           <p style={nameStyle}>My first friend is {name}</p>
//           <p>He lives in {home}</p>
//           <p style={{ backgroundColor: 'royalblue', padding: '10px', borderRadius: '10px' }}>He is {age} years old </p>
//         </div>
//       </header>
//     </div>
//   );
// }

// export default App;
function App() {
    const countriesName = ['BD', 'India', 'China', 'Pakistan', 'Bhutan']
    // const Polulations = [18, 140, 160, 20]
    const Friends = [
        { name: 'Rion', age: 22, homeTown: 'Pirgonj', mobile: '01785636958' },
        { name: 'Dipta', age: 21, homeTown: 'Rangpur', mobile: '0171234567' },
        { name: 'Ashraful', age: 23, homeTown: 'Dinajpur', mobile: '01354545445' },
        { name: 'Mahin', age: 20, homeTown: 'Rangpur', mobile: '01511111111' },
    ]

    return (

        <div className="App">
            <h2>React Core Concept</h2>
            <div className='country-container'>
                {
                    Friends.map(({ name, homeTown, age, mobile }) =>
                        <div >
                            <Friend Name={name} HomeTown={homeTown} Age={age} Mobile={mobile}></Friend>
                        </div>
                    )
                }
            </div>

            {/* {
        countriesName.map(country => <li>{country}</li>)
      } */}
            {/* {
        countriesName.map(country => <Country Name={country} ></Country>)
      } */}
            {/* {
        Polulations.map(population => <Country Population={population}></Country>)
      } */}
            <h2>Country details</h2>
            <div className='country-container'>
                <Country Name={countriesName[0]} Population="18cr"></Country>
                <Country Name={countriesName[1]} Population="140cr"></Country>
                <Country Name={countriesName[2]} Population="150cr"></Country>
            </div>
        </div>
    )
}
const Friend = (props) => {
    return (
        <div >
            <div className="single-style">
                <h2>Name : {props.Name}</h2>
                <strong>HomeTown : {props.HomeTown}</strong>
                <h2>Age : {props.Age}</h2>
                <p>Mobile : {props.Mobile}</p>
            </div>
        </div>
    )
}
const Country = (props) => {
    return (
        <div>
            <div className='single-style'>
                <h2>My Country name is {props.Name}</h2>
                <p>I live my Country ❤️</p>
                <p>Our Country Population is {props.Population}</p>
            </div>
        </div>
    )
}
export default App;

/* function CounterC() {
  return (
    <div className="App">
      <Counter></Counter>
    </div>
  )
}
const Counter = () => {
  const [count, setCount] = useState(0)
  const increaseCount = () => setCount(count + 1)
  const decreaseCount = () => setCount(count - 1)
  // const increaseCount = () => {
  //   const newCount = count + 1
  //   setCount(newCount)
  // }
  // const decreaseCount = () => {
  //   const newCount = count - 1
  //   setCount(newCount)
  // }
  return (
    <div>
      <h2>Count : {count} </h2>
      <button onClick={increaseCount}>Increase </button>
      <button onClick={decreaseCount}>Decrease </button>
    </div>
  )
}


export default CounterC; */

// const App = () => {
//     return (
//         <div className="App">
//             <ExternalUsers></ExternalUsers>
//         </div>
//     )
// }
// const ExternalUsers = () => {
//     const [users, setUsers] = useState([])
//     useEffect(() => {
//         fetch('https://jsonplaceholder.typicode.com/users')
//             .then(res => res.json())
//             .then(data => setUsers(data))
//     }, [])
//     return (
//         <div>
//             <h2>External Users</h2>
//             <p>{users.length}</p>
//             {
//                 users.map(user => <User Id={user.id} Name={user.name} Email={user.email}></User>)
//             }
//         </div>
//     )
// }
// const User = (props) => {
//     return (
//         <div className='single-user'>
//             <h2>User {props.Id} :   {props.Name} {props.Email}</h2>
//         </div>
//     )
// }
// export default App;