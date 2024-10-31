import Link from 'next/link';

const Header = () => {
  return (
    <header className='nav' >
      <div className="logo">
        <p>My Personal PortFolio</p>
        </div>
      <nav className="container">
        
        
            <Link href={"#home"}   className="link-section">Home</Link>
            <Link href={"#project"}className="link-section">Project</Link>
            <Link href={"#about"}className="link-section">About</Link>
            <Link href={"#contact"}className="link-section">Contact</Link>
          
      </nav>
    </header>
  );
};

export default Header;

