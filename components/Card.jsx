import '../components/Card.scss';

const Card = () => (
  <div className="card blue">
    <div className="flex-row flex-justify-space-between flex-align-center">
      <div className="bold text-5">Caja de ahorros</div>
      <div className="light">VENCIO <span className="bold">03/04/2018</span></div>
    </div>
    <div className="flex-row flex-justify-space-between">
      <div className="">
        <div className="light">Consumos al 05/04</div>
        <div className="bold">$313,67</div>
        <div className="bold">U$D130,69</div>
      </div>
      <div>
        <div className="light">Disponible</div>
        <div className="bold">$24.128,45 *</div>
      </div>
    </div>
    <div className="flex-justify-end">
      <div className="light">VER ULTIMO RESUMEN</div>
    </div>
  </div>
);

export default Card;
