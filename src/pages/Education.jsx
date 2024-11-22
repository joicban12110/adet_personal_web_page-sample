import './Education.css';   

const Education = () => (  
  <div className="container mt-4">  
    <h2 className="text-center mb-4">Education Background</h2>  

    <div className="card custom-card">  
      <div className="card-body">  
        <div className="d-flex align-items-center">  
          <img  
            src="/images/ncf.png"  
            alt="Naga College Foundation Inc."  
            className="school-logo"  
          />  
          <div>  
            <h5 className="card-title">Bachelor's in Computer Science 2023 - Present</h5>  
            <p className="card-text">Naga College Foundation Inc.</p>  
          </div>  
        </div>  
      </div>  
    </div>  

    <div className="card custom-card">  
      <div className="card-body">  
        <div className="d-flex align-items-center">  
          <img  
            src="/images/dsc.png"  
            alt="Dominican School of Calabanga"  
            className="school-logo"  
          />  
          <div>  
            <h5 className="card-title">High School Diploma</h5>  
            <p className="card-text">"DSC" Dominican School of Calabanga, 2016-2022</p>  
          </div>  
        </div>  
      </div>  
    </div>  

    <div className="card custom-card">  
      <div className="card-body">  
        <div className="d-flex align-items-center">  
          <div>  
            <h5 className="card-title">Elementary School Diploma</h5>  
            <p className="card-text">"TSCS II" Tinambac Central 2, 2009-2015</p>  
          </div>  
        </div>  
      </div>  
    </div>  
  </div>  
);  

export default Education;