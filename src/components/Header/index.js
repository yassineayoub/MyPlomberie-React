import { IoWater } from 'react-icons/io5';

function Header() {
  return (
    <>
      <h1 className="text-center text-white m-2 p-2 border border-2 bg-primary rounded fw-bold border-primary">MyPlomberie <IoWater className="text-white" /> </h1>
      <ul>
        <li>1. Ajouter les appareils que vous souhaitez installer</li>
        <li>2. Sélectionnez le matériau avec lequel vous souhaitez alimenter les appareils </li>
        <li>3. Choisissez une quantité pour chaque appareil sélectionné</li>
        <li>4. Calculer !</li>
      </ul>
    </>
  );
}

export default Header;
