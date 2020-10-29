import React from 'react'
import styled from '@emotion/styled'

import Twitter from '../../resources/twitter.svg'
import Reddit from '../../resources/reddit.svg'
import { Author } from '../../contents/authors'

const StyledSharePost = styled.div`
    text-align: center;
    
    div {
        display: flex;
        justify-content: center;
        margin-bottom: 2rem;
    }

    img {
        height: 3rem;
    }

    a {
        &:not(:last-child) {
            margin-right: 2rem;
        }
    }
`

interface SharePostProps {
    title: string
    authors: Author[]
    url: string
}

const SharePost = ({title, authors, url}: SharePostProps) => (
    <StyledSharePost>
        <h4>Share Blog Post</h4>
        <div>
           <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(`${title} by @${authors.map((author) => '@' + author.socialProfiles.twitter)
                          .join(', ')} ${url}`)}`}>
               <img src={Twitter} alt="Twitter" />
            </a>
           <a href={`http://www.reddit.com/submit?url=${encodeURIComponent(`${url}&title=${title}`)}`} target="_blank">
               <img src={Reddit} alt="Reddit" />
            </a> 
        </div>
    </StyledSharePost>
)

export default SharePost
