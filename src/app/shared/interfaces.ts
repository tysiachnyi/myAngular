export interface Post {
  id?: string | number;
  title: string;
  body: string;
  userId: string | number;
  date: Date;
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
