import logo from './logo.svg';
import './App.css';
import bg from './images/2c453799-867b-4483-b6fb-bd053f5348ae.jpg';
import colors from './colors.module.css';
import utilities from './utilities.module.css';

function App() {
  const msg = "This is a test message";

  const li = ["Item1", "Item2", "Item3", "Item4", "Item5"];
  // console.log(li);

  // let output = [];
  // li.forEach(v => {
  //   // console.log(`<li>${v}</li>`);
  //   output.push(<li>{v}</li>);
  // });
  // console.log(output);

  let output = li.map((v, i) => <li key={i}>{v}</li>);

  const projectDetails = [
    {
      "img": "images/background.jpeg",
      "title": "Project 1",
      "description": "Project 1 Description goes here..."
    },
    {
      "img": "images/background.jpeg",
      "title": "Project 2",
      "description": "Project 2 Description goes here..."
    },
    {
      "img": "images/background.jpeg",
      "title": "Project 3",
      "description": "Project 3 Description goes here..."
    },
    {
      "img": "images/background.jpeg",
      "title": "Project 4",
      "description": "Project 4 Description goes here..."
    },
    {
      "img": "images/background.jpeg",
      "title": "Project 5",
      "description": "Project 5 Description goes here..."
    },
    {
      "img": "images/background.jpeg",
      "title": "Project 6",
      "description": "MODIFIED Project 6 Description goes here..."
    }
  ];

  return (
    <>
      <div className="row2section1">
        {
          projectDetails.map((v, i) => {
            return (
              <div key={i}>
                <img src={v.img} alt="" /><br />
                {v.title}<br />
                {v.description}
              </div>
            )
          })
        }
      </div>
      <h1 className='colorRed'>Heading... </h1>
      <p>Paragraph... </p>

      <p>{msg}</p>

      <ul>
        <li>List item 1</li>
        <li>List item 2</li>
        <li>List item 3</li>
      </ul>

      <ul>{output}</ul>

      <ul>
        {
          li.map((v, i) => <li key={i}>{v}</li>)
        }
      </ul>

      {/* <p><img src='images/Dinesh.jpg' alt='' /></p>
      <p><img src={bg} alt='' /></p>

      <p className={`${colors.textBlue} ${utilities.textBlue} bgRed`}>Paragraph</p> */}
    </>
  );


  // return (
  //   <div>
  //     <div className="row1">
  //       <div className="row1section1">
  //         <div>
  //           <img src="images/Dinesh.jpg" alt="" className="logo" />
  //         </div>
  //         <div>
  //           <h3>Dinesh</h3>
  //           <div>Technical Trainer</div>
  //           <div>Web Developer</div>
  //           <div>Email Me</div>
  //         </div>
  //       </div>
  //       <div className="row1section2">
  //         <div>Projects</div>
  //         <div>About Me</div>
  //         <div>Contact Me</div>
  //       </div>
  //     </div>
  //     <div className="row2">
  //       <h3>Projects / Experiences</h3>
  //       <div className="row2section1">
  //         <div>
  //           <img src="images/background.jpeg" alt="" /><br />
  //           Project 1<br />
  //           Project Description goes here...
  //         </div>
  //         <div>
  //           <img src="images/background.jpeg" alt="" /><br />
  //           Project 1<br />
  //           Project Description goes here...
  //         </div>
  //         <div>
  //           <img src="images/background.jpeg" alt="" /><br />
  //           Project 1<br />
  //           Project Description goes here...
  //         </div>
  //         <div>
  //           <img src="images/background.jpeg" alt="" /><br />
  //           Project 1<br />
  //           Project Description goes here...
  //         </div>
  //         <div>
  //           <img src="images/background.jpeg" alt="" /><br />
  //           Project 1<br />
  //           Project Description goes here...
  //         </div>
  //         <div>
  //           <img src="images/background.jpeg" alt="" /><br />
  //           Project 1<br />
  //           Project Description goes here...
  //         </div>
  //       </div>
  //     </div>
  //     <div className="row3">
  //       <h3>About Me</h3>
  //       <div className="row3section1">
  //         <div>
  //           <h4>Personal Details</h4>
  //           <ul>
  //             <li>ITEM</li>
  //             <li>ITEM</li>
  //             <li>ITEM</li>
  //             <li>ITEM</li>
  //           </ul>
  //         </div>
  //         <div>
  //           <h4>Educational Details</h4>
  //           <ul>
  //             <li>ITEM</li>
  //             <li>ITEM</li>
  //             <li>ITEM</li>
  //             <li>ITEM</li>
  //           </ul>
  //         </div>
  //       </div>
  //     </div>
  //     <div className="row4">
  //       <div>&copy; Copyright. All Rights Reserved.</div>
  //     </div>
  //   </div>
  // );
}

export default App;
