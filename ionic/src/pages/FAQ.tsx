import { IonContent, IonHeader, IonGrid, IonIcon, IonToolbar, IonRow, IonPage } from '@ionic/react';

import { personCircleOutline } from 'ionicons/icons';

const FAQ: React.FC = () => {
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
            <h1>FAQ</h1>
          </IonRow>
        </IonGrid>
        </IonContent>
        </IonPage>
    </>
  );
};

export default FAQ;
