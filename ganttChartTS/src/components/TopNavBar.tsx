import 'bootstrap/dist/css/bootstrap.css';
import '../css/TopNavBar.css'

const TopNavBar = ({user} : {user:any}) => {

  const doNothing = () =>{
    console.log("clicked");
  }


  return (
    <>
      <div className='topnav'>
          <a href="/" className='title'>Gantt Chart</a>
          <a href={'/dashboard'}>Dashboard</a>
          <a href='myschedule'>Timetable</a>
          <a href={'/myexam'}>Exam Scheduler</a>
          <a>Onemore?</a>
          <a href="/profile" className='dropdown'>{user.name} &ensp;<i className="bi bi-person-circle icon-100"></i></a>
      </div>

    </>

  );
}

export default TopNavBar;