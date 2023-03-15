import { IonContent, IonHeader, IonGrid, IonIcon, IonToolbar, IonRow, IonPage, IonText} from '@ionic/react';
import './CityTours.css';
import CityToursList from '../components/CityToursList';

import { personCircleOutline } from 'ionicons/icons';


const CityTours: React.FC = () => {
  return (
    <>
    <IonPage>
    <IonHeader className="main-header">
        <IonToolbar>
          <img src="/assets/images/DreamWalks-logo-dark.png" alt="DreamWalks"  className='logo'/>
          <IonIcon aria-hidden="true" icon={personCircleOutline} className="profile-icon ion-float-right" size="large"/>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <img src="/assets/images/citytours.png" alt="" className='banner' />

        <IonGrid>
          <IonRow>
          <IonText className='ion-margin'>
              <h1>Upcoming Tours</h1>
            </IonText>
            <CityToursList />
          </IonRow>
        </IonGrid>
       </IonContent>
       </IonPage>
    </>
  );
};

export default CityTours;
