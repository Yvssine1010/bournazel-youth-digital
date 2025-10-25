import obLogo from '@/assets/ob-logo.jpg';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-lg hover-lift">
          <img src={obLogo} alt="Olympique Bournazel Logo" className="w-full h-full object-cover" />
        </div>
      </div>
    </header>
  );
};

export default Header;
