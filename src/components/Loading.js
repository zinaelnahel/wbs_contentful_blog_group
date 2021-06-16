import React from 'react'
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader"

const emo = css`
position: absolute;
top: 50%;
left: 50%;
transform: translate (50%, -50%);
`


const Loading = () => {
	return (
		<div>
			<ClipLoader css={emo} color={'#93c1e2'} size={150} />
		</div>
	)
}

export default Loading



