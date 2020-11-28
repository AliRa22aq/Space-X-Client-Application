import React from 'react'
import {useLaunchMissionInfoQuery} from '../../generated/graphql'
import MissionInfo  from './MissionInfo';

interface OwnProps {
    id: number;
  }

const MissonInfoContainer = ({ id }: OwnProps) => {

    const { data, loading, error, refetch  } = useLaunchMissionInfoQuery({
        variables: { id: String(id)},
    });

    React.useEffect(() => {
        refetch();
      }, [id]);
        

    if(error)   return <h2>Error...</h2>
    if (!data)  return <h2>Select a flight from the panel</h2>

    return (
        <div>
            <MissionInfo  data = {data}/>
        </div>
    )
};

export default MissonInfoContainer;
