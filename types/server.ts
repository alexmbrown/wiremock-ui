export interface Server {
  id?: string;
  name: string;
  host: string;
  port: string;
  created?: Date;
  lastModified?: Date;
  lastViewed?: Date;
}
