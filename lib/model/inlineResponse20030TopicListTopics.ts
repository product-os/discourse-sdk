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
import { InlineResponse20022TopicListPosters } from './inlineResponse20022TopicListPosters';

export class InlineResponse20030TopicListTopics {
    'id'?: number;
    'title'?: string;
    'fancyTitle'?: string;
    'slug'?: string;
    'postsCount'?: number;
    'replyCount'?: number;
    'highestPostNumber'?: number;
    'imageUrl'?: string | null;
    'createdAt'?: string;
    'lastPostedAt'?: string;
    'bumped'?: boolean;
    'bumpedAt'?: string;
    'archetype'?: string;
    'unseen'?: boolean;
    'lastReadPostNumber'?: number;
    'unread'?: number;
    'newPosts'?: number;
    'pinned'?: boolean;
    'unpinned'?: string | null;
    'visible'?: boolean;
    'closed'?: boolean;
    'archived'?: boolean;
    'notificationLevel'?: number;
    'bookmarked'?: boolean;
    'liked'?: boolean;
    'tags'?: Array<any>;
    'views'?: number;
    'likeCount'?: number;
    'hasSummary'?: boolean;
    'lastPosterUsername'?: string;
    'categoryId'?: number;
    'pinnedGlobally'?: boolean;
    'featuredLink'?: string | null;
    'posters'?: Array<InlineResponse20022TopicListPosters>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "title",
            "baseName": "title",
            "type": "string"
        },
        {
            "name": "fancyTitle",
            "baseName": "fancy_title",
            "type": "string"
        },
        {
            "name": "slug",
            "baseName": "slug",
            "type": "string"
        },
        {
            "name": "postsCount",
            "baseName": "posts_count",
            "type": "number"
        },
        {
            "name": "replyCount",
            "baseName": "reply_count",
            "type": "number"
        },
        {
            "name": "highestPostNumber",
            "baseName": "highest_post_number",
            "type": "number"
        },
        {
            "name": "imageUrl",
            "baseName": "image_url",
            "type": "string"
        },
        {
            "name": "createdAt",
            "baseName": "created_at",
            "type": "string"
        },
        {
            "name": "lastPostedAt",
            "baseName": "last_posted_at",
            "type": "string"
        },
        {
            "name": "bumped",
            "baseName": "bumped",
            "type": "boolean"
        },
        {
            "name": "bumpedAt",
            "baseName": "bumped_at",
            "type": "string"
        },
        {
            "name": "archetype",
            "baseName": "archetype",
            "type": "string"
        },
        {
            "name": "unseen",
            "baseName": "unseen",
            "type": "boolean"
        },
        {
            "name": "lastReadPostNumber",
            "baseName": "last_read_post_number",
            "type": "number"
        },
        {
            "name": "unread",
            "baseName": "unread",
            "type": "number"
        },
        {
            "name": "newPosts",
            "baseName": "new_posts",
            "type": "number"
        },
        {
            "name": "pinned",
            "baseName": "pinned",
            "type": "boolean"
        },
        {
            "name": "unpinned",
            "baseName": "unpinned",
            "type": "string"
        },
        {
            "name": "visible",
            "baseName": "visible",
            "type": "boolean"
        },
        {
            "name": "closed",
            "baseName": "closed",
            "type": "boolean"
        },
        {
            "name": "archived",
            "baseName": "archived",
            "type": "boolean"
        },
        {
            "name": "notificationLevel",
            "baseName": "notification_level",
            "type": "number"
        },
        {
            "name": "bookmarked",
            "baseName": "bookmarked",
            "type": "boolean"
        },
        {
            "name": "liked",
            "baseName": "liked",
            "type": "boolean"
        },
        {
            "name": "tags",
            "baseName": "tags",
            "type": "Array<any>"
        },
        {
            "name": "views",
            "baseName": "views",
            "type": "number"
        },
        {
            "name": "likeCount",
            "baseName": "like_count",
            "type": "number"
        },
        {
            "name": "hasSummary",
            "baseName": "has_summary",
            "type": "boolean"
        },
        {
            "name": "lastPosterUsername",
            "baseName": "last_poster_username",
            "type": "string"
        },
        {
            "name": "categoryId",
            "baseName": "category_id",
            "type": "number"
        },
        {
            "name": "pinnedGlobally",
            "baseName": "pinned_globally",
            "type": "boolean"
        },
        {
            "name": "featuredLink",
            "baseName": "featured_link",
            "type": "string"
        },
        {
            "name": "posters",
            "baseName": "posters",
            "type": "Array<InlineResponse20022TopicListPosters>"
        }    ];

    static getAttributeTypeMap() {
        return InlineResponse20030TopicListTopics.attributeTypeMap;
    }
}

