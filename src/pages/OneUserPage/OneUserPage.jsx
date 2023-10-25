import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchOneUser } from '../../app/store/oneUserSlice'
import { useParams } from 'react-router-dom'
import styles from './OneUserPage.module.css'

export default function OneUserPage() {
  const {id} = useParams()
  const data = useSelector(store=>store.oneUser.data)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchOneUser(id))
  },[dispatch, id])
  return (
    <div>{data.name}</div>
  )
}
