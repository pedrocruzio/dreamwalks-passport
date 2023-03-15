import React from 'react';
import { IonList, IonItem, IonLabel, IonThumbnail, IonIcon } from '@ionic/react';
import { locationOutline } from 'ionicons/icons';

import './ArtWalksList.css';

import { ARTWALKS } from '../constants/ARTWALKS'

function ArtWalksList() {

  return (
    <>
    <IonList lines='none'>
        {ARTWALKS.map((item, index) => (
            <IonItem routerLink='/artwalks/1'>
                <IonThumbnail>
                    <img src={item.image} alt="Art Walk" className="item-avatar"/>
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
export default ArtWalksList;