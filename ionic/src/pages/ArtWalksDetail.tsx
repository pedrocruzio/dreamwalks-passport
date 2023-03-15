import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonIcon, useIonRouter, IonCol, IonRow, IonText } from '@ionic/react';
import React from 'react';
import { chevronBack, locationOutline, calendarOutline } from 'ionicons/icons';
import Map from '../components/Map';

const ArtWalksDetail: React.FC = () => {
//	Initializing our router
const router = useIonRouter();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <IonIcon 
          aria-hidden="true" 
          icon={chevronBack} 
          className="ion-float-left" 
          size="large"
          onClick={ () => router.goBack() }
        />
          <IonTitle>CaminARte Condado</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
      <img src="/assets/images/hectorlavoe-alec.jpeg" alt=""  />
      <h1>CaminARte Condado</h1>
      <p><span><IonIcon icon={locationOutline}></IonIcon></span>San Juan, Puerto Rico</p>
      <IonRow>

        <IonCol>
          <IonIcon icon={calendarOutline} size='large'></IonIcon>
        </IonCol>

        <IonCol>
          <IonRow>
            <IonText>
            <p>Hours</p>
            </IonText>
          </IonRow>
          <IonRow>
            <IonText>
             7AM-7PM
            </IonText>
          </IonRow>
        </IonCol>

        <IonCol>
          <IonRow>
            <IonText>
            <p>10,246</p>
            </IonText>
          </IonRow>
          <IonRow>
            <IonText>
             Completed
            </IonText>
          </IonRow>
        </IonCol>

      </IonRow>
      <IonRow>
        <IonText className='ion-margin'>A mural by the famous Puerto Rican salsa singer, Héctor Lavoe, in order to highlight the love that the hotel La Concha Resort has for the best salsa music, while reaffirming the richness of Puerto Rico's cultural heritage.
        </IonText>
      </IonRow>

    <Map />
      </IonContent>
    </IonPage>
  );
};
export default ArtWalksDetail;