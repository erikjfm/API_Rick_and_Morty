import {gql} from 'apollo-boost';

export const GET_CHARACTERS = gql`
    query {
        characters {
          results {
            id
            name
            status
            species
            origin{name}
            location{name}
            image
          }
          
        }
    }
`;