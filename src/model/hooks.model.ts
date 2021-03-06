/**
 * @export
 * @interface IProfile
 */
export interface IProfile {
  id: number;
  argo_username: string;
  provider_username: string;
  avatar_url: string;
  name: string;
  email: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  is_active: boolean;
}

export interface IArgoUser {
  username: string;
  avatar: string;
  is_active?: boolean;
  name: string;
  email: string;
}

export interface IProvider {
  name: string;
}

export interface IUser {
  provider_profile: IProfile;
  argo_profile: IArgoUser;
  provider: IProvider;
  dateOfEntry?: Date;
  lastUpdated?: Date;
  organizations?: IOrganization[];
}

export interface IRepository {
  name: string;
  url: string;
  webHook: string;
  deployments: IDeployment[];
}

export interface IDeployment {
  sitePreview: string;
  commitId: string;
  log: string;
  createdAt: Date;
}

export interface IOrganization {
  _id?: string;
  profile: {
    name: string;
    image: string;
    username: string;
  };
  repositories?: IRepository[];
  users?: string[];
}

export interface IModalConfig {
  type: string;
}

export interface IModalModel {
  openModal: boolean;
  modalConfig: IModalConfig;
}

export interface IStateModel {
  openModal: boolean;
  modalConfig: IModalConfig;
  user: IUser | null;
  selectedOrg: IOrganization | null;
  userLoading: boolean;
}

export interface IActionModel {
  toggleModal: (modal: IModalModel) => void;
  fetchUser: (id?: string) => void;
  setSelectedOrganization: (organization: IOrganization) => void;
  resetUser: () => void;
}
