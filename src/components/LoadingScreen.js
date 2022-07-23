import '../assets/css/LoadingScreen.css';
import logo_svg from '../assets/img/logo.svg' ;

export default function LoadingScreen() {
  return (
    <div className='loading-screen'>
      <img src={logo_svg} alt="Logo animation"/>
      <h1 className='title'>ZapRecall</h1>
    </div>
  );
}