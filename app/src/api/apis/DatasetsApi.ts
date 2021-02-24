/* tslint:disable */
/* eslint-disable */
/**
 * Snowman API
 * _This document describes the REST API of the snowman data matching benchmark tool._  Comparing data matching algorithms is still an unsolved topic in both industry and research.  With snowman, developers and researchers will be able to compare the performance of different data matching  solutions or improve new algorithms. 
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: snowman@groups.sap.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    Dataset,
    DatasetFromJSON,
    DatasetToJSON,
    DatasetValues,
    DatasetValuesFromJSON,
    DatasetValuesToJSON,
} from '../models';

export interface AddDatasetRequest {
    datasetValues: DatasetValues;
}

export interface DeleteDatasetRequest {
    datasetId: number;
}

export interface DeleteDatasetFileRequest {
    datasetId: number;
}

export interface GetDatasetRequest {
    datasetId: number;
}

export interface GetDatasetFileRequest {
    datasetId: number;
    startAt?: number;
    limit?: number;
    sortBy?: string;
}

export interface SetDatasetRequest {
    datasetId: number;
    datasetValues: DatasetValues;
}

export interface SetDatasetFileRequest {
    datasetId: number;
    idColumn: string;
    quote: string;
    escape: string;
    separator: string;
    body: Blob;
}

/**
 * 
 */
export class DatasetsApi extends runtime.BaseAPI {

