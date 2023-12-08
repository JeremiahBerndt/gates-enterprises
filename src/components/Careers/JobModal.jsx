import { Modal, Box, Typography } from "@mui/material";
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { useTheme } from "@material-ui/core";

const JobModal = ({ isModalOpen, toggleModal, description }) => {
  const theme = useTheme();

  const nodeOptions = {
    renderMark: {
      [MARKS.BOLD]: (text) => <Typography component="b" fontWeight={800} fontSize="1rem">{text}</Typography>,
    },
    renderNode: {
      [BLOCKS.UL_LIST]: (node, children) => <ul style={{ listStyle: 'revert'}}>{children}</ul>,
      [BLOCKS.OL_LIST]: (node, children) => <Typography component="ol" style={{ listStyle: 'revert'}}>{children}</Typography>,
      [BLOCKS.LIST_ITEM]: (node, children) => <Typography component="li" color="primary">{children}</Typography>,
      [BLOCKS.PARAGRAPH]: (node, children) => <Typography component="div" variant="body1" fontSize="1rem" color="primary">{children}<br /><br /></Typography>,
      [BLOCKS.HEADING_6]: (node, children) => <Typography variant="h5" color="primary" fontSize="1rem">{children}<br /><br /></Typography>,
    },
  };
  const reactElems = documentToReactComponents(description, nodeOptions);

  return (
    <Modal
      open={isModalOpen}
      onClose={toggleModal}
      aria-labelledby="job description"
      aria-describedby="modal-modal-description"
    >
      <Box sx={{
        width: '80%',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        p: 4,
        // ' *': {
        //   fontSize: '0.8rem'
        // },
        [theme.breakpoints.up('lg')]: {
          height: 800,
          width: 800,
          p: 8,
        },
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        overflow: 'scroll'
      }}>
        <Typography component="div" id="modal-modal-description" sx={{ mt: 2 }}>
          {reactElems}
        </Typography>
      </Box>
    </Modal>
  )
}

export default JobModal;