import { FcShipped } from 'react-icons/fc';
import { ArchiveOutlined } from '@mui/icons-material';
import { GiProgression } from 'react-icons/gi';
import { Chip } from '@mui/joy';

export const ProjectStatus = ({ status }) => {
  const tag = {
    ongoing: { color: 'warning', startDecorator: <GiProgression /> },
    deployed: { color: 'success', startDecorator: <FcShipped /> },
    archived: { color: 'neutral', startDecorator: <ArchiveOutlined /> },
  };

  return (
    <Chip {...tag[status]} variant="soft">
      {status}
    </Chip>
  );
};
