import gql from 'graphql-tag';

export const MissionsInfo = gql`
    query MissionsInfo {
      launches {
        mission_id
        launch_year
        launch_success
        mission_name
        flight_number
  }
  }
`