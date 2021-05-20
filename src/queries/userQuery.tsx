
import { gql } from '@apollo/client'
export const USERS_QUERY = gql`
query User {
  users {
    id
    name
    lastName
    address
    phone
    country
  }
}
`