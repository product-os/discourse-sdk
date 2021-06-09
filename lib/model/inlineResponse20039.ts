/**
 * Discourse API Documentation
 * This page contains the documentation on how to use Discourse through API calls.  > Note: For any endpoints not listed you can follow the [reverse engineer the Discourse API](https://meta.discourse.org/t/-/20576) guide to figure out how to use an API endpoint.  ### Request Content-Type  The Content-Type for POST and PUT requests can be set to `application/x-www-form-urlencoded`, `multipart/form-data`, or `application/json`.  ### Endpoint Names and Response Content-Type  Most API endpoints provide the same content as their HTML counterparts. For example the URL `/categories` serves a list of categories, the `/categories.json` API provides the same information in JSON format.  Instead of sending API requests to `/categories.json` you may also send them to `/categories` and add an `Accept: application/json` header to the request to get the JSON response. Sending requests with the `Accept` header is necessary if you want to use URLs for related endpoints returned by the API, such as pagination URLs. These URLs are returned without the `.json` prefix so you need to add the header in order to get the correct response format.  ### Authentication  Some endpoints do not require any authentication, pretty much anything else will require you to be authenticated.  To become authenticated you will need to create an API Key from the admin panel.  Once you have your API Key you can pass it in along with your API Username as an HTTP header like this:  ``` curl -X GET \"http://127.0.0.1:3000/admin/users/list/active.json\" \\ -H \"Api-Key: 714552c6148e1617aeab526d0606184b94a80ec048fc09894ff1a72b740c5f19\" \\ -H \"Api-Username: system\" ```  and this is how POST requests will look:  ``` curl -X POST \"http://127.0.0.1:3000/categories\" \\ -H \"Content-Type: multipart/form-data;\" \\ -H \"Api-Key: 714552c6148e1617aeab526d0606184b94a80ec048fc09894ff1a72b740c5f19\" \\ -H \"Api-Username: system\" \\ -F \"name=89853c20-4409-e91a-a8ea-f6cdff96aaaa\" \\ -F \"color=49d9e9\" \\ -F \"text_color=f0fcfd\" ```  ### Boolean values  If an endpoint accepts a boolean be sure to specify it as a lowercase `true` or `false` value unless noted otherwise. 
 *
 * The version of the OpenAPI document: latest
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

export class InlineResponse20039 {
    'id': number;
    'url': string;
    'originalFilename': string;
    'filesize': number;
    'width': number;
    'height': number;
    'thumbnailWidth': number;
    'thumbnailHeight': number;
    'extension': string;
    'shortUrl': string;
    'shortPath': string;
    'retainHours': any | null;
    'humanFilesize': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string"
        },
        {
            "name": "originalFilename",
            "baseName": "original_filename",
            "type": "string"
        },
        {
            "name": "filesize",
            "baseName": "filesize",
            "type": "number"
        },
        {
            "name": "width",
            "baseName": "width",
            "type": "number"
        },
        {
            "name": "height",
            "baseName": "height",
            "type": "number"
        },
        {
            "name": "thumbnailWidth",
            "baseName": "thumbnail_width",
            "type": "number"
        },
        {
            "name": "thumbnailHeight",
            "baseName": "thumbnail_height",
            "type": "number"
        },
        {
            "name": "extension",
            "baseName": "extension",
            "type": "string"
        },
        {
            "name": "shortUrl",
            "baseName": "short_url",
            "type": "string"
        },
        {
            "name": "shortPath",
            "baseName": "short_path",
            "type": "string"
        },
        {
            "name": "retainHours",
            "baseName": "retain_hours",
            "type": "any"
        },
        {
            "name": "humanFilesize",
            "baseName": "human_filesize",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return InlineResponse20039.attributeTypeMap;
    }
}

