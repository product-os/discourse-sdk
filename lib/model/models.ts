import localVarRequest from 'request';

export * from './adminGroupsJsonGroup';
export * from './inlineObject';
export * from './inlineObject1';
export * from './inlineObject10';
export * from './inlineObject11';
export * from './inlineObject12';
export * from './inlineObject13';
export * from './inlineObject14';
export * from './inlineObject15';
export * from './inlineObject16';
export * from './inlineObject17';
export * from './inlineObject18';
export * from './inlineObject19';
export * from './inlineObject2';
export * from './inlineObject20';
export * from './inlineObject21';
export * from './inlineObject22';
export * from './inlineObject24';
export * from './inlineObject25';
export * from './inlineObject26';
export * from './inlineObject27';
export * from './inlineObject28';
export * from './inlineObject29';
export * from './inlineObject3';
export * from './inlineObject30';
export * from './inlineObject4';
export * from './inlineObject5';
export * from './inlineObject6';
export * from './inlineObject7';
export * from './inlineObject8';
export * from './inlineObject9';
export * from './inlineResponse200';
export * from './inlineResponse2001';
export * from './inlineResponse20010';
export * from './inlineResponse20011';
export * from './inlineResponse20012';
export * from './inlineResponse20012Extras';
export * from './inlineResponse20013';
export * from './inlineResponse20014';
export * from './inlineResponse20014Data';
export * from './inlineResponse20014Notifications';
export * from './inlineResponse20015';
export * from './inlineResponse20016';
export * from './inlineResponse20016ActionsSummary';
export * from './inlineResponse20016LatestPosts';
export * from './inlineResponse20017';
export * from './inlineResponse20018';
export * from './inlineResponse20019';
export * from './inlineResponse20019Post';
export * from './inlineResponse2002';
export * from './inlineResponse20020';
export * from './inlineResponse20021';
export * from './inlineResponse20021ActionsSummary';
export * from './inlineResponse20022';
export * from './inlineResponse20022TopicList';
export * from './inlineResponse20022TopicListParticipants';
export * from './inlineResponse20022TopicListPosters';
export * from './inlineResponse20022TopicListTopics';
export * from './inlineResponse20022Users';
export * from './inlineResponse20023';
export * from './inlineResponse20023TopicList';
export * from './inlineResponse20023TopicListTopics';
export * from './inlineResponse20023Users';
export * from './inlineResponse20024';
export * from './inlineResponse20024GroupedSearchResult';
export * from './inlineResponse20025';
export * from './inlineResponse20025Permissions';
export * from './inlineResponse20025TagGroups';
export * from './inlineResponse20026';
export * from './inlineResponse20026TagGroup';
export * from './inlineResponse20027';
export * from './inlineResponse20027TagGroup';
export * from './inlineResponse20027TagGroupPermissions';
export * from './inlineResponse20028';
export * from './inlineResponse20029';
export * from './inlineResponse20029Extras';
export * from './inlineResponse20029Tags';
export * from './inlineResponse2002CategoryList';
export * from './inlineResponse2003';
export * from './inlineResponse20030';
export * from './inlineResponse20030TopicList';
export * from './inlineResponse20030TopicListTags';
export * from './inlineResponse20030TopicListTopics';
export * from './inlineResponse20031';
export * from './inlineResponse20031PostStream';
export * from './inlineResponse20031PostStreamPosts';
export * from './inlineResponse20032';
export * from './inlineResponse20032ActionsSummary';
export * from './inlineResponse20032Details';
export * from './inlineResponse20032DetailsParticipants';
export * from './inlineResponse20032PostStream';
export * from './inlineResponse20032PostStreamLinkCounts';
export * from './inlineResponse20032PostStreamPosts';
export * from './inlineResponse20032Posters';
export * from './inlineResponse20032SuggestedTopics';
export * from './inlineResponse20033';
export * from './inlineResponse20033BasicTopic';
export * from './inlineResponse20034';
export * from './inlineResponse20035';
export * from './inlineResponse20036';
export * from './inlineResponse20036TopicList';
export * from './inlineResponse20036TopicListTopics';
export * from './inlineResponse20037';
export * from './inlineResponse20037TopicList';
export * from './inlineResponse20037TopicListPosters';
export * from './inlineResponse20037TopicListTopics';
export * from './inlineResponse20038';
export * from './inlineResponse20039';
export * from './inlineResponse2003Category';
export * from './inlineResponse2004';
export * from './inlineResponse20040';
export * from './inlineResponse20041';
export * from './inlineResponse20041User';
export * from './inlineResponse20041UserGroupUsers';
export * from './inlineResponse20041UserGroups';
export * from './inlineResponse20041UserUserAuthTokens';
export * from './inlineResponse20041UserUserOption';
export * from './inlineResponse20042';
export * from './inlineResponse20042Meta';
export * from './inlineResponse20043';
export * from './inlineResponse20043ApprovedBy';
export * from './inlineResponse20043Tl3Requirements';
export * from './inlineResponse20043Tl3RequirementsPenaltyCounts';
export * from './inlineResponse20044';
export * from './inlineResponse20045';
export * from './inlineResponse20045Suspension';
export * from './inlineResponse20046';
export * from './inlineResponse20047';
export * from './inlineResponse20048';
export * from './inlineResponse20049';
export * from './inlineResponse2005';
export * from './inlineResponse2005TopicList';
export * from './inlineResponse2006';
export * from './inlineResponse2006BasicGroup';
export * from './inlineResponse2007';
export * from './inlineResponse2008';
export * from './inlineResponse2008Extras';
export * from './inlineResponse2008Group';
export * from './inlineResponse2009';
export * from './inlineResponse2009Meta';
export * from './postsIdJsonPost';
export * from './tIdJsonTopic';
export * from './userResponse';

