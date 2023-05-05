import React,{ useEffect, useState} from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

const App=()=>{
const [searchField,setSearchField]=useState('');
const [monsters,setMonsters]=useState([]);
const [filterMonsters,setFilterMonsters]=useState(monsters)


console.log('render');

useEffect(()=>{
  fetch('https://jsonplaceholder.typicode.com/users')
  .then((response)=>response.json())
  .then((users)=>setMonsters(users))
},[])



useEffect(()=>{
  const newFilterMonster=monsters.filter((monster)=>{
    return monster.name.toLocaleLowerCase().includes(searchField);
   })
setFilterMonsters(newFilterMonster)
console.log('effect is firing');
},[monsters,searchField])


const onSearchChange=(event)=>{
  const searchFieldString = event.target.value.toLocaleLowerCase();
  
     setSearchField(searchFieldString)
     
};




  return (
    <div className="App">

<h1 className='app-title'>monsters rolodex</h1>

<SearchBox onChangeHandler={onSearchChange}  placeholder='search text' className='search-box'/>






<CardList monsters={filterMonsters}/>


</div>
    )
}












// class App extends Component {
//   constructor (){
// super();
// this.state={
//  monsters:[],
//  searchText:''
// }
//   }
//   componentDidMount(){
    
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then((response)=>response.json())
//     .then((users)=>this.setState(()=>{
// return {monsters:users}
//     }
//     ))
//   }
  
// onSearchChange=(event)=>{
      
//   const searchText = event.target.value.toLocaleLowerCase();
  
//   this.setState(()=>{
//     return {searchText}
//   })
//        }



//   render()
//   {

// const{monsters,searchText}=this.state;
// const{onSearchChange}=this




//     const filterText=monsters.filter((monster)=>{
// return monster.name.toLocaleLowerCase().includes(searchText);
// })
  
//     return (
//       <div className="App">

// <h1 className='app-title'>monsters rolodex</h1>




//       <SearchBox onChangeHandler={onSearchChange}  placeholder='search text' className='search-box'/>
//       <CardList monsters={filterText}/>
      
//       </div>
//       )
//   }
// }
export default App;
 