import React from "react";
import ConfirmButton from "./ConfirmButton";

const buttonCount = 3


export default function MontyConfirm({ formId, isDisabled }) {
  const [validIdx, setValidIdx] = React.useState(Math.floor(Math.random() * buttonCount))
  const [revealedIdx, setRevealedIdx] = React.useState(-1)
  const [userSelectedIdx, setUserSelectedIdx] = React.useState(-1);
  const [revealAll, setRevealAll] = React.useState(false);

  const buttonArray = new Array(buttonCount).fill(null).map((e, idx) =>
    <ConfirmButton
      key={idx}
      valid={idx === validIdx}
      selected={userSelectedIdx === idx}
      onClick={onButtonSelected}
      revealed={idx === revealedIdx || revealAll}
      idx={idx}
    />)

  function onButtonSelected(idx) {
    if (userSelectedIdx < 0) {
      setUserSelectedIdx(idx)
      const idxToBeRevealed = buttonArray.findIndex(button => (button.props.valid === false && button.props.idx !== idx))
      setRevealedIdx(idxToBeRevealed);
    }
    else {
      setRevealAll(true);
      if (idx === validIdx) {
        userSelectedValidButton(idx);
      }
      else {
        userSelectedInvalidButton(idx);
      }
    }
  }

  function userSelectedValidButton() {

  }

  function userSelectedInvalidButton() {

  }

  return (
    <fieldset form={formId} disabled={isDisabled}>
      {buttonArray}
    </fieldset>
  )
}