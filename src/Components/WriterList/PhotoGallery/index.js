import React, { useState, useCallback } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from 'react-images';
import Box from '@material-ui/core/Box'

const useStyles = makeStyles(theme => ({
    margin: 20,
}));

export default function PhotoGallery(props) {
    const classes = useStyles();
    const { info } = props;

    const photos = info.map((url) => (
        {
            src: url,
            width: 5,
            height: 5
        }
    ))

    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };

    return (
        <>
        <Box className={classes.photoBox}>
            <Gallery photos={photos} onClick={openLightbox} />
            <ModalGateway>
                {viewerIsOpen ? (
                <Modal onClose={closeLightbox}>
                    <Carousel
                    currentIndex={currentImage}
                    views={photos.map(x => ({
                        ...x,
                        srcset: x.srcSet,
                        caption: x.title
                    }))}
                    />
                </Modal>
                ) : null}
            </ModalGateway>
        </Box>
        </>
    );

}