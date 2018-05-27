const CreditCardMovement = ({
  reason,
  amount_cents,
  amount_currency,
  done_at
}) => (
  <div className="flex-justify-space-between margin-bottom-15 min-height-40">
    <div className="flex-column">
      <span className="bold">{reason}</span>
      <span className="light">{done_at}</span>
    </div>
    <div className="bold flex-align-center flex-justify-center">
      {amount_cents / 100} {amount_currency}
    </div>
  </div>
)

export default CreditCardMovement;
