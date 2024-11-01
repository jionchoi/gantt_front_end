import 'bootstrap/dist/css/bootstrap.css';
import '../css/TopNavBar.css'

const TopNavBar = ({user} : {user:any}) => {

  const doNothing = () =>{
    console.log("clicked");
  }

  return (
    <>
      <div className='topnav'>
        <div className='container'>
          <a href="/" className='title'>Gantt Chart</a>
          <a href={'/dashboard'}>Dashboard</a>
          <a href={'/myexam'}>Exam Scheduler</a>
          <a>Placeholder</a>
          <a>Onemore?</a>
          <a className='dropdown'><i className="bi bi-list icon-100"></i></a>
        </div>
      </div>
    </>
    // <Navbar expand="lg" className="bg-body-tertiary">
    //   <Container fluid className="container">
    //     <Navbar.Brand href="#" className='brand'>Gantt Chart</Navbar.Brand> {/* Should it be user.name or just "Gantt Chart"*/}
    //     <Navbar.Toggle aria-controls="navbarScroll" />
    //     <Navbar.Collapse id="navbarScroll">
    //       <Nav
    //         className="me-auto my-2 my-lg-0"
    //         style={{ maxHeight: '100px' }}
    //         navbarScroll
    //       >
    //         <Nav.Link href="#action1">Dashboard</Nav.Link>
    //         <Nav.Link href="#action2">Exam Scheduler</Nav.Link>
    //         <NavDropdown title="Link" id="navbarScrollingDropdown">
    //           <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
    //           <NavDropdown.Item href="#action4">
    //             Another action
    //           </NavDropdown.Item>
    //           <NavDropdown.Divider />
    //           <NavDropdown.Item href="#action5">
    //             Something else here
    //           </NavDropdown.Item>
    //         </NavDropdown>
    //         <Nav.Link href="#" disabled>
    //           Link
    //         </Nav.Link>
    //       </Nav>
    //       <Form className="d-flex">
    //         <Form.Control
    //           type="search"
    //           placeholder="Search"
    //           className="me-2"
    //           aria-label="Search"
    //         />
    //         <Button variant="outline-success">Search</Button>
    //       </Form>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
  );
}

export default TopNavBar;