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
import { InlineResponse20016ActionsSummary } from './inlineResponse20016ActionsSummary';

export class InlineResponse20018 {
    'id'?: number;
    'name'?: string | null;
    'username'?: string;
    'avatarTemplate'?: string;
    'createdAt'?: string;
    'cooked'?: string;
    'postNumber'?: number;
    'postType'?: number;
    'updatedAt'?: string;
    'replyCount'?: number;
    'replyToPostNumber'?: string | null;
    'quoteCount'?: number;
    'incomingLinkCount'?: number;
    'reads'?: number;
    'readersCount'?: number;
    'score'?: number;
    'yours'?: boolean;
    'topicId'?: number;
    'topicSlug'?: string;
    'displayUsername'?: string | null;
    'primaryGroupName'?: string | null;
    'primaryGroupFlairUrl'?: string | null;
    'primaryGroupFlairBgColor'?: string | null;
    'primaryGroupFlairColor'?: string | null;
    'version'?: number;
    'canEdit'?: boolean;
    'canDelete'?: boolean;
    'canRecover'?: boolean;
    'canWiki'?: boolean;
    'userTitle'?: string | null;
    'raw'?: string;
    'actionsSummary'?: Array<InlineResponse20016ActionsSummary>;
    'moderator'?: boolean;
    'admin'?: boolean;
    'staff'?: boolean;
    'userId'?: number;
    'hidden'?: boolean;
    'trustLevel'?: number;
    'deletedAt'?: string | null;
    'userDeleted'?: boolean;
    'editReason'?: string | null;
    'canViewEditHistory'?: boolean;
    'wiki'?: boolean;
    'reviewableId'?: string | null;
    'reviewableScoreCount'?: number;
    'reviewableScorePendingCount'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "username",
            "baseName": "username",
            "type": "string"
        },
        {
            "name": "avatarTemplate",
            "baseName": "avatar_template",
            "type": "string"
        },
        {
            "name": "createdAt",
            "baseName": "created_at",
            "type": "string"
        },
        {
            "name": "cooked",
            "baseName": "cooked",
            "type": "string"
        },
        {
            "name": "postNumber",
            "baseName": "post_number",
            "type": "number"
        },
        {
            "name": "postType",
            "baseName": "post_type",
            "type": "number"
        },
        {
            "name": "updatedAt",
            "baseName": "updated_at",
            "type": "string"
        },
        {
            "name": "replyCount",
            "baseName": "reply_count",
            "type": "number"
        },
        {
            "name": "replyToPostNumber",
            "baseName": "reply_to_post_number",
            "type": "string"
        },
        {
            "name": "quoteCount",
            "baseName": "quote_count",
            "type": "number"
        },
        {
            "name": "incomingLinkCount",
            "baseName": "incoming_link_count",
            "type": "number"
        },
        {
            "name": "reads",
            "baseName": "reads",
            "type": "number"
        },
        {
            "name": "readersCount",
            "baseName": "readers_count",
            "type": "number"
        },
        {
            "name": "score",
            "baseName": "score",
            "type": "number"
        },
        {
            "name": "yours",
            "baseName": "yours",
            "type": "boolean"
        },
        {
            "name": "topicId",
            "baseName": "topic_id",
            "type": "number"
        },
        {
            "name": "topicSlug",
            "baseName": "topic_slug",
            "type": "string"
        },
        {
            "name": "displayUsername",
            "baseName": "display_username",
            "type": "string"
        },
        {
            "name": "primaryGroupName",
            "baseName": "primary_group_name",
            "type": "string"
        },
        {
            "name": "primaryGroupFlairUrl",
            "baseName": "primary_group_flair_url",
            "type": "string"
        },
        {
            "name": "primaryGroupFlairBgColor",
            "baseName": "primary_group_flair_bg_color",
            "type": "string"
        },
        {
            "name": "primaryGroupFlairColor",
            "baseName": "primary_group_flair_color",
            "type": "string"
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "number"
        },
        {
            "name": "canEdit",
            "baseName": "can_edit",
            "type": "boolean"
        },
        {
            "name": "canDelete",
            "baseName": "can_delete",
            "type": "boolean"
        },
        {
            "name": "canRecover",
            "baseName": "can_recover",
            "type": "boolean"
        },
        {
            "name": "canWiki",
            "baseName": "can_wiki",
            "type": "boolean"
        },
        {
            "name": "userTitle",
            "baseName": "user_title",
            "type": "string"
        },
        {
            "name": "raw",
            "baseName": "raw",
            "type": "string"
        },
        {
            "name": "actionsSummary",
            "baseName": "actions_summary",
            "type": "Array<InlineResponse20016ActionsSummary>"
        },
        {
            "name": "moderator",
            "baseName": "moderator",
            "type": "boolean"
        },
        {
            "name": "admin",
            "baseName": "admin",
            "type": "boolean"
        },
        {
            "name": "staff",
            "baseName": "staff",
            "type": "boolean"
        },
        {
            "name": "userId",
            "baseName": "user_id",
            "type": "number"
        },
        {
            "name": "hidden",
            "baseName": "hidden",
            "type": "boolean"
        },
        {
            "name": "trustLevel",
            "baseName": "trust_level",
            "type": "number"
        },
        {
            "name": "deletedAt",
            "baseName": "deleted_at",
            "type": "string"
        },
        {
            "name": "userDeleted",
            "baseName": "user_deleted",
            "type": "boolean"
        },
        {
            "name": "editReason",
            "baseName": "edit_reason",
            "type": "string"
        },
        {
            "name": "canViewEditHistory",
            "baseName": "can_view_edit_history",
            "type": "boolean"
        },
        {
            "name": "wiki",
            "baseName": "wiki",
            "type": "boolean"
        },
        {
            "name": "reviewableId",
            "baseName": "reviewable_id",
            "type": "string"
        },
        {
            "name": "reviewableScoreCount",
            "baseName": "reviewable_score_count",
            "type": "number"
        },
        {
            "name": "reviewableScorePendingCount",
            "baseName": "reviewable_score_pending_count",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return InlineResponse20018.attributeTypeMap;
    }
}

