import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { businessOutline, walkOutline, walletOutline } from 'ionicons/icons';
import ArtWalks from './pages/ArtWalks';
import ArtWalksDetail from './pages/ArtWalksDetail';
import CityTours from './pages/CityTours';
import FAQ from './pages/FAQ';
import Profile from './pages/Profile';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

/* Global CSS */
import './App.css'

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
        <Redirect exact path="/artwalks" to="/artwalks" />
          <Route exact path="/artwalks">
            <ArtWalks />
          </Route>
          <Route path="/artwalks/:id">
            <ArtWalksDetail />
          </Route>
          <Route exact path="/citytours">
            <CityTours />
          </Route>
          <Route path="/faq">
            <FAQ />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route exact path="/">
            <Redirect to="/artwalks" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom" class='ion-padding navbar-bottom'>
          <IonTabButton tab="artwalks" href="/artwalks">
            <IonIcon aria-hidden="true" icon={walkOutline} />
            <IonLabel>Art Walks</IonLabel>
          </IonTabButton>
          <IonTabButton tab="citytours" href="/citytours">
            <IonIcon aria-hidden="true" icon={businessOutline} />
            <IonLabel>City Tours</IonLabel>
          </IonTabButton>
          <IonTabButton tab="faq" href="/profile">
            <IonIcon aria-hidden="true" icon={walletOutline} />
            <IonLabel>Passport</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
