import React from 'react';
import Chip from '@mui/material/Chip';
import { AiFillBuild } from 'react-icons/ai';
import { GrDeploy, GrVmMaintenance } from 'react-icons/gr';
import { BiArchive } from 'react-icons/bi';

function StatBadge({ stat }) {
  return (
    <>
      {stat === 'ongoing' ? (
        <Chip variant="soft" color='blue' startDecorator={<AiFillBuild />}>
          {stat}
        </Chip>
      ) : stat === 'deployed' ? (
        <Chip variant="soft" color='green' startDecorator={<GrDeploy />}>
          {stat}
        </Chip>
      ) : stat === 'maintenance' ? (
        <Chip variant="soft" color='yellow' startDecorator={<GrVmMaintenance />}>
          {stat}
        </Chip>
      ) : stat === 'archived' ? (
        <Chip variant="soft" color='gray' startDecorator={<BiArchive />}>
          {stat}
        </Chip>
      ) : (
        <Chip variant="soft" color='gray'>{stat}</Chip>
      )}
    </>
  );
}

export default StatBadge;
