import './Team.css';

const team = [
  { name: 'Rachel Simmons', role: 'Managing Partner', photo: '/images/person_1.jpg' },
  { name: 'Adam Haddad', role: 'Head of Tax', photo: '/images/person_2.jpg' },
  { name: 'Ethan Brooks', role: 'Audit Director', photo: '/images/person_3.jpg' },
  { name: 'Joseph Mensah', role: 'Payroll Manager', photo: '/images/person_4.jpg' },
  { name: 'Diane Walsh', role: 'Senior Accountant', photo: '/images/person_5.jpg' },
  { name: 'Helen Carter', role: 'Client Advisor', photo: '/images/person_6.jpg' },
];

// "Our Leadership" section on the About page
function Team() {
  return (
    <section className="section team">
      <div className="container">
        <div className="team-heading">
          <span className="caption">Our Team</span>
          <h2 className="title-with-line center">Our Leadership</h2>
        </div>

        <div className="team-grid">
          {team.map((person) => (
            <div className="person" key={person.name}>
              <img src={person.photo} alt="" />
              <div className="person-content">
                <h3>{person.name}</h3>
                <span className="role">{person.role}</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit morbi hendrerit elit</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;
