export type AppConfigRequest = {
  appId: number;
};

export interface AppConfigResponse {
  id: number;
  logo: string;
  mainColor: string;
  hasUserSection: boolean;
}
