import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const SlideModal = (mealInfo) => {
  mealInfo = mealInfo.mealInfo;
  var src = "https://docs.google.com/presentation/d/e/2PACX-1vQeDd-DlowUw-OjN2YEpLpULv1xBvFlyDbP7BazKA0jHl8OartFdacITRsBYa9pEPbogDa3cRltt64X/embed?start=false&loop=false&delayms=3000&";
  src += mealInfo.SlidesLink;
  console.log("src: "+ src);

  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  function handleShow() {
    setFullscreen(true);
    setShow(true);
  }

  return (
    <div>
      <Button variant="outline-primary" size="sm" onClick={handleShow} style={{fontSize:"8px"}}>
        More Info
      </Button>

      <Modal show={show} fullscreen={fullscreen} onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <iframe title={mealInfo.ID} className="iframe3" width='100%' height='700'
              src={src} mozallowfullscreen="true" webkitallowfullscreen="true">
          </iframe>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default SlideModal;