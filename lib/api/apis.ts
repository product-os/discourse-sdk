export * from './adminApi';
import { AdminApi } from './adminApi';
export * from './backupsApi';
import { BackupsApi } from './backupsApi';
export * from './categoriesApi';
import { CategoriesApi } from './categoriesApi';
export * from './groupsApi';
import { GroupsApi } from './groupsApi';
export * from './invitesApi';
import { InvitesApi } from './invitesApi';
export * from './notificationsApi';
import { NotificationsApi } from './notificationsApi';
export * from './postsApi';
import { PostsApi } from './postsApi';
export * from './privateMessagesApi';
import { PrivateMessagesApi } from './privateMessagesApi';
export * from './searchApi';
import { SearchApi } from './searchApi';
export * from './tagsApi';
import { TagsApi } from './tagsApi';
export * from './topicsApi';
import { TopicsApi } from './topicsApi';
export * from './uploadsApi';
import { UploadsApi } from './uploadsApi';
export * from './usersApi';
import { UsersApi } from './usersApi';
import * as http from 'http';

export class HttpError extends Error {
    constructor (public response: http.IncomingMessage, public body: any, public statusCode?: number) {
        super('HTTP request failed');
        this.name = 'HttpError';
    }
}

export { RequestFile } from '../model/models';

export const APIS = [AdminApi, BackupsApi, CategoriesApi, GroupsApi, InvitesApi, NotificationsApi, PostsApi, PrivateMessagesApi, SearchApi, TagsApi, TopicsApi, UploadsApi, UsersApi];
