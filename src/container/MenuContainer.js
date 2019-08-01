import React from 'react'

// class MenuContainer extends React.Component {

//   render() {
//     const sortTerm = this.props.sortOption
//     const setTerm = this.props.setTerm
//     return (
//       <div> 
//         <div>Filter: 
//           <input type="radio" value="greased" onChange={e=> setTerm("sortOption", e.target.value)} checked={sortTerm=== "greased"} />Greased 
//           <input type="radio" value="non-greased" onChange={e=> setTerm("sortOption", e.target.value)} checked={sortTerm=== "non-greased"} />Non Greased 
//           <input type="radio" value="all" onChange={e=> setTerm("sortOption", e.target.value)} checked={sortTerm === "all"} />All
//         </div>
//         <div>Sort by:
//           <select onChange={e => setTerm("filterOption", e.target.value)}>
//             <option value="">All</option>
//             <option value="name">Name</option>
//             <option value="weight">Weight</option>
//           </select>
//         </div>
//       </div>
//     )
//   }
// }

const MenuContainer = (props) => {
  const sortTerm = props.sortOption
  const setTerm = props.setTerm
  return (
    <div> 
      <div>Filter: 
        <input type="radio" value="greased" onChange={e=> setTerm("sortOption", e.target.value)} checked={sortTerm=== "greased"} />Greased 
        <input type="radio" value="non-greased" onChange={e=> setTerm("sortOption", e.target.value)} checked={sortTerm=== "non-greased"} />Non Greased 
        <input type="radio" value="all" onChange={e=> setTerm("sortOption", e.target.value)} checked={sortTerm === "all"} />All
      </div>
      <div>Sort by:
        <select onChange={e => setTerm("filterOption", e.target.value)}>
          <option value="">All</option>
          <option value="name">Name</option>
          <option value="weight">Weight</option>
        </select>
      </div>
    </div>
  )
}

export default MenuContainer