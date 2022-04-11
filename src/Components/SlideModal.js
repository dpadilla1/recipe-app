import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

const SlideModal = (
  values
) => {
  var mealInfo = values.mealCard;
  var src = "https://docs.google.com/presentation/d/e/2PACX-1vQeDd-DlowUw-OjN2YEpLpULv1xBvFlyDbP7BazKA0jHl8OartFdacITRsBYa9pEPbogDa3cRltt64X/embed?start=false&loop=false&delayms=3000&";
  src += mealInfo.SlidesLink;

  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  function handleShow() {
    setFullscreen(true);
    setShow(true);
  }

  return (
    <div className='floatCard' style={{ float: 'left' }}>
      <Card style={{ width: '145px' }} >
            <Card.Img variant="top" src={mealInfo.img} onClick={() => handleShow()}/>
            <Card.Body>
                <Card.Title style={{fontSize:"14px"}}>
                    {mealInfo.Name}
                </Card.Title>
            </Card.Body>
        </Card>

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