    /**
     * Creates a new dataset with metainformation
     */
    async addDatasetRaw(requestParameters: AddDatasetRequest): Promise<runtime.ApiResponse<number>> {
        if (requestParameters.datasetValues === null || requestParameters.datasetValues === undefined) {
            throw new runtime.RequiredError('datasetValues','Required parameter requestParameters.datasetValues was null or undefined when calling addDataset.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/datasets`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: DatasetValuesToJSON(requestParameters.datasetValues),
        });

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * Creates a new dataset with metainformation
     */
    async addDataset(requestParameters: AddDatasetRequest): Promise<number> {
        const response = await this.addDatasetRaw(requestParameters);
        return await response.value();
    }

    /**
     * Deletes a whole dataset by id
     */
    async deleteDatasetRaw(requestParameters: DeleteDatasetRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.datasetId === null || requestParameters.datasetId === undefined) {
            throw new runtime.RequiredError('datasetId','Required parameter requestParameters.datasetId was null or undefined when calling deleteDataset.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/datasets/{datasetId}`.replace(`{${"datasetId"}}`, encodeURIComponent(String(requestParameters.datasetId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Deletes a whole dataset by id
     */
    async deleteDataset(requestParameters: DeleteDatasetRequest): Promise<void> {
        await this.deleteDatasetRaw(requestParameters);
    }

    /**
     * Deletes a dataset file (but not the dataset)
     */
    async deleteDatasetFileRaw(requestParameters: DeleteDatasetFileRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.datasetId === null || requestParameters.datasetId === undefined) {
            throw new runtime.RequiredError('datasetId','Required parameter requestParameters.datasetId was null or undefined when calling deleteDatasetFile.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/datasets/{datasetId}/file`.replace(`{${"datasetId"}}`, encodeURIComponent(String(requestParameters.datasetId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Deletes a dataset file (but not the dataset)
     */
    async deleteDatasetFile(requestParameters: DeleteDatasetFileRequest): Promise<void> {
        await this.deleteDatasetFileRaw(requestParameters);
    }

    /**
     * Gets dataset by id
     */
    async getDatasetRaw(requestParameters: GetDatasetRequest): Promise<runtime.ApiResponse<Dataset>> {
        if (requestParameters.datasetId === null || requestParameters.datasetId === undefined) {
            throw new runtime.RequiredError('datasetId','Required parameter requestParameters.datasetId was null or undefined when calling getDataset.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/datasets/{datasetId}`.replace(`{${"datasetId"}}`, encodeURIComponent(String(requestParameters.datasetId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => DatasetFromJSON(jsonValue));
    }

    /**
     * Gets dataset by id
     */
    async getDataset(requestParameters: GetDatasetRequest): Promise<Dataset> {
        const response = await this.getDatasetRaw(requestParameters);
        return await response.value();
    }

    /**
     * Always returns one row with column names followed by the requested amount of rows. To only return the column names, pass startAt=0 and limit=0.
     * Gets a dataset file by id
     */
    async getDatasetFileRaw(requestParameters: GetDatasetFileRequest): Promise<runtime.ApiResponse<Blob>> {
        if (requestParameters.datasetId === null || requestParameters.datasetId === undefined) {
            throw new runtime.RequiredError('datasetId','Required parameter requestParameters.datasetId was null or undefined when calling getDatasetFile.');
        }

        const queryParameters: any = {};

        if (requestParameters.startAt !== undefined) {
            queryParameters['startAt'] = requestParameters.startAt;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.sortBy !== undefined) {
            queryParameters['sortBy'] = requestParameters.sortBy;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/datasets/{datasetId}/file`.replace(`{${"datasetId"}}`, encodeURIComponent(String(requestParameters.datasetId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.BlobApiResponse(response);
    }

    /**
     * Always returns one row with column names followed by the requested amount of rows. To only return the column names, pass startAt=0 and limit=0.
     * Gets a dataset file by id
     */
    async getDatasetFile(requestParameters: GetDatasetFileRequest): Promise<Blob> {
        const response = await this.getDatasetFileRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns all Datasets
     */
    async getDatasetsRaw(): Promise<runtime.ApiResponse<Array<Dataset>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/datasets`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(DatasetFromJSON));
    }

    /**
     * Returns all Datasets
     */
    async getDatasets(): Promise<Array<Dataset>> {
        const response = await this.getDatasetsRaw();
        return await response.value();
    }

    /**
     * Updates or creates a dataset
     */
    async setDatasetRaw(requestParameters: SetDatasetRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.datasetId === null || requestParameters.datasetId === undefined) {
            throw new runtime.RequiredError('datasetId','Required parameter requestParameters.datasetId was null or undefined when calling setDataset.');
        }

        if (requestParameters.datasetValues === null || requestParameters.datasetValues === undefined) {
            throw new runtime.RequiredError('datasetValues','Required parameter requestParameters.datasetValues was null or undefined when calling setDataset.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/datasets/{datasetId}`.replace(`{${"datasetId"}}`, encodeURIComponent(String(requestParameters.datasetId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: DatasetValuesToJSON(requestParameters.datasetValues),
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Updates or creates a dataset
     */
    async setDataset(requestParameters: SetDatasetRequest): Promise<void> {
        await this.setDatasetRaw(requestParameters);
    }

    /**
     * Updates or creates a dataset file
     */
    async setDatasetFileRaw(requestParameters: SetDatasetFileRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.datasetId === null || requestParameters.datasetId === undefined) {
            throw new runtime.RequiredError('datasetId','Required parameter requestParameters.datasetId was null or undefined when calling setDatasetFile.');
        }

        if (requestParameters.idColumn === null || requestParameters.idColumn === undefined) {
            throw new runtime.RequiredError('idColumn','Required parameter requestParameters.idColumn was null or undefined when calling setDatasetFile.');
        }

        if (requestParameters.quote === null || requestParameters.quote === undefined) {
            throw new runtime.RequiredError('quote','Required parameter requestParameters.quote was null or undefined when calling setDatasetFile.');
        }

        if (requestParameters.escape === null || requestParameters.escape === undefined) {
            throw new runtime.RequiredError('escape','Required parameter requestParameters.escape was null or undefined when calling setDatasetFile.');
        }

        if (requestParameters.separator === null || requestParameters.separator === undefined) {
            throw new runtime.RequiredError('separator','Required parameter requestParameters.separator was null or undefined when calling setDatasetFile.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling setDatasetFile.');
        }

        const queryParameters: any = {};

        if (requestParameters.idColumn !== undefined) {
            queryParameters['idColumn'] = requestParameters.idColumn;
        }

        if (requestParameters.quote !== undefined) {
            queryParameters['quote'] = requestParameters.quote;
        }

        if (requestParameters.escape !== undefined) {
            queryParameters['escape'] = requestParameters.escape;
        }

        if (requestParameters.separator !== undefined) {
            queryParameters['separator'] = requestParameters.separator;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'text/csv';

        const response = await this.request({
            path: `/datasets/{datasetId}/file`.replace(`{${"datasetId"}}`, encodeURIComponent(String(requestParameters.datasetId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.body as any,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Updates or creates a dataset file
     */
    async setDatasetFile(requestParameters: SetDatasetFileRequest): Promise<void> {
        await this.setDatasetFileRaw(requestParameters);
    }

}