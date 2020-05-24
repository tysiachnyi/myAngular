export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface User {
  email: string;
  password: string;
  returnSecureToken?: boolean;
}

export interface Environment {
  apiKey: string;
  production: boolean;
}

export interface FbAuthRespone {
  idToken: string;
  expiresIn: string;
}
