'use client'
import React, { useState } from 'react'
import { FiShare } from 'react-icons/fi'
import { AiOutlineClose } from 'react-icons/ai'


import {
    EmailShareButton,
    FacebookShareButton,
    InstapaperShareButton,
    LinkedinShareButton,
    RedditShareButton,
    TelegramShareButton,
    TwitterShareButton,
    WhatsappShareButton,
    WhatsappIcon,
    EmailIcon,
  } from "react-share";

const ShareModal = ({
    url
}: {
    url: string;
}) => {

    const [isOpen, setIsOpen] = useState(false)

    const handleOnClick = () => {
        setIsOpen(true);
    }
    return (
        <div className='relative'>
            <span className={`${isOpen ? 'invisible ' : 'visible absolute right-0'} cursor-pointer`} onClick={handleOnClick}>
                <FiShare size={30} />
            </span>

            <div
            className={`
            transition-all
            ${isOpen ? 'visible flex flex-col opacity-1 gap-2 absolute right-0 top-0' : 'invisible opacity-0'}
            `}
            >
                <div className='self-end pt-2 cursor-pointer' onClick={() => setIsOpen(false)}>
                    <AiOutlineClose size={24} />
                </div>
                <div className=' flex gap-2  rounded-lg  '>
                <WhatsappShareButton url={url} title='Take a look at this update.'>
                    <WhatsappIcon size={32} round />
                    </WhatsappShareButton>

                <EmailShareButton url={url} subject='Take a look at this update'>
                    <EmailIcon size={32} round/>
                </EmailShareButton>
                </div>

            </div>
        </div>
    )
}

export default ShareModal
