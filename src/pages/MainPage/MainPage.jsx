import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../app/store/usersSlice";
import UserCard from "../../entities/userCard/UserCard";
import Avatar from '../../shared/assets/images/maxresdefault.jpg'

export default function MainPage() {
  const data = useSelector(store=>store.users.data)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchUsers())
  },[dispatch])


  const res = data.map(
    user=><UserCard 
    key={user.id} 
    id={user.id}
    name={user.name} 
    city={user?.address?.city}
    companyName={user?.company?.name} 
    image={Avatar}/>)

  return <div>
    <h1>Активные</h1>
    <div>
      {res}
      </div>
      </div>;
}
