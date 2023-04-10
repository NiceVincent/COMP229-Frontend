export class Video {
    _id: string = '';
    name: string = '';
    videoLink: string = '';
    notes: string = '';
    syncStatus?: number = 0;
    createdAt?: Date = new Date();
    predictResult?: string = '';
    comments?: string;
}
