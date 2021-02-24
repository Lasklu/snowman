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
/**
 * 
 * @export
 * @interface AlgorithmValues
 */
export interface AlgorithmValues {
    /**
     * 
     * @type {string}
     * @memberof AlgorithmValues
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof AlgorithmValues
     */
    description?: string;
}

export function AlgorithmValuesFromJSON(json: any): AlgorithmValues {
    return AlgorithmValuesFromJSONTyped(json, false);
}

export function AlgorithmValuesFromJSONTyped(json: any, ignoreDiscriminator: boolean): AlgorithmValues {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'description': !exists(json, 'description') ? undefined : json['description'],
    };
}

export function AlgorithmValuesToJSON(value?: AlgorithmValues | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'description': value.description,
    };
}

