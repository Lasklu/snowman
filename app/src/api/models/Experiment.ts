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

import { exists, mapValues } from '../runtime';
import {
    ExperimentAllOf,
    ExperimentAllOfFromJSON,
    ExperimentAllOfFromJSONTyped,
    ExperimentAllOfToJSON,
    ExperimentValues,
    ExperimentValuesFromJSON,
    ExperimentValuesFromJSONTyped,
    ExperimentValuesToJSON,
} from './';

/**
 * 
 * @export
 * @interface Experiment
 */
export interface Experiment {
    /**
     * 
     * @type {number}
     * @memberof Experiment
     */
    id: number;
    /**
     * 
     * @type {number}
     * @memberof Experiment
     */
    numberOfUploadedRecords?: number;
    /**
     * 
     * @type {string}
     * @memberof Experiment
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof Experiment
     */
    description?: string;
    /**
     * 
     * @type {number}
     * @memberof Experiment
     */
    datasetId: number;
    /**
     * 
     * @type {number}
     * @memberof Experiment
     */
    algorithmId: number;
}

export function ExperimentFromJSON(json: any): Experiment {
    return ExperimentFromJSONTyped(json, false);
}

export function ExperimentFromJSONTyped(json: any, ignoreDiscriminator: boolean): Experiment {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'numberOfUploadedRecords': !exists(json, 'numberOfUploadedRecords') ? undefined : json['numberOfUploadedRecords'],
        'name': json['name'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'datasetId': json['datasetId'],
        'algorithmId': json['algorithmId'],
    };
}

export function ExperimentToJSON(value?: Experiment | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'numberOfUploadedRecords': value.numberOfUploadedRecords,
        'name': value.name,
        'description': value.description,
        'datasetId': value.datasetId,
        'algorithmId': value.algorithmId,
    };
}