import * as fs from 'fs';

export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    }
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;


import { AdminGroupsJsonGroup } from './adminGroupsJsonGroup';
import { InlineObject } from './inlineObject';
import { InlineObject1 } from './inlineObject1';
import { InlineObject10 } from './inlineObject10';
import { InlineObject11 } from './inlineObject11';
import { InlineObject12 } from './inlineObject12';
import { InlineObject13 } from './inlineObject13';
import { InlineObject14 } from './inlineObject14';
import { InlineObject15 } from './inlineObject15';
import { InlineObject16 } from './inlineObject16';
import { InlineObject17 } from './inlineObject17';
import { InlineObject18 } from './inlineObject18';
import { InlineObject19 } from './inlineObject19';
import { InlineObject2 } from './inlineObject2';
import { InlineObject20 } from './inlineObject20';
import { InlineObject21 } from './inlineObject21';
import { InlineObject22 } from './inlineObject22';
import { InlineObject24 } from './inlineObject24';
import { InlineObject25 } from './inlineObject25';
import { InlineObject26 } from './inlineObject26';
import { InlineObject27 } from './inlineObject27';
import { InlineObject28 } from './inlineObject28';
import { InlineObject29 } from './inlineObject29';
import { InlineObject3 } from './inlineObject3';
import { InlineObject30 } from './inlineObject30';
import { InlineObject4 } from './inlineObject4';
import { InlineObject5 } from './inlineObject5';
import { InlineObject6 } from './inlineObject6';
import { InlineObject7 } from './inlineObject7';
import { InlineObject8 } from './inlineObject8';
import { InlineObject9 } from './inlineObject9';
import { InlineResponse200 } from './inlineResponse200';
import { InlineResponse2001 } from './inlineResponse2001';
import { InlineResponse20010 } from './inlineResponse20010';
import { InlineResponse20011 } from './inlineResponse20011';
import { InlineResponse20012 } from './inlineResponse20012';
import { InlineResponse20012Extras } from './inlineResponse20012Extras';
import { InlineResponse20013 } from './inlineResponse20013';
import { InlineResponse20014 } from './inlineResponse20014';
import { InlineResponse20014Data } from './inlineResponse20014Data';
import { InlineResponse20014Notifications } from './inlineResponse20014Notifications';
import { InlineResponse20015 } from './inlineResponse20015';
import { InlineResponse20016 } from './inlineResponse20016';
import { InlineResponse20016ActionsSummary } from './inlineResponse20016ActionsSummary';
import { InlineResponse20016LatestPosts } from './inlineResponse20016LatestPosts';
import { InlineResponse20017 } from './inlineResponse20017';
import { InlineResponse20018 } from './inlineResponse20018';
import { InlineResponse20019 } from './inlineResponse20019';
import { InlineResponse20019Post } from './inlineResponse20019Post';
import { InlineResponse2002 } from './inlineResponse2002';
import { InlineResponse20020 } from './inlineResponse20020';
import { InlineResponse20021 } from './inlineResponse20021';
import { InlineResponse20021ActionsSummary } from './inlineResponse20021ActionsSummary';
import { InlineResponse20022 } from './inlineResponse20022';
import { InlineResponse20022TopicList } from './inlineResponse20022TopicList';
import { InlineResponse20022TopicListParticipants } from './inlineResponse20022TopicListParticipants';
import { InlineResponse20022TopicListPosters } from './inlineResponse20022TopicListPosters';
import { InlineResponse20022TopicListTopics } from './inlineResponse20022TopicListTopics';
import { InlineResponse20022Users } from './inlineResponse20022Users';
import { InlineResponse20023 } from './inlineResponse20023';
import { InlineResponse20023TopicList } from './inlineResponse20023TopicList';
import { InlineResponse20023TopicListTopics } from './inlineResponse20023TopicListTopics';
import { InlineResponse20023Users } from './inlineResponse20023Users';
import { InlineResponse20024 } from './inlineResponse20024';
import { InlineResponse20024GroupedSearchResult } from './inlineResponse20024GroupedSearchResult';
import { InlineResponse20025 } from './inlineResponse20025';
import { InlineResponse20025Permissions } from './inlineResponse20025Permissions';
import { InlineResponse20025TagGroups } from './inlineResponse20025TagGroups';
import { InlineResponse20026 } from './inlineResponse20026';
import { InlineResponse20026TagGroup } from './inlineResponse20026TagGroup';
import { InlineResponse20027 } from './inlineResponse20027';
import { InlineResponse20027TagGroup } from './inlineResponse20027TagGroup';
import { InlineResponse20027TagGroupPermissions } from './inlineResponse20027TagGroupPermissions';
import { InlineResponse20028 } from './inlineResponse20028';
import { InlineResponse20029 } from './inlineResponse20029';
import { InlineResponse20029Extras } from './inlineResponse20029Extras';
import { InlineResponse20029Tags } from './inlineResponse20029Tags';
import { InlineResponse2002CategoryList } from './inlineResponse2002CategoryList';
import { InlineResponse2003 } from './inlineResponse2003';
import { InlineResponse20030 } from './inlineResponse20030';
import { InlineResponse20030TopicList } from './inlineResponse20030TopicList';
import { InlineResponse20030TopicListTags } from './inlineResponse20030TopicListTags';
import { InlineResponse20030TopicListTopics } from './inlineResponse20030TopicListTopics';
import { InlineResponse20031 } from './inlineResponse20031';
import { InlineResponse20031PostStream } from './inlineResponse20031PostStream';
import { InlineResponse20031PostStreamPosts } from './inlineResponse20031PostStreamPosts';
import { InlineResponse20032 } from './inlineResponse20032';
import { InlineResponse20032ActionsSummary } from './inlineResponse20032ActionsSummary';
import { InlineResponse20032Details } from './inlineResponse20032Details';
import { InlineResponse20032DetailsParticipants } from './inlineResponse20032DetailsParticipants';
import { InlineResponse20032PostStream } from './inlineResponse20032PostStream';
import { InlineResponse20032PostStreamLinkCounts } from './inlineResponse20032PostStreamLinkCounts';
import { InlineResponse20032PostStreamPosts } from './inlineResponse20032PostStreamPosts';
import { InlineResponse20032Posters } from './inlineResponse20032Posters';
import { InlineResponse20032SuggestedTopics } from './inlineResponse20032SuggestedTopics';
import { InlineResponse20033 } from './inlineResponse20033';
import { InlineResponse20033BasicTopic } from './inlineResponse20033BasicTopic';
import { InlineResponse20034 } from './inlineResponse20034';
import { InlineResponse20035 } from './inlineResponse20035';
import { InlineResponse20036 } from './inlineResponse20036';
import { InlineResponse20036TopicList } from './inlineResponse20036TopicList';
import { InlineResponse20036TopicListTopics } from './inlineResponse20036TopicListTopics';
import { InlineResponse20037 } from './inlineResponse20037';
import { InlineResponse20037TopicList } from './inlineResponse20037TopicList';
import { InlineResponse20037TopicListPosters } from './inlineResponse20037TopicListPosters';
import { InlineResponse20037TopicListTopics } from './inlineResponse20037TopicListTopics';
import { InlineResponse20038 } from './inlineResponse20038';
import { InlineResponse20039 } from './inlineResponse20039';
import { InlineResponse2003Category } from './inlineResponse2003Category';
import { InlineResponse2004 } from './inlineResponse2004';
import { InlineResponse20040 } from './inlineResponse20040';
import { InlineResponse20041 } from './inlineResponse20041';
import { InlineResponse20041User } from './inlineResponse20041User';
import { InlineResponse20041UserGroupUsers } from './inlineResponse20041UserGroupUsers';
import { InlineResponse20041UserGroups } from './inlineResponse20041UserGroups';
import { InlineResponse20041UserUserAuthTokens } from './inlineResponse20041UserUserAuthTokens';
import { InlineResponse20041UserUserOption } from './inlineResponse20041UserUserOption';
import { InlineResponse20042 } from './inlineResponse20042';
import { InlineResponse20042Meta } from './inlineResponse20042Meta';
import { InlineResponse20043 } from './inlineResponse20043';
import { InlineResponse20043ApprovedBy } from './inlineResponse20043ApprovedBy';
import { InlineResponse20043Tl3Requirements } from './inlineResponse20043Tl3Requirements';
import { InlineResponse20043Tl3RequirementsPenaltyCounts } from './inlineResponse20043Tl3RequirementsPenaltyCounts';
import { InlineResponse20044 } from './inlineResponse20044';
import { InlineResponse20045 } from './inlineResponse20045';
import { InlineResponse20045Suspension } from './inlineResponse20045Suspension';
import { InlineResponse20046 } from './inlineResponse20046';
import { InlineResponse20047 } from './inlineResponse20047';
import { InlineResponse20048 } from './inlineResponse20048';
import { InlineResponse20049 } from './inlineResponse20049';
import { InlineResponse2005 } from './inlineResponse2005';
import { InlineResponse2005TopicList } from './inlineResponse2005TopicList';
import { InlineResponse2006 } from './inlineResponse2006';
import { InlineResponse2006BasicGroup } from './inlineResponse2006BasicGroup';
import { InlineResponse2007 } from './inlineResponse2007';
import { InlineResponse2008 } from './inlineResponse2008';
import { InlineResponse2008Extras } from './inlineResponse2008Extras';
import { InlineResponse2008Group } from './inlineResponse2008Group';
import { InlineResponse2009 } from './inlineResponse2009';
import { InlineResponse2009Meta } from './inlineResponse2009Meta';
import { PostsIdJsonPost } from './postsIdJsonPost';
import { TIdJsonTopic } from './tIdJsonTopic';
import { UserResponse } from './userResponse';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: {[index: string]: any} = {
        "InlineObject19.StatusEnum": InlineObject19.StatusEnum,
        "InlineObject19.EnabledEnum": InlineObject19.EnabledEnum,
        "InlineObject20.NotificationLevelEnum": InlineObject20.NotificationLevelEnum,
        "InlineObject25.TypeEnum": InlineObject25.TypeEnum,
}

