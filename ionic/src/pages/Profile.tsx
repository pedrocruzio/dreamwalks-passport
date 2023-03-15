import { IonContent, IonHeader, IonGrid, 
  IonIcon, IonToolbar, IonRow, IonPage,
  IonButton
} from '@ionic/react';

import { personCircleOutline } from 'ionicons/icons';

const Profile: React.FC = () => {
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
        <IonGrid>
          <IonRow className='ion-padding'>
            <h1>Passport</h1>
          </IonRow>
          <IonRow className='ion-padding'>
            <p>Collect NFTs from street artists.</p>
          </IonRow>
          <IonRow>
            <IonButton>Claim Access Pass</IonButton>
          </IonRow>
        </IonGrid>
        </IonContent>
        </IonPage>
    </>
  );
};

export default Profile;
