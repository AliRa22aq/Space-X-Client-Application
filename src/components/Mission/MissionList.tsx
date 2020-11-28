import React from 'react'
import {MissionsInfoQuery} from '../../generated/graphql'
import './style.css'

const className = 'LaunchList';

export interface OwnProps {
  handleIdChange: (newId: number) => void;
}

interface Props extends OwnProps {
  data: MissionsInfoQuery;
}


const MissionList: React.FC<Props> = ({ data, handleIdChange }) => {
  return (
    <div className={className}>
      <h3>Launches</h3>
      <ul className={`${className}__list`}>

        {!!data.launches &&
          data.launches.map(
            (launch, i) =>
              !!launch && (
                <li
                  key={i}
                  className={`${className}__item`}
                  onClick={() => handleIdChange(launch.flight_number!)}
                  >
                  {launch.mission_name} ({launch.launch_year})
                </li>
              ),
          )}

      </ul>
    </div>
  )
}

export default MissionList
