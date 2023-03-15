import { IonList, IonItem, IonLabel, IonThumbnail, IonIcon } from '@ionic/react';
import { locationOutline } from 'ionicons/icons';


import { CITYTOURS } from '../constants/CITYTOURS'

function CityToursList() {

  return (
    <>
    <IonList lines='none'>
      {CITYTOURS.map((item, index) => (
            <IonItem>
                <IonThumbnail>
                    <img src={item.image} alt="City Tour" className="item-avatar"/>
                </IonThumbnail>
                <IonLabel>
                    <h2>{item.title}</h2>
                    <p>{item.date}</p>
                    <p><span><IonIcon icon={locationOutline}></IonIcon></span>{item.city}</p>
                </IonLabel>
            </IonItem>

      ))}
    </IonList>
  </>
  );
}
export default CityToursList;