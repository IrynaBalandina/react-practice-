import { useState, useMemo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "nanoid";
import AddProfileForm from "../components/AddProfileForm/AddProfileForm.jsx";
import Section from "../components/Section.jsx";
import Profile from "../components/Profile.jsx";



const UsersPage = () => {
    /*const [users, setUsers] = useState(() => {
        const stringifiedUsers = localStorage.getItem("users");
        const parsedUsers = JSON.parse(stringifiedUsers) ?? [];
    
        return parsedUsers;
      }); // [{...}, {...}, {...}]*/

      const users = useSelector((state)=>state.usersData.users);
      const filter = useSelector((state)=>state.filter.filter)
      const dispatch = useDispatch();

      // const [filter, setFilter] = useState("");
      const [count, setCount] = useState(1);
    
      /*useEffect(() => {
        const stringifiedUsers = JSON.stringify(users);
        localStorage.setItem("users", stringifiedUsers);
      }, [users]);*/
    
      const onAddProfile = (formData) => {
        const finalUser = {
          ...formData,
          id: nanoid(),
        };
        const action = {type:"users/addUser",payload:finalUser }
    dispatch(action);
      /*  setUsers((prevState) => [...prevState, finalUser]);*/
      };
    
      const onDeleteProfile = (profileId) => {
        // "3"
       
        const action = {type:"users/deleteUser", payload:profileId}
        // setUsers(updatedUsers);
        dispatch(action);
      };
    
      const onSayMyName = (profileName) => {
        console.log("profileName: ", profileName);
      };
    
      const filteredUsers = useMemo(
        () =>
          users.filter((user) => {
            for (let i = 0; i <= 400_000_000; i++) 
            return (
              user.name.toLowerCase().includes(filter.toLowerCase().trim()) ||
              user.email.toLowerCase().includes(filter.toLowerCase().trim()) ||
              user.phone.toLowerCase().includes(filter.toLowerCase().trim())
            );
          }),
        [users, filter]
      );
  return (
    <div>
        <div>
      <h1>Hello FSON-108!🎉</h1>
      <button type="button" onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>
    
      <AddProfileForm onAddProfile={onAddProfile} />
      <Section title="Find users by (name, email, phone)">
        <input
          type="text"
          placeholder="Enter keyword to search"
          value={filter}
          onChange={(event) => {
            const action = {type:"filter/setFilter",payload:event.target.value};
            dispatch(action);
          }
        }
        />
        {/* <button
          onClick={() => setFilter("Hi my gorgeos friend on the Internet!")}
          type="button"
        >
          Click to fill the filter
        </button> */}
      </Section>
      <Section title="User list">
        {filteredUsers.map((profileItem) => {
          return (
            <Profile
              key={profileItem.id}
              id={profileItem.id}
              name={profileItem.name}
              phone={profileItem.phone}
              status={profileItem.status}
              email={profileItem.email}
              hasPhysicalAddress={profileItem.hasPhysicalAddress}
              onSayMyName={onSayMyName}
              onDeleteProfile={onDeleteProfile}
            />
          );
        })}
      </Section>
    </div>
    </div>
  )
}

export default UsersPage