let typeMap: {[index: string]: any} = {
    "AdminGroupsJsonGroup": AdminGroupsJsonGroup,
    "InlineObject": InlineObject,
    "InlineObject1": InlineObject1,
    "InlineObject10": InlineObject10,
    "InlineObject11": InlineObject11,
    "InlineObject12": InlineObject12,
    "InlineObject13": InlineObject13,
    "InlineObject14": InlineObject14,
    "InlineObject15": InlineObject15,
    "InlineObject16": InlineObject16,
    "InlineObject17": InlineObject17,
    "InlineObject18": InlineObject18,
    "InlineObject19": InlineObject19,
    "InlineObject2": InlineObject2,
    "InlineObject20": InlineObject20,
    "InlineObject21": InlineObject21,
    "InlineObject22": InlineObject22,
    "InlineObject24": InlineObject24,
    "InlineObject25": InlineObject25,
    "InlineObject26": InlineObject26,
    "InlineObject27": InlineObject27,
    "InlineObject28": InlineObject28,
    "InlineObject29": InlineObject29,
    "InlineObject3": InlineObject3,
    "InlineObject30": InlineObject30,
    "InlineObject4": InlineObject4,
    "InlineObject5": InlineObject5,
    "InlineObject6": InlineObject6,
    "InlineObject7": InlineObject7,
    "InlineObject8": InlineObject8,
    "InlineObject9": InlineObject9,
    "InlineResponse200": InlineResponse200,
    "InlineResponse2001": InlineResponse2001,
    "InlineResponse20010": InlineResponse20010,
    "InlineResponse20011": InlineResponse20011,
    "InlineResponse20012": InlineResponse20012,
    "InlineResponse20012Extras": InlineResponse20012Extras,
    "InlineResponse20013": InlineResponse20013,
    "InlineResponse20014": InlineResponse20014,
    "InlineResponse20014Data": InlineResponse20014Data,
    "InlineResponse20014Notifications": InlineResponse20014Notifications,
    "InlineResponse20015": InlineResponse20015,
    "InlineResponse20016": InlineResponse20016,
    "InlineResponse20016ActionsSummary": InlineResponse20016ActionsSummary,
    "InlineResponse20016LatestPosts": InlineResponse20016LatestPosts,
    "InlineResponse20017": InlineResponse20017,
    "InlineResponse20018": InlineResponse20018,
    "InlineResponse20019": InlineResponse20019,
    "InlineResponse20019Post": InlineResponse20019Post,
    "InlineResponse2002": InlineResponse2002,
    "InlineResponse20020": InlineResponse20020,
    "InlineResponse20021": InlineResponse20021,
    "InlineResponse20021ActionsSummary": InlineResponse20021ActionsSummary,
    "InlineResponse20022": InlineResponse20022,
    "InlineResponse20022TopicList": InlineResponse20022TopicList,
    "InlineResponse20022TopicListParticipants": InlineResponse20022TopicListParticipants,
    "InlineResponse20022TopicListPosters": InlineResponse20022TopicListPosters,
    "InlineResponse20022TopicListTopics": InlineResponse20022TopicListTopics,
    "InlineResponse20022Users": InlineResponse20022Users,
    "InlineResponse20023": InlineResponse20023,
    "InlineResponse20023TopicList": InlineResponse20023TopicList,
    "InlineResponse20023TopicListTopics": InlineResponse20023TopicListTopics,
    "InlineResponse20023Users": InlineResponse20023Users,
    "InlineResponse20024": InlineResponse20024,
    "InlineResponse20024GroupedSearchResult": InlineResponse20024GroupedSearchResult,
    "InlineResponse20025": InlineResponse20025,
    "InlineResponse20025Permissions": InlineResponse20025Permissions,
    "InlineResponse20025TagGroups": InlineResponse20025TagGroups,
    "InlineResponse20026": InlineResponse20026,
    "InlineResponse20026TagGroup": InlineResponse20026TagGroup,
    "InlineResponse20027": InlineResponse20027,
    "InlineResponse20027TagGroup": InlineResponse20027TagGroup,
    "InlineResponse20027TagGroupPermissions": InlineResponse20027TagGroupPermissions,
    "InlineResponse20028": InlineResponse20028,
    "InlineResponse20029": InlineResponse20029,
    "InlineResponse20029Extras": InlineResponse20029Extras,
    "InlineResponse20029Tags": InlineResponse20029Tags,
    "InlineResponse2002CategoryList": InlineResponse2002CategoryList,
    "InlineResponse2003": InlineResponse2003,
    "InlineResponse20030": InlineResponse20030,
    "InlineResponse20030TopicList": InlineResponse20030TopicList,
    "InlineResponse20030TopicListTags": InlineResponse20030TopicListTags,
    "InlineResponse20030TopicListTopics": InlineResponse20030TopicListTopics,
    "InlineResponse20031": InlineResponse20031,
    "InlineResponse20031PostStream": InlineResponse20031PostStream,
    "InlineResponse20031PostStreamPosts": InlineResponse20031PostStreamPosts,
    "InlineResponse20032": InlineResponse20032,
    "InlineResponse20032ActionsSummary": InlineResponse20032ActionsSummary,
    "InlineResponse20032Details": InlineResponse20032Details,
    "InlineResponse20032DetailsParticipants": InlineResponse20032DetailsParticipants,
    "InlineResponse20032PostStream": InlineResponse20032PostStream,
    "InlineResponse20032PostStreamLinkCounts": InlineResponse20032PostStreamLinkCounts,
    "InlineResponse20032PostStreamPosts": InlineResponse20032PostStreamPosts,
    "InlineResponse20032Posters": InlineResponse20032Posters,
    "InlineResponse20032SuggestedTopics": InlineResponse20032SuggestedTopics,
    "InlineResponse20033": InlineResponse20033,
    "InlineResponse20033BasicTopic": InlineResponse20033BasicTopic,
    "InlineResponse20034": InlineResponse20034,
    "InlineResponse20035": InlineResponse20035,
    "InlineResponse20036": InlineResponse20036,
    "InlineResponse20036TopicList": InlineResponse20036TopicList,
    "InlineResponse20036TopicListTopics": InlineResponse20036TopicListTopics,
    "InlineResponse20037": InlineResponse20037,
    "InlineResponse20037TopicList": InlineResponse20037TopicList,
    "InlineResponse20037TopicListPosters": InlineResponse20037TopicListPosters,
    "InlineResponse20037TopicListTopics": InlineResponse20037TopicListTopics,
    "InlineResponse20038": InlineResponse20038,
    "InlineResponse20039": InlineResponse20039,
    "InlineResponse2003Category": InlineResponse2003Category,
    "InlineResponse2004": InlineResponse2004,
    "InlineResponse20040": InlineResponse20040,
    "InlineResponse20041": InlineResponse20041,
    "InlineResponse20041User": InlineResponse20041User,
    "InlineResponse20041UserGroupUsers": InlineResponse20041UserGroupUsers,
    "InlineResponse20041UserGroups": InlineResponse20041UserGroups,
    "InlineResponse20041UserUserAuthTokens": InlineResponse20041UserUserAuthTokens,
    "InlineResponse20041UserUserOption": InlineResponse20041UserUserOption,
    "InlineResponse20042": InlineResponse20042,
    "InlineResponse20042Meta": InlineResponse20042Meta,
    "InlineResponse20043": InlineResponse20043,
    "InlineResponse20043ApprovedBy": InlineResponse20043ApprovedBy,
    "InlineResponse20043Tl3Requirements": InlineResponse20043Tl3Requirements,
    "InlineResponse20043Tl3RequirementsPenaltyCounts": InlineResponse20043Tl3RequirementsPenaltyCounts,
    "InlineResponse20044": InlineResponse20044,
    "InlineResponse20045": InlineResponse20045,
    "InlineResponse20045Suspension": InlineResponse20045Suspension,
    "InlineResponse20046": InlineResponse20046,
    "InlineResponse20047": InlineResponse20047,
    "InlineResponse20048": InlineResponse20048,
    "InlineResponse20049": InlineResponse20049,
    "InlineResponse2005": InlineResponse2005,
    "InlineResponse2005TopicList": InlineResponse2005TopicList,
    "InlineResponse2006": InlineResponse2006,
    "InlineResponse2006BasicGroup": InlineResponse2006BasicGroup,
    "InlineResponse2007": InlineResponse2007,
    "InlineResponse2008": InlineResponse2008,
    "InlineResponse2008Extras": InlineResponse2008Extras,
    "InlineResponse2008Group": InlineResponse2008Group,
    "InlineResponse2009": InlineResponse2009,
    "InlineResponse2009Meta": InlineResponse2009Meta,
    "PostsIdJsonPost": PostsIdJsonPost,
    "TIdJsonTopic": TIdJsonTopic,
    "UserResponse": UserResponse,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.serialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return data.toISOString();
        } else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.deserialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap[type]) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}

export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}

export class HttpBasicAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        requestOptions.auth = {
            username: this.username, password: this.password
        }
    }
}

export class HttpBearerAuth implements Authentication {
    public accessToken: string | (() => string) = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            const accessToken = typeof this.accessToken === 'function'
                            ? this.accessToken()
                            : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    }
}

export class ApiKeyAuth implements Authentication {
    public apiKey: string = '';

    constructor(private location: string, private paramName: string) {
    }

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (this.location == "query") {
            (<any>requestOptions.qs)[this.paramName] = this.apiKey;
        } else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        } else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}

export class OAuth implements Authentication {
    public accessToken: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}

export class VoidAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(_: localVarRequest.Options): void {
        // Do nothing
    }
}

export type Interceptor = (requestOptions: localVarRequest.Options) => (Promise<void> | void);
