import './Numbers.css';

const numbers = [
  { value: '32,594', label: 'Number of Clients' },
  { value: '25', label: 'Years of Experience' },
  { value: '1,029', label: 'Employees' },
  { value: '10,200', label: 'Cups of Coffee' },
];

function Numbers() {
  return (
    <section className="section numbers-section">
      <div className="container numbers">
        {numbers.map((item) => (
          <div className="number-box" key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Numbers;
