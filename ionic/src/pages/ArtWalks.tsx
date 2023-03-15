import { IonContent, IonGrid, IonRow, IonText, IonPage, IonHeader, IonToolbar, IonIcon } from '@ionic/react';
import './ArtWalks.css';
import ArtWalksList from '../components/ArtWalksList';

import { personCircleOutline } from 'ionicons/icons';

const ArtWalks: React.FC = () => {
  return (
    <>
    <IonPage>
    <IonHeader className="main-header">
        <IonToolbar>
          <img src="/assets/images/DreamWalks-logo-dark.png" alt="DreamWalks"  className='logo'/>
          <IonIcon aria-hidden="true" icon={personCircleOutline} className="profile-icon ion-float-right" size="large"/>
        </IonToolbar>
      </IonHeader>
      <IonContent>
      <img src="/assets/images/artwalks.png" alt="" className='banner' />
        <IonGrid>
          <IonRow>
            <IonText className='ion-margin'>
              <h1>Upcoming Events</h1>
            </IonText>
            <ArtWalksList />
          </IonRow>
        </IonGrid>
      </IonContent>
      </IonPage>
    </>
  );
};

export default ArtWalks;
