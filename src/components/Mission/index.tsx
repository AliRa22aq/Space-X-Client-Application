import React from 'react';
import {useMissionsInfoQuery} from '../../generated/graphql';
import MissionList from './MissionList';
import {OwnProps} from './MissionList'


const MissonContainer= (props: OwnProps) => {
    const {data,error, loading} = useMissionsInfoQuery();

    if(loading) return <h2>Loading...</h2> 
    if(error || !data)   return <h2>Error...</h2>
    

    return (
        <div>
            <MissionList data = {data} {...props} />
        </div>
    )
}

export default MissonContainer
