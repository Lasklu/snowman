import { IonChip, IonLabel } from '@ionic/react';
import AddDatasetDialog from 'components/AddDatasetDialog/AddDatasetDialog';
import AddDatasetFab from 'components/AddFab/AddDatasetFab';
import OptionSelector from 'components/OptionSelector/OptionSelector';
import PageStruct from 'components/PageStruct/PageStruct';
import { DatasetsPageProps } from 'pages/DatasetsPage/DatasetsPageProps';
import React, { useEffect } from 'react';

const DatasetsPageView = ({
  tags,
  datasets,
  selectedTags,
  selectedDataset,
  clickOnTag,
  clickOnDataset,
  deleteDataset,
  loadDatasets,
}: DatasetsPageProps): JSX.Element => {
  useEffect((): void => loadDatasets(), [loadDatasets]);
  return (
    <PageStruct title="Dataset Selector" showNextFab={true}>
      <div>
        {tags.map(
          (aTag: string): JSX.Element => (
            <IonChip
              color={selectedTags.includes(aTag) ? 'primary' : 'dark'}
              outline={false}
              key={aTag}
              onClick={(): void => clickOnTag(aTag)}
            >
              <IonLabel>{aTag}</IonLabel>
            </IonChip>
          )
        )}
      </div>
      <OptionSelector
        title="Datasets"
        optionsList={datasets}
        selected={selectedDataset}
        clickOnCard={clickOnDataset}
        deleteCardHandler={deleteDataset}
        multiple={false}
      />
      <AddDatasetFab />
      <AddDatasetDialog />
    </PageStruct>
  );
};

export default DatasetsPageView;
