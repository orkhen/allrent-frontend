import React, { useState } from 'react'
import './propertyHeader.css'

// import { Modal } from 'react-bootstrap'
import { Modal, Box, Typography, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close'

const PropertyHeader = () => {
    const [liked, setLiked] = useState(false)
    const [showShare, setShowShare] = useState(false);

    const handleShareClick = () => setShowShare(true)

    const handleCloseModal = () => setShowShare(false)

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
        borderRadius: 2,
        animation: 'slide-up 0.5s ease',
    };

    const propertyImg = 'https://allrent.io/storage/medium_frame_WhatsApp%20Image%202023-08-18%20at%2017.07.25-f8d8-decb-2c38-d3c4.webp'
    const propertyTitle = '3 Gozel Qebele A-Frame Villa'

  return (
    <div className="property-detailed-header d-flex justify-content-between">
        <div className="property-detailed-title">
            <div className='d-flex justify-content-between'>
                <div><h5>3 Gozel Qebele A-Frame Villa</h5></div> 
                
                <div className='property-detailed-rating d-flex'>
                    <h5>5.0</h5>
                    <img src="https://allrent.io/homepage/images/svg/details/active_fav.svg" alt="favorite svg"></img>
                </div>
            </div>
        </div>

        <div className="property-detailed-options d-flex">
            <div className="property-detailed-like">
                
                <svg width="20" height="20" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg" className={liked && 'd-none'} onClick={() => setLiked(true)}>
                    <path d="M10 1.52765C7.64418 -0.583106 4.02125 -0.506535 1.75736 1.75736C-0.585786 4.1005 -0.585786 7.8995 1.75736 10.2426L8.58579 17.0711C9.36684 17.8521 10.6332 17.8521 11.4142 17.0711L18.2426 10.2426C20.5858 7.8995 20.5858 4.1005 18.2426 1.75736C15.9787 -0.506535 12.3558 -0.583106 10 1.52765ZM8.82843 3.17157L9.29289 3.63604C9.68342 4.02656 10.3166 4.02656 10.7071 3.63604L11.1716 3.17157C12.7337 1.60948 15.2663 1.60948 16.8284 3.17157C18.3905 4.73367 18.3905 7.26633 16.8284 8.82843L10 15.6569L3.17157 8.82843C1.60948 7.26633 1.60948 4.73367 3.17157 3.17157C4.73367 1.60948 7.26633 1.60948 8.82843 3.17157Z" fill="#1D1D1D"></path>
                </svg>

                <svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={!liked && 'd-none'} onClick={() => setLiked(false)}>
                    <path d="M13.7454 2.9917C12.1331 2.9917 10.7554 4.14093 9.99845 4.93324C9.24153 4.14093 7.86691 2.9917 6.25538 2.9917C3.47768 2.9917 1.53845 4.92785 1.53845 7.69939C1.53845 10.7532 3.94691 12.7271 6.27691 14.6363C7.37691 15.5386 8.51538 16.4709 9.38845 17.5048C9.53538 17.6779 9.75076 17.7779 9.97691 17.7779H10.0215C10.2485 17.7779 10.4631 17.6771 10.6092 17.5048C11.4838 16.4709 12.6215 15.5379 13.7223 14.6363C16.0515 12.7279 18.4615 10.754 18.4615 7.69939C18.4615 4.92785 16.5223 2.9917 13.7454 2.9917Z" fill="#FE4343"></path>
                </svg>
                
                
                <p>Bəyən</p>
            </div>
            
            <div className="property-detailed-share">
                <svg width="20" height="20" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={handleShareClick}>
                    <path d="M6.08334 14.5464C7.76609 14.5464 9.13022 13.1823 9.13022 11.4995C9.13022 9.81677 7.76609 8.45264 6.08334 8.45264C4.4006 8.45264 3.03647 9.81677 3.03647 11.4995C3.03647 13.1823 4.4006 14.5464 6.08334 14.5464Z" stroke="#1D1D1D" stroke-width="1.73333" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M16.9167 19.9634C18.5994 19.9634 19.9635 18.5992 19.9635 16.9165C19.9635 15.2338 18.5994 13.8696 16.9167 13.8696C15.2339 13.8696 13.8698 15.2338 13.8698 16.9165C13.8698 18.5992 15.2339 19.9634 16.9167 19.9634Z" stroke="#1D1D1D" stroke-width="1.73333" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M16.9167 9.12988C18.5994 9.12988 19.9635 7.76575 19.9635 6.08301C19.9635 4.40027 18.5994 3.03613 16.9167 3.03613C15.2339 3.03613 13.8698 4.40027 13.8698 6.08301C13.8698 7.76575 15.2339 9.12988 16.9167 9.12988Z" stroke="#1D1D1D" stroke-width="1.73333" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M8.79166 10.1453L14.2083 7.43701M8.79166 12.8537L14.2083 15.562L8.79166 12.8537Z" stroke="#1D1D1D" stroke-width="1.73333" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
                <p>Paylaş</p>
            </div>
        </div>

        {/* <Modal show={showShare} onHide={handleCloseModal}>
            <Modal.Header closeButton>
                <Modal.Title>Share This Property</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                hi
            </Modal.Body>
        </Modal> */}

        <Modal
            open={showShare}
            onClose={handleCloseModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <IconButton
                    aria-label="close"
                    onClick={handleCloseModal}
                    sx={{
                        position: 'absolute',
                        left: 8,
                        top: 8,
                    }}
                >
                    <CloseIcon />
                </IconButton>
                <div className="modal-content mt-4">
                    <h5>Bu elanı paylaşın</h5>
                    
                    <div className="modal-property d-flex gap-3 align-items-center">
                        <img src={propertyImg} className='modal-property-image' />

                        <div className='d-flex align-items-center gap-4'>
                            <div>
                                <p className='mb-0'>{propertyTitle}</p>
                            </div>

                            <div className='property-detailed-rating d-flex'>
                                <p className='modal-rating mb-0'>5.0</p>
                                <img src="https://allrent.io/homepage/images/svg/details/active_fav.svg" alt="favorite svg"></img>
                            </div>
                        </div>
                    </div>

                    <div className="modal-socials mt-4">
                        <div className="modal-social-box d-flex gap-3 align-items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width={24   } height={24} viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false">
                                <path d="M25 5a4 4 0 0 1 4 4v17a5 5 0 0 1-5 5H12a5 5 0 0 1-5-5V10a5 5 0 0 1 5-5h13zm0 2H12a3 3 0 0 0-3 3v16a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V9a2 2 0 0 0-2-2zm-3-6v2H11a6 6 0 0 0-6 5.78V22H3V9a8 8 0 0 1 7.75-8H22z"></path>
                            </svg>

                            <p className='mb-0'>Linki kopyala</p>
                        </div>

                        <div className="modal-social-box d-flex gap-3 align-items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" height={24} width={24} viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false">
                            <path fill="#25d366" d="M32 0v32H0V0z"></path><path fill="#FFF" d="m4 28 1.7-6.16a11.82 11.82 0 0 1-1.6-5.95C4.1 9.33 9.46 4 16.05 4a11.9 11.9 0 0 1 8.45 3.49A11.8 11.8 0 0 1 28 15.9a11.94 11.94 0 0 1-17.66 10.45zm6.63-3.8a9.93 9.93 0 0 0 15.35-8.3A9.9 9.9 0 0 0 16.05 6a9.92 9.92 0 0 0-9.93 9.9c0 2.22.65 3.88 1.75 5.63l-1 3.64 3.76-.98zm11.36-5.52c-.07-.13-.27-.2-.57-.35-.3-.15-1.75-.86-2.03-.96-.27-.1-.46-.15-.66.15s-.77.96-.94 1.15-.35.23-.65.08c-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.48-1.75-1.65-2.04s-.02-.46.13-.6l.44-.52c.15-.17.2-.3.3-.5.1-.2.05-.36-.02-.51-.08-.15-.67-1.6-.92-2.2-.24-.57-.48-.5-.66-.5l-.57-.01a1.09 1.09 0 0 0-.8.37c-.27.3-1.03 1.01-1.03 2.46s1.06 2.86 1.2 3.06c.16.2 2.1 3.18 5.08 4.45.7.3 1.26.5 1.69.63.7.22 1.36.19 1.87.11.57-.08 1.75-.71 2-1.4s.25-1.28.17-1.4z"></path>
                        </svg>

                            <p className='mb-0'>WhatsApp</p>
                        </div>

                        <div className="modal-social-box d-flex gap-3 align-items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" height={24} width={24} viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false">
                            <path fill="#1877F2" d="M32 0v32H0V0z"></path><path fill="#FFF" d="M22.94 16H18.5v-3c0-1.27.62-2.5 2.6-2.5h2.02V6.56s-1.83-.31-3.58-.31c-3.65 0-6.04 2.21-6.04 6.22V16H9.44v4.63h4.06V32h5V20.62h3.73l.7-4.62z"></path>
                        </svg>

                            <p className='mb-0'>Facebook</p>
                        </div>

                        <div className="modal-social-box d-flex gap-3 align-items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 102 102" id="instagram">
                                <defs><radialGradient id="a" cx="6.601" cy="99.766" r="129.502" gradientUnits="userSpaceOnUse"><stop offset=".09" stop-color="#fa8f21"></stop><stop offset=".78" stop-color="#d82d7e"></stop></radialGradient><radialGradient id="b" cx="70.652" cy="96.49" r="113.963" gradientUnits="userSpaceOnUse"><stop offset=".64" stop-color="#8c3aaa" stop-opacity="0"></stop><stop offset="1" stop-color="#8c3aaa"></stop></radialGradient></defs><path fill="url(#a)" d="M25.865,101.639A34.341,34.341,0,0,1,14.312,99.5a19.329,19.329,0,0,1-7.154-4.653A19.181,19.181,0,0,1,2.5,87.694,34.341,34.341,0,0,1,.364,76.142C.061,69.584,0,67.617,0,51s.067-18.577.361-25.14A34.534,34.534,0,0,1,2.5,14.312,19.4,19.4,0,0,1,7.154,7.154,19.206,19.206,0,0,1,14.309,2.5,34.341,34.341,0,0,1,25.862.361C32.422.061,34.392,0,51,0s18.577.067,25.14.361A34.534,34.534,0,0,1,87.691,2.5a19.254,19.254,0,0,1,7.154,4.653A19.267,19.267,0,0,1,99.5,14.309a34.341,34.341,0,0,1,2.14,11.553c.3,6.563.361,8.528.361,25.14s-.061,18.577-.361,25.14A34.5,34.5,0,0,1,99.5,87.694,20.6,20.6,0,0,1,87.691,99.5a34.342,34.342,0,0,1-11.553,2.14c-6.557.3-8.528.361-25.14.361s-18.577-.058-25.134-.361" data-name="Path 16"></path><path fill="url(#b)" d="M25.865,101.639A34.341,34.341,0,0,1,14.312,99.5a19.329,19.329,0,0,1-7.154-4.653A19.181,19.181,0,0,1,2.5,87.694,34.341,34.341,0,0,1,.364,76.142C.061,69.584,0,67.617,0,51s.067-18.577.361-25.14A34.534,34.534,0,0,1,2.5,14.312,19.4,19.4,0,0,1,7.154,7.154,19.206,19.206,0,0,1,14.309,2.5,34.341,34.341,0,0,1,25.862.361C32.422.061,34.392,0,51,0s18.577.067,25.14.361A34.534,34.534,0,0,1,87.691,2.5a19.254,19.254,0,0,1,7.154,4.653A19.267,19.267,0,0,1,99.5,14.309a34.341,34.341,0,0,1,2.14,11.553c.3,6.563.361,8.528.361,25.14s-.061,18.577-.361,25.14A34.5,34.5,0,0,1,99.5,87.694,20.6,20.6,0,0,1,87.691,99.5a34.342,34.342,0,0,1-11.553,2.14c-6.557.3-8.528.361-25.14.361s-18.577-.058-25.134-.361" data-name="Path 17"></path><path fill="#fff" d="M461.114,477.413a12.631,12.631,0,1,1,12.629,12.632,12.631,12.631,0,0,1-12.629-12.632m-6.829,0a19.458,19.458,0,1,0,19.458-19.458,19.457,19.457,0,0,0-19.458,19.458m35.139-20.229a4.547,4.547,0,1,0,4.549-4.545h0a4.549,4.549,0,0,0-4.547,4.545m-30.99,51.074a20.943,20.943,0,0,1-7.037-1.3,12.547,12.547,0,0,1-7.193-7.19,20.923,20.923,0,0,1-1.3-7.037c-.184-3.994-.22-5.194-.22-15.313s.04-11.316.22-15.314a21.082,21.082,0,0,1,1.3-7.037,12.54,12.54,0,0,1,7.193-7.193,20.924,20.924,0,0,1,7.037-1.3c3.994-.184,5.194-.22,15.309-.22s11.316.039,15.314.221a21.082,21.082,0,0,1,7.037,1.3,12.541,12.541,0,0,1,7.193,7.193,20.926,20.926,0,0,1,1.3,7.037c.184,4,.22,5.194.22,15.314s-.037,11.316-.22,15.314a21.023,21.023,0,0,1-1.3,7.037,12.547,12.547,0,0,1-7.193,7.19,20.925,20.925,0,0,1-7.037,1.3c-3.994.184-5.194.22-15.314.22s-11.316-.037-15.309-.22m-.314-68.509a27.786,27.786,0,0,0-9.2,1.76,19.373,19.373,0,0,0-11.083,11.083,27.794,27.794,0,0,0-1.76,9.2c-.187,4.04-.229,5.332-.229,15.623s.043,11.582.229,15.623a27.793,27.793,0,0,0,1.76,9.2,19.374,19.374,0,0,0,11.083,11.083,27.813,27.813,0,0,0,9.2,1.76c4.042.184,5.332.229,15.623.229s11.582-.043,15.623-.229a27.8,27.8,0,0,0,9.2-1.76,19.374,19.374,0,0,0,11.083-11.083,27.716,27.716,0,0,0,1.76-9.2c.184-4.043.226-5.332.226-15.623s-.043-11.582-.226-15.623a27.786,27.786,0,0,0-1.76-9.2,19.379,19.379,0,0,0-11.08-11.083,27.748,27.748,0,0,0-9.2-1.76c-4.041-.185-5.332-.229-15.621-.229s-11.583.043-15.626.229" data-name="Path 18" transform="translate(-422.637 -426.196)"></path>
                            </svg>

                            <p className='mb-0'>Instagram</p>
                        </div>
                    </div>
                </div>
            </Box>
        </Modal>
    </div>
  )
}

export default PropertyHeader
