import React from 'react'
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader"


const Loading = () => {
	return (
		<div>
			<ClipLoader color={'#000'}  size={100} />
		</div>
	)
}

export default Loading



