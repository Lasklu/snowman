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
    AlgorithmAllOf,
    AlgorithmAllOfFromJSON,
    AlgorithmAllOfFromJSONTyped,
    AlgorithmAllOfToJSON,
    AlgorithmValues,
    AlgorithmValuesFromJSON,
    AlgorithmValuesFromJSONTyped,
    AlgorithmValuesToJSON,
} from './';

/**
 * 
 * @export
 * @interface Algorithm
 */
export interface Algorithm {
    /**
     * 
     * @type {number}
     * @memberof Algorithm
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof Algorithm
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof Algorithm
     */
    description?: string;
}

export function AlgorithmFromJSON(json: any): Algorithm {
    return AlgorithmFromJSONTyped(json, false);
}

export function AlgorithmFromJSONTyped(json: any, ignoreDiscriminator: boolean): Algorithm {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'description': !exists(json, 'description') ? undefined : json['description'],
    };
}

export function AlgorithmToJSON(value?: Algorithm | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'description': value.description,
    };
}


