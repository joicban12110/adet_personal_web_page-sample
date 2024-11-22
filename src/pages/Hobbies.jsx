import './Hobbies.css';

const Hobbies = () => (
  <div className="container mt-4">
    <h2 className="text-center mb-4">My Hobbies</h2>
    <div className="row">
      <div className="col-md-3 text-center">
        <img 
          src="/images/gym.png" 
          alt="Gym" 
          className="hobby-icon" 
        />
        <h5>Gym</h5>
        <p>Staying fit and active through workouts.</p>
      </div>
      <div className="col-md-3 text-center">
        <img 
          src="/images/gaming.png" 
          alt="Gaming" 
          className="hobby-icon" 
        />
        <h5>Gaming</h5>
        <p>Exploring new virtual worlds and challenges.</p>
      </div>
      <div className="col-md-3 text-center">
        <img 
          src="/images/photo.png" 
          alt="Photography" 
          className="hobby-icon" 
        />
        <h5>Photography</h5>
        <p>Capturing moments and creativity through the lens.</p>
      </div>
      <div className="col-md-3 text-center">
        <img 
          src="/images/craft.png" 
          alt="Cooking" 
          className="hobby-icon" 
        />
        <h5>Crafting</h5>
        <p>Experimenting or doings things my way.</p>
      </div>
    </div>
  </div>
);

export default Hobbies;
