import React from 'react'

const DualSwitchButton = ({leftOption, rightOption, switchVariable, setSwitchVariable = value => {}}) => {
  return (
	<div className='SwitchButton-container'>
		<button className={!switchVariable ? "SwitchButton" : "SwitchButton SwitchButton_selected"} onClick={() => setSwitchVariable(true)}>{leftOption}</button>
		<button className={switchVariable ? "SwitchButton" : "SwitchButton SwitchButton_selected"} onClick={() => setSwitchVariable(false)}>{rightOption}</button>
	</div>
  )
}

export default DualSwitchButton