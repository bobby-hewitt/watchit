import React, {useEffect, useRef, useContext, useState} from 'react'
import Context from 'Contexts/global'
import './style.scss'

const Notification = ({text, count}) => {
	const state = useContext(Context)
	const [ show, setShow] = useState(false)
	const  notificationTimer = useRef(false)

	useEffect(() => {
		setShow(true)
		notificationTimer.current = setTimeout(() => {
			setShow(false)
		},5000)
		return () => {
			clearTimeout(notificationTimer.current)
		}
	},[count])

	if (text){
	return(
		<div className={`notificationContainer ${show && 'show'}`}>
			<p className="notificationCopy">{text}</p>
		</div>
	)
	} else {
		return <div/>
	}
}

export default Notification