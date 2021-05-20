import React, { useState, useEffect } from 'react';
import { gql, useQuery } from '@apollo/client'
import _ from "lodash";
import { USERS_QUERY } from '../queries/userQuery'
import Spinner from '../components/spinner';


export default function UsersListScreen(){
  const { data, loading } = useQuery(USERS_QUERY);
  return(
    <>
      { loading ? <Spinner/>:
      <table style={{ flex: 1,
        borderCollapse: 'collapse', 
        borderSpacing: 'collapse', 
        width:'100%',
        border: '1px solid #000'}}>
      <tr>
        <th align="left" >Name</th>
        <th align="left">Lastname</th>
        <th align="left">Addres</th>
        <th align="left">phone</th>
        <th align="left">Country</th>
      </tr>
    
      {data.users.map((user:any) => {
        return <tr>
          <td style={{  border: '1px solid #ddd' }}> {user.name }</td>
          <td style={{  border: '1px solid #ddd' }}> {user.lastName }</td>
          <td style={{  border: '1px solid #ddd' }}> {user.address }</td>
          <td style={{  border: '1px solid #ddd' }}> {user.phone }</td>
          <td style={{  border: '1px solid #ddd' }}> {user.country }</td>
        </tr>
      })}
    </table>
    }
  </>
  )
}


