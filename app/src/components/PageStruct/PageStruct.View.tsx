import 'components/PageStruct/PageStructStyles.css';

import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonSpinner,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import NextFab from 'components/NextFab/NextFab';
import { PageStructProps } from 'components/PageStruct/PageStructProps';
import React from 'react';

const PageStructView = ({
  title,
  children,
  showNextFab = false,
  showIndicator,
}: PageStructProps): React.FunctionComponentElement<PageStructProps> => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{title}</IonTitle>
          <div slot="end" className="spinner-container">
            {showIndicator ? <IonSpinner color="light" /> : null}
          </div>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        {showNextFab ? <NextFab /> : null}
        {children}
      </IonContent>
    </IonPage>
  );
};

export default PageStructView;
