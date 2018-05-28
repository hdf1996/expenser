import moment from 'moment';

// TODO: Make this dinamic
const COLORS = {
  '0803': 'orange',
  '1261': 'yellow',
  '8662': 'blue'
}

const CreditCardMovement = ({
  id,
  reason,
  amount_cents,
  amount_currency,
  done_at,
  credit_card_last_four_digits
}) => (
  <div className="flex-row flex-align-center flex-justify-center margin-bottom-15 min-height-40">
    <div className={`color-block ${COLORS[credit_card_last_four_digits]}`} />
    <div className="flex-row flex-1 flex-justify-space-between">
      <div className="flex-column">
        <span className="bold">{reason}</span>
        <span className="light">{moment.utc(done_at).format('DD/MM/YYYY HH:mm')}</span>
      </div>
      <div className="bold flex-align-center flex-justify-center">
        {(amount_cents / 100).toFixed(2)} {amount_currency}
      </div>
    </div>
  </div>
)

export default CreditCardMovement;
