import { useState } from 'react';
import Header from '../Header';
import Select from '../UI/Select';
import SelectTube from '../UI/SelectTube';
import ItemList from '../ItemList';
import CalcZone from '../CalcZone';
import ModalCentered from '../UI/ModalCentered';
import datas from '../../data/datas';
import Footer from '../Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

const { equipements, tubeDataBase, coeffDiam } = datas;
equipements.forEach((element) => {
  element.count = 0;
});
// Equipements affichés à l'état initial
const equipementInitial = equipements.filter((equip) => ['Evier', 'Lavabo', 'Douche', 'WC'].includes(equip.name));

// On récupere les items qui ne sont pas dans les équipement affiché de base
const initialList = [...equipements]
  .filter((object) => [...equipementInitial]
    .findIndex((equip) => object.name === equip.name) === -1)
  .sort((a, b) => a.name.localeCompare(b.name));

function App() {
  // List des équipements a afficher de base ( avec bouton + - et delete)
  const [baseEquipement, setBaseEquipement] = useState(equipementInitial);
  // List des équipement sélectionnable dans le select form
  const [selectListEquipement, setSelectListEquipement] = useState(initialList);
  // Equipement selectionné par l'utilisateur avant le submit
  const [selectedEquipement, setSelectedEquipement] = useState(selectListEquipement[0].name);
  // Tube selectionné par l'utilisateur
  const [tubeSelected, setSelectedTube] = useState('');
  // Affichage conditionnel du modal
  const [isVisible, setIsVisible] = useState(false);
  // List unique de tube
  const tubesList = [...new Set(tubeDataBase.map((tube) => tube.type))];
  // Equipement à calculer, dont le count > 0
  const equipementToCalc = baseEquipement.filter((equip) => equip.count > 0);
  // Fonction pour return le tube diamExt x Ep en fonction du tube selected
  const getRecommandedTube = (objectDiamMin) => {
    if (tubeSelected !== '') {
      const tubes = tubeDataBase
        .filter((tube) => tube.type === tubeSelected && tube.diamInt >= objectDiamMin)
        .sort((a, b) => a.diamInt - b.diamInt);
      const recommandedTube = tubes[0];
      return `Ø${recommandedTube.diamExt} x ${recommandedTube.ep.toString().replaceAll('.', ',')} mm`;
    }
    return null;
  };
  equipementToCalc.forEach((object) => object.recommandedTube = getRecommandedTube(object.diamMin));
  // Obtenir le diametre intérieur minimal général de l'installation
  const getGeneralDiameterMin = (equipementsArray, coeffDiamTable) => {
    if (equipementsArray.length > 0) {
      let sumCoeff = equipementsArray
        .map((equip) => equip.coeff * equip.count)
        .reduce((prevVal, curVal) => prevVal + curVal);
      sumCoeff = sumCoeff < 2 ? 2 : sumCoeff;
      const diamMin = coeffDiamTable[sumCoeff];
      if (tubeSelected !== '') {
        return getRecommandedTube(diamMin);
      }
      return diamMin;
    }
    return null;
  };

  // Gère le count des équipements
  const handleButtons = (e, id) => {
    const buttonId = e.currentTarget.id;
    // Vérification si on tappe dans l'input
    const isAnInput = e.currentTarget.classList.contains('form-control');
    let updatedEquipement = [...baseEquipement];
    const updatedItemIndex = updatedEquipement.findIndex((equip) => equip.id === id);
    let { count } = updatedEquipement[updatedItemIndex];
    const { name } = updatedEquipement[updatedItemIndex];
    // Si click on Plus btn
    if (buttonId.includes('plus')) {
      count += 1;
    }
    // Si click on Minus btn
    else if (buttonId.includes('minus') && count > 0) {
      count -= 1;
    }
    // Si click on delete btn
    else if (buttonId.includes('delete')) {
      // Si l'équipement est supprimé on le réajoute l'equipement dans liste du select form
      const selectListEquipementUpdated = [...selectListEquipement];
      const addedEquipement = equipements.find((item) => item.name === name);
      selectListEquipementUpdated.push(addedEquipement);
      setSelectListEquipement(selectListEquipementUpdated
        .sort((a, b) => a.name.localeCompare(b.name)));
      // On filtre l'array, on selectionne les items qui on un index différent de l'équip select
      count = 0;
      updatedEquipement = updatedEquipement.filter((value, index) => index !== updatedItemIndex);
      return setBaseEquipement(updatedEquipement);
    }
    // Si click on input
    else if (isAnInput) {
      count = +e.currentTarget.value;
    }
    updatedEquipement[updatedItemIndex].count = count;
    return setBaseEquipement(updatedEquipement);
  };

  // Set le selectedEquipement au changement ds le select
  const handleSelectedEquipement = (e) => {
    setSelectedEquipement(e.currentTarget.value);
  };

  /**
   * A la soumission , ajoute l'équipement selectionné dans le DOM
   * @param {Event} e
   */
  const handleSubmitForm = (e) => {
    e.preventDefault();
    const updatedEquipement = [...baseEquipement];
    // On cherche dans les équipements celui qui a le nom de l'équipement selectionné
    const selectedEquipObject = equipements.find((item) => item.name === selectedEquipement);
    // On ajoute l'objet selectionné au state (setBaseEquipement)
    updatedEquipement.push(selectedEquipObject);
    setBaseEquipement(updatedEquipement);
    // On enleve l'equipement ajoutée de la list du select form
    const selectListEquipementUpdated = selectListEquipement
      .filter((item) => item.name !== selectedEquipement);
    // On Set la new list
    setSelectListEquipement(selectListEquipementUpdated);
    // On établi la valeur de base du select au 1er element de la liste d'equipement
    setSelectedEquipement(selectListEquipementUpdated[0].name);
  };

  /**
   *  Reset l'application au click sur le bouton Reset
   */
  const handleResetValue = () => {
    // Au clic on remet les equipements initialement prévu
    // On créer une copie des equipement initiaux
    const resetCountEquipement = [...equipementInitial];
    // On set le count a 0
    // eslint-disable-next-line no-return-assign
    resetCountEquipement.forEach((equip) => equip.count = 0);
    setBaseEquipement(resetCountEquipement);
    // On reinitialise la list d'équipements du select
    setSelectListEquipement(initialList);
  };

  /**
   * Set le tube selectionné par l'utilisateur
   * @param {string} tube
   */
  const handleSelectedTube = (tube) => {
    if (tube !== 'default') {
      setSelectedTube(tube);
    }
  };

  /**
   * Set la visibilité du modal
   */
  const handleVisibleModal = () => {
    setIsVisible(true);
  };

  return (
    <div className="app m-auto col-11 col-md-6 col-xl-4">
      <ModalCentered
        show={isVisible}
        onHide={() => setIsVisible(false)}
        tube={tubeSelected}
        equipements={equipementToCalc}
        diamgeneralmin={getGeneralDiameterMin(equipementToCalc, coeffDiam)}
      />
      <Header />
      <div className="mb-2">
        <Select
          data={selectListEquipement}
          selectedEquipement={handleSelectedEquipement}
          insertEquipement={handleSubmitForm}
        />
        <SelectTube selectedTube={handleSelectedTube} tubesList={tubesList} />
      </div>

      <ItemList
        equipementList={baseEquipement}
        handleButtons={handleButtons}
      />
      <CalcZone onCalc={handleVisibleModal} resetValue={handleResetValue} />
      <Footer />
    </div>
  );
}

export default App